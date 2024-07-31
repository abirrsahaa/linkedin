const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col justify-between items-center w-[25%] my-3 mx-3  rounded-xl h-[90vh] overflow-hidden ">
      <div className="w-full border-2 h-[55%] rounded-xl shadow-xl flex flex-col  items-center justify-center ">
        <div className="w-full h-[70%] relative flex flex-col items-center justify-center ">
          <div className="w-full h-[35%] bg-blue-400 z-10"></div>
          <div className="w-[70px] h-[70px] absolute z-20 mx-auto top-10 bg-gray-300 rounded-full"></div>
          <div className="w-full h-[65%] z-10 flex justify-center items-center ">
            <div className="w-[90%] mt-6 h-[60%]  flex flex-col gap-2 justify-center items-center ">
              <div className="text-sm text-black font-semibold tracking-tighter leading-none ">
                ABIR SAHA
              </div>
              <div className="text-sm text-gray-600 text-center  tracking-tighter leading-none ">
                Getting fully stacked for fullstack engineer | Interests are all
                around c++ and web technologies | Figuring to work things out so
                i am going to google now !
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[20%] border-t-2"></div>
        <div className="w-full h-[20%] border-t-2"></div>
        <div className="w-full h-[10%] border-t-2"></div>
      </div>
      <div className="w-full border-2 h-[44%] rounded-xl shadow-xl  "></div>
    </div>
  );
};

export default Sidebar;
