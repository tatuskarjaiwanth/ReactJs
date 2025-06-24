import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import {jsx as _jsx} from 'react/jsx-runtime'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   Children: "Click me to go to Google",
// };

const anotherElement  = (
  <a href='https://google.com' target='_blank'>visit</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click me to go to Google'
)

createRoot(document.getElementById('root')).render(
  
    <App/>
  
)


//every react usues a bundler i.e to imporove syntax and performance
//babel injects it 