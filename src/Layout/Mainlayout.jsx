
import { Outlet } from 'react-router-dom'
import NavSection from '../components/HeroSection/NavSection'
import Footer from '../components/Footer'

const Mainlayout = () => {
  return (
    <div>
        <NavSection />
        <Outlet />
        <Footer />
    </div>
  )
}
// 8diYi6qdnHONPqUR

export default Mainlayout
// SolidSnakes
// agkHBf27lR6AtqgF
//mongodb+srv://SolidSnakes:<db_password>@cluster0.tdbfd.mongodb.net/