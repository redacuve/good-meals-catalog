import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MealsList(props) {
  const { title, data, str } = props;
  return (
    <div>
      <h2 className="text-indigo-900 font-bold text-2xl">{title}</h2>
      <div>
        {data.map(meal => (
          <Link
            key={meal[str]}
            to={`/area/${meal[str]}`}
            className="shadow border rounded bg-white mb-5 cursor-default flex flex-wrap items-center justify-center"
          >
            <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 flex">
              <img
                className="w-full py-1 md:px-1 lg:px-0 xl:px-1"
                src={`/assets/img/${meal[str]}.jpg`}
                alt={meal[str]}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
              <div className="w-full bg-orange-300 text-center">
                <h3 className="font-bold text-2xl">{meal[str]}</h3>
              </div>
              <div className="w-full flex justify-center mt-3 mb-1">
                <div className="bg-transparent hover:bg-orange-500 text-orange-700 text-sm font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded cursor-pointer">
                  View Category
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

MealsList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  str: PropTypes.string.isRequired,
};

export default MealsList;
