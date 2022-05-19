import logo from './logo.svg';
import './App.css';
import Header from './componants/Header';
import Footer from './componants/Footer';
import Body from './componants/Body';
import Home from './componants/Home';
import { BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
  <Home />
  </BrowserRouter>
    </div>
  );
}

export default App;
