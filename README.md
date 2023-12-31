```markdown
# React Native Custom Dropdown

React Native Custom Dropdown is a versatile component that allows you to create customized dropdown menus in your React Native applications.

## Installation

You can install this package via npm:

```bash
npm install react-native-khaled-salem-dropdown
```

## Usage

To use the Dropdown component in your React Native application, follow these steps:

1. Import the `Dropdown` component from the package:

   ```javascript
   import { Dropdown } from 'react-native-khaled-salem-dropdown';
   ```

2. Use the `Dropdown` component in your JSX code, passing the necessary props:

   ```javascript
   <Dropdown
     data={uniqueCategories}
     isDropdownOpen={isDropdownOpen}
     handleDataChange={handleCategoryChange}
     top={40}
     left={10}
     zIndex={2}
     style={{
       backgroundColor: 'white',
       padding: 10,
     }}
   />
   ```

   - `data`: An array of unique categories or items.
   - `isDropdownOpen`: A boolean indicating whether the dropdown should be open.
   - `handleDataChange`: A callback function to handle changes when an item is selected.
   - `top`: Custom top style for the dropdown.
   - `left`: Custom left style for the dropdown.
   - `right`: Custom right style for the dropdown.
   - `zIndex`: Custom zIndex style for the dropdown.
   - `style`: Accepts additional custom styles for the dropdown (e.g., `backgroundColor`, `padding`).

3. Customize the appearance and behavior of the dropdown according to your application's needs.

## Example

Here's a simple example of how to use the `Dropdown` component:

```javascript
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-khaled-salem-dropdown';

const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const uniqueCategories = new Set(['Category 1', 'Category 2', 'Category 3']);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Text>Open Dropdown</Text>
      </TouchableOpacity>
      <Dropdown
        data={uniqueCategories}
        isDropdownOpen={isDropdownOpen}
        handleCategoryChange={handleCategoryChange}
        top={40}
        left={10}
        zIndex={2}
        backgroundColor={'white'}
      />
      <Text>Selected Category: {selectedCategory}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

## Props

### `data` (Array)

An array of unique categories or items to display in the dropdown.

### `isDropdownOpen` (Boolean)

A boolean indicating whether the dropdown should be open.

### `handleDataChange` (Function)

A callback function that gets called when an item is selected from the dropdown.

### `top` (Number)

Custom top style for the dropdown.

### `left` (Number)

Custom left style for the dropdown.

### `right` (Number)

Custom right style for the dropdown.

### `zIndex` (Number)

Custom zIndex style for the dropdown.


### `backgroundColor` (String)

Custom backgroundColor style for the dropdown.


## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

![Coverage](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=coverage&query=%24.total.percentage&url=https%3A%2F%2Fraw.githubusercontent.com%2FkhaledM-salem%2Freact-native-custom-dropdown%2Fmain%2Fcoverage%2Fcoverage-final.json)
```
