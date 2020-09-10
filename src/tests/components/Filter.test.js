import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Filter from '../../components/Filter';

afterEach(cleanup);
const categories = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian'];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filter categories={categories} changeFilter={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render Filter correctly', () => {
  const { getByTestId } = render(<Filter categories={categories} changeFilter={() => {}} />);
  expect(getByTestId('filter-list')).toHaveTextContent(/^AllBeefBreakfastChickenDessertGoatLambMiscellaneousPastaPorkSeafoodSideStarterVeganVegetarian$/);
});

it('render Filter Message correctly', () => {
  const { getByTestId } = render(<Filter categories={categories} changeFilter={() => {}} />);
  expect(getByTestId('filter-list')).toContainHTML('<select class="appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" data-testid="filter-list"><option value="All">All</option><option value="Beef">Beef</option><option value="Breakfast">Breakfast</option><option value="Chicken">Chicken</option><option value="Dessert">Dessert</option><option value="Goat">Goat</option><option value="Lamb">Lamb</option><option value="Miscellaneous">Miscellaneous</option><option value="Pasta">Pasta</option><option value="Pork">Pork</option><option value="Seafood">Seafood</option><option value="Side">Side</option><option value="Starter">Starter</option><option value="Vegan">Vegan</option><option value="Vegetarian">Vegetarian</option></select>');
});

it('matches snapshot 1', () => {
  const tree = renderer.create(<Filter categories={categories} changeFilter={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
