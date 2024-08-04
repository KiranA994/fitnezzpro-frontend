import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
function Admin() {
    return (
        <>
        <Header />
            <div style={{ position: 'relative' }}>

                <div className='d-flex'>
                    <div style={{ backgroundColor: '#181e2d4f', width: '10%', height: '100vh' }} className='d-flex flex-column'>
                        <a href='#'><img src="/home.png" alt="" style={{ width: '75%' }} className='center-img mt-5' /></a>
                        <br />
                        <a href='#payment'><img src="/payments.png" alt="" style={{ width: '75%' }} className='center-img' /></a>
                        <br />
                        <a href='#users'><img src="/users.png" alt="" className='center-img' /></a>
                        <br />
                        <a href='#'><img src="/signout.PNG" alt="" style={{ width: '75%' }} className='center-img mb-5' /></a>
                    </div>
                </div>

                <div style={{ position: 'absolute', top: '50px', left: '40%' }}>
                    <div className='d-flex'>
                        <div className='me-5'>
                            <p className='vision'>Total Users</p>
                            <p className='facility'>20</p>
                        </div>
                        <div className='ms-5'>
                            <p className='vision'>Amount Recieved</p>
                            <p className='facility'>₹ 4000</p>
                        </div>
                    </div>
                    <h2 className='text-center text-warning mb-5 mt-5' style={{ fontFamily: 'outfit' }}>Payment</h2>
                    <div id="payment">
                        <table style={{ backgroundColor: '#ffffff40' }} className='border-2 p-4 rounded w-100'>
                            <thead>
                                <tr style={{ color: '#D02E2E' }}>
                                    <th>Id</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>20-10-2024</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>20-10-2024</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>20-10-2024</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>20-10-2024</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>20-10-2024</td>
                                    <td>1000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id="users">
                        <table style={{ backgroundColor: '#ffffff40' }} className='border-2 p-4 rounded w-100'>
                            <thead>
                                <tr style={{ color: '#D02E2E'}}>
                                    <th>Id</th>
                                    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Username</th>
                                    
                                    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</th>

                                    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nikhil</td>

                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ki@gmail.com</td>

                                   <div className='d-flex w-50'>
                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/edit.svg" alt="" className='w-25' />
                                    
                                        <img src="/delete.svg" alt="" className='w-25' /></td>
                                   </div>
                                </tr>
                           
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        <Footer />    
        </>
    )
}

export default Admin