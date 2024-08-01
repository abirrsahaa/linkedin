import { SlLike } from 'react-icons/sl';
import { BsChatText } from 'react-icons/bs';
import { BiRepost } from 'react-icons/bi';
import { IoPaperPlane } from 'react-icons/io5';

const Post = ({ post }) => {
  const { description, message, name, photoUrl } = post;
  const icons = [
    <SlLike key={0} className="text-gray-600 h-[50%] w-[50%]" />,
    <BsChatText key={1} className="text-gray-600 h-[50%] w-[50%]" />,
    <BiRepost key={2} className="text-gray-600 h-[50%] w-[50%]" />,
    <IoPaperPlane key={3} className="text-gray-600 h-[50%] w-[50%]" />,
  ];
  return (
    <div className=" w-full my-3 relative rounded-xl h-[40vh] border-2 shadow-xl flex flex-col justify-start items-center p-2">
      <div className="w-full h-[5vh] flex gap-1 justify-start items-center  mt-2 rounded ">
        <div className="ml-4 h-[50px] w-[50px] rounded-full bg-gray-300"></div>
        <div className="h-full w-[40%] flex flex-col justify-center items-start  rounded">
          <div className="h-[50%] flex justify-start items-center  text-black text-sm font-bold ">
            {name}
          </div>
          <div className="h-[30%] flex justify-start items-center text-gray-600 text-sm tracking-tighter leading-none">
            {description}
          </div>
        </div>
      </div>
      {message}
      <div className="w-[90%] h-[7vh] border-t-2  absolute mb-2 bottom-0 flex justify-between gap-3 items-center px-2 py-1">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="w-[20%] h-full  flex justify-center items-center"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
