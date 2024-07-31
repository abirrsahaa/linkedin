const Second_first = () => {
  return (
    <div className=" w-full my-3 border-2  rounded-xl h-[13vh] shadow-xl overflow-hidden flex flex-col justify-center items-center">
      <div className="w-full h-[60%]  flex justify-between items-center px-3">
        <div className="w-[60px] h-[60px] rounded-full bg-gray-200"></div>
        <input
          type="text"
          placeholder="write whatever you want...!"
          className="w-[87%] rounded-full p-3  h-[90%] border-2 border-gray-400 text-black"
        ></input>
      </div>
      <div className="w-full h-[40%]  border-t-2"></div>
    </div>
  );
};

export default Second_first;
