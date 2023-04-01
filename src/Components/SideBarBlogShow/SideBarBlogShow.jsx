import React from 'react';
import style from './SideBarBlogShow.module.css';

const SideBarBlogShow = ({data}) => {
    const {blog_title} = data
  return (
    <div className={style.singleBlogTitle}>
        <h4>{blog_title}</h4>
    </div>
  )
}

export default SideBarBlogShow