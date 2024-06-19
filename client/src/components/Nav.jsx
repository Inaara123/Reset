import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import logo from '../assets/logo.png'
const Nav = () => {
  return (
    <Navbar className='mt-[35px] h-[100px] grid-auto-fit '>
      <NavbarBrand className='ml-[-200px]' >
      <img src={logo} 
      alt="Logo"
      style={{ height: '100px', width: '100px'}} /> 
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-20 rounded-[30px] ml-[100px]" justify="center"
        style={{backgroundColor:"#C9C0F9", width:"708px", height:"65px"}}>
        <NavbarItem>
          <Link color="foreground" href="#" className='font-bold font-outfit text-[24px]'>
            Home 
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#"  color="foreground" className='font-bold font-outfit text-[24px]'>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className='font-bold font-outfit text-[24px]'>
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#"className='font-bold font-outfit text-[24px]'>
            Patient Stories
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end"  >
        <NavbarItem>
          
          <Button as={Link} color="primary" href="#" variant="flat" className='text-white font-outfit font-light text-[20px]'
          style={{backgroundColor:"#5233ED", width:"114px", height:"37",borderRadius:"30px",color:"#FFFFFF"}}>
            Contact
          </Button>
          
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Nav