import './App.css'
import Background from './components/Background'
import bg from './assets/bg_large.jpg'
import NavBar from './pages/NavBar'
import WeatherMain from './pages/WeatherMain'

function App() {
  return (
    <Background bgImage={bg}>
      <div className='app'>
        <NavBar/>
        <WeatherMain />
      </div>
    </Background>
  );
}

export default App;
