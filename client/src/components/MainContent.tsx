export const MainContent = () => {
  return (
    <div className="md:col-start-3 md:col-span-3 w-full min-w-fit px-8 py-6 bg-gray-100 ">
      <div className="pb-4 md:flex justify-center hidden md:dysplay-block md:justify-end gap-4">
        <a
          href="/admin"
          className="btn text-sky-950 border-sky-950 md:border-2 hover:bg-sky-950 hover:text-white transition ease-out duration-500"
        >
          Accés membres
        </a>
      </div>

      <header>
        <h1 className="text-gray-700 lg:text-4xl hidden sm:block sm:text-2xl font-semibold">
          ASSOCIACIO DE VETERANS
        </h1>
        <h1 className="text-gray-700 lg:text-6xl hidden sm:block sm:text-2xl font-semibold">
          HOQUEI PATINS FCB
        </h1>
        <h1 className="text-gray-700 text-center lg:text-4xl sm:hidden text-2xl font-semibold">
          VETERANS HOQUEI PATINS FCB
        </h1>
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
