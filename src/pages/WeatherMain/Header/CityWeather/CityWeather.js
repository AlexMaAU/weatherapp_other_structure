import Temperature from '../../../../components/Temperature'
import Weather from '../../../../components/Weather'
import Humidity from '../CityWeather/Humidity'
import Wind from '../CityWeather/Wind'
import CityTemperatureStyle from './CityTemperatureStyle'
import CityWeatherStyle from './CityWeatherStyle'
import './CityWeather.css'

const CityWeather = ()=>{
    return (
        <div className='cityWeather'>
            <CityTemperatureStyle>
                <Temperature/>
            </CityTemperatureStyle>
            <CityWeatherStyle>
                <Weather/>
            </CityWeatherStyle>
            <div className='metaSection'> 
                <Humidity/>
                <div className='border' />
                <Wind/>
            </div>
        </div>
    )
}

export default CityWeather