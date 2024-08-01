import './App.css';
import Header from './components/Header';

import Sidebar from './components/Sidebar';
import Sidebar_res from './components/Sidebar_res';
import Second from './components/Second';
import { db } from './firebase';
import { useEffect, useState } from 'react';
// import { firebase } from 'firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

function App() {
  const [Posts, setPosts] = useState([]);
  const [postIds, setPostIds] = useState(new Set());
  useEffect(() => {
    const addData = () => {
      console.log('useEffect');
      try {
        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(
          q,
          (all_docs) => {
            console.log('printing');
            const newPosts = [];
            const newPostIds = new Set(postIds);

            all_docs.forEach((doc) => {
              if (!postIds.has(doc.id)) {
                console.log(doc.id, doc.data());
                newPosts.push(doc.data());
                newPostIds.add(doc.id);
              }
            });

            if (newPosts.length > 0) {
              setPosts((prevPosts) => [...newPosts, ...prevPosts]);
              setPostIds(newPostIds);
            }
          },
          (error) => {
            console.log(error);
          }
        );

        return unsubscribe; // Clean up the listener on unmount
      } catch (error) {
        console.log(error);
      }
    };

    const unsubscribe = addData();
    return () => unsubscribe && unsubscribe(); // Clean up the listener on unmount
  }, [postIds]); // Dependency array includes postIds to ensure it updates correctly

  return (
    <main className="flex flex-col justify-center items-center">
      {/* navigation  */}
      <Header />

      {/* body */}
      <body className="w-full min-h-[900px] flex flex-col  md:flex-row md:justify-center md:items-start  justify-start items-center  ">
        {/* sidebar possibly i will use it to display info  */}
        <Sidebar_res />
        <Sidebar />

        {Posts.length > 0 && <Second Posts={Posts} />}
        {Posts.length > 0 && console.log('posts', Posts)}

        {/* middle part will be for feed (feed can be projects (live link,live video/preview )),can be a post ,can be a poll  */}

        {/* third section will be data centric heacy where i will be doing data interpretetion
          of personal vs area vs state vs global (within the database )
          // can come up with key points and one of the best feature would be 
          // best peer finding algo which i can implement 
          // to chat also (implementing web socket when i learn about it ) 
          // also can add region wise (which i will be needing location access */}
      </body>

      {/* footer */}
    </main>
  );
}

export default App;
