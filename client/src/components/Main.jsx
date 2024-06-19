import React from 'react';
import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';


const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/schedule');
  };


  return (
    <main className='grid-auto'> 
      <section className="text-6xl mt-[90px] ml-[30px] font-black text-justify max-w-[754px] max-md:text-4xl" style={{ color: "#15155F" }}>
        Don’t let your pain stop you from living the life you want!
      </section>

      <section>
        <div className='w-[295px] h-[295px] mt-[-200px] ml-[982px] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-200 rounded-[200px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none gap-[10px]'>
          <div className='w-[300px] flex-auto h-[80px] rounded-[30px] bg-white shadow-2xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
            <p className='ml-[26px] flex mt-[30px] ' style={{ color: "#00E89B", font: "outfit", fontWeight: "600", fontSize: "40px" }}>
              .
              <span className='ml-[20px] mt-[15px] font-outfit font-light' style={{ color: "#000000", font: "Patua One", fontWeight: "400", fontSize: "30px" }}>
                No Side Effects
              </span>
            </p>
          </div>
          <div className='w-[300px] h-[80px] ml-[110px] rounded-[30px] bg-white shadow-2xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
            <p className='ml-[26px] flex mt-[30px] font-outfit font-light' style={{ color: "#00E89B", font: "outfit", fontWeight: "600", fontSize: "40px" }}>
              .
              <span className='ml-[20px] mt-[15px]' style={{ color: "#000000", font: "Patua One", fontWeight: "400", fontSize: "30px" }}>
                Instant Relief
              </span>
            </p>
          </div>
          <div className='w-[300px] h-[80px] rounded-[30px] bg-white shadow-2xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
            <p className='ml-[26px] flex mt-[30px] font-outfit font-light' style={{ color: "#00E89B", font: "outfit", fontWeight: "600", fontSize: "40px" }}>
              .
              <span className='ml-[20px] mt-[15px]' style={{ color: "#000000", font: "Patua One", fontWeight: "400", fontSize: "30px" }}>
                No Side Effects
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className='text-4xl font-bold mt-[5px] ml-[30px] max-w-[800px]'>
        <p>Relieve chronic pain <span style={{ color: "#755CF1", font: "outfit", fontWeight: "600" }}>instantly</span> with the best <span style={{ color: "#21A5B4" }}>chiropractic</span> and <span style={{ color: "#00B579" }}>neuropathy</span> services in Hyderabad!!</p>
      </div>

      <div className='mt-[30px] ml-[30px] gap-[46px]'>
        <Button 
         onClick={handleClick}
        color="primary"
         className='w-[305px] h-[67px] rounded-[30px] text-[25px] grid-auto-fit'
          style={{ backgroundColor: "#5233ED", font: "outfit", fontWeight: "600" }}        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
          Book a Session
        </Button>
        <Button color="primary" variant="bordered" className='ml-[50px] w-[305px] h-[67px] rounded-[30px] text-[25px] grid-auto-fit' style={{ Color: "#5233ED", font: "outfit", fontWeight: "600" }}>
          Contact us
        </Button>
      </div>
    </main>
  );
}

export default Main;
