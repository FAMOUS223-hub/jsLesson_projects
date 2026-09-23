import userIcon from './assets/user.svg'
import robotIcon from './assets/robot.svg'
import { useState } from 'react'

function InputField({ sendMessage }) {
  return( 
    <>
    <input type="text" placeholder="Type your message..." />
   <button onClick={sendMessage}>Send</button>
    </>

  )
}

const ChatMessage = ({ message, sender }) => {
  const isUser = sender === 'user'
  const isRobot = sender === 'robot'

  return (
    <>
    <div className="chat-message">
      {isRobot && <img src={robotIcon} alt="Robot" width="30" />}
      <span>{message}</span>
      {isUser && <img src={userIcon} alt="User" width="30" />}
    </div>

    </>
  )
}

const Messages = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      message: 'Hello chatbot', 
      sender: 'user', 
      id: 'id1' 

    },
    { 
      message: 'Hello! How can I help you?', 
      sender: 'robot', 
      id: 'id2' 

    },
    { 
      message: "Can you get me today's date?", 
      sender: 'user', 
      id: 'id3' 

    },
    { 
      message: 'Today is September 27.', 
      sender: 'robot', 
      id: 'id4' 

    }
  ])

  function sendMessage() {
    setChatMessages([
      ...chatMessages,
      {
        message: 'test',
        sender: 'user',
        id: crypto.randomUUID()
      }
    ])
  }

  return (
    <>
      <InputField sendMessage={sendMessage} />

      {chatMessages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message.message}
          sender={message.sender}

        />
      ))}

    </>
  )
}

export default Messages