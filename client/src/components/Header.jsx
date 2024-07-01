import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.png'

const Header = () => {
 

  const handleWhatsAppClick = () => {
    // Replace 'whatsappphonenumber' with your actual WhatsApp number including the country code.
    window.open('https://wa.me/7396888150', '_blank');
  };
  return (
    <div>
      <Navbar expand="lg" className="navbar-custom shadow-2xl">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" width="70" height="70" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
         
            <Nav className="me-auto ml-[200px] lg:ml-[200px] xsm:ml-[20px] lg:gap-[50px] gap-[50px] xsm:gap-[2px] font-bold font-outfit text-[24px] sm:text-[20px] md:text-[24px] lg:text-[24px]">
              <Nav.Link href="#home" className=' '>Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#patient">Services</Nav.Link>
              <Nav.Link href="#patient">Patient Stories</Nav.Link>
            </Nav>
            
          
            <Button variant="primary" href="#contact" className='text-white font-outfit font-light text-[18px] rounded-[30px]text-centre hidden lg:block '
            style={{
              backgroundColor:"#5233ED",
               width:"114px",
                height:"50",
                borderRadius:"30px"
                ,color:"#FFFFFF"
              }}
              onClick={handleWhatsAppClick}
            >Contact</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
