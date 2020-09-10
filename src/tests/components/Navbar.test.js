import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Navbar from '../../components/Navbar';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('render Navbar icon correctly', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(getByTestId('title-logo')).toContainHTML('Good Meals Catalog');
});

it('render container correctly', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const child = getByTestId('searchbar');
  expect(getByTestId('navbar')).toContainElement(child);
});

it('matches snapshot 1', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
