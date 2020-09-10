import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import GetArea from '../actions/GetArea';
import Loading from '../components/Loading';
import Error from '../components/Error';
import MealCard from '../components/MealCard';

function AreaList(props) {
  const {
    match: {
      params: { term },
    },
  } = props;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetArea(term));
  }, [dispatch, term]);
  const meals = useSelector(state => state.AreaList);
  if (meals.loading === true) {
    return <Loading />;
  }
  if (meals.errorMsg !== '') {
    return <Error errors={[meals.errorMsg]} />;
  }
  return (
    <div className="p-1">
      <h2 className="text-orange-900 font-bold text-2xl">
        Area Search:&nbsp;
        <span className="font-extrabold underline italic">{term}</span>
      </h2>
      <div className="flex flex-wrap items-center">
        {meals.meals.map(meal => (
          <MealCard key={meal.strMeal} color="orange" meal={meal} />
        ))}
      </div>
    </div>
  );
}

AreaList.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      term: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default AreaList;
