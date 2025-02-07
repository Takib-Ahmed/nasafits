import {  useNavigate } from "react-router-dom";

const Sidebar = ({Goto,menuSections,setprofilelocation,sidebarhidden}) => {

 

const navigate = useNavigate()

   
    return (
      <div className={`bg-white p-4 rounded-lg   text-sm lg:text-medium md:text-nowrap   ${Goto ?'Sidebar hidden md:block':" w-full h-full" }`}>
        {menuSections.map((section, index) => (
          <div key={index}>
            <h2 className={`text-lg font-semibold  text-wrap  `}  
       
            >{section.title}</h2>
            <ul className="mt-2 space-y-2 flex flex-col gap-4 py-5">
              {section.items.map((item, idx) => (
                <li   onClick={()=>{
                  navigate(`/profile/${item}`)

                  setprofilelocation(item)
                }}
                  key={idx}
                  className={`cursor-pointer hover:text-blue-500  ${Goto && Goto==item && 'text-blue-500'}`}
                >
                  {item}
                </li>
              ))}
            </ul>
            {index !== menuSections.length - 1 && <hr className="my-3" />}
          </div>
        ))}
      </div>  
    );
  };
  
  export default Sidebar;
  
  