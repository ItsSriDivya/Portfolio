import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme from 'enzyme';
import "./setupTests";
import Router from '../src/Router'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('App renders without crashing', () => {
  Enzyme.shallow(<App />)
})

it('checking App data', () => {
  const wrapper = Enzyme.shallow(<App />)
  const content = (<div className="App">
      <Router />
    </div>)
    expect(wrapper.contains(content)).toEqual(true);
})