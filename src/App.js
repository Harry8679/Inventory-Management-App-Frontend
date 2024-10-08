import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Forgot from './pages/auth/Forgot';
import Reset from './pages/auth/Reset';
import Sidebar from './component/sidebar/Sidebar';
import Layout from './component/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/resetpassword/:resetToken' element={<Reset />} />
        <Route path='/dashboard' element={<Sidebar><Layout><Dashboard /></Layout></Sidebar>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
