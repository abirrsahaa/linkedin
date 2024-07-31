const Sidebar_res = () => {
  return (
    <div className=" w-[90%] relative my-3 flex flex-col justify-center items-center  md:hidden rounded-xl h-[22vh] border-2 shadow-xl overflow-hidden">
      <div className="w-full h-[35%] bg-blue-400 z-10"></div>
      <div className="w-[70px] h-[70px] absolute z-20 mx-auto top-5 bg-gray-300 rounded-full"></div>
      <div className="w-full h-[65%] z-10 flex justify-center items-end ">
        <div className="w-[90%] h-[60%]  flex flex-col gap-2 justify-center items-center ">
          <div className="text-lg text-black font-semibold tracking-tighter leading-none ">
            ABIR SAHA
          </div>
          <div className="text-sm text-gray-600 text-center  tracking-tighter leading-none ">
            Getting fully stacked for fullstack engineer | Interests are all
            around c++ and web technologies | Figuring to work things out so i
            am going to google now !
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_res;
