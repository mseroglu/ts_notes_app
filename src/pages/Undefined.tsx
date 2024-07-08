import { Link } from "react-router-dom"


function Undefined() {
  return (
    <div className="container mx-auto p-5 min-vh-100 d-flex flex-column justify-conten-center align-items-center gap-2">
        <h1>404</h1>
        <p>Üzgünüm aradığınız sayfa bulunamadı</p>
      
        <Link to={"/"}>Anasayfa</Link>
    </div>
  )
}

export default Undefined
