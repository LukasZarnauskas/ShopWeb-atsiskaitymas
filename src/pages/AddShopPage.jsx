import React from 'react'
import NewShopForm from '../components/shop/NewShopForm'
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';

function AddShopPage() {

const {ui} = useAuthCtx()
async function createShopFire(newShopObj){
  
  ui.showLoading()
try {
  const docRef = await addDoc(collection(db, "shops"), newShopObj);

  console.log("Document written with ID: ", docRef.id);
  ui.showSuccess('Shop is successfully added')
} catch (e) {
  console.error("Error adding document: ", e);
  ui.showError('Something is wrong')
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