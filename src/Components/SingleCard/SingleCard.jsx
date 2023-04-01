import React,{ useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import style from './SingleCard.module.css';

const SingleCard = (props) => {
    const [bookIcon,setBookIcon] = useState(false)
    const {img,author_img,author_name,blog_title,publish_date,id,book_mark_time} = props.data;


    return (
    <div className={style.singleCard}>
        <img className={style.img} src={img} alt="card image" />
        <div className={style.authorInfoAndBookMark}>
            <div className={style.authorInfo}>
                <img src={author_img} alt="Author image" />
                <div className={style.author_name}>
                    <h4>{author_name}</h4>
                    <p>{publish_date}</p>
                </div>
            </div>
            <div className={style.bookmark}>
                <p>{book_mark_time} min read</p>
                <div className={style.book_icon} onClick={() => props.handleBookMark(props.data)}>
                    {
                        bookIcon ? <FaBookmark /> : <FaRegBookmark />
                    }
                </div>
                
            </div>
        </div>
        <h3 className={style.blogTitle}>{blog_title}</h3>
        <span onClick={() => props.handleSpentTime(props.data)} className={style.readeMore} href="#">Read More</span>
    </div>
  )
}

export default SingleCard