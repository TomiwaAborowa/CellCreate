
import { Link } from "react-router-dom";
function Home() {
  return (
   
<>

<div className="bg-[url('bgbrown.jpg')] bg-contain">      
   <div className="bg-contain bg-right mix-blend bg-no-repeat h-screen w-screen bg-[url('pic1.png')]">

  <div className="text-center p-10 ">
  <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center my-8">
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-neutral-800">
    Welcome to
  </span>
  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-50 to-gray-50">
    ANORA CELL GROUP
  </span>
</h1>
<p className="mt-4 text-2xl md:text-xl text-amber-200 font-bold">
    Join a cell today !!!
  </p>
   
    {/* <p className="text-white font-medium tracking-wider text-2xl ml-2 sm:text-xl">
      Welcome to
    </p>
    <h2 className="text-3xl font-bold mt-5 tracking-wide text-white sm:text-6xl">
      ANORA CELL
      <br />
      GROUP
    </h2> */}
  </div>
      <div className="flex mt-64 items-center justify-center gap-x-6 lg:justify-start ">
        <button
          type="button"
          className="inline-flex items-center rounded-md sm:mx-auto hover:bg-amber-800 bg- px-3 py-2 font-bold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300"
        >

  <Link
    to="/form"
  >
    Go to Registration Form
  </Link>
        </button>
</div>
   </div>

  </div>
</>
    
  );
}

export default Home;
