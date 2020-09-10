import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MealsList from '../../components/MealsList';

afterEach(cleanup);

const title = 'Area';
const data = [
  { strArea: 'American' },
  { strArea: 'British' },
  { strArea: 'Canadian' },
  { strArea: 'Chinese' },
  { strArea: 'Dutch' },
  { strArea: 'Egyptian' },
  { strArea: 'French' },
  { strArea: 'Greek' },
  { strArea: 'Indian' },
  { strArea: 'Irish' },
  { strArea: 'Italian' },
  { strArea: 'Jamaican' },
  { strArea: 'Japanese' },
  { strArea: 'Kenyan' },
  { strArea: 'Malaysian' },
  { strArea: 'Mexican' },
  { strArea: 'Moroccan' },
  { strArea: 'Polish' },
  { strArea: 'Russian' },
  { strArea: 'Spanish' },
  { strArea: 'Thai' },
  { strArea: 'Tunisian' },
  { strArea: 'Turkish' },
  { strArea: 'Unknown' },
  { strArea: 'Vietnamese' },
];
const str = 'strArea';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MealsList title={title} data={data} str={str} />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('render MealsList title correctly', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <MealsList title={title} data={data} str={str} />
    </BrowserRouter>,
  );
  expect(getByTestId('meallist-title')).toContainHTML(
    'Area',
  );
});

it('render container correctly', () => {
  const { getByTestId, getAllByTestId } = render(
    <BrowserRouter>
      <MealsList title={title} data={data} str={str} />
    </BrowserRouter>,
  );
  const child = getAllByTestId('single-index-card')[0];
  expect(getByTestId('meallist-container')).toContainElement(child);
});

it('matches snapshot 1', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <MealsList title={title} data={data} str={str} />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
