import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import '../index.css';

const AddMessage = ({ dispatch }) => {
    let messageText
    return (
        <div>
        <h1>Message List</h1>
            <form onSubmit={e => {
                e.preventDefault()
                if (!messageText.value.trim()) {
                    return
                }
                dispatch (addMessage(messageText.value))
                messageText.value = ''
            }}>
                <textarea className= "message-text" placeholder="Type your message here..." ref={node => messageText = node} />
                <button className= "add-message" type="submit">
                    <h2>Add to list</h2>
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {messageList: state.messageList};
}

export default connect(mapStateToProps)(AddMessage);
