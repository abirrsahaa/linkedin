import { FaLinkedin } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';
import { BsPeopleFill } from 'react-icons/bs';
import { FaSuitcase } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';
import { IoNotificationsSharp } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

const Header = () => {
  const icons = [
    <MdSearch key={0} className="w-[80%] h-[80%] text-gray-600" />,
    <IoHome key={1} className="w-[80%] h-[70%] text-gray-600" />,
    <BsPeopleFill key={2} className="w-[70%] h-[80%] text-gray-600" />,
    <FaSuitcase key={3} className="w-[80%] h-[70%] text-gray-600" />,
    <BsChatDotsFill key={4} className="w-[80%] h-[70%] text-gray-600" />,
    <IoNotificationsSharp key={5} className="w-[80%] h-[70%] text-gray-600" />,
    <RxAvatar key={6} className="w-[80%] h-[90%] text-gray-600" />,
  ];
  const name = [
    'Search',
    'Home',
    'My Network',
    'Jobs',
    'Messaging',
    'Notifications',
    'Me',
  ];

  return (
    <>
      <div className="weird:hidden   w-full h-14 bg-white shadow-xl mx-1 rounded-2xl my-2 px-1 flex justify-center items-center">
        <div className="w-[70%] md:w-[80%] h-full border-r-2  flex justify-center items-center">
          <div className="w-[15%] h-full  flex justify-center items-center">
            <FaLinkedin className="w-[60%] h-[70%] text-blue-900" />
          </div>
          <div className="w-[85%] h-full  p-2 flex justify-between items-center ">
            {icons.map((icon) => (
              <div
                key={icons.indexOf(icon)}
                className="w-[12%] h-[80%]  flex justify-center items-center"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[30%] md:w-[20%] h-full  p-1 flex justify-start items-center ">
          <div className="w-[25%] h-[80%]   flex justify-center items-center">
            <BsFillGrid3X3GapFill className="w-[80%] h-[70%] text-gray-600" />
          </div>
        </div>
      </div>
      {/*  for more than 582px */}
      <div className="hidden     w-full h-14 bg-white shadow-xl mx-1 rounded-2xl my-2 px-1 weird:flex weird:justify-center weird:items-center">
        <div className="w-[70%] md:w-[80%] h-full border-r-2  flex justify-center items-center">
          <div className="w-[15%] h-full  flex justify-end items-center ">
            <FaLinkedin className="w-[60%] h-[70%] text-blue-900" />
          </div>
          <div className="w-[85%] h-full  p-2 flex  justify-between items-center ">
            {icons.map((icon) => (
              <div
                key={icons.indexOf(icon)}
                className="w-[14%] h-[95%]  flex flex-col justify-center items-center"
              >
                {icon}
                <p className="text-xs text-gray-600 tracking-tighter">
                  {name[icons.indexOf(icon)]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[30%] md:w-[20%] h-full  p-1 flex justify-start items-center ">
          <div className="w-[25%] h-[80%]   flex justify-center items-center">
            <BsFillGrid3X3GapFill className="w-[80%] h-[70%] text-gray-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
