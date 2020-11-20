import './App.css';
import Achievements from './components/Header/Achievements/Achievements';
import Email from './components/Header/Email/Email';
import Footer from './components/Header/Footer/Footer';
import Home from './components/Header/Home/Home';
import Prices from './components/Header/Prices/Prices';
import StayRunning from './components/Header/StayRunning/StayRunning';

function App() {
  return (
    <div>
      <Home></Home>
      <StayRunning/>
      <Achievements/>
      <Prices/>
      <Email/>
      <Footer/>
     
    </div>
  );
}

export default App;
