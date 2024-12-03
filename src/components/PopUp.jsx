import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import PopUpForm from './PopUpForm'
const PopUp = () => {

    const [close,setClose] = useState(false)
    const [showForm,setShowForm] = useState(false)

    const Navigate = useNavigate();

    useEffect(()=>{
        Navigate("..", {state:{value:close}});
    },[!close])

    
    const closePopup = () => {
        setShowForm(!showForm);
        setClose(!close)
    };


  return (
   <div>
     <div className={`${!close ? 'relative':'hidden'} bg-blue-500 h-[40px]  gap-2 py-2 text-white flex justify-end px-5`}>
        <button onClick={ ()=>setShowForm(true)} className=" text-[13px] cursor-pointer hover:bg-white hover:text-blue-950 hover:rounded-md font-semibold px-4 py-1">Apply now</button>
        <FaTimes className="mt-1.5 cursor-pointer" onClick={()=> setClose(!close)}/>

    </div>
        {
            showForm && (
                <div className="fixed left-0 right-0 bottom-0 top-10 flex items-center justify-center bg-black bg-opacity-90 z-50">
                  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <div className="flex relative">
                        <h2 className="text-2xl font-semibold text-blue-950 mb-4">Apply now</h2>
                        <button className="absolute right-5 mb-4 flex text-blue-950" onClick={closePopup}><FaTimes /></button>
                    </div>

                    {/* form start */}
                    <form>
                      <div className="flex justify-around gap-8">
                        {/* fullname */}
                        <div className="mb-4">
                            <input
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-950 focus:border-blue-950 sm:text-sm"/>
                        </div>
                        {/* surname */}
                        <div className="mb-4">
                            <input
                            type="text"
                            id="lastname"
                            placeholder="LastName"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-950 focus:border-blue-950 sm:text-sm"/>
                        </div>
                      </div>
                      
                      {/* email */}
                      <div className="mb-4">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email-Address"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-950 focus:border-blue-950 sm:text-sm"/>
                      </div>
                      {/* email */}
                      <div className="mb-4">
                        <input
                          type="email"
                          id="email"
                          placeholder="Confirm Email-Address"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-950 focus:border-blue-950 sm:text-sm"/>
                      </div>
                      {/* email */}
                      <div className="mb-4">
                        <input
                          type="email"
                          id="email"
                          placeholder="Physical-Address"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-950 focus:border-blue-950 sm:text-sm"/>
                      </div>
                      
                       {/* Submit and Cancel Buttons */}
                      <div className="flex justify-end">
                        <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-md">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
            )
        }
   </div>
  )
}

export default PopUp