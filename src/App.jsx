
import './App.css'
import Nav from './Components/BasicComponents/Nav'
import { Blogs } from './Components/Blogs'
import { Hero } from './Components/hero'
import { AboutUs } from './Components/AboutUs'
import { ContactUs } from './Components/ContactUs'
import Footer from './Components/BasicComponents/footer'
import UserDashboard from './Components/UserDashboard'
import AdminDashboard from './Components/AdminDashboard'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
function App() {

  return (
    <>
    
      <Nav></Nav>
      {/* <Hero></Hero> */}
      {/* <SignIn></SignIn> */}
      {/* <SignUp></SignUp> */}
      <UserDashboard></UserDashboard>
        <AdminDashboard></AdminDashboard>
      {/* <Footer></Footer> */}
      
     
     </>
  )
}

export default App
