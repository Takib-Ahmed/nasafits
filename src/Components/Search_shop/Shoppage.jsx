import All from "../Homepage/cc";


export default function Shop({productDetails}){
    return (
        <>

        <All productDetails={productDetails} page='Shop' className='  mt-14 sm:mt-16 md:mt-20  lg:mt-10 ' 
        
        showFilterlist={true}
        />
        
      
        </>
    );
}