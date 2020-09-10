import React from 'react';
import PropTypes from 'prop-types';
import IndexCard from './IndexCard';

function FullCategoriesList(props) {
  const { list } = props;
  return (
    <div>
      <h2 className="text-indigo-900 font-bold text-2xl" data-testid="fullcategorieslist-text">Categories</h2>
      <div data-testid="cards-container">
        {list.map(meal => (
          <IndexCard key={meal.strCategory} color="blue" hasDescription hasImage linkTo="category" meal={meal} str="strCategory" />
        ))}
      </div>
    </div>
  );
}

FullCategoriesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      idCategory: PropTypes.string.isRequired,
      strCategory: PropTypes.string.isRequired,
      strCategoryThumb: PropTypes.string.isRequired,
      strCategoryDescription: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FullCategoriesList;
