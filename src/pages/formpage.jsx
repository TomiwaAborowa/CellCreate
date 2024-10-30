import  { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore"; 

function MyForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "registrations"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
      });
      alert("Form submitted successfully!");
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-500 to-orange-500">
      <div className="p-12 shadow-2xl bg-gradient-to-r from-amber-500 to-pink-500 rounded-md">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <p className="text-white font-bold text-2xl">REGISTRATION FORM</p>
          <hr className="mt-2" />
          <p className="animate-text bg-gradient-to-r from-gray-200 via-gray-800 to-gray-200 bg-clip-text text-transparent font-black">Reach out to this number via Whatsapp for your Cell placement:</p>
          <p className="font-bold text-gray-950 ">+2348160378182</p>
          <hr className="mt-3" />
          <div>
            <label className="block text-white font-semibold text-2xl mb-1 mt-2">
              Full Name
            </label>
            <input
              name="fullName"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
              type="text"
              required
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <div>
              <label className="block text-white font-semibold text-2xl mb-1 mt-2">
                Email
              </label>
              <input
                name="email"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-white font-semibold text-2xl mb-1 mt-2">
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-white font-semibold text-2xl mb-1 mt-2">
                Location
              </label>
              <input
                name="location"
                className="border w-full text-base text-gray-700 px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
                type="text"
                placeholder="Location"
                required
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyForm;
