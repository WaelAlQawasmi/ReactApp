import logo from './logo.svg';
import './App.css';
import Header from './componants/Header';
import Footer from './componants/Footer';
import Body from './componants/Body';

function App() {
  return (
    <div className="App">
    <Header username="wael"></Header>
     <Body thename="appName"/>
     <Footer/>
    </div>
  );
}

export default App;
