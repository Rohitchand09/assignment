import React from 'react';
import './header.css';

function header() {
  return (
    <>
      <header className='head'>
        <div className="container">
            <div className="one">
                <img src='https://ritzmediaworld.com/_next/image?url=%2Frmw-logo-sm-size.png&w=640&q=70' alt=''/>
            </div>
            <div className="two">
                <li>Work</li>
                <li>About</li>
                <li>Get In Touch</li>
                <li><span class="material-symbols-outlined">menu</span></li>
            </div>
        </div>
      </header>
    </>
  )
}

export default header
