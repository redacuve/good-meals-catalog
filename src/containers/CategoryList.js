import React from 'react';
import PropTypes from 'prop-types';

function CategoryList(props) {
  const { match: { params: { term } } } = props;
  return (
    <div>
      Category Search:
      { term }
    </div>
  );
}

CategoryList.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      term: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryList;
