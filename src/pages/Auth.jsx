import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi, registerApi } from '../services/allAPI';

function Auth({register}) {

  const [user,setUser] = useState({
    username: '',
    email: '',
    password: ''
    }) 

  const navigate = useNavigate()

  const registerForm = register ? true : false

  const registerUser = async(e) => {
    e.preventDefault()
    const {username,email,password} = user
    if(!username || !email || !password){
        toast.info('Please fill the form completely')
    }
    else{
        const result = await registerApi()
        console.log(result);
        if(result.status == 200){
            toast.success('Registration Successfull')
            setUser({
                username: '',
                email: '',
                password: ''
            })
            navigate('/login')
        }
        else{
            toast.error(result.response.data);
            setUser({
              username:'',
              email:'',
              password:''
            })
        }
    }
  }

  const userLogin = async(e) => {
    e.preventDefault()
    const {email, password} = user
    if(!email || !password){
        toast.info('Please fill the form completely')
    }
    else{
        const result = await loginApi()
        console.log(result);
        if(result.status == 200){
            toast.success('Login Successfull')
            sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
            sessionStorage.setItem("token",result.data.token)
            setUser({
                email: '',
                password: ''
            })
            setTimeout(()=>{
                navigate('/')
            },2500)
        }
        else{
            toast.error(result.response.data);
            setUser({
              username:'',
              email:'',
              password:''
            })
        }
    }
  }

  return (
    <>
    <div>
        <div className="row">
           <div className="col-md-1"></div>
            <div className="col-md-3">      
                <img src="/gym-logo.png" alt="" style={{display:'block',marginLeft:'auto',marginRight:'auto'}}/>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-1"></div>
            <div className="col-md-5"></div>
        </div>
        <div className='d-flex justify-content-around'>
            <div>
                <img src="/login.gif" alt="" className='w-50' />
            </div>
            <div>
           { registerForm ?
           <h2 className='text-center text-warning' style={{marginTop:'-20px'}}>Register User</h2>
           :
           <h2 className='text-center text-warning mb-5'>Login In to your Account</h2>
             }
            <div style={{backgroundColor: '#00f0ff26'}} className='p-5 mt-3'>
                <form>
                { registerForm && <div className='mb-5'>
                            <input type="text" className='form-control w-100 login-input' placeholder='Enter Username'
                            value={user.username}
                            onChange={(e)=>setUser({...user,username:e.target.value})} />
                        </div>
                }
                        <div className='mb-5'>
                            <input type="text" className='form-control w-100 login-input' placeholder='Enter Email'
                            value={user.email}
                            onChange={(e)=>setUser({...user,email:e.target.value})} />
                        </div>
                        <div className='mb-5'>
                            <input type="text" className='form-control w-100 login-input' placeholder='Enter Password'
                            value={user.password}
                            onChange={(e)=>setUser({...user,password:e.target.value})} />
                        </div>

                        { registerForm ?
                   <div className='d-flex justify-content-center flex-column'>
                    <button type='button' className='btn btn-dark p-2 w-50' style={{backgroundColor:'#ffc107', color:'black', margin:'0 auto'}}
                    onClick={registerUser}>REGISTER</button>
                    <a href="#" style={{textDecoration:'none'}}><p className='facility mt-3' style={{fontSize:'20px'}}>Already Registered? 
                    <span className='vision'>
                        <Link to={'/login'} style={{textDecoration:'none',color:'pink'}}
                        >&nbsp;Login</Link>
                    </span></p></a>
                   </div>

                   :

                   <div className='d-flex justify-content-center flex-column'>
                    <button type='button' className='btn btn-dark p-2 w-50' style={{backgroundColor:'#ffc107', color:'black', margin:'0 auto'}}
                    onClick={userLogin}>SIGN IN</button>
                    <a href="#" style={{textDecoration:'none'}}><p className='facility mt-3' style={{fontSize:'20px'}}>New User? 
                    <span className='vision'>
                        <Link to={'/register'} style={{textDecoration:'none',color:'pink'}}>&nbsp;Register</Link>
                    </span></p></a>
                   </div>

                        }

                </form>
                </div>
            </div>
        </div>
    </div>
    <ToastContainer theme='colored' autoClose={2000} position='top-right' />
    </>
  )
}

export default Auth