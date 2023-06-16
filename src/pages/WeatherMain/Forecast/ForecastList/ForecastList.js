import DayOfWeek from "./DayOfWeek"
import WeatherIcon from './WeatherIcon'
import Temperature from '../../../../components/Temperature'
import Weather from '../../../../components/Weather'

const ForecastList = ()=>{
    return (
        <div>
            <DayOfWeek/>
            <WeatherIcon/>
            <Temperature/>
            <Weather/>
        </div>
    )
}

export default ForecastList