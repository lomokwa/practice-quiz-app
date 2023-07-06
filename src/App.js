import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz" element={ <Quiz /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <Error404 /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
