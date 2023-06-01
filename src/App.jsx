import Home from './components/Home';
import Profile from './components/Profile';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';

function App() {

  return (
    <div className="bg-slate-900 text-white">
      <div className="bg-main bg-slate-900 bg-fixed bg-cover bg-center">
        <Header />
        <div className="container flex flex-col md:justify-center items-center mx-auto text-center min-h-screen pb-5">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/player/:nametag' element={<Profile />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
