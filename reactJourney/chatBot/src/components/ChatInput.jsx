import { useState } from 'react'

const ChatInput = ({ setChatMessages }) => {
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

  return (
    <div className="chatContainer">
      <form onSubmit={sendMessage} className="chatForm">
      <input
        type="text"
        placeholder="Type your message..."
        onChange={saveData}
        value={inputText}
        className="chatInput"
      />
      <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  )
}

export default ChatInput
