import React, { useEffect, useState } from 'react'
import {  db } from '../Config/Config'
import startFirebase from '../Config/Config'
import { ref,set,get,update,remove,child } from 'firebase/database';
import {collection, addDoc, Timestamp, doc} from 'firebase/firestore'
import { Navbar } from './Navbar';
import { async } from '@firebase/util';
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext';

export const Create = (props) => {

    const styles={
        body:{
            backgroundColor:"grey",
           
            minHeight:"100vh",
            height:"auto",
        },
        form:{
            width:"25rem",
            margin:"auto"
        }
    }
    const { logOut, user } = useUserAuth();
    let navigate = useNavigate();

    const [Name, setName] = useState('');
    const [Captain, setCaptain] = useState('');
    const [Phone, setPhone] = useState(null);
    const [nplayer, setnplayer] = useState(null);
    const [Sports, setSports] = useState('');
    const [Location, setLocation] = useState(null);
    const [error, setError] = useState('');
  
    

    
   
    const addProduct = async(e) => {
        
        e.preventDefault();
        
            try{
                await addDoc(collection(db,'createTeam1'),{
                     Email:user.email,
                     Name: Name,
                     Captain: Captain,
                     Phone: Number(Phone),
                     nplayer:Number(nplayer),
                     Sports:Sports,
                     Location:Location,
     
                 })
                 
              
                 .then(() => {
                     setName('');
                     setCaptain('');
                     setPhone();
                     setnplayer(0);
                     setSports('')
                     setLocation('')
                     setError('');
                     document.getElementById('file').value = '';
                 })
                 // .catch(err => setError(err.message));
                 alert('Team registered successfully')
             }catch (err) {
                 alert(err)
               }

        
       
                  
           
    }
    
   

    return (
        <div style={styles.body}>
            <Navbar />
           
            <br />
      
            <h2 style={{width:"15rem",margin:"auto" }}>Create Your Team</h2>
            <hr />
            <form autoComplete="off" style={styles.form} className="form" onSubmit={addProduct}>
                
                <label htmlFor="product-name">Enter Team Name</label>
    
                <input type="text" className='form-control' required
                    onChange={(e) => setName(e.target.value)} value={Name} />
                <br />
                <label htmlFor="product-price">Captain Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) =>  setCaptain(e.target.value)} value={Captain} />
                <br />
                <label htmlFor="product-img">Phone number</label>
                <input type="number" className='form-control' id="file" required
                    onChange={(e) =>  setPhone(e.target.value)} value={Phone}/>
                <br />
                <label htmlFor="product-img">Number of Player</label>
                <input type="number" className='form-control' id="file" required
                    onChange={(e) =>  setnplayer(e.target.value)} value={nplayer}/>
                <br />
                <label htmlFor="product-img">Sports</label>
                <input type="text" className='form-control' id="file" required
                    onChange={(e) =>  setSports(e.target.value)} value={Sports}/>
                <br />
                <label htmlFor="product-img">Location</label>
                <input type="text" className='form-control' id="file" required
                    onChange={(e) =>  setLocation(e.target.value)} value={Location} placeholder="eg. dwarka,vipin garden,bhagwati garden"/>
                <br />
                <button type="submit" className='  mybtn'>ADD</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
           
  
           
        </div>
    )
}
