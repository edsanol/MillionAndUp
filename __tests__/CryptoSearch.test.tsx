import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CryptoSearch from '../src/presentation/screens/home/components/CryptoSearch';

describe('CryptoSearch', () => {
  it('should render correctly', () => {
    const handleSearch = jest.fn();
    const {getByTestId} = render(
      <CryptoSearch search="" handleSearch={handleSearch} />,
    );

    expect(getByTestId('search-input')).toBeTruthy();
  });

  it('should handle search input change', () => {
    const handleSearch = jest.fn();
    const {getByPlaceholderText} = render(
      <CryptoSearch search="" handleSearch={handleSearch} />,
    );

    const searchInput = getByPlaceholderText('Search');
    fireEvent.changeText(searchInput, 'Bitcoin');

    expect(handleSearch).toHaveBeenCalledWith('Bitcoin');
  });
});
