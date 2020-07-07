import React from 'react'
import Message from './Message'
import '../index.css';
import { connect } from 'react-redux'
import {fetchMessages} from '../actions';



class MessageList extends React.Component {

  componentDidMount() {
          this.props.dispatch(fetchMessages());
      };

    render() {

        return (
            <div className="messageList">
                {
                  <ul>
                    {Object.values(this.props.messageList).map((text) => {
                          return <Message/>
                    })
                  }
                </ul>
              }
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {messageList: state.messageList};
}

export default connect(mapStateToProps)(MessageList)
