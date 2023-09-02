import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';


export interface DropdownProps {
    data: Set<string>;
    isDropdownOpen: boolean;
    handleDataChange: (item: string) => void;
    style?: StyleProp<ViewStyle>; // Accept a custom style prop
  }

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    data,
    isDropdownOpen,
    handleDataChange,
    style, // Accept custom styles
  } = props;

  if (!isDropdownOpen) {
    return null;
  }

  // Merge custom styles with default styles
  const dropdownStyles = StyleSheet.flatten([styles.dropdown, style]);

  return (
    <ScrollView style={dropdownStyles}>
      {Array.from(data).map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleDataChange(item)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    top: 40,
    left: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    maxHeight: 200,
    zIndex: 2,
    overflow: 'scroll',
  },
});

export default Dropdown;
