import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import AdminLogin from './components/AdminLogin';
import UserPage from './components/UserPage';
import AdminSignin from './components/AdminSignin';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={< Landing />} />
      <Route path='/adlogin' element={< AdminLogin />} />
      <Route path='/userLanding' element={< UserPage />} />
      <Route path='/adsign' element={< AdminSignin />} />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
