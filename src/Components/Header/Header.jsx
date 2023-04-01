import React, { useEffect, useState } from 'react';
import Profile from '../../assets/profilePhoto.png';
import style from './Header.module.css';

const Header = () => {
    const [scrollData,setScrollData] = useState(false)
    window.addEventListener('scroll',() => {
        if(scrollY > 80){
            setScrollData(true)
        }else {
            setScrollData(false)
        }
    });
    
  return (
    <>
        <header className={scrollData ? style.black : style.header}>
            <div className="container">
                <nav className={style.nav}>
                    <a href="#" className={style.logo}>Knowledge <span>Cafe</span></a>
                    <div>
                        <img className={style.profile} src={Profile} alt="profile photo" />
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header