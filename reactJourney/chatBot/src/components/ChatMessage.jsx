import userIcon from '../assets/user.svg'
import robotIcon from '../assets/robot.svg'

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

export default ChatMessage