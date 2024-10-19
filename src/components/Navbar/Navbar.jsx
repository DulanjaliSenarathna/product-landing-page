import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { FaBicycle } from "react-icons/fa";
import ResponsiveMenu from './ResponsiveMenu';


const NavbarMenu = [
    {
        id:1,
        title: "Home",
        link: "#"
    },
    {
        id:2,
        title: "About Us",
        link: "#"
    },
    {
        id:3,
        title: "Product Showcase",
        link: "#"
    },
    {
        id:4,
        title: "Testimonials",
        link: "#"
    },
    {
        id:5,
        title: "Call-to-Action",
        link: "#"
    },
    {
        id:6,
        title: "Contact Us",
        link: "#"
    }
]



const Navbar = () => {
   
    const [open, setOpen] = useState(false);

     const handleMenuOpen = () =>{
        setOpen(!open);
    }

  return (
    <>
    <nav>
        <div className='container flex justify-between items-center py-4 md:pt-4 '>
        {/*________ Logo section ________*/}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
               <p className='text-primary'>BIKE</p>
               <p className='text-secondary'>HUB</p>
               <FaBicycle className='text-green-500'/>  
        </div>
        {/*________ Menu section ________*/}
        <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>
                {
                    NavbarMenu.map((item)=>(
                        <li key={item.id}>
                            <a href={item.link}
                            className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'
                            >{item.title}</a>
                        </li>
                    ))
                }
                
            </ul>
        </div>

        {/*________ Mobile Hamburger Menu section________*/}
        <div className='md:hidden' onClick={handleMenuOpen}>
            <MdMenu className='text-4xl'/>
        </div>
        </div>
    </nav>

     {/*________ Mobile Hamburger Menu section________*/}
     <ResponsiveMenu open={open}/>
     </>
  )
}

export default Navbar