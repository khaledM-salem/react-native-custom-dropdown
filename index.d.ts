declare module 'react-native-custom-dropdown' {
    import { ReactNode } from 'react';
  
    export interface DropdownProps {
      uniqueCategories: Set<string>;
      isDropdownOpen: boolean;
      handleCategoryChange: (category: string) => void;
    }
  
    export const Dropdown: React.FC<DropdownProps>;
}
  