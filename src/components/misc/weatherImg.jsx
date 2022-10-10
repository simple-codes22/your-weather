import React from 'react'
import _1 from './../../assets/Weather/01.png';
import _2 from './../../assets/Weather/02.png';
import _3 from './../../assets/Weather/03.png';
import _4 from './../../assets/Weather/04.png';
import _5 from './../../assets/Weather/05.png';
import _6 from './../../assets/Weather/06.png';
import _7 from './../../assets/Weather/07.png';
import _8 from './../../assets/Weather/08.png';
import _11 from './../../assets/Weather/11.png';
import _12 from './../../assets/Weather/12.png';
import _13 from './../../assets/Weather/13.png';
import _14 from './../../assets/Weather/14.png';
import _15 from './../../assets/Weather/15.png';
import _16 from './../../assets/Weather/16.png';
import _17 from './../../assets/Weather/17.png';
import _18 from './../../assets/Weather/18.png';
import _19 from './../../assets/Weather/19.png';
import _20 from './../../assets/Weather/20.png';
import _21 from './../../assets/Weather/21.png';
import _22 from './../../assets/Weather/22.png';
import _23 from './../../assets/Weather/23.png';
import _24 from './../../assets/Weather/24.png';
import _25 from './../../assets/Weather/25.png';
import _26 from './../../assets/Weather/26.png';
import _29 from './../../assets/Weather/29.png';
import _30 from './../../assets/Weather/30.png';
import _31 from './../../assets/Weather/31.png';
import _32 from './../../assets/Weather/32.png';
import _33 from './../../assets/Weather/33.png';
import _34 from './../../assets/Weather/34.png';
import _35 from './../../assets/Weather/35.png';
import _36 from './../../assets/Weather/36.png';
import _37 from './../../assets/Weather/37.png';
import _38 from './../../assets/Weather/38.png';
import _39 from './../../assets/Weather/39.png';
import _40 from './../../assets/Weather/40.png';
import _41 from './../../assets/Weather/41.png';
import _42 from './../../assets/Weather/42.png';
import _43 from './../../assets/Weather/43.png';
import _44 from './../../assets/Weather/44.png';

const weatherImages = [_1, _2, _3, _4, _5, _6, _7, _8, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44]

const WeatherImg = ({ number, class_ }) => {

    return (
    <>
        <img className={class_ ? `${class_}` : "h-16"} src={weatherImages[parseInt(number)]} alt="Weather Condition" />
    </>
  )
}

export default WeatherImg