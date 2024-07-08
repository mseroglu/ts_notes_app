import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom"
import { Note } from "../../types_"

interface Props {
    notes: Note[]
}

const Layout = ({ notes }: Props) => {
    const navigate = useNavigate()
    // url den parametreyi al
    const { id } = useParams()
    // bütün notların arasında id'si url deki parametreyle eşleşen note'un verilerini ar
    const found = notes.find(i => i.id === id)

    // note bulunamazsa anasayfaya yönlendir 
    // useNavigate return de çalışmaz, Navigate bileşinini veriyoruz ve replace ile geçmişi tutma diyoruz
    if (!found) return <Navigate to={"/"} replace />

    // alt route in bileşenini ekrana bas ve bulunan note verilerini gönder
    // DİKKAT: props mun adı context olmak zorunda
    return <Outlet context={found} />
}

export default Layout
