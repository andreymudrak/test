import { render, screen } from '@testing-library/react';
import App from './App';

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

describe('App component', () => {

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByTestId('app-container');
    expect(linkElement).toBeInTheDocument();
  });

})
