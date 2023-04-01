import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Question from './Components/QUestion/Question';

function App() {
  const [singleData,setSingleData] = useState([]);
  const [spentTime, setSpentTime] = useState([]);

  const handleSpentTime = (item) => {
    setSpentTime([...spentTime,item]);
  }


  const handleBookMark = (item) => {
    if(!singleData.includes(item)){
      setSingleData([...singleData,item]);
      toast.success('Book Marked Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }else {
      toast.error('Already Bookmarked', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    
  }

  return (
    <>
    <Header></Header>
    <main className='main'>
      <div className='bodyContent'>
        <div className="container">
          <Cards handleBookMark={handleBookMark} handleSpentTime={handleSpentTime}></Cards>
        </div>
      </div>
      <SideBar data={singleData} spentTime={spentTime}></SideBar>
      <div className='bodyContent'>
        <div className="container">
          <Question></Question>
        </div>
      </div>
    </main>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
