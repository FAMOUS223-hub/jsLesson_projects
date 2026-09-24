import { useEffect, useRef, useState } from 'react'
import ChatInput from './components/ChatInput.jsx'
import ChatMessage from './components/ChatMessage.jsx'
import './Messages.css'

const Messages = () => {
  const messagesEndRef = useRef(null)
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  return (
    <div className="app">
      <ChatInput
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
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

export default Messages