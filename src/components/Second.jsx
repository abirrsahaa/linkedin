import Second_first from './Second_first';
import Post from './Post';

const Second = ({ Posts }) => {
  console.log('Posts in second', Posts);
  return (
    <div className="block w-[90%] my-3 md:w-[60%] rounded-xl h-[15vh]  p-2">
      <Second_first />
      {Posts.map((post) => {
        return <Post key={post.timestamp} post={post} />;
      })}
    </div>
  );
};

export default Second;
