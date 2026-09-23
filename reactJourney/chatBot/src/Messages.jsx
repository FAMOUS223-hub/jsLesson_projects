import userIcon from './assets/user.svg'
import robotIcon from './assets/robot.svg'
import { useState } from 'react'

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
    <form onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Type your message..."
        onChange={saveData}
        value={inputText}
      />
      <button type="submit">Send</button>
    </form>

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

  return (
    <>
      <InputField
        setChatMessages={setChatMessages}
      />

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