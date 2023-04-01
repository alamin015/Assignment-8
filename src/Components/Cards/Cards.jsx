import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import style from './Cards.module.css';

const Cards = ({handleBookMark,handleSpentTime}) => {
  
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])


  return (
    <div className={style.cards}>
        {
            data.map((item) => <SingleCard handleSpentTime={handleSpentTime} handleBookMark={handleBookMark} data={item} key={item.id}></SingleCard>)
        }
    </div>
  )
}

export default Cards