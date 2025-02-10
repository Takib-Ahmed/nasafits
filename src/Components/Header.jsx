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
  } from "@nextui-org/react";
import  { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import HoverDropdown from "./Customdropdown";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation, useNavigate} from "react-router-dom";
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
  
  export default function Header({showmbsearhbar,setshowsearchbar,setSelectedFilters,menuSections,setprofilelocation,productDetails,
    
  }) {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
const navigate = useNavigate()
    useEffect(() => {
      const handleResize = () => {
        setScreenSize(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const storedUser = JSON.parse(localStorage.getItem('userdata')) || {};

    const location = useLocation();
    const menuItems = [
      "Home",
      'Shop',
      "Winter Collection",
      "Flash Sale",
    
    ];
    const [ishovered, setIshovered] = useState(false);
  const [Autocomplete,setAutocomplete] = useState([])
  const [SearchTerm,setsearchterm] = useState('')
  
  const handlesearch = (e) => {


    const searchTerm = e.target.value.toLowerCase().trim();


const filteredProducts = productDetails.filter((product) => 
  product.name.toLowerCase().includes(searchTerm)  // ছোট অক্ষরে ঠিক করা হলো
);

// ইনপুট ফাঁকা নাকি তা চেক করে প্রোডাক্ট লিস্ট সেট করা

  
    // প্রোডাক্ট খুঁজে রাখার জন্য
    const matchesMap = {};

    productDetails.forEach(product => {

      if (product.for && product.for.includes(searchTerm)) {
        matchesMap[product.for] = true; // Only adds if not already present
      }
    
      // Check the category for a match

      if (product.category && product.category.includes(searchTerm)) {
        matchesMap[product.category] = true; // Only adds if not already present
      }
    
      // Check each showcase entry for a match
      if (Array.isArray(product.showcases)) {
        product.showcases.forEach(showcase => {
          if (typeof showcase === 'string' && showcase.includes(searchTerm)) {
            matchesMap[showcase] = true; // Ensures uniqueness
          }
        });
      }
    });
    
    const uniqueMatches = Object.keys(matchesMap);
    
    // Update autocomplete if there is a searchTerm and the input isn't empty
    if (searchTerm && e.target.value !== '') {
      
      if(filteredProducts.length > uniqueMatches.length){
        setAutocomplete([ ...filteredProducts,...uniqueMatches]);
      }
      else{
        setAutocomplete([...uniqueMatches, ...filteredProducts]);
      }
      
;
    } else {
      setAutocomplete([]);
    }
    
  
    
    
  
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
    
      navigate('/shop')
      setSelectedFilters({[SearchTerm.toLowerCase()]:true})
      setAutocomplete([])
      // You can trigger your search or any function here
    }
  };


  const handleClear = ()=>{
    setsearchterm('')
    setSelectedFilters({})
  }
  

  

    return (
      <Navbar className=" bg-[#F5F5F5]  lg:py-1.5  lg:px-5 ps-0  border-none flex gap-0  fixed  " isBordered   id="/" >
        <NavbarContent justify="start">
        <div

    className="navmenu  hidden     p-0 m-0 text-3xl sm:text-4xl  w-8 sm:w-10  h-full" 
  ><IoMenuOutline className="  absolute top-4  sm:top-3"/><Sidedrawer setSelectedFilters={setSelectedFilters} location={location} menuItems={menuItems}/></div>
  <NavbarBrand className=" left-shadow h-full ps-2 " >
 <Link  to="/"
  >        <img
        alt="NextUI hero Image with delay"
       
        src="/Header/output-onlinepngtools (8) (1).png" 
         className=" w-[3.5rem] sm:w-14 mt-1 lg:w-20 lg:p-1 lg:mt-0.5  m-0
      "
      />  </Link>   
  
            </NavbarBrand>
  
          
          <NavbarContent className=" navlinkscontainer  hidden lg:flex lg:gap-10 ">
            <NavbarItem>
              <Link color="foreground" to='/' className="hover:text-secondary ">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem  className={ishovered && 'hover:translate-y-6 h-fit'}  onMouseOver={()=>{
              setIshovered(true)
            }} onMouseLeave={()=>{
              setIshovered(false)
            }} >
              <Link aria-current="page" className="   font-normal hover:text-secondary flex  " color="foreground"  to='/shop' >
          Shop  <MdKeyboardArrowDown  
         
          
          size={20} className={"  transition-all duration-300 mt-1 " + `${ishovered && 'rotate-180'}`}/>


{
  ishovered && 
  <HoverDropdown setSelectedFilters={setSelectedFilters}/>
}


              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link  to='/shop' color="foreground" href="#" className=" hover:text-secondary"  onClick={()=>{
                setSelectedFilters({"winter collection":true})
                console.log()
              }}>
              Winter Collection
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" to='/shop' className="hover:text-secondary "  onClick={()=>{
                setSelectedFilters({"flash sale":true})
              }} >
                Flash Sale
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
  
        <NavbarContent as="div" className=" navright items-center sm:gap-4 lg:gap-5  flex  relative" justify="end">
        <form action="
        " className="flex relative" onSubmit={(e)=>{
          e.preventDefault()
        }} onClick={()=>{

          setshowsearchbar((prev)=>!prev)
        
        }}>
            <Input
          isClearable={screenSize>768?true:false}
          value={SearchTerm}
            classNames={{
              base: "     searchbar    w-60 sm:w-80 md:w-80 lg:w-96  h-10   ",
              mainWrapper: "h-full",
              input: "text-small bg-default-400/20",
              inputWrapper:
                "  h-full font-normal text-default-500 bg-default-400/20 focus:bg-default-400/20 rounded-none inputwrapper",
              
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type to search..."
            size="sm"
           onClear={handleClear}
      
      onChange={(e)=>{handlesearch(e)
        setsearchterm(e.target.value);
      }}
            type="search" className=" relative bg-default-400/20  focus:bg-default-400/20  rounded-none  "
          /><IoIosSearch size={25} onClick={()=>{
            screenSize>768 &&  navigate('/shop')
            screenSize>768 && setSelectedFilters({[SearchTerm.toLowerCase()]:true})
          }}  className=" cursor-pointer Searchicn bg-black h-full    w-10 p-2 text-white z-50" /> 
          <ul className={` top-10 absolute ${ screenSize>768 && Autocomplete.length>0 ? 'flex flex-col bg-white':'hidden'}  gap-2     w-full  border-[0.01px] border-gray-400 border-opacity-10 border-t-0`}>

   
 
          
          
  {screenSize>768 && SearchTerm != '' &&   
  Autocomplete.length > 0 ? (
    Autocomplete.map((item, index) => (
      <Link
        key={index}
        className={`px-3 py-1.5 hover:text-secondary cursor-pointer ${
          index !== Autocomplete.length - 1 ? 'border-b border-gray-400 border-opacity-10' : ''
        }`}

to={item.id ? `/details/${item.id}`:'/shop'}
    onClick={()=>{
      setsearchterm( item.id ? item.name :item)
      setSelectedFilters(!item.id && {[item.toLowerCase()]:true}) 
      setAutocomplete([])
    }}
      >
        {item.id ? item.name : item}
      </Link>
    ))
  ) : (
    SearchTerm != '' &&  <li className="px-3 py-1.5 text-gray-500">No results found</li>
  )}


  



          </ul>
        </form>
          
          
          {showmbsearhbar && <Mobilesearch  Autocomplete={Autocomplete}
          SearchTerm={SearchTerm}
          setsearchterm={setsearchterm}
          handlesearch={handlesearch}
          handleKeyDown={handleKeyDown}
          handleClear={handleClear}
          setAutocomplete={setAutocomplete}
          setSelectedFilters={setSelectedFilters}
       className='mobilesearch fixed top-[3.5rem] w-[100%]  left-0' type='mbsearchbar' location={location} />}
         <Link to='/cart'  > <PiShoppingCartSimple     className=" text-3xl sm:w-10 lg:w-12 text-black hover:text-secondary " /> </Link>
          <Dropdown placement="bottom-end">
     
{
  location.pathname.includes('/profile/') ?     <DropdownTrigger className="hover:ring-secondary  hover:text-secondary ">
  <Avatar  
                  isBordered
                  as="button"
                  className="transition-transform    rounded-full  text-white   "
                  color="white"
                  name ={storedUser && storedUser.name}
                  size="sm"
           
                  icon={<CgProfile className=" w-full  text-3xl"/>}
                 /></DropdownTrigger>  : <Link to={!storedUser || Object.keys(storedUser).length === 0
                  ? '/account'
                  : screenSize > 768
                    ? '/profile/Dashboard'
                    : '/profile'}  > 
                 <Avatar
                                 isBordered 
                                 as="button"
                                 className="transition-transform    rounded-full  text-white  hover:ring-secondary hover:text-secondary "
                                 color="white"
                                 name ={storedUser && storedUser.name}
                                 size="sm"
                          
                                 icon={<CgProfile className=" w-full  text-3xl"/>}
                                />
                 
                                </Link>
}

            
 
            <DropdownMenu aria-label="Profile Actions" variant="flat" color="secondary">
              <DropdownItem onClick={()=>{
                navigate(storedUser? screenSize>768? '/profile/Dashboard':'/profile':'/account')
              }} key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{storedUser.email}</p>
              </DropdownItem>

              {menuSections.map((section)=>(
                section.items.map((options)=>(
                  <DropdownItem onClick={()=>{
                    navigate(`/profile/${options}`)
                    setprofilelocation(options)
                  }} key={options}>{options}</DropdownItem>
                ))
              ))}

              <DropdownItem key="logout" color="danger" className=" text-danger-500">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
 



      </Navbar>
    );
  }
  