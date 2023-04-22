
function SingleShop({item}) {
  return (
    <ul>
<li>
  <h2>{item.name}</h2>
  <p>Town: {item.town}</p>
  <p>Start year: {item.year}</p>
  <p>Description: {item.description}</p>
  <img src={item.imgUrl} alt="shopPicture" />
</li>
    </ul>
  )
}

export default SingleShop