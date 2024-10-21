import React from 'react'
import SideBar from '../../components/sideBar'
import Header from '../../components/header'
import Footer from '../../components/footer'
import {Outlet} from 'react-router-dom' 

const Home = () => {
  return (
   <div>
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <SideBar/>
   
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      {/*  Header Start */}
      <Header></Header>
      
      {/*  Header End */}
      <div className="container-fluid">
        {/*  Row 1 */}
       <Outlet/> 
    {/* a chaque fois nekhdou donne eli hachetna beha  */}
        <Footer/>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home
