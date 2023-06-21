import {Link, Route, Routes} from 'react-router-dom'
import './NavBar.css'
import OtherCitiesMain from '../OtherCitiesMain'
import WeatherMain from '../WeatherMain'

const NavBar = ()=>{
    return (
        <div className='navBar'>
            <Link to='/'>HOME</Link>
            <Link to='/cities'>OTHER CITIES</Link>
            <Link to='/about'>ABOUT</Link>
            {/* <Routes>
                <Route index element={<WeatherMain/>} />
                <Route path='/cities' element={<OtherCitiesMain/>} />
                <Route path='/about' element={<></>} />
                <Route path='*' element={<></>} /> 
            </Routes> */}
        </div>
    )
}

export default NavBar