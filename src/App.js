import {Link, Route, Routes} from 'react-router-dom'
import './App.css'
import Background from './components/Background'
import bg from './assets/bg_large.jpg'
import NavBar from './pages/NavBar'
import WeatherMain from './pages/WeatherMain'
import OtherCitiesMain from './pages/OtherCitiesMain'
import AboutMain from './pages/AboutMain'

function App() {
  return (
    <Background bgImage={bg}>
      <div className='app'>
        <NavBar/>
        <Routes>
          <Route index element={<WeatherMain/>} />
          <Route path='/cities' element={<OtherCitiesMain/>} />
          <Route path='/about' element={<AboutMain/>} />
          <Route path='*' element={<WeatherMain/>} /> 
        </Routes>
      </div>
    </Background>
  );
}

export default App;
