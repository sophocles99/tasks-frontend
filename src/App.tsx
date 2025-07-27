import { BrowserRouter, Route, Routes } from 'react-router';

import './App.css';
import { AuthContextProvider } from './contexts/auth-context';
import Main from './pages/Main';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
