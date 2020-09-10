import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Error from '../../components/Error';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error errors={['one error']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render Error correctly', () => {
  const { getByTestId } = render(<Error errors={['one error']} />);
  expect(getByTestId('error-text')).toHaveTextContent(/^An error has ocurred, Please try again later.$/);
});

it('render Error Message correctly', () => {
  const { getByTestId } = render(<Error errors={['one error']} />);
  expect(getByTestId('error-list')).toContainHTML('<li class="text-sm">one error</li>');
});

it('matches snapshot 1', () => {
  const tree = renderer.create(<Error errors={['one error']} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot 2', () => {
  const tree = renderer.create(<Error errors={['one error', 'second error']} />).toJSON();
  expect(tree).toMatchSnapshot();
});
