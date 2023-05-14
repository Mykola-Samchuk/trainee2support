import './app.scss';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { RouterProvider } from 'react-router-dom';
import {router} from './router/router'

function App() {
  return <RouterProvider router={router}/>
}

export default App;
