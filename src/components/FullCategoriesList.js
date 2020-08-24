import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FullCategoriesList(props) {
  const { list } = props;
  return (
    <div>
      <h2>Full Categories</h2>
      <div>
        {list.map(elem => (
          <div key={elem.idCategory}>
            <h3>{elem.strCategory}</h3>
            <img src={elem.strCategoryThumb} alt={elem.strCategory} />
            <p>{elem.strCategoryDescription}</p>
            <Link to={`/category/${elem.strCategory}`}>View Category</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

FullCategoriesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(
    {
      idCategory: PropTypes.string.isRequired,
      strCategory: PropTypes.string.isRequired,
      strCategoryThumb: PropTypes.string.isRequired,
      strCategoryDescription: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default FullCategoriesList;
