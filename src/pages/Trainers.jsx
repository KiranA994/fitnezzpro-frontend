import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Trainers() {
  return (
    <>
    <Header />
    <div>
    <h2 className='text-center mb-5' style={{ fontFamily: 'outfit', color:'#00F0FF' }}>Trainers</h2>
    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <div className='vision' style={{textWrap:'unset', textAlign:'justify'}}>
                <p>Our team of certified trainers and wellness experts is passionate about helping you succeed. With personalized training programs, group classes, and nutritional guidance, our staff is here to support you every step of the way. Meet our trainers who bring diverse expertise and a shared dedication to your fitness journey.</p>
            </div>

            <div className='mt-5'>
                <div className='d-flex justify-content-center mt-5'>
                    <img src="/JoeBloggs.jpg" alt="" className='w-100'/>
                </div>
                <div className='d-flex'>
                    <div style={{background:'black'}} className='w-50 p-2'>
                        <p className='facility d-flex justify-content-center align-items-center'
                        style={{fontSize:'20px', fontFamily:'outfit'}}>Christo Paul</p>
                    </div>
                    <div style={{background:'#FF8A00'}} className='w-50 p-2'>
                        <p style={{color:'rebeccapurple', fontSize:'20px', fontFamily:'outfit'}} 
                        className='d-flex justify-content-center align-items-center'
                       >Weight Lifting Coach</p>
                    </div>
                </div>
                <p className='vision mt-4'>Specializes in sculpting strength and muscle with precision</p>
            </div>

            <div className='mt-5'>
                <div className='d-flex justify-content-center mt-5'>
                    <img src="/CharlieWatson.jpg" alt="" className='w-100'/>
                </div>
                <div className='d-flex'>
                    <div style={{background:'black'}} className='w-50 p-2'>
                        <p className='facility d-flex justify-content-center align-items-center'
                        style={{fontSize:'20px', fontFamily:'outfit'}}>Christo John</p>
                    </div>
                    <div style={{background:'#FF8A00'}} className='w-50 p-2'>
                        <p style={{color:'rebeccapurple',fontSize:'20px', fontFamily:'outfit'}} 
                        className='d-flex justify-content-center align-items-center'
                        >MMA Coach</p>
                    </div>
                </div>
                <p className='mt-4 text-center' style={{color:'#EBF5A7', fontSize:'24px', fontFamily:'outfit'}}>
                    Hones combat skills and self-defense with expertise
                </p>
            </div>

            <div className='mt-5'>
                <div className='d-flex justify-content-center mt-5'>
                    <img src="/TaylorMelé.jpg" alt="" className='w-100'/>
                </div>
                <div className='d-flex'>
                    <div style={{background:'black'}} className='w-50 p-2'>
                        <p className='facility d-flex justify-content-center align-items-center'
                        style={{fontSize:'20px', fontFamily:'outfit'}}>Ellyse Perry</p>
                    </div>
                    <div style={{background:'#FF8A00'}} className='w-50 p-2'>
                        <p style={{color:'rebeccapurple', fontSize:'20px', fontFamily:'outfit'}} 
                        className='d-flex justify-content-center align-items-center'>Personal Trainer</p>
                    </div>
                </div>
                <p className='mt-4 text-center' style={{color:'#00F0FF', fontSize:'24px', fontFamily:'outfit'}}>
                    Your path to achieving fitness goals, one personalized session at a time
                </p>
            </div>

            <div className='mt-5'>
                <div className='d-flex justify-content-center mt-5'>
                    <img src="/RachelDanielle.jpg" alt="" className='w-100'/>
                </div>
                <div className='d-flex'>
                    <div style={{background:'black'}} className='w-50 p-2'>
                        <p className='facility d-flex justify-content-center align-items-center'>Jemimah Rodrigues</p>
                    </div>

                    <div style={{background:'#FF8A00'}} className='w-50 p-2'>
                        <p style={{color:'rebeccapurple', fontFamily:'outfit'}} 
                        className='d-flex justify-content-center align-items-center'>Yoga Instructor</p>
                    </div>
                </div>
                <p className='mt-4 text-center' style={{color:'#EBF5A7', fontSize:'24px', fontFamily:'outfit'}}>
                    Guides you to inner peace and flexibility through mindful yoga practice
                </p>
            </div>

        </div>
        <div className="col-md-4"></div>
    </div>

    </div>
    <Footer />
    </>
  )
}

export default Trainers