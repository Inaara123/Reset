import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import logo from '../assets/logo.png';

const Nav = () => {
  

  return (
    <Navbar className='mt-[35px] h-[100px] bg-black' >
      <div className='lg:ml-[-200px]'>
        <img 
          src={logo} 
          alt="Logo"  
          width={100}
          height={100}
          className='' 
        /> 
      </div>
      <NavbarContent 
        className="gap-20 rounded-[30px] ml-[100px] h-[65px] w-[708px] sm:w-[650px] md:w-[700px] lg:w-[708px] sm:gap-[30px] md:gap-[50px] lg:gap-[80px]" 
        justify="center"
        style={{backgroundColor:"#C9C0F9"}}
      >
        <NavbarItem>
          <Link 
            color="foreground" 
            href="#" 
            className='font-bold font-outfit text-[24px] sm:text-[20px] md:text-[24px] lg:text-[24px] ml-[20px]'
          >
            Home 
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="#"  
            color="foreground" 
            className='font-bold font-outfit text-[24px] sm:text-[20px] md:text-[24px] lg:text-[24px]'
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            color="foreground" 
            href="#" 
            className='font-bold font-outfit text-[24px] sm:text-[20px] md:text-[24px] lg:text-[24px]'
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            color="foreground" 
            href="#" 
            className='font-bold font-outfit text-[24px] sm:text-[20px] md:text-[24px] lg:text-[24px] pr-[20px]'
          >
            Patient Stories
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className='flex'>
            <Button 
              as={Link} 
              color="primary" 
              href="#" 
              variant="flat" 
              className='text-white font-outfit font-light text-[18px] -mr-[300px] text-centre hidden lg:block pt-[5px]'
              style={{backgroundColor:"#5233ED", width:"114px", height:"50px", borderRadius:"30px", color:"#FFFFFF"}}
            >
              Contact
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Nav;
