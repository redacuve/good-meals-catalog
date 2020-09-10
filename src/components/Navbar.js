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
    <nav className="w-full" data-testid="navbar">
      <div className="w-full bg-gray-100 border-b border-grey-light">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-center md:justify-between py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Good Meals Logo" className="h-16 md:h-12" />
            <h1 className="font-bold text-indigo-900 text-base font-extrabold text-xl w-minc ml-1 leading-5" data-testid="title-logo">
              Good Meals Catalog
            </h1>
          </Link>
          <div className="w-full sm:w-2/3 flex flex-wrap justify-center mt-2 lg:justify-end">
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="search"
              ref={inputSearch}
              id="seachbar"
              data-testid="searchbar"
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
              data-testid="search-button"
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
