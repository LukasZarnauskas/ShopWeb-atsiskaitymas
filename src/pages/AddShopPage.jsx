import React from 'react'
import NewShopForm from '../components/shop/NewShopForm'
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../firebase/firebase';

function AddShopPage() {
async function createShopFire(newShopObj){
  
try {
  const docRef = await addDoc(collection(db, "shops"), newShopObj);

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}
  return (
    <div>
      <h1>Add shop</h1>
      <NewShopForm onAdd={createShopFire}/>
    </div>
  )
}

export default AddShopPage