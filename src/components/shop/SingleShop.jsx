
function SingleShop({item}) {
  return (
    
<li className="flex flex-col justify-center items-center bg-gray-200 rounded-2xl my-4 py-4 max-w-proses mx-3 max-w-sm" >
  <h2 className="text-xl font-bold">{item.name}</h2>
  <p className="text-base"><strong  >Town</strong> </p>
  <p className="text-base">{item.town}</p>
  <p className="text-base"><strong  >Start year</strong> </p>
  <p className="text-base">{item.year}</p>
  <p className="text-base"><strong >Description</strong> </p>
  <p className="text-base text-center">{item.description}</p>
  <img className="h-64 w-64 object-cover mt-3" src={item.imgUrl} alt="shopPicture" />
</li>
   
  )
}

export default SingleShop