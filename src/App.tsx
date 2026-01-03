import { BrowserRouter, Route, Routes } from 'react-router';

import './App.css';
import { AuthContextProvider } from './contexts/auth-context';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import RegistrationSuccess from './pages/RegistrationSuccess';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registration-success" element={<RegistrationSuccess />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
