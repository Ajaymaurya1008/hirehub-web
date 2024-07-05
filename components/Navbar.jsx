import Image from "next/image";

const Navbar = () => {
  return (
    <header className>
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 flex items-center justify-center gap-1">
            <a href="#" title className="flex">
              <Image
                className="w-16"
                src="https://res.cloudinary.com/dfh7pmyj0/image/upload/v1720168032/final_mm78it.png"
                alt=""
                width={100}
                height={60}
              />
            </a>
            <p className="text-[#26AE61] text-2xl font-bold">Hirehub</p>
          </div>
          <button
            type="button"
            className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            {/* Menu open: "hidden", Menu closed: "block" */}
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Menu open: "block", Menu closed: "hidden" */}
            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <a
              href="#"
              title
              className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
              role="button"
            >
              {" "}
              Try for free{" "}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
