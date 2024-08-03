import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Second_first = () => {
  const user = useSelector((store) => store.auth.user);
  const [kotha, setkotha] = useState('');
  const testing = async () => {
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        name: user.displayName,
        description: user.email,
        message: kotha,
        photoUrl: user.photoURL,
        timestamp: Date.now(),
      });
      setkotha('');
      console.log('serverTIme', serverTimestamp());
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  return (
    <div className=" w-full my-3 border-2  rounded-xl h-[13vh] shadow-xl overflow-hidden flex flex-col justify-center items-center">
      <div className="w-full h-[60%]  flex justify-between items-center px-3">
        <div
          className="w-[60px] h-[60px] rounded-full bg-gray-200 overflow-hidden"
          onClick={() => testing()}
        >
          {user && (
            <img
              className="w-full h-full object-cover object-center"
              src={user.photoURL}
            ></img>
          )}
        </div>
        <input
          type="text"
          placeholder="write whatever you want...!"
          className="w-[87%] rounded-full p-3  h-[90%] border-2 border-gray-400 text-black"
          onChange={(e) => setkotha(e.target.value)}
          value={kotha}
        ></input>
      </div>
      <div className="w-full h-[40%]  border-t-2"></div>
    </div>
  );
};

export default Second_first;
