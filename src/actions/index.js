
export const fetched_messages = (messageList) => {
  return {
    type: "FETCHED_MESSAGES",
    data: messageList
  };
};

export const fetchMessages = (messageList) => {
  return function(dispatch, getState) {
    return fetch(`http://localhost:9000/messages`)
      .then(
				data => data.json())
      .then(data => {
					dispatch(fetched_messages(data))}
      )
      .catch(err => console.log(err));
  };
};

export const added_Message = (messageText) => {
	return {
		type: 'ADDED_MESSAGE',
		data: {text: messageText}
	};
};

export const addMessage = (messageText) => {
  return function(dispatch, getState) {
    return fetch(`http://localhost:9000/messages`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				text: messageText
			})
		})
		      .then((responseJson) => {
            dispatch(added_Message(messageText))
		        return responseJson.success;
		      })
		      .catch((error) => {
		        console.error(error);
		      });
  };
};
