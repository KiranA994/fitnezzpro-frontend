import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { ColorRing } from "react-loader-spinner";

function About() {

    // const navigate = useNavigate()
    
    const [isStart, setIsStart] = useState(false);


    // const handlePayment = () => {
    //     if(sessionStorage.getItem("token") == null){
    //         navigate('/login')
    //     }
    //     else{
    //         navigate('/payment')
    //     }
    // }


    useEffect(()=>{
        setIsStart(true)
        setStatus()
    },[])

    const setStatus = () => {
        setTimeout(()=>{
            setIsStart(false)
        },2000)
    }

    return (
      
        <>
          <Header />
          {/* <ColorRing
  visible={isStart}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} /> */}

  <img src="/about-us.png" alt="" className='center-img' width={'100px'} height={'80px'} />
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5 mt-5">
                    <p className='vision' style={{ textAlign: 'justify' }}>Welcome to Fitnezz Pro where fitness meets community. Established in 2024, our mission is to empower individuals to lead healthier, happier lives through a holistic approach to fitness and well-being. Our state-of-the-art facility is designed to cater to all fitness levels, from beginners to seasoned athletes.</p>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <img src="/hero-banner.png" alt="" width={'300px'} />
                </div>
            </div>

            <div>
                <h2 className='text-center text-warning' style={{ fontFamily: 'outfit' }}>Our Philosophy</h2>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 mt-2">
                        <img src="/Capture.PNG" alt="" width={'300px'} />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 mt-5">
                        <p className='facility' style={{ textAlign: 'justify', fontSize: '24px' }}>At Fitnezz Pro, we believe that fitness is not just about working out; it's about building a lifestyle that promotes overall wellness. We are committed to providing a supportive and motivating environment where you can challenge yourself and achieve your personal fitness goals.</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>


            <div>
                <h3 className='mt-5 text-center' style={{ color: 'white', fontFamily: 'outfit' }}>Fitness Classes This Summer, Pay Now And Get <br />
                    <span style={{ color: '#00F0FF' }}>25% Discount</span>
                </h3>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4 mt-5">
                        <img src="/gym-girl.png" alt="" height={'400px'} />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 mt-5">
                        <p className='vision'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime minus praesentium est et veniam voluptate alias excepturi minima placeat amet nostrum, eligendi, quod cum ducimus nesciunt ipsa eum, explicabo eaque obcaecati.
                        </p>
                   <Link to={'/payment'}>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-warning w-25 p-2' type='button' >Join Now</button>
                            </div>
                   </Link>
                    </div>
                    <div className="col-md-1"></div>
                </div>

            </div>

            <div>
                <h2 className='text-center mt-5' style={{ fontFamily: 'outfit', color: '#EBF5A7' }}>What Client Say's</h2>
                
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                    <div className='d-flex'>
                        <div className='justify-content-between'>
                        <img src="/jinto.png" alt="" />
                        <p style={{color:"#D02E2E", fontFamily:"Oregano", fontSize:'25px',marginLeft:'90px'}}>Jinto Varghese</p>
                        <p style={{color:"rebeccapurple", fontFamily:"Oregano", fontSize:'26px'}}>I can't say enough good things about Fitnezz Pro. The trainers are exceptional, and the community is so welcoming. I've made incredible progress in my fitness journey here</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-1"></div>

                    <div className="col-md-2"></div>
                    <div className="col-md-3">
                    <div className='d-flex'>
                        <div className='justify-content-between'>
                        <img src="/dhanesh.png" alt="" />
                        <p style={{color:"#D02E2E", fontFamily:"Oregano", fontSize:'25px',marginLeft:'90px'}}>Dhanesh C P</p>
                        <p style={{color:"rebeccapurple", fontFamily:"Oregano", fontSize:'26px'}}>Christo, the MMA coach, is a true expert. He pushes you to your limits while ensuring safety. I've learned so much and gained newfound confidence</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                    <div className='d-flex'>
                        <div className='justify-content-between'>
                        <img src="/maneesha.png" alt="" />
                        <p style={{color:"#D02E2E", fontFamily:"Oregano", fontSize:'25px',marginLeft:'60px'}}>Maneesha Mohan</p>
                        <p style={{color:"rebeccapurple", fontFamily:"Oregano", fontSize:'26px'}}>Fitnezz Pro is not just a gym; it's a lifestyle. The facility is top-notch, and the trainers are top-level. I've never felt more motivated and supported in my fitness journey</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-1"></div>

                    <div className="col-md-2"></div>
                    <div className="col-md-3">
                    <div className='d-flex'>
                        <div className='justify-content-between'>
                        <img src="/Arathy.png" alt="" />
                        <p style={{color:"#D02E2E", fontFamily:"Oregano", fontSize:'25px',marginLeft:'120px'}}>Arathy</p>
                        <p style={{color:"rebeccapurple", fontFamily:"Oregano", fontSize:'26px'}}>Fitnezz Pro is not just a gym; it's a lifestyle. The facility is top-notch, and the trainers are top-level. I've never felt more motivated and supported in my fitness journey</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
               
            </div>

  
            
            <Footer />
        </>
    )
}

export default About