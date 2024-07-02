import React from 'react'
import doct from "../assets/doct.png"
import linr12 from "../assets/Line12.png"
import exp from "../assets/exp.png"
import star from "../assets/star.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p1 from "../assets/p1.png"

const Doctor = () => {

  const style = {
    backgroundColor: '#333333',
    boxShadow: `
      inset 0px 4px 50px 0px #CECCFF, 
      0px 4px 30px 0px rgba(74, 159, 22, 0.55)
    `,
  }

  const styles = {
    backgroundColor: 'rgba(60, 60, 60, 0.92)', // Background color with 92% opacity
    border: '3px solid rgba(74, 159, 22, 0.55)', // Border on all sides
    boxShadow: `
      inset 0px 4px 4px 0px rgba(74, 159, 22, 0.55), 
      0px 4px 4px 0px rgba(74, 159, 22, 0.55)
    `, // Inner and drop shadow
  };

  return (
    <div className=' mt-[30px] grid-auto-fit'>
        <p className='font-bold text-[40px] ml-[30px] lg:ml-[200px] xl:ml-[200px] 2xl:ml-[200px] font-outfit '
            style={{color:"#333333"}}>Here’s what you need to know about us</p>
        <div className='w-[1300px] h-[700px] rounded-[30px] ml-[30px] mr-[30px] mt-[30px] mb-[30px]
              xsm:w-[350px] xsm:h-[1000px] xsm:ml-[10px]
               sm:w-[600px] sm:h-[1000px] sm:ml-[30px]
               md:w-[800px] md:h-[1000px] md:ml-[30px]
                lg:w-[1300px] lg:h-[700px] lg:ml-[30px]'
        style={{backgroundColor:"#717171"}}>  
        </div>
        <section >
            <div className='bg-white w-[800px] h-[550px] mt-[-680px] ml-[100px] flex rounded-[30px] shadow-2xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
                            xsm:w-[330px] xsm:ml-[20px] xsm:mt-[-980px]
                            sm:w-[550px] sm:ml-[50px] sm:mt-[-980px]
                            md:w-[650px] md:ml-[100px]
                            lg:w-[800px] lg:ml-[100px] lg:mt-[-680px]'>
                <p className='ml-[30px] font-outfit mr-[30px] mt-[50px] text-justify font-meduim text-[26px]
                                xsm:text-[16px]
                               sm:text-[21px]
                               md:text-[24px]'>
                                It started with one question, Why are so many people today, experiencing chronic pains and what are people doing about it ? Some have learned to live with pain and accepted it as a constant companion in their life, while some have spent thousands of Rupees in supplements and medicines treating only the symptoms and not addressing the root cause.
                Nothing frustrates me more than seeing patients consistently eat tablets causing dangerous side affects and still be in pain. It is my life’s mission to help people to get rid of their pain without a single side effect. You don’t have to become old before time. Our rigorous training and experience will make your pain a thing of the past.</p>
            </div>
            <div className='w-[300px] h-[200px] ml-[1000px] mt-[-550px] rounded-[30px] 
                             xsm:w-[150px] xsm:h-[150px] xsm:ml-[100px] xsm:mt-[20px]
                            sm:w-[150px] sm:h-[150px] sm:ml-[50px] sm:mt-[100px]
                            md:w-[230px] md:ml-[100px]
                            lg:w-[300px] lg:h-[200px] lg:ml-[1000px] lg:mt-[-550px]'
            style={{backgroundColor:"#3A24A8"}}>
                <img src={doct} alt="" 
               />
            </div>
            <div className='w-[300px] font-outfit flex h-[200px] ml-[1000px] mt-[200px] rounded-[30px] shadow-2xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
                           xsm:ml-[50px] xsm:mt-[40px] xsm:w-[250px] xsm:h-[180px]
                           sm:ml-[300px] sm:mt-[-150px] sm:w-[300px] sm:h-[200px]
                            md:ml-[400px] md:mt-[-130px] md:w-[300px] md:h-[200px]
                            lg:ml-[1000px] lg:mt-[200px] lg:w-[300px] lg:h-[200px] ' 
            style={{ backgroundColor: "#3C3C3C" }}>
        <div className='ml-[20px]  mt-[10px] mb-[1000px]'>
          <p className='text-white mt-[10px] xsm:mt-[1px] sm:mt-[10px] md:mt-[10px] lg:mt-[10px]'>Dr Prem Chand Vemula (NT Delhi)</p> 
          <p className='text-white mt-[20px] xsm:mt-[5px]  sm:mt-[20px] md:mt-[20px] lg:mt-[20px]'>Neuro Therapist</p>
          <p className='text-white mt-[10px] xsm:mt-[1px]  sm:mt-[10px] md:mt-[10px] lg:mt-[10px]'>Therapist Alternative</p>
          <p className='text-white mt-[10px] xsm:mt-[1px]  sm:mt-[10px] md:mt-[10px] lg:mt-[10px]'>Acupuncture Dip</p>
          <p className='text-white mt-[10px]xsm:mt-[1px]  sm:mt-[10px] md:mt-[10px] lg:mt-[10px]'>Chiropractor</p>
        </div>
      </div>
        </section>

        <div className='ml-[100px] xsm:ml-[10px] mt-[150px] lg:ml-[100px] xl:ml-[100px] 2xl:ml-[100px]'>
          <img src={exp}
          className='mt-[100px]  '/>
        </div>
        {/* testimonials */}
        <div className='  mr-[10px] mt-[80px] sm:mt-[200px] md:mt-[200px] lg:mt-[80px] xsm:ml-[10px] sm:ml-[30px] md:ml-[30px] lg:ml-[30px]  '>
            <p className='font-bold text-custom-black text-[40px] sm:text-[40px] lg:text-[40px] md:text-[40px] 2xl:text-[50px]  ml-[20px] lg:ml-[150px] xl:ml-[150px] 2xl:ml-[150px] '
            >
                What our patients absolutely love about us!
            </p>
            <div className='flex flex-row flex-wrap  ml-[10px]  mt-[200px] gap-[40px] xsm:gap-[80px] sm:gap-[60px] md:gap-[40x] lg:gap-[40px] xl:gap-[40px] 2xl:gap-[40px] '
            >
              <div className='h-[630px] w-[420px]   rounded-[30px] shadow-3xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' style={style}>
                <img src={p2} alt="" className='ml-[150px] mt-[-50px]'/>
                <img src={star} className='ml-[150px] mt-[30px]'/>
                <p className='ml-[20px] mt-[50px] mr-[20px] text-justify text-white font-outfit font-light text-[20px]'>"I was suffering from chronic back pain for years and tried everything from medication to physical therapy, but nothing worked. After just one 90-minute session with Dr. Prem Chand Vemula, I felt a significant improvement. Now, I’m pain-free and can enjoy my daily activities again. 
                <br />
               <span className='block text-center mt-2'>Highly recommend!"</span>
                 </p>
                 <p className='font-outfit font-bold text-[32px] text-white ml-[20px] mt-4'>Priya S.</p>
                 <p className='font-outfit font-light text-[16px] text-white ml-[20px] mt-1 '>Hyd, Telangana</p>

              </div>
              <div className='h-[630px]  w-[420px]   rounded-[30px] shadow-3xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' style={style}>
              <img src={p1} alt="" className='ml-[150px] mt-[-50px]'/>
              <img src={star} className='ml-[150px] mt-[30px]'/>
              <p className='ml-[20px] mt-[50px] mr-[20px] text-justify text-white font-outfit font-light text-[20px]'>
                "I was suffering from chronic back pain for years and tried everything from medication to physical therapy, but nothing worked. After just one 90-minute session with Dr. Prem Chand Vemula, I felt a significant improvement. Now, I’m pain-free and can enjoy my daily activities again. 
                <br />
               <span className='block text-center mt-2'>Highly recommend!"</span>
               
                 </p>
                 <p className='font-outfit font-bold text-[32px] text-white ml-[20px] mt-4'>Rajesh K.</p>
                 <p className='font-outfit font-light text-[16px] text-white ml-[20px] mt-1 '>Hyd, Telangana</p>
              </div>
              <div className='h-[630px] w-[420px]  rounded-[30px] shadow-3xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
              ' style={style}>
                <img src={p3} alt="" className='ml-[150px] mt-[-50px]'/>
                  <img src={star} className='ml-[150px] mt-[30px]'/>
                <p className='ml-[20px] mt-[50px] mr-[20px] text-justify text-white font-outfit font-light text-[20px]'>"I was suffering from chronic back pain for years and tried everything from medication to physical therapy, but nothing worked. After just one 90-minute session with Dr. Prem Chand Vemula, I felt a significant improvement. Now, I’m pain-free and can enjoy my daily activities again. 
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