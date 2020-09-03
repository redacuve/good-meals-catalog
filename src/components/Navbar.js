import React, { useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import logo from '../assets/img/goodmeals.png';

function Navbar() {
  const inputSearch = useRef(null);
  const { push } = useHistory();
  const onSearch = () => {
    push(`/search/${inputSearch.current.value}`);
    inputSearch.current.value = '';
  };
  return (
    <nav className="w-full">
      <div className="w-full bg-gray-100 border-b border-grey-light">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Good Meals Logo" className="h-12" />
            <h1 className="font-bold text-indigo-900 text-base font-extrabold text-xl w-minc ml-1 leading-5">
              Good Meals Catalog
            </h1>
          </Link>
          <div className="">
            <input
              className="shadow appearance-none border rounded py-2 px-3 mr-1 text-gray-700 focus:outline-none focus:shadow-outline"
              type="search"
              ref={inputSearch}
              id="seachbar"
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  onSearch();
                }
              }}
            />
            <button
              className="bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full"
              type="button"
              onClick={onSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
