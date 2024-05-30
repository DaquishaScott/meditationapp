import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { HashRouter as Router} from 'react-router-dom'; // Import BrowserRouter from react-router-dom
import store from './redux/store'; // Import your Redux store
import App from './App'; // Import your main App component
import './styles/index.css'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
