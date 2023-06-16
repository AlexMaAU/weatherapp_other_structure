import {Link, Route, Routes} from 'react-router-dom'

const NavBar = ()=>{
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/cities'>Other City</Link>
            <Link to='/about'>About</Link>
            <Routes>
                <Route index element={<Home/>} />
                <Route path='/cities' element={<Header/>} />
                <Route path='/about' element={<h1>About</h1>} />
                <Route path='*' element={<h1>Not Found</h1>} /> 
            </Routes>
        </div>
    )
}

export default NavBar