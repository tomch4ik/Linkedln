import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Home} from './Pages/Home';
import {Network} from './Pages/Network';
import {Vacancies} from './Pages/Vacancies';
import {Messages} from './Pages/Messages';
import {Notification} from './Pages/Notification';
import {MyProfilePortfolio} from './Pages/MyProfilePortfolio'

import { Registration } from './Modals/Registration';
import { Verification } from './Modals/Verification';
import { Entrance } from './Modals/Entrance';
import { EntranceVerification } from './Modals/EntranceVerification';

import {MainPages} from './MainPages';
import {LandingPage} from './LandingPage';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/Linkidin" element={<LandingPage/>}>
        </Route>

        <Route path="/registration" element={<Registration />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/entrance" element={<Entrance />} /> 
        <Route path="/entranceVerification" element={<EntranceVerification />} /> 

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
