import { MdForwardToInbox } from "react-icons/md";
export default function Dealsubscribe(){
    return (
        <>
          <div className="bg-slate-600 text-white py-6">
      <div className="container  flex flex-row flex-wrap sm:flex-nowrap justify-around  gap-6 md:gap-0 p-2  md:p-4">
        {/* Left Section */}
        <div className="flex items-start sm:items-center w-80 sm:w-auto">
          <div className="text-orange-500 text-2xl">
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <h3 className="font-bold uppercase sm:text-sm flex flex-wrap gap-1">
             <MdForwardToInbox className="  text-xl sm:text-large text-yellow-600"/> Get special discounts in your inbox
            </h3>
            <p className="text-sm text-gray-400">
              Enter email to get offers, discounts and more.
            </p>
            <div className="flex mt-2 gap-1.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-white  focus:outline-none w-40 md:w-80 bg-transparent border-gray-500 border-b-2"
              />
              <button className="bg-yellow-500 px-4 py-2  hover:rounded hover:bg-yellow-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-start w-80 sm:items-center sm:w-auto">
          <div className="text-orange-500 text-2xl">
            <i className="fas fa-phone"></i>
          </div>
          <div>
            <h3 className="font-bold uppercase text-sm">
              For any help you may call us at
            </h3>
            <p className="text-lg font-semibold">+8809677666888</p>
            <p className="text-sm text-gray-400">
              Open 24 Hours a Day, 7 Days a Week
            </p>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}