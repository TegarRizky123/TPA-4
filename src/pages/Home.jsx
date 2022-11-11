import React from 'react'
import Container from 'react-bootstrap/Container';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


function Home() {
  return (
    <>
     <Container>
        <div className='home-name'>
        <h1 id="nama" className=" display-1 mt-7">Tegar Risqy Yulian Santoso</h1>
        <div className='about-me'>
        A passionate <span>startup builder</span>
        </div>
        <div className='social-info'>
      <i><FaGithub /></i>
      <i  className='mx-2'><FaLinkedin /></i>
      <i><FaInstagram /></i>
    </div>
        </div>
    </Container>
    </>
  )
}

export default Home