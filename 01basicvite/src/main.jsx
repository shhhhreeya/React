import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "http://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

function Myapp(){
    return(
        <div>
            <h1>Custom react app</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target = '_blank'>Visit Google
    </a>
)

const areactelement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'Click here to visit Google!'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    areactelement

)
