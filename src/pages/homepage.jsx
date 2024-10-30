
import { Link } from "react-router-dom";
function Home() {
  return (
   
<>

<div className="bg-[url('bgbrown.jpg')] bg-contain">      
   <div className="bg-contain bg-right mix-blend bg-no-repeat h-screen w-screen bg-[url('pic1.png')]">

  <nav className="flex justify-center items-center">
  <img src="fresh.png" alt="logo" className="p-5 h-24 w-24" />
  </nav>
  <div className="text-center p-24 ">
    <p className="text-white font-medium tracking-wider text-2xl ml-2 sm:text-xl">
      Welcome to
    </p>
    <h2 className="text-3xl font-bold mt-5 tracking-wide text-white sm:text-6xl">
      ANORA CELL
      <br />
      GROUP
    </h2>
  </div>
      <div className="flex items-center justify-center gap-x-6 lg:justify-start">
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
