import './Background.css'
import React from 'react'

const Background = ({bgImage, children})=>{
    return (
        <div style={{backgroundImage:`url(${bgImage})`}} className='background'>
            {children}
        </div>
    )
}

export default Background