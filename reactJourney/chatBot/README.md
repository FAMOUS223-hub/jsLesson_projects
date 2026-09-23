# My React Journey

# DESTRUCTURING ELEMENTS IN COMPONENTS
- //Shortcut

        const {message,sender} = props; 
  - // const message = props.message
  - // const sender = props.sender

 Because props is like a parameter in the function yyou can put the props in the function like how u pass a parameter.

 Like this
  
     const ChatMessage = ( {message,sender}) => {

Using && for if and else statement

    {sender === 'robot' &&  <img src={robot} alt="user profile" width={50} />}
    {message}
    === If sender = robot do this else

Putting Code on a new line 

eg

     {sender === 'robot' && <img src={robot} alt="user profile" width={50} />}

     ##new blockon a new line

      {sender === 'robot' &&  (
      <img src={robot} alt="user profile" width={50} />)}
