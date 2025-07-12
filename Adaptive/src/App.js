import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Home} from './Pages/Home';
import {Network} from './Pages/Network';
import {Vacancies} from './Pages/Vacancies';
import {Messages} from './Pages/Messages';
import {Notification} from './Pages/Notification';
import {MyProfilePortfolio} from './Pages/MyProfilePortfolio'


import {MainPages} from './MainPages';
import {LandingPage} from './LandingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Linkidin" element={<LandingPage/>}>
          {/* <Route path="/messages" element={}/>
          <Route path="/notification" element={}/>  */}
        </Route>

        <Route path="/" element={<MainPages />}>

          <Route index element={<Home />} />
          <Route path="home" element={<Home />}/> 
          <Route path="network" element={<Network />}/>
          <Route path="vacancies" element={<Vacancies />}/>
          <Route path="messages" element={<Messages />}/>
          <Route path="notification" element={<Notification />}/> 
          <Route path="myProfilePortfolio" element={<MyProfilePortfolio />}/> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
