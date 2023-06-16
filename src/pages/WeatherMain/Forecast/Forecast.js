import './Forecast.css'
import ForecastList from './ForecastList'

const Forecast = ()=>{
    return (
        <div className="forecastSubSection">
            <ForecastList/>
            <ForecastList/>
            <ForecastList/>
            <ForecastList/>
            <ForecastList/>
        </div>
    )
}

export default Forecast