import React from 'react'
import NewShopForm from '../components/shop/NewShopForm'
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';

function AddShopPage() {

const {ui} = useAuthCtx()
async function createShopFire(newShopObj){
  
  ui.showLoading('Loading...')
try {
  const docRef = await addDoc(collection(db, "shops"), newShopObj);

  // console.log("Document written with ID: ", docRef.id);
  ui.showSuccess('Shop is successfully added')
} catch (e) {
  // console.error("Error adding document: ", e);
  ui.showError('Something is wrong')
}
}
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-3xl font-bold mb-6">Add shop</h1>
      <NewShopForm onAdd={createShopFire}/>
    </div>
  )
}

export default AddShopPage