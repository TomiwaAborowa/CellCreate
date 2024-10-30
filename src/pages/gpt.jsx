import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Outer background container */}
      <div className="bg-[url('bgbrown.jpg')] bg-cover bg-center h-screen w-screen flex flex-col justify-center items-center">
        {/* Inner container for content */}
        <div className="relative bg-no-repeat bg-right-top mix-blend h-full w-full bg-[url('pic1.png')] md:bg-cover flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">

          {/* Text Section */}
          <div className="text-center p-6 md:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white my-8">
              <span className="block font-greatVibes text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-neutral-800">
                Welcome to
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-50 to-gray-50">
                ANORA CELL GROUP
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-10 sm:mt-12 md:mt-16 text-lg md:text-xl text-center text-amber-200 font-bold">
              Join a cell today !!!
            </p>
          </div>

          {/* Button Section */}
          <div className="flex mt-10 md:mt-20 items-center justify-center">
            <Link
              to="/form"
              className="inline-flex items-center rounded-md hover:bg-amber-800 bg-amber-700 px-4 py-2 font-bold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-800 transition-all"
            >
              Go to Registration Form
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
