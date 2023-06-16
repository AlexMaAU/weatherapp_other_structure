import './App.css'
import Background from './components/Background'
import bg from './assets/bg_large.jpg'
import {Link, Route, Routes} from 'react-router-dom'
import WeatherMain from './pages/WeatherMain'

function App() {
  return (
    <Background bgImage={bg}>
      <div className='app'>
        <h1>NavBar</h1>
        <WeatherMain />
      </div>
    </Background>
  );
}

export default App;
