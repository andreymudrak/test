import { render, screen } from '@testing-library/react';
import Table from './Table';

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

describe('App component', () => {

  test('normal render', () => {
    render(<Table />);
    expect(screen.getByTestId('table-container')).toBeInTheDocument();
  });

});
