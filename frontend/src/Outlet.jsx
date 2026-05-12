import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom';
import Nav from './Navbar/Navbar'



export default function Layout(){
    return(
        <>
       
        <div className=''>
        <Outlet/>
        </div>
        </>
    )
}