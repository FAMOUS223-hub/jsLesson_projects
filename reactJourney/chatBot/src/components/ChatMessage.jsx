import user from '../assets/user.svg'
import robot from '../assets/robot.svg'
const ChatMessage = ({ message, sender}) => {
  /* const {message,sender} = props; //The {message,sender} can be parsed into the function ike a parameter
  const message = props.message
  const sender = props.sender

  if(sender === 'robot'){
    return(
    <div>
        <img src={robot} alt="user profile" width={50} />
        {message}
   </div>
    )
  } */ 
  return (
    <>
    <div>
    {sender === 'robot' && (
      <img src={robot} width={50} /> )} 

      {message}
      
     {sender === 'user'  && (
        <img src = {user} width={50} />)}
    </div>
    
    </>
    
  )
}

export default ChatMessage