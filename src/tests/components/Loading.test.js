import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Loading from '../../components/Loading';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loading />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render Loading icon correctly', () => {
  const { getByTestId } = render(<Loading />);
  expect(getByTestId('icon-container')).toContainHTML(
    '<i class="fas fa-spinner fa-pulse fa-5x"></i>',
  );
});

it('render container correctly', () => {
  const { getByTestId } = render(<Loading />);
  const child = getByTestId('icon-container');
  expect(getByTestId('loading-container')).toContainElement(child);
});

it('matches snapshot 1', () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
