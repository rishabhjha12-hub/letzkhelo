import React from 'react'
import logo from '../imgs/logo.jfif'
import rishabh from '../imgs/mypic.jfif'
import gaurav from '../imgs/gaurav.jfif'
import cricket from '../imgs/crick.jpg'
import kabbadi from '../imgs/kab.jpg'
import football from '../imgs/foot.jpg'
import karan from '../imgs/karan.jfif'
import { Navbar } from './Navbar'
import { Link } from "react-router-dom";


export const Home = () => {
    
   
  return (
    <div>
        <Navbar/>
  

    
    <section className="background firstsection">
        <div className="box-main">
            <div className="fhalf" id="home">
                <p className="textbig">The Future is here</p>
                <p className="textsmall">Come out of the <b>virtual world</b></p>

            </div>
            <div className="shalf">
                <img src={logo} alt=""/>

            </div>
            
        </div>
    </section>
    <div className="heading">
        <h1 className="head" id="services">Our Sports</h1>
    </div>
    <section className="section">
        <div className="para">
        <p className="sectionTag textbig">Cricket</p>
        <p className="sectionSubTag textsmall">We Take Care Of Household Rubbish and Commercial Waste Throughout the Sydney Region. A professional Approach To Office Cleaning -  Free Quote. Trusted and Reliable. Fully Insured. On Time Cleaning. Services: Rubbish Removal, Retail Cleaning.</p>
      
        </div>
        <div className="thumbnail">
            <img src={cricket} alt="" className="imgfluid"/>
        </div>
    </section>
    <section className="section section-left">
        <div className="para">
        <p className="sectionTag textbig">Football</p>
        <p className="sectionSubTag textsmall"> As your business grows, so will your business network — and more devices will need to be added. Also, the complexity of network applications is increasing. Pegasus Technologies understands that managing the ever-changing world of technology can be overwhelming, and yet the security of your network is more important than ever. Our security software adds another layer of protection to help prevent malicious activity from threatening your critical data.

            Our Antivirus Managed Services offer superior control & protection.
            
            Today’s managed IT business services require a comprehensive yet flexible approach. With Pegasus Managed Antivirus services, you can rest assured that your network will be secured from the latest and most sophisticated viruses:
            
            24/7 monitoring
            Around-the-clock emergency services
            Multi-level expertise
            Customizable features
            
            </p>
           
        </div>
        <div className="thumbnail">
            <img src={football} alt="" className="imgfluid"/>
        </div>
    </section>
    <section className="section">
        <div className="para">
        <p className="sectionTag textbig">kabbadi</p>
        <p className="sectionSubTag textsmall"> WE provides a wide array of website design services for SMEs as well as large enterprises. Our team of proficient website developers & experienced digital marketing specialists use the latest technologies and proven strategies to create user-engaging business websites & dynamic web applications and promote them to enhance customer reach. Hire website developers from us to establish a strong online presence that will pave your path toward success..</p>
      
        </div>
        <div className="thumbnail">
            <img src={kabbadi} alt="" className="imgfluid"/>
        </div>
    </section>
    <hr/>
    <footer className="foot">
        <h className="textbig">Our team</h>
        <div className="technical">
            <img src={rishabh} alt=""/>
            <p className="textsmall">Rishabh Jha</p>
            <p>(cofounder,tech(CTO))</p>
        </div>
        <div className="founder">
            <img src={gaurav} alt=""/>
            <p className="textsmall">Gaurav Jha</p>
            <p>(cofounder(CDO))</p>
        </div>
       
        <div className="technical">
            <img src={karan} alt=""/>
            <p className="textsmall">karan dhar</p>
            <p>(cofounder,marketing(CMO))</p>
        </div>
        <div className="copy">
            Copyright &copy; 2027 letzKhelo All rights reserved
        </div>
        
    </footer>
    <script src="resp.js"></script>
   

    



    </div>
  )
}
