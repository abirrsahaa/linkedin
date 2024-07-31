import './App.css';
import Header from './components/Header';

import Sidebar from './components/Sidebar';
import Sidebar_res from './components/Sidebar_res';
import Second from './components/Second';

function App() {
  return (
    <main className="flex flex-col justify-center items-center">
      {/* navigation  */}
      <Header />

      {/* body */}
      <body className="w-full min-h-[900px] flex flex-col  md:flex-row md:justify-center md:items-start  justify-start items-center  ">
        {/* sidebar possibly i will use it to display info  */}
        <Sidebar_res />
        <Sidebar />

        <Second />

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
