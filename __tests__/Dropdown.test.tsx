import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Dropdown from '../src/Dropdown';

export interface DropdownProps {
    data: Set<string>;
    isDropdownOpen: boolean;
    handleDataChange: (item: string) => void;
}


  describe('Dropdown component', () => {
    it('renders correctly when open', () => {
        const data: Set<string> = new Set(['Item 1', 'Item 2']);
        const isDropdownOpen: boolean = true;
        const handleDataChange: jest.Mock = jest.fn();
    
        const props: DropdownProps = {
          data,
          isDropdownOpen,
          handleDataChange,
        };
    
        const { getByText } = render(<Dropdown {...props} />);
    
        // Assert that the component renders correctly when open
        expect(getByText('Item 1')).toBeTruthy();
        expect(getByText('Item 2')).toBeTruthy();
      });
  });

  it('does not render when closed', () => {
    const data = new Set(['Item 1', 'Item 2']);
    const isOpen = false;
    const handleDataChange = jest.fn();

    const { queryByText } = render(
      <Dropdown
        data={data}
        isDropdownOpen={isOpen}
        handleDataChange={handleDataChange}
      />
    );

    // Assert that the component does not render when closed
    expect(queryByText('Item 1')).toBeNull();
    expect(queryByText('Item 2')).toBeNull();
  });

  it('calls handleDataChange when an item is pressed', () => {
    const data = new Set(['Item 1', 'Item 2']);
    const isOpen = true;
    const handleDataChange = jest.fn();

    const { getByText } = render(
      <Dropdown
        data={data}
        isDropdownOpen={isOpen}
        handleDataChange={handleDataChange}
      />
    );

    // Simulate a user pressing an item
    fireEvent.press(getByText('Item 1'));

    // Assert that handleDataChange was called with the correct item
    expect(handleDataChange).toHaveBeenCalledWith('Item 1');
  });

