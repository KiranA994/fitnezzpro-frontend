import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'

function MemberShip() {

    const navigate = useNavigate()

    const handlePayment = () => {
        if(sessionStorage.getItem("token") == null){
            navigate('/login')
        }
        else{
            navigate('/payment')
        }
    }

  return (
    <>
    <Header />
        <div>
            <h2 className='text-center text-warning mb-5' style={{ fontFamily: 'outfit' }}>MemberShip</h2>

            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="online-container">
                     
                    <div className='py-4 vision d-flex justify-content-center flex-column'>
                        <p>GOLD  - 3 Months</p>
    
                        <p> ₹  4000</p>
    
                        <p>5 CLASSES</p>
    
                        <p>5 IN PERSONAL TRAINING <br /> SESSIONS</p>
    
                        <p>FULL GYM  & FACILITIES <br /> ACCESS</p>
    
                        <p>GYM TOUR & TRAINING <br /> INSTRUCTION</p>
    
                    </div>
                
                    <button className='btn btn-dark p-3 w-100' style={{color:'white',fontFamily:'outfit'}} onClick={handlePayment}>
                        GET STARTED
                    </button>
                    
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>

            <div className="row mt-5">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="online-container">
                     
                    <div className='py-4 vision d-flex justify-content-center flex-column' style={{color:'#0326A2'}}>
                        <p>DIAMOND  - 6 Months</p>
    
                        <p> ₹  8000</p>
    
                        <p>10 CLASSES</p>
    
                        <p>10 IN PERSONAL TRAINING <br /> SESSIONS</p>
    
                        <p>FULL GYM  & FACILITIES <br /> ACCESS</p>

                        <p>BOXING RING, FREE EVENTS</p>
    
                        <p>GYM TOUR & TRAINING <br /> INSTRUCTION</p>
    
                    </div>
                    <button className='btn btn-dark p-3 w-100' style={{color:'white',fontFamily:'outfit'}} onClick={handlePayment}>
                        GET STARTED
                    </button>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>


            <div className="row mt-5">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="online-container">
                     
                    <div className='py-4 vision d-flex justify-content-center flex-column' style={{color:'#A25903'}}>
                        <p>PLATINUM  - 1 Year</p>
    
                        <p> ₹ 12000</p>
    
                        <p>10 CLASSES</p>

                        <p>FULL GYM & FACILITIES <br /> ACCESS</p>

                        <p>BOXING RING, FREE EVENTS</p>
    
                        <p>15 IN PERSONAL TRAINING <br /> SESSIONS</p>
    
                        <p>FULL GYM  & FACILITIES <br /> ACCESS</p>
    
                        <p>GYM TOUR & TRAINING <br /> INSTRUCTION</p>
    
                    </div>
                    <button className='btn btn-dark p-3 w-100' style={{color:'white',fontFamily:'outfit'}} onClick={handlePayment}>
                        GET STARTED
                    </button>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>

        </div>
    <Footer />   
    </>
  )
}

export default MemberShip