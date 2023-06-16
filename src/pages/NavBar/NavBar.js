import {Link, Route, Routes} from 'react-router-dom'
import './NavBar.css'

const NavBar = ()=>{
    return (
        <div className='navBar'>
            <Link to='/'>HOME</Link>
            <Link to='/cities'>OTHER CITIES</Link>
            <Link to='/about'>ABOUT</Link>
            <Routes>
                <Route index element={<></>} />
                <Route path='/cities' element={<></>} />
                <Route path='/about' element={<></>} />
                <Route path='*' element={<></>} /> 
            </Routes>
        </div>
    )
}

export default NavBar