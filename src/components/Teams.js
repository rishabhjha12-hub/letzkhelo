import React, { Component } from 'react'
//import {auth, storage, db } from '../Config/Config'
import { Navbar } from './Navbar';
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../Config/Config'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import { useUserAuth } from '../context/UserAuthContext';
export class Teams extends Component {
    state={
        donors:null,
        loading:true
    }
     handleDelete = async (id) => {
        const taskDocRef = doc(db, 'createTeam', id)
        try{
          await deleteDoc(taskDocRef)
        } catch (err) {
          alert(err)
        }
      }
      
    componentDidMount(){

        // db.collection('create')
        // .get()
        // .then(snapshot=>{
        //     const donors=[];
        //     snapshot.forEach(doc=>{
        //         const data=doc.data();
        //         donors.push(data)
        //     })
        //     this.setState({donors:donors})
        //     console.log('donors',donors)
        //     console.log('ccccc',snapshot)

        // })
        // .catch(err=>console.lof(err))
        
        const q = query(collection(db, 'createTeam1'))
  onSnapshot(q, (querySnapshot) => {
    const donors=[];
    
    querySnapshot.forEach(doc=>{
               const id= doc.id
               const data=doc.data();
               donors.push(data)
               donors.push(id)
              
            

             
   })
    this.setState({donors:donors,loading:false})
  })
    }
    
  render() {
    return (
      <div style={{backgroundColor:"grey"}}>
        <Navbar/>
        <h1 style={{width:"20%",margin:"auto"}}>Teams</h1>
        
        
        {
            
            this.state.donors &&
            this.state.donors.map(donor=>{
                return(
                    <div className='teamss' style={{backgroundColor:"orange" , margin:'auto',width:"40%",padding:"2rem"}}>
                     
                        <h2 style={{color:'green'}}>Team Name: {donor.Name}</h2>
                        
                        <p style={{color:'green'}}>Captain Name: {donor.Captain}</p>
                        {/* <p style={{color:'green'}}>Phone: {donor.Phone}</p> */}
                        <p style={{color:'green'}}>Location: {donor.Location}</p>
                        <p style={{color:'green'}}>Number of Players: {donor.nplayer}</p>
                        <p style={{color:'green'}}>Sports: {donor.Sports}</p>
                        <button><a href={'https://docs.google.com/forms/d/e/1FAIpQLSfpePpAKg7D_K2wZAYA8NFeQrpvFavozvHuyA7bQcsuU5ixiw/viewform?usp=sf_link' }>request match</a></button>
                       
                        {console.log(donor)}
                    </div>
                   

                )
            })
        }
      </div>
    
    )
  }
}

export default Teams
