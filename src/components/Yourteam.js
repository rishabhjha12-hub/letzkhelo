import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import { useUserAuth } from '../context/UserAuthContext';
import {db} from '../Config/Config'




export const Yourteam = () => {
  const { logOut, user } = useUserAuth();
  console.log('email',user.email)
  
   useEffect(()=>{
    console.log('email1',user.email)
    const donor = collection(db, "createTeam1");

    const q = query(donor, where("Email", "==", user.email));
    
   },[])
   
  return (
    <div>
  dffd
    </div>
  )
}
