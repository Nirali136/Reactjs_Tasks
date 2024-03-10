import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css'
import { Provider } from 'react-redux'
import { store } from './Store/Store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider  store={store}>
    <App />
  </Provider>,
)
