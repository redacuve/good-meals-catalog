import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MealCard from '../../components/MealCard';

afterEach(cleanup);

const color = 'indigo';
const meal = {
  strMeal: 'Crock Pot Chicken Baked Tacos',
  strMealThumb:
    'https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg',
  idMeal: '52830',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MealCard color={color} meal={meal} />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('render MealCard icon correctly', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <MealCard color={color} meal={meal} />
    </BrowserRouter>,
  );
  expect(getByTestId('mealcard-title')).toContainHTML(
    'Crock Pot Chicken Baked Tacos',
  );
});

it('render container correctly', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <MealCard color={color} meal={meal} />
    </BrowserRouter>,
  );
  const child = getByTestId('mealcard-link');
  expect(getByTestId('mealcard')).toContainElement(child);
});

it('matches snapshot 1', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <MealCard color={color} meal={meal} />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
