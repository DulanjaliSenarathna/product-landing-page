import React from 'react';
import { MdMenu } from 'react-icons/md';
import { FaBicycle } from "react-icons/fa";

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
        title: "Call-to-Action",
        link: "#"
    }
]

const Navbar = () => {
  return (
    <div>
        {/*________ Logo section ________*/}
        <div>
            <a href="#">
                BIKE <span>HUB</span>
            </a>
        </div>
        {/*________ Menu section ________*/}
        <div>
            <ul>
                {
                    NavbarMenu.map((item)=>(
                        <li key={item.id}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))
                }
                <FaBicycle />
            </ul>
        </div>
        {/*________ Mobile Navbar ________*/}
        <div>
            <MdMenu/>
        </div>
    </div>
  )
}

export default Navbar