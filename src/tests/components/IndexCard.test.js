import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import IndexCard from '../../components/IndexCard';

afterEach(cleanup);
const meal = {
  idCategory: '8',
  strCategory: 'Seafood',
  strCategoryThumb: 'https://www.themealdb.com/images/category/seafood.png',
  strCategoryDescription:
    'Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term "seafood" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <IndexCard
        color="indigo"
        hasDescription
        hasImage
        linkTo="category"
        meal={meal}
        str="strCategory"
      />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('render IndexCard correctly', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <IndexCard
        color="indigo"
        hasDescription
        hasImage
        linkTo="category"
        meal={meal}
        str="strCategory"
      />
    </BrowserRouter>,
  );
  expect(getByTestId('meal-title')).toHaveTextContent(
    /^Seafood$/,
  );
});

it('render IndexCard title correctly', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <IndexCard
        color="indigo"
        hasDescription
        hasImage
        linkTo="category"
        meal={meal}
        str="strCategory"
      />
    </BrowserRouter>,
  );
  expect(getByTestId('meal-title')).toContainHTML(
    'Seafood',
  );
});

it('matches snapshot 1', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <IndexCard
          color="indigo"
          hasDescription
          hasImage
          linkTo="category"
          meal={meal}
          str="strCategory"
        />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
