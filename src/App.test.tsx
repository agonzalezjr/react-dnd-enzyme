import React from 'react';
// import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link - enzyme', () => {
  const wrapper = mount(<App />)
  expect(wrapper).not.toBeUndefined()
  expect(wrapper.find("#link-id")).toHaveLength(1)
});
