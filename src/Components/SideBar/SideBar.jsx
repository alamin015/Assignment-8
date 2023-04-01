import React, { useEffect, useState } from 'react';
import style from './SideBar.module.css'
import SideBarBlogShow from '../SideBarBlogShow/SideBarBlogShow';


const SideBar = ({data,spentTime}) => {
  const [totalTime,setTotalTime] = useState(0)
  useEffect(() => {
    const time = spentTime.reduce((newTime,item) => {
      return newTime + item.book_mark_time
    },0)
    setTotalTime(time);

  },[spentTime])
  return (
    <div className={style.sideBar}>
        <div className={style.totalTimeDiv}>
          <h3 className={style.totalTime}>Spent time on read {totalTime} min</h3>
        </div>

        <h4 className={style.totalBookMark}>Bookmarked Blogs : {data.length} </h4>
        {
          data.map(item => <SideBarBlogShow data={item} key={item.id}></SideBarBlogShow>)
        }
    </div>
  )
}

export default SideBar