import React from 'react'
import NewShopForm from '../components/shop/NewShopForm'

function AddShopPage() {

function addFire(){
  
}

  return (
    <div>
      <h1>Add shop</h1>
      <NewShopForm onAdd={addFire}/>
    </div>
  )
}

export default AddShopPage