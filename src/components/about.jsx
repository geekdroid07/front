import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function About() {
    
    return (
        <div className='detail-container'>
            <div className='detail-texts'>
                <h1>Cristian Mota Núñez</h1>

                <p>christianmota07@gmail.com</p>
                <p>SENIOR SOFTWARE DEVELOPER</p>
                <p>https://www.linkedin.com/in/christian-mota</p>
                <p>https://github.com/geekdroid07</p>
                <p>https://leetcode.com/geekdroid</p>
            </div>
            <div className='detail-image'> 
                <img src={'https://media.licdn.com/dms/image/C4E03AQEGaVIvlr_nFA/profile-displayphoto-shrink_800_800/0/1650472058847?e=1710374400&v=beta&t=mku4PE5Nt94jz9AezX-A0Lihy9_OGQgWMCdQt4WjP_I'} alt={'cristianmotas'} />
            </div>
        </div>
    )
}
