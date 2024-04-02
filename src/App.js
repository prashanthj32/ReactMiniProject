import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import { RouteConstants } from './shared/constants/Route.constants';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import Signup from './components/login/signup/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={RouteConstants.LOGIN} element={<Login />} />
        <Route path={RouteConstants.SIGNUP} element={<Signup />} />
        <Route path={RouteConstants.FORGOTPASSWORD} element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
