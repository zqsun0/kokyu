import React from 'react';
import FirstPage from './components/FirstPage';
import './css/animations.css';
import './css/default.css';
import './css/common.css';
import './css/responsive.css';
import SecondPage from './components/secondPage/SecondPage';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  // AOS.init();
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <FirstPage/>
      <SecondPage/>
    </div>
  );
}

export default App;
