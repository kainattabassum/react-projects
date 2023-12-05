import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom Component!</h1>
    </div>
  )
}

// custom eleemt
/*
const ReactElement = {
  type: 'a',
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: 'Click here to visit google'
}
*/

const AnotherElement = (
  <a href="https://google.com" target="_blank">Visit here</a>
)

// react create element 
const anotherusername = 'evaluate expression global'
const ReactElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: "_blank"
  },
  'click me to visit google',
  anotherusername
)

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)
