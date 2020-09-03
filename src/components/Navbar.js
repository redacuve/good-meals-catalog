import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const inputSearch = useRef(null);
  const { push } = useHistory();
  const onSearch = () => {
    push(`/search/${inputSearch.current.value}`);
    inputSearch.current.value = '';
  };
  return (
    <nav>
      <h1>Good Meals Catalog</h1>
      <input type="search" ref={inputSearch} id="seachbar" />
      <button type="button" onClick={onSearch}>Search</button>
    </nav>
  );
}

export default Navbar;
