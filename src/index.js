import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserContext from './Context/UserContext'
import './Styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root'),
)
