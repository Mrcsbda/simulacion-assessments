
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Router from './routes/Router'
import { store } from './store/store'
import "./main.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
  </Provider>)
