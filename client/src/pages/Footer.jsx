import React from 'react'
import Contact from '../components/Contact'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import locationImg from "../assets/location.png"

const Footer = () => {
  return (
    <main className='bg-gradient-to-r  from-gray-50 to-pink-50 shadow-2xl  w-[1300px] h-[800px] mb-[100px]  ml-[80px] rounded-[30px] '>
        <section>
            <Contact/>
        </section>
        <div className='mt-[-500px]'>
          <p className='font-outfit font-meduim text-[32px] ml-[600px] mt-[-50px]'
          style={{color:"#152344"}}>
            Location
            </p>
            <p className='ml-[600px] mt-[30px] mr-[350px] font-outfit font-normal text-[20px]'>
            KS bakery, back side, Madhava Nagar Colony, Ambedkar Nagar, Hafeezpet, Hyderabad, Telangana 500049
            </p>
          
          
            <p className='ml-[630px] mt-[30px] mr-[350px] font-outfit font-normal text-[20px]'>
            +91-9192939495
            </p>

            <div>
            <p className='ml-[630px] mt-[30px] mr-[350px] font-outfit font-normal text-[20px]'>
            resetwellnesscenter@gmail.com
            </p>
            </div>
            <p className='ml-[600px] mt-[80px] mr-[350px] font-outfit font-meduim text-[32px]'>Follow us</p>

            <div className='h-[280px] w-[280px]  rounded-[20px] ml-[1000px] mt-[-400px]'
            style={{backgroundColor:"#CCDDFF"}}>
            </div>
            <div>
            <img src={locationImg} alt="" height={183} width={183}
              className='ml-[1050px] mt-[-240px]'/>
            </div>
        </div>
        <FaPhoneAlt className='ml-[600px] mt-[-30px]' />
        <MdEmail className='ml-[600px] mt-[43px]' />
        <div className='flex flex-row gap-8 mt-[150px] ml-[600px]'>
        <FaFacebookSquare size={40}/>
        <FaYoutube size={40} />
        <FaSquareXTwitter size={40}/>
        <FaInstagramSquare size={40}/>


        </div>
    </main>
  )
}

export default Footer