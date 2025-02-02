const Sidebar = ({Goto,setGoto}) => {
    const menuSections = [
      {
        title: "Manage My Account",
        items: ["Dashboard",'Account Details', "Address Book",'My Orders',"My Returns", "My Cancellations"],
      },
 
   
    ];
  


   const handlegoto = (value)=>{
      setGoto(value)
    }
    return (
      <div className="bg-white p-4 rounded-lg  sm:w-64">
        {menuSections.map((section, index) => (
          <div key={index}>
            <h2 className={`text-lg font-semibold   ${Goto==section.title && 'text-blue-500'}`}  
       
            >{section.title}</h2>
            <ul className="mt-2 space-y-2 flex flex-col gap-4 py-5">
              {section.items.map((item, idx) => (
                <li   onClick={()=>{
                  handlegoto(item)
                }}
                  key={idx}
                  className={`cursor-pointer hover:text-blue-500  ${Goto==item && 'text-blue-500'}`}
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
  
  