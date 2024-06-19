import React from 'react'
import doct from "../assets/doct.png"
import linr12 from "../assets/Line12.png"
import exp from "../assets/exp.png"
import star from "../assets/star.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p1 from "../assets/p1.png"

const Doctor = () => {
  return (
    <div className='ml-[30px] mt-[30px] grid-auto-fit'>
        <p className='font-bold text-[40px] font-outfit '
            style={{color:"#2D1C82"}}>Here’s what you need to know about us</p>
        <div className='w-[1300px] h-[700px] rounded-[30px] m-[30px]'
        style={{backgroundColor:"#6D68D2"}}>  
        </div>
        <section >
            <div className='bg-white w-[800px] h-[550px] mt-[-680px] ml-[100px] flex rounded-[30px] shadow-2xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                <p className='ml-[30px] font-outfit mr-[30px] mt-[50px] text-justify font-meduim text-[26px]'>It started with one question, Why are so many people today, experiencing chronic pains and what are people doing about it ? Some have learned to live with pain and accepted it as a constant companion in their life, while some have spent thousands of Rupees in supplements and medicines treating only the symptoms and not addressing the root cause.
                Nothing frustrates me more than seeing patients consistently eat tablets causing dangerous side affects and still be in pain. It is my life’s mission to help people to get rid of their pain without a single side effect. You don’t have to become old before time. Our rigorous training and experience will make your pain a thing of the past.</p>
            </div>
            <div className='w-[300px] h-[200px] ml-[1000px] mt-[-550px] rounded-[30px]'
            style={{backgroundColor:"#3A24A8"}}>
                <img src={doct} alt="" 
               />
            </div>
            <div className='w-[300px] font-outfit flex h-[200px] ml-[1000px] mt-[200px] rounded-[30px] shadow-2xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' 
            style={{ backgroundColor: "#3A24A8" }}>
        <div className='ml-[20px]  mt-[10px] mb-[1000px]'>
          <p className='text-white mt-[10px]'>Dr Prem Chand Vemula (NT Delhi)</p> 
          <p className='text-white mt-[20px]'>Neuro Therapist</p>
          <p className='text-white mt-[10px]'>Therapist Alternative</p>
          <p className='text-white mt-[10px]'>Acupuncture Dip</p>
          <p className='text-white mt-[10px]'>Chiropractor</p>
        </div>
      </div>
        </section>

        <div className='w-[900px] mt-[100px] ml-[200px]    h-[300px] rounded-[30px]'
        style={{backgroundColor:"#3A24A8"}}>
          <img src={exp}
          className='mt-[100px]  '/>
        </div>
        {/* testimonials */}
        <div className='ml-[30px] mt-[80px] '>
            <p className='font-bold text-[40px]'
            style={{color:"#15155F"}}>
                What our patients absolutely love about us!
            </p>
            <div className='flex flex-row flex-wrap grid-auto-fit  ml-[10px] mt-[200px] gap-[40px]'
            >
              <div className='h-[630px] w-[420px]  rounded-[30px] shadow-3xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' style={{ backgroundColor: "#4B2ED8" }}>
                <img src={p2} alt="" className='ml-[150px] mt-[-50px]'/>
                <img src={star} className='ml-[150px] mt-[30px]'/>
                <p className='ml-[20px] mt-[100px] mr-[20px] text-justify text-white font-outfit font-light text-[20px]'>"I was suffering from chronic back pain for years and tried everything from medication to physical therapy, but nothing worked. After just one 90-minute session with Dr. Prem Chand Vemula, I felt a significant improvement. Now, I’m pain-free and can enjoy my daily activities again. 
                <br />
               <span className='block text-center mt-2'>Highly recommend!"</span>
                 </p>
                 <p className='font-outfit font-bold text-[32px] text-white ml-[20px] mt-4'>Priya S.</p>
                 <p className='font-outfit font-light text-[16px] text-white ml-[20px] mt-1 '>Hyd, Telangana</p>

              </div>
              <div className='h-[630px]  w-[420px]  rounded-[30px] shadow-3xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' style={{ backgroundColor: "#4B2ED8" }}>
              <img src={p1} alt="" className='ml-[150px] mt-[-50px]'/>
              <img src={star} className='ml-[150px] mt-[30px]'/>
              <p className='ml-[20px] mt-[100px] mr-[20px] text-justify text-white font-outfit font-light text-[20px]'>
                "I was suffering from chronic back pain for years and tried everything from medication to physical therapy, but nothing worked. After just one 90-minute session with Dr. Prem Chand Vemula, I felt a significant improvement. Now, I’m pain-free and can enjoy my daily activities again. 
                <br />
               <span className='block text-center mt-2'>Highly recommend!"</span>
               
                 </p>
                 <p className='font-outfit font-bold text-[32px] text-white ml-[20px] mt-4'>Rajesh K.</p>
                 <p className='font-outfit font-light text-[16px] text-white ml-[20px] mt-1 '>Hyd, Telangana</p>
              </div>
              <div className='h-[630px] w-[420px]  rounded-[30px] shadow-3xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' style={{ backgroundColor: "#4B2ED8" }}>
                <img src={p3} alt="" className='ml-[150px] mt-[-50px]'/>
                  <img src={star} className='ml-[150px] mt-[30px]'/>
                <p className='ml-[20px] mt-[100px] mr-[20px] text-justify text-white font-outfit font-light text-[20px]'>"I was suffering from chronic back pain for years and tried everything from medication to physical therapy, but nothing worked. After just one 90-minute session with Dr. Prem Chand Vemula, I felt a significant improvement. Now, I’m pain-free and can enjoy my daily activities again. 
                <br />
               <span className='block text-center mt-2'>Highly recommend!"</span>
                 </p>
                 <p className='font-outfit font-bold text-[32px] text-white ml-[20px] mt-4'>Arjun M.</p>
                 <p className='font-outfit font-light text-[16px] text-white ml-[20px] mt-1 '>Hyd, Telangana</p>
              </div>
            </div>
        </div>
       

    </div>
  )
}

export default Doctor