# My React Journey

# DESTRUCTURING ELEMENTS IN COMPONENTS(Arrays)
- Shortcut

    const {message,sender} = props; 
- const message = props.message
- const sender = props.sender

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

# CONTROLLED INPUT

An input can be controlled by React state. The `value` comes from the state and `onChange` updates the state when I type.

        const [inputText, setInputText] = useState('')

        function saveData(event){
            setInputText(event.target.value)
        }

        <input
            value={inputText}
            onChange={saveData}
        />

This means React always knows what is inside the input.

# FORM SUBMIT

I can put the input and button inside a form. The form runs the function when I click the button or press Enter.

        function sendMessage(event){
            event.preventDefault()
            // save the message
        }

        <form onSubmit={sendMessage}>
            <input />
            <button type="submit">Send</button>
        </form>

`event.preventDefault()` stops the browser from refreshing the page when the form is submitted.

# CHECKING THE INPUT

I can check that the user did not send an empty message before adding it to the messages.

        if (!inputText.trim()) return

`.trim()` removes spaces from the beginning and end. This stops a message containing only spaces from being sent.

# UPDATING STATE USING THE CURRENT VALUE

When I update an array in state, I can give the setter a function. The function receives the latest version of the state.

        setChatMessages((currentMessages) => [
            ...currentMessages,
            {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
            }
        ])

This is useful when the new state depends on the old state. `...currentMessages` copies the old messages and the new message is added after them.

# CLEARING THE INPUT

After sending the message, I can reset the input by setting its state back to an empty string.

        setInputText('')

Because the input uses `value={inputText}`, the input field becomes empty on the screen too.

# ADDING A ROBOT REPLY

I can add two objects to the array when the user sends a message: one for the user and one for the robot.

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

The `sender` value tells `ChatMessage` which icon and style to show.

# CONDITIONAL CLASS NAMES

I can choose a class name depending on the sender.

        <div className={isRobot ? 'robot' : 'user'}>

The ternary checks `isRobot`. If it is true, the class is `robot`; otherwise the class is `user`.

# useRef

`useRef` lets me keep a reference to a DOM element without causing a re-render.

        const messagesEndRef = useRef(null)

I attach the ref to an element at the end of the message list:

        <div ref={messagesEndRef} />

# useEffect AND AUTO-SCROLL

`useEffect` runs code after React renders. I can use it to scroll to the bottom whenever `chatMessages` changes.

        useEffect(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, [chatMessages])

The dependency array `[chatMessages]` means the effect runs again whenever a new message is added. The `?.` checks that the element exists before using it.

# IMPORTING CSS

I can import a CSS file into a component so the class names in the JSX get their styles.

        import './Messages.css'

Then I can use class names in the elements:

        <input className="chatInput" />
        <button className="send-button">Send</button>

The CSS file controls the colors, spacing, message bubbles, input field, and button without changing the React logic.
