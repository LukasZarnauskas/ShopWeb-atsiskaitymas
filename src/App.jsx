import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ShopsPage from "./pages/ShopsPage"
import AddShopPage from "./pages/AddShopPage"

function App() {
  return (
    <div>
    <h1>Shop project</h1>
    <Routes>
<Route path="/" element={<LoginPage/>} />
<Route path="/login" element={<LoginPage/>} />
<Route path="/register" element={<RegisterPage />} />
<Route path="/shops" element={<ShopsPage />} />
<Route path="/add" element={<AddShopPage />} />
  </Routes>
    </div>
  )
}

export default App