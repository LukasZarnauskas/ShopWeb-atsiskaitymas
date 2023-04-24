import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import SingleShop from "../components/shop/singleShop";
import { useAuthCtx } from "../store/AuthProvider";




function ShopsPage() {
  
const [shopsArr, setShopsArr] = useState([])
const {ui} = useAuthCtx()
useEffect(() => {
  async function getShop(){
ui.showLoading('Loading...')
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
ui.closeAlert()
  }
  getShop()
}, [])
// console.log(shopsArr);

  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <h1 className="text-3xl font-bold mb-6">Shops page</h1>
     <ul className="lg:grid lg:grid-cols-3 lg:gap-4">
      {shopsArr.map((sObj) => <SingleShop key={sObj.uid} item={sObj}/> )}
    </ul>
    </div>
  )
}

export default ShopsPage
