import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function IndexCard(props) {
  const {
    color, hasDescription, hasImage, linkTo, meal, str,
  } = props;
  return (
    <Link
      key={meal[str]}
      to={`/${linkTo}/${meal[str]}`}
      className="shadow border rounded bg-white mb-5 cursor-default flex flex-wrap items-center justify-center"
    >
      <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 flex">
        <img
          className="w-full py-1 md:px-1 lg:px-0 xl:px-1"
          src={
            hasImage ? meal.strCategoryThumb : `/assets/img/${meal[str]}.jpg`
          }
          alt={meal[str]}
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
        <div className={`w-full bg-${color}-300 text-center`}>
          <h3 className="font-bold text-2xl">{meal[str]}</h3>
        </div>
        {hasDescription && (
          <div className={`w-full bg-${color}-100`}>
            <p className="text-gray-700 text-lg px-3">
              {meal[`${str}Description`]}
            </p>
          </div>
        )}
        <div className="w-full flex justify-center mt-3 mb-1">
          <div
            className={`bg-transparent hover:bg-${color}-500 text-${color}-700 text-sm font-semibold hover:text-white py-2 px-4 border border-${color}-500 hover:border-transparent rounded cursor-pointer`}
          >
            View Category
          </div>
        </div>
      </div>
    </Link>
  );
}

IndexCard.propTypes = {
  color: PropTypes.string.isRequired,
  hasDescription: PropTypes.bool.isRequired,
  hasImage: PropTypes.bool.isRequired,
  linkTo: PropTypes.string.isRequired,
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
  str: PropTypes.string.isRequired,
};

export default IndexCard;
