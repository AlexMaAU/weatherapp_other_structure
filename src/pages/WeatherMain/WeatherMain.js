import './WeatherMain.css'
import Header from './Header'
import SocialMedia from './SocialMedia'
import Forecast from './Forecast'

const WeatherMain = ()=>{
    return (
        <div className="weatherMain">
            <Header/>
            <div className='subSection'>
                <SocialMedia/>
                <Forecast/>
            </div>
        </div>
    )
}

export default WeatherMain