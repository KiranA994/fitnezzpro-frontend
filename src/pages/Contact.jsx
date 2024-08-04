import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
function Contact() {
  return (
    <>
    <Header />
    <div>
    <h2 className='text-center text-warning mb-5' style={{ fontFamily: 'outfit' }}>GET IN TOUCH</h2>
    
    <div className='row'>
        <div className="col-md-1"></div>
        <div className='col-md-4 mt-5'>
            <div>
            <form>
                <div className="mb-5">
                    <input type="text" placeholder='Enter Name' className='form-control input-clr'/>
                </div>
                <div className="mb-5">
                    <input type="text" placeholder='Enter Email' className='form-control input-clr'/>
                </div>
                <div className="mb-5">
                    <input type="text" placeholder='Enter Number' className='form-control input-clr'/>
                </div>
                <div className="mb-5">
                    <textarea rows={'10'} placeholder='Enter Message' className='form-control input-clr'>
                    </textarea>
                </div>

                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary w-25 p-2' style={{color:'#FF8A00',fontFamily:"outfit"}}>SEND</button>
                </div>
            </form>
            </div>
        </div>
        <div className="col-md-1"></div>

        <div className="col-md-2"></div>
        <div className="col-md-3 mt-5">

            <div className='mt-5'>
                <h4 className='vision' style={{textAlign:'left'}}>Contact Us</h4>
                <p className='facility' style={{fontSize:'20px',textAlign:'left'}}>Email: fitnezz_pro@gmail.com</p>
                <p className='facility' style={{fontSize:'20px',textAlign:'left'}}>PH: +123 456 789</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='mt-5'>
                <h4 className='vision' style={{textAlign:'left'}}>Working Hours</h4>
                <p className='facility' style={{fontSize:'20px',textAlign:'left'}}>Mon-Sat: 6am - 7pm</p>
                <p className='facility' style={{fontSize:'20px',textAlign:'left'}}>Sunday Holiday</p>
            </div>

        </div>
        <div className="col-md-1"></div>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" 
    width="600" height="500" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100 mt-5'>

    </iframe>

    </div>
    <Footer />   
    </>
  )
}

export default Contact