import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://chiropractor-inaara.onrender.com/contacts', {
        fullName,
        email,
        reason,
        message,
      });
      toast.success('Message sent successfully!');
      setFullName('');
      setEmail('');
      setReason('');
      setMessage('');
    } catch (err) {
      console.error(err);
      toast.error('Error sending message');
    }
  };

  return (
    <>
      <div className='w-[400px] h-[100px] mt-[30px] flex grid-auto-fit'>
        <p className='ml-[50px] font-outfit font-semibold mt-[30px] text-[48px] lg:ml-[50px]
                          sm:ml-[100px]' style={{ color: "#152344" }}>
          Contact us
        </p>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="mb-2">
  <label 
    htmlFor="name" 
    className="block font-thin font-outfit text-[28px] mt-[30px] ml-[30px] mb-2 lg:ml-[50px] sm:ml-[100px] xsm:ml-[10px]" 
    style={{ color: "#152344" }}
  >
    Name
  </label>
  <input
    type="text"
    id="name"
    className="w-[400px] ml-[20px] mt-[2px] p-3 border border-gray-300 rounded-md shadow-sm lg:ml-[50px] sm:ml-[100px] xsm:ml-[10px] xsm:w-[300px]"
    placeholder="John Doe(*)"
    value={fullName}
    onChange={(e) => setFullName(e.target.value)}
  />
</div>

<div className="mb-2">
  <label 
    htmlFor="email" 
    className="block font-light font-outfit text-[28px] mt-[30px] ml-[30px] lg:ml-[50px] sm:ml-[100px] xsm:ml-[10px] mb-2" 
    style={{ color: "#152344" }}
  >
    Email
  </label>
  <input
    type="email"
    id="email"
    className="w-[400px] ml-[20px] mt-[2px] p-3 border border-gray-300 rounded-md lg:ml-[50px] shadow-sm sm:ml-[100px] xsm:ml-[10px] xsm:w-[300px]"
    placeholder="johndoe@example.com(*)"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</div>
<div className="mb-2">
  <label 
    htmlFor="reason" 
    className="block font-light font-outfit text-[28px] lg:ml-[50px] mt-[30px] ml-[30px] mb-2 sm:ml-[100px] xsm:ml-[10px]" 
    style={{ color: "#152344" }}
  >
    Reason for contact
  </label>
  <input
    type="text"
    id="reason"
    className="w-[400px] ml-[20px] mt-[2px] p-3 border border-gray-300 lg:ml-[50px] rounded-md shadow-sm sm:ml-[100px] xsm:ml-[10px] xsm:w-[300px]"
    placeholder="....."
    value={reason}
    onChange={(e) => setReason(e.target.value)}
  />
</div>
<div className="mb-2">
  <label 
    htmlFor="message" 
    className="block font-light lg:ml-[50px] font-outfit text-[28px] mt-[30px] ml-[30px] mb-2 sm:ml-[100px] xsm:ml-[10px]" 
    style={{ color: "#152344" }}
  >
    Message
  </label>
  <input
    type="text"
    id="message"
    className="w-[400px] ml-[20px] mt-[2px] p-3 border border-gray-300 rounded-md shadow-sm lg:ml-[50px] sm:ml-[100px] xsm:ml-[10px] xsm:w-[300px]"
    placeholder="Hi I’m looking for an appointment..."
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />
</div>

        <Button 
          type="submit" 
          className='w-[122px] h-[45px] mt-[30px] rounded-[30px] ml-[40px] text-white sm:ml-[100px]' 
          style={{ backgroundColor: "#152344" }}
        >
          Send
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Contact;