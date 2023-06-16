import Background from "../../../components/Background"
import header_bg from "../../../assets/bg_sm.jpg"
import CityWeather from './CityWeather'
import City from '../../../components/City'
import HeaderCityStyle from './HeaderCityStyle'
import './Header.css'

const Header = ()=>{
    return (
        <div className="header">
            <Background bgImage={header_bg}>
                <div className="headerSection">
                    <CityWeather/>
                    <HeaderCityStyle>
                        <City/>
                    </HeaderCityStyle>
                </div>
            </Background>
        </div>
    )
}

export default Header