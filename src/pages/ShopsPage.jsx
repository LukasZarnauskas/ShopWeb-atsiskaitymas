import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import SingleShop from "../components/shop/singleShop";




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
      {shopsArr.map((sObj) => <SingleShop key={sObj.uid} item={sObj}/> )}
    </div>
  )
}

export default ShopsPage
