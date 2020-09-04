import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FullCategoriesList(props) {
  const { list } = props;
  return (
    <div>
      <h2 className="text-indigo-900 font-bold text-2xl">Categories</h2>
      <div>
        {list.map(elem => (
          <Link
            className="shadow border rounded bg-white mb-5 cursor-default flex flex-wrap items-center justify-center"
            key={elem.idCategory}
            to={`/category/${elem.strCategory}`}
          >
            <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 flex">
              <img
                className="w-full"
                src={elem.strCategoryThumb}
                alt={elem.strCategory}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
              <div className="w-full bg-indigo-300">
                <h3 className="font-bold text-2xl pl-3">{elem.strCategory}</h3>
              </div>
              <div className="w-full bg-orange-100">
                <p className="text-gray-700 text-lg px-3">
                  {elem.strCategoryDescription}
                </p>
              </div>
              <div className="w-full flex justify-center mt-3">
                <div className="bg-transparent hover:bg-blue-500 text-blue-700 text-sm font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer">
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
