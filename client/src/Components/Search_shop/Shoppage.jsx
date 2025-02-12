
import All from "../Homepage/cc";
import ScrollToTop from "../ScrollToTop";
import Context from "../../contexts/Context";

export default function Shop({ filteredProducts }) {




    return (
  <>
        <ScrollToTop/>
    
    <Context.Consumer >
    {({FilteredProducts,setfilteredProducts,ShowFIlteredproducts}) => (
            <All 
            FilteredProducts={FilteredProducts}
            setfilteredProducts={setfilteredProducts}
            ShowFIlteredproducts={ShowFIlteredproducts}
            filteredProducts={filteredProducts} 
                page="Shop"
                className="flex mt-10 sm:mt-16 md:mt-20 lg:py-1 p-0 justify-between w-full gap-2 px-0 mx-0 "
                showFilterlist={true}
               
            />
    )}

    </Context.Consumer>
    </>
    );
}
