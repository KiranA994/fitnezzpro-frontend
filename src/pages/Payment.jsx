import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makePaymentApi } from '../services/allAPI';

function Payment() {
    const [payment,setPayment] = useState({
        fullName: '',
        cardNumber: '',
        month: '',
        year:'',
        cvv:''
        }) 

    const [show, setShow] = useState(false);

    const [token,setToken] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        makePayment();
        setTimeout(()=>{
            handleClose()
        },5000)
    }

    const {fullName,cardNumber,month,year,cvv} = payment
    


    const makePayment = async(e) => {


        if(!fullName || !cardNumber || !month || !year || !cvv){
            toast.info('Please fill the fields Completely')
        }
        else{
            if(token){
                let reqHeader = {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }

                const result = await makePaymentApi(payment,reqHeader)
                console.log(result);
                setTimeout(()=>{
                    handleShow()
                },5000)
                if(result.status == 200){
                
                    setPayment({
                        fullName: '',
                        cardNumber: '',
                        month: '',
                        year:'',
                        cvv:''
                    })
            }
            else{
                toast.error('Something Went Wrong')
                
                setPayment({
                    fullName: '',
                    cardNumber: '',
                    month: '',
                    year:'',
                    cvv:''
                })
            }

         }
        }
    
        useEffect(()=>{
            if(sessionStorage.getItem('token')){
                setToken(sessionStorage.getItem('token'))
            }
            else{
                setToken('')
            }
            
        },[])
        
  return (
    <>
    <Header />
    <div>
    <h2 className='text-center text-warning mb-5' style={{ fontFamily: 'outfit' }}>Payment</h2>
    <div>
        <h4 className='facility mt-5'>Choose Payment Method below</h4>
        <div class="card-row">
          <span class="visa"></span>
          <span class="mastercard"></span>
          <span class="amex"></span>
          <span class="discover"></span>
      </div>
      <div className='d-flex justify-content-evenly'>
        <a href='#'><img src="/credit card.png" alt="" /></a>
       <a href='#'> <img src="/paypal.PNG" alt="" className='p-5' /></a>
      <a href='#'>  <img src="/amazon.PNG" alt="" className='p-5'/></a>
      </div>
      <div className='d-flex justify-content-center'>
            <form>
                <div className="mb-5">
                    <label htmlFor="fullName">CARDHOLDER NAME</label>
                    <input type="text" placeholder='Full Name' name='fullName' className='form-control w-100 card-input'
                    value={payment.fullName} onChange={(e)=>setPayment({...payment,fullName:e.target.value})} />
                </div>
                <div className="mb-5">
                    <label htmlFor="cardNumber">CARD NUMBER</label>
                    <input  id="numbers-only" type="text" placeholder='XXXX XXXX XXXX XXXX' name='cardNumber' className='form-control w-100 card-input'
                    value={payment.cardNumber} onChange={(e)=>setPayment({...payment,cardNumber:e.target.value})}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="month">EXP.MONTH/YEAR</label>
                   <div className='d-flex'>
                        <input type="text" placeholder='MM' name='month' className='form-control card-input month-year' value={payment.month}
                         onChange={(e)=>setPayment({...payment,month:e.target.value})}/>
                        <input type="text" placeholder='YY' name='year' className='form-control card-input month-year' value={payment.year}
                         onChange={(e)=>setPayment({...payment,year:e.target.value})}/>
                   </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="cvv">CVV NUMBER</label>
                    <input type="text" name='cvv' placeholder='XXX' className='form-control w-100 card-input' value={payment.cvv}
                     onChange={(e)=>setPayment({...payment,cvv:e.target.value})}/>
                </div>

                <div className='d-flex justify-content-evenly'>
                    <a href="/membership" style={{fontFamily:'outfit', color: '#000000'}}>CANCEL PAYMENT</a>
                    <button className='btn btn-primary w-25 p-2' style={{backgroundColor:'#0064B1', color:'#FFFFF',fontFamily:"outfit", borderRadius:'20px'}}
                    onClick={makePayment}>MAKE PAYMENT</button>
                </div>
            </form>
            </div>
    </div>
    </div>

    <Footer />
    <ToastContainer theme='colored' autoClose={2000} position='top-right' />

    <Modal show={show}>
        <Modal.Body>Payment on Progress
            <br />
            Please Do not refresh or close the tab.</Modal.Body>
      </Modal>
    </>
  )
}
}

export default Payment