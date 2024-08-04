import React from 'react'
import VideoCard from '../components/VideoCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
    <Header />
    <p className='logo-header'>Here your fitness journey begins!</p>
    <div className='position-relative'>
        <img className="header-img" src="/header-logo.png" alt="" />
        <p className='logo-para'>Your Path to Fitness Excellence</p>
    </div>
    <p className='vision mt-5'>
        Our state-of-the-art facilities and expert trainers are dedicated to <br /> helping you achieve your health and fitness goals. 
        Join our vibrant <br /> community and transform your life with us today!
    </p>
    <h2 className='facility mb-5 mt-5'>Facilities</h2>

     <div className='img-container'>
  
     <div className='box'> 
        <img src="/training-equipment.jpg" alt="" 
        width={'500px'} height={'400px'} style={{backgroundPosition:''}} />
        <p className='facility-text mt-5'>Quality workout Equipments</p>
     </div>
      <div  className='box'>
        <img src="/gym-trainer.jpg" alt="" width={'500px'} height={'400px'}/>
        <p className='facility-text mt-5'>Experienced Trainers</p>
      </div>
  
      </div>
      <div className='img-container'>
      <div className='box'>
        <img src="/online-training.jpg" alt=""  width={'500px'} height={'300px'}  />
        <p className='facility-text mt-5'>Online Training</p>  
      </div>
      <div className='box'>
        <img src="/training-space.jpg" alt=""  width={'500px'} height={'300px'} />
        <p className='facility-text mt-5'>Personal Training Area</p>
      </div>
    </div>

    <div>
      <h1 style={{fontFamily: "Outfit", textAlign:'center', color:'#EBF5A7'}} className='mb-5 mt-5'>Explore our Fitness</h1>
      <marquee scrollAmount={20}>
      <div style={{display:'flex'}}>
        
          <VideoCard/>
     
      </div>
      </marquee>
     
    </div>
<Footer />
    </>
  )
}

export default Home