import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Contactus = () => {
  const styles={
    body:{
      backgroundColor:"blue",
      height:"83vh"
    },
    container:{
         width:"20rem",
        margin:"auto",
        
    },
    heading:{
      fontSize:'3rem',
    
    },
    innerContainer:{
      marginTop:'6rem',
      
    }
    

  }
  return (
    <div>
        <Navbar/>
        <div style={styles.body}>
          <div style={styles.container}>
          <h1 style={styles.heading}>
            Contact us
          </h1>
          <div style={styles.innerContainer}>
          <h3>
            Phone no.-
            <span>8851840604</span>
          </h3>
          <h3>
            Phone no.-
            <span>8826230950</span>
          </h3>
          <h3>
            Email-
            <span>letzkhelo@gmail.com</span>
          </h3>
          <h3>
            Email-
            <span>rishabhjha0@gmail.com</span>
          </h3>

          </div>
          
          </div>
          
        </div>
        <Footer/>
    </div>
  )
}
