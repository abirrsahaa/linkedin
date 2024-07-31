import Second_first from './Second_first';
import Post from './Post';

const Second = () => {
  return (
    <div className="block w-[90%] my-3 md:w-[60%] rounded-xl h-[15vh]  p-2">
      <Second_first />
      <Post />
    </div>
  );
};

export default Second;
