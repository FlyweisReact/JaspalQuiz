import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../Images/38.png'
import img2 from '../Images/37.png'
import img3 from '../Images/39.png'
import img4 from '../Images/40.png'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
    const navigate = useNavigate()
  return (
  <>
    <Navbar />

    <div className='categorycenter'>
        <img src={img} alt='' />
        <p>User Name <br/> Student </p>
        <img src={img2} alt='' />
    </div>

    <div className='categoryQuiz'>
        <img src={img3} alt='' />
        <div className='time'>
            <p>Time 02:00</p>
            <p>No. of Questions 15</p>
        </div>
        <button onClick={() => navigate("/quizQuestion")}>
            PLAY NOW
        </button>
        <div className='subject'>
            <img src={img4} alt='' />
            <p>Subject Name</p>

        </div>
    </div>
  </>
  )
}

export default Categories