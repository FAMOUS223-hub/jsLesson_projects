import userIcon from './assets/user.svg'
import robotIcon from './assets/robot.svg'
import { useState } from 'react'
import './Messages.css'

function InputField({ setChatMessages }) {
  const [inputText, setInputText] = useState('')

  function saveData(event){
    setInputText(event.target.value)
  }

  function sendMessage(event){
    event.preventDefault()

    if (!inputText.trim()) return

    setChatMessages((currentMessages) => [
      ...currentMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      },
      {
        message: `You said: ${inputText}`,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ])

    setInputText('')
  }

  return( 
    <div className="chatContainer">
      <form onSubmit={sendMessage} className="chatForm">
      <input
        type="text"
        placeholder="Type your message..."
        onChange={saveData}
        value={inputText}
        className='chatInput'
      />
      <button type="submit" className='send-button'>Send</button>
    </form>
    </div>

  )
}

const ChatMessage = ({ message, sender }) => {
  const isUser = sender === 'user'
  const isRobot = sender === 'robot'

  return (
    <div className={isRobot ? 'robot' : 'user'}>

      {isRobot && <img className="messageIcon" src={robotIcon} alt="Robot" width="30" />}
      <span className="messageText">{message}</span>
      {isUser && <img className="messageIcon" src={userIcon} alt="User" width="30" />}
    </div>

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

  return (
    <div className="app">
      <InputField
        setChatMessages={setChatMessages}
      />

      <div className="messageList">
        {chatMessages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.message}
            sender={message.sender}
          />
        ))}
      </div>
    </div>
  )
}

export default Messages