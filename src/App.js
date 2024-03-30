import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import { RouteConstants } from './shared/constants/Route.constants';
import SideNav from './components/navigation/SideNav';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={RouteConstants.LOGIN} element={<Login />} />
        <Route path={RouteConstants.SIDENAV} element={<SideNav />} />

      </Routes>
    </div>
  );
}

export default App;
