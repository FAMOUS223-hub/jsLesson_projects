const ChatInput = () => {
  const myMessages = [
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
]

function sendMessage(){
  myMessages.push({
    message: 'test',
    sender: 'user',
    id: crypto.randomUUID()
  })

  console.log(myMessages)
}
  return (
   <>
      <input
          placeholder="Send a message to Chatbot"   size={30 }
      />
      <button onClick={sendMessage}>Send</button>
   </>
  )
}

export default ChatInput
