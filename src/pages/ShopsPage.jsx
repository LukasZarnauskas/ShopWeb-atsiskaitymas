import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";



function ShopsPage() {
  
const [shopsArr, setShopsArr] = useState([])

useEffect(() => {
  async function getShop(){

const querySnapshot = await getDocs(collection(db, "shops"));
const tempShops = [];

querySnapshot.forEach((doc) => {
  // console.log(`${doc.id} => ${doc.data()}`);
 tempShops.push({
  uid: doc.id,
  ...doc.data(),
 })
});
setShopsArr(tempShops)
  }
  getShop()
}, [])
console.log(shopsArr);

  return (
    <div>
      <h1>Shops page</h1>
      <ul>
        {shopsArr.map((sObj) => <li key={sObj.uid}>{sObj.name}</li>) }
      </ul>
    </div>
  )
}

export default ShopsPage
