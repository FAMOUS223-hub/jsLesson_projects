# My React Journey

# DESTRUCTURING ELEMENTS IN COMPONENTS(Arrays)
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

# MAKING A COMPONENT IN THE SAME FILE

I can make a function a component by starting the function name with a capital letter.

        function InputField() {
            return (
                <>
                    <input type="text" placeholder="Type your message..." />
                    <button>Send</button>
                </>
            )
        }

Then I can show the component inside another component like this:

        <InputField />

The capital letter is important because React knows that `<InputField />` is a component.

# PASSING A FUNCTION THROUGH PROPS

I can pass a function to a component through props.

        <InputField sendMessage={sendMessage} />

The `InputField` component receives the function by destructuring it from props:

        function InputField({ sendMessage }) {
            return <button onClick={sendMessage}>Send</button>
        }

`onClick` is the React event listener for a click. `sendMessage` is the function that runs when the button is clicked.

The function name is not written with brackets in `onClick` because I am passing the function to the event. If I write `sendMessage()` it will call the function immediately while the component is rendering.

# useState

`useState` lets a component remember values and update the screen when the value changes.

        import { useState } from 'react'

        const [chatMessages, setChatMessages] = useState([])

`chatMessages` is the current value. `setChatMessages` changes the value and tells React to render again.

I can start the state with an array of messages:

        const [chatMessages, setChatMessages] = useState([
            {
                message: 'Hello chatbot',
                sender: 'user',
                id: 'id1'
            }
        ])

# ADDING AN ITEM TO AN ARRAY IN STATE

I should not change the state array directly with `.push()`. I make a new array using the spread operator and add the new message to it.

        setChatMessages([
            ...chatMessages,
            {
                message: 'test',
                sender: 'user',
                id: crypto.randomUUID()
            }
        ])

`...chatMessages` copies the old messages into the new array. Then the new message is added at the end.

# .map() TO DISPLAY AN ARRAY

I can use `.map()` to go through every message in the array and display a `ChatMessage` component for each one.

        {chatMessages.map((message) => (
            <ChatMessage
                key={message.id}
                message={message.message}
                sender={message.sender}
            />
        ))}

The `key` helps React identify each message. Each key should be unique, so I use the message `id`.

# FRAGMENT

I can use an empty fragment `<> </>` when a component needs to return more than one element without adding an extra `div`.

        return (
            <>
                <input />
                <button>Send</button>
            </>
        )
