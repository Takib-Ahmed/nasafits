/* eslint-disable react/prop-types */
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Image,
  } from "@nextui-org/react";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import CustomDropdown from "./Customdropdown";
import { IoMenuOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import HoverDropdown from "./Customdropdown";
import { CgProfile } from "react-icons/cg";


import { Link, useNavigate } from "react-router-dom";
import Mobilesearch from "./Mobilesearchbar";
import Sidedrawer from "./drawer";



  export const SearchIcon = ({size = 24, strokeWidth = 1.5, width, height, ...props}) => {
  
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={width || size}
        {...props}
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  };
  
  export default function Header({showmbsearhbar,setshowsearchbar}) {
    const storedUser = JSON.parse(localStorage.getItem('userdata'));
  
    const menuItems = [
      "Home",
      "Winter Collection",
      "Flash Sale",
    
    ];
    const [ishovered, setIshovered] = useState(false);

    return (
      <Navbar className=" bg-[#F5F5F5]  lg:py-1.5  lg:px-5 ps-0  border-none flex gap-0 " isBordered  onMenuOpenChange={(isOpen) => setIsMenuOpen(isOpen)}>
        <NavbarContent justify="start">
        <div

    className="navmenu  hidden     p-0 m-0 text-4xl  w-8 sm:w-10" 
  ><IoMenuOutline className="  absolute "/><Sidedrawer menuItems={menuItems}/></div>
  <NavbarBrand className=" " >
 <Link  to="/"
  >        <img
        alt="NextUI hero Image with delay"
       
        src="/Header/output-onlinepngtools (8) (1).png" 
         className=" w-14 mt-1 lg:w-20 lg:p-1 lg:mt-0.5  m-0
      "
      />  </Link>   
  
            </NavbarBrand>
  
          
          <NavbarContent className=" navlinkscontainer  hidden lg:flex lg:gap-10 ">
            <NavbarItem>
              <Link color="foreground" to='/'>
                Home
              </Link>
            </NavbarItem>
            <NavbarItem  className={ishovered && 'hover:translate-y-6 h-fit'}  onMouseOver={()=>{
              setIshovered(true)
            }} onMouseLeave={()=>{
              setIshovered(false)
            }} >
              <Link aria-current="page" className="   font-normal hover:text-secondary flex  " color="foreground"  to='/shop' >
          Shop  <MdKeyboardArrowDown  size={20} className={"  transition-all duration-300 mt-1 " + `${ishovered && 'rotate-180'}`}/>


{
  ishovered && 
  <HoverDropdown />
}


              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link  to='/shop' color="foreground" href="#">
              Winter Collection
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" to='/shop'>
                Flash Sale
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
  
        <NavbarContent as="div" className=" navright items-center sm:gap-4 lg:gap-5  flex  relative" justify="end">
          <Input
            classNames={{
              base: "     searchbar    w-60 sm:w-80 md:w-96  md:h-8 lg:h-10   ",
              mainWrapper: "h-full",
              input: "text-small bg-default-400/20",
              inputWrapper:
                "  h-full font-normal text-default-500 bg-default-400/20 focus:bg-default-400/20 rounded-none inputwrapper",
              
            }}
            placeholder="Type to search..."
            size="sm"
            endContent={<IoIosSearch size={25}  className="Searchicn bg-black h-full   absolute right-0 w-10 p-2 text-white" onClick={()=>{
              setshowsearchbar((prev)=>!prev)
            }}/>}
            type="search" className=" relative bg-default-400/20  focus:bg-default-400/20  rounded-none  "
          /> {showmbsearhbar && <Mobilesearch className='mobilesearch fixed top-[3.5rem] w-[100%]  left-0' type='mbsearchbar' />}
         <Link to='/cart'  > <PiShoppingCartSimple     className=" text-3xl sm:w-10 lg:w-12 text-black" /> </Link>
          <Dropdown placement="bottom-end">
     

<Link to='/account'  >    <Avatar
                isBordered
                as="button"
                className="transition-transform    rounded-full  text-white"
                color="white"
                name ={storedUser && storedUser.name}
                size="sm"
         
                icon={<CgProfile className=" w-full  text-3xl"/>}
               />
               </Link>
 
            {/* <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu> */}
          </Dropdown>
        </NavbarContent>
 



      </Navbar>
    );
  }
  