export const MainContent = () => {
  return (
    <div className="px-10 py-6 bg-gray-100 md:col-span-4">
      <div className="flex justify-center md:justify-end gap-4">
        <a
          href="#"
          className="btn text-sky-950 border-sky-950 md:border-2 hover:bg-sky-950 hover:text-white transition ease-out duration-500"
        >
          Log in
        </a>
        <a
          href="#"
          className="btn text-sky-950 border-sky-950 md:border-2 hover:bg-sky-950 hover:text-white transition ease-out duration-500"
        >
          Register
        </a>
      </div>

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">ASSOCIACIO</h2>
        <h3 className="text-2xl font-semibold">VETERANS HOQUEI PATINS FCB</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-400">Primera secció</h4>
        <div className="mt-8 grid md:grid-cols-3 gap-3">
          {/* <!-- Cards go here --> */}
          <div className="card hover:shadow-lg">
            <img src="" alt="foto" className="w-full h-32 sm:h-48 object-cover" />
            <div className="m-4">
              <span className="font-bold">Algun titol</span>
              <span className="block text-gray-500 text-sm">Shirley Temple</span>
            </div>
            <div className="badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="card hover:shadow-lg">
            <img src="" alt="foto" className="w-full h-32 sm:h-48 object-cover" />
            <div className="m-4">
              <span className="font-bold">Algun titol</span>
              <span className="block text-gray-500 text-sm">Shirley Temple</span>
            </div>
            <div className="badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="card hover:shadow-lg">
            <img src="" alt="foto" className="w-full h-32 sm:h-48 object-cover" />
            <div className="m-4">
              <span className="font-bold">Algun titol</span>
              <span className="block text-gray-500 text-sm">Shirley Temple</span>
            </div>
            <div className="badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-400">Segona Secció</h4>
        <div className="mt-8">{/* <!-- MOre cards here --> */}</div>

        <div className="flex justify-center">
          <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
            Més contingut
          </div>
        </div>
      </div>
    </div>
  );
};
