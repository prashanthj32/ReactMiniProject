import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import { RouteConstants } from './shared/constants/Route.constants';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={RouteConstants.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
