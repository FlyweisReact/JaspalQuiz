import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../Images/29.png'
import img2 from '../Images/30.png'
import img3 from '../Images/31.png'
import img4 from '../Images/32.png'

const Report = () => {
  return (
   <>
    <Navbar />
    <p
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#006c5f",
          marginTop: "2%",
          fontWeight : '600'
        }}
      >
      Report
      </p>

            <div className='reportThreesec'>
                <img src={img} alt='' />
                <p>Test Name</p>
                <p>80%</p>
            </div>
            <div className='reportThreesec'>
                <img src={img2} alt='' />
                <p>Test Name</p>
                <p>80%</p>
            </div>
            <div className='reportThreesec'>
                <img src={img3} alt='' />
                <p>Test Name</p>
            </div>
            <div className='reportThreesec'>
                <img src={img4} alt='' />
                <p>Test Name</p>
            </div>


   </>
  )
}

export default Report