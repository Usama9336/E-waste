import React from 'react'
import './stylesheet.css'
import logo from './logo3.png'
import search from './search.png'
 import user from './user.png'
function Table() {
  return (

    <div className="bg">


        <div>
            <img src={logo} className="image"/>
            <ul className="list">
                <li>
                    <a href="#" className="l1">Home</a>
                </li>
                <li>
                    <a href="#" className="l1">About Us</a>
                </li>
                <li>
                    <a href="#" className="l1">Contact Us</a>
                </li>
                <li>
                    <a href="#" className="l1">LogIn/SignUp</a>
                </li>
                <li>
                <div className='flex gap-[0.6rem] pr-[2rem]'>
    <img src={search} alt=""  className='w-[1.5rem] h-[1.5rem]'/>
    <img src={user} alt="" className='w-[1.5rem] h-[1.5rem]' />
    </div>
                </li>
            </ul>
        </div><br/>
        <div className='tableback'>
        <div>
            <h1 className="rec">
                ADD RECEIPT
            </h1>
        </div>
        <div className='tabfirst'>
            <table className="tab  shadow-xl shadow-black">
                <tr>
                    <th style={{padding:'20px'}}>
                        Sl No.
                    </th>
                    <th>
                        ITEM
                    </th>
                    <th>
                        ADD REEIPT
                    </th>
                    <th>
                        STATUS
                    </th>
                    <th>
                        PROCEED
                    </th>
                </tr>
                <tr>
                    <td>
                        1.
                    </td>
                    <td>
                        <div className="item">
                            ITEM
                        </div>
                    </td>
                    <td>
                        <div className="receipt">
                            ADD RECEIPT
                            <span className="material-symbols-outlined">
                                add
                                </span>
                        </div>
                    </td>
                    <td>
                        <div className="verified">
                            VERIFIED
                        </div>
                    </td>
                    <td >
                        <div className="add">
                            ADD
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        2.
                    </td>
                    <td>
                        <div className="item">
                            ITEM
                        </div>
                    </td>
                    <td>
                        <div className="receipt">
                            ADD RECEIPT
                            <span className="material-symbols-outlined">
                                add
                                </span>
                        </div>
                    </td>
                    <td>
                        <div className="verified">
                            VERIFIED
                        </div>
                    </td>
                    <td>
                        <div className="add">
                            ADD
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        3.
                    </td>
                    <td>
                        <div className="item">
                            ITEM
                        </div>
                    </td>
                    <td>
                        <div className="receipt">
                            ADD RECEIPT
                            <span className="material-symbols-outlined">
                                add
                                </span>
                        </div>
                    </td>
                    <td>
                        <div className="verified">
                            VERIFIED
                        </div>
                    </td>
                    <td>
                        <div className="add">
                            ADD
                        </div>
                    </td>
                </tr>
                
            </table>
        </div>
        </div>
        </div>
  )
}

export default Table