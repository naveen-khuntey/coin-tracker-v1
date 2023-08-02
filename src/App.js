import './App.css';
import { Routes,BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import News from './components/News';
import Popular from './components/Popular';
import CoinPage from './components/CoinPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Homepage/>}/>
          <Route path ='/news' element={<News/>}/>
          <Route path ='/popular' element={<Popular/>}/>
          <Route path ='/:id' element={<CoinPage/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
