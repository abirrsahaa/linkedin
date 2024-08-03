import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  // const [bio, setBio] = useState('');

  const dispatch = useDispatch();

  const auth = getAuth();

  const register = async () => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log('registered user', user);

    if (user) {
      user.user.displayName = name;
      user.user.photoURL = profilePic;
    }

    dispatch(
      login({
        email: user.user.email,
        uid: user.user.uid,
        displayName: user.user.displayName,
        photoURL: user.user.photoURL,
        // description: bio,
      })
    );

    console.log(auth);
  };
  return (
    <div className="w-[30vw] rounded-2xl h-[50vh]  border-2 shadow-2xl flex p-2 flex-col items-center justify-start">
      <div className="w-full flex flex-col gap-2  items-center justify-center mt-5">
        <div className="w-full text-3xl font-bold text-leftf tracking-tighter leading-none">
          Sign in
        </div>
        <p className="w-full text-left text-sm tracking-tighter ">
          Stay updated on your professional world.
        </p>
      </div>
      <div className="w-full  flex flex-col gap-4  items-center justify-center mt-10">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border-2 rounded-lg"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          className="w-full p-2 border-2 rounded-lg"
          onChange={(e) => setProfilePic(e.target.value)}
          value={profilePic}
        />
        <input
          type="text"
          placeholder="Email or Phone"
          className="w-full p-2 border-2 rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border-2 rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className="w-full p-2 bg-blue-500 text-white rounded-lg"
          onClick={() => register()}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
