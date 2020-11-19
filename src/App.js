import './App.css';
import Achievements from './components/Header/Achievements/Achievements';
import Footer from './components/Header/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import StayRunning from './components/Header/StayRunning/StayRunning';
import Team from './components/Header/Team/Team';
import WhatWeDo from './components/Header/WhatWeDo/WhatWeDo';

function App() {
  return (
    <div>
      <Home></Home>
      <WhatWeDo/>
      <StayRunning/>
      <Achievements/>
      <Team/>
      <Footer/>
     
    </div>
  );
}

export default App;
