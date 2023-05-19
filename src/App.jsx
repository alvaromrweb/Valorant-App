import SearchForm from './components/SearchForm';
import Profile from './components/Profile';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="bg-slate-900 text-white">
      <div className="bg-[url('/valorant-bg.jpg')] bg-slate-900 bg-fixed bg-cover bg-center">
        {/* <Header /> */}
        <div className="container flex flex-col md:justify-center items-center mx-auto text-center min-h-screen pb-5">
          <Routes>
            <Route path='/' element={<SearchForm />} />
            <Route path='/player/:nametag' element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
