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
  top?: number; // Custom top style
  left?: number; // Custom left style
  right?: number; // Custom right style
  zIndex?: number; // Custom zIndex style
  backgroundColor?: string;
}

const DropdownContainer: React.FC<DropdownProps> = (props) => {
  const {
    data,
    isDropdownOpen,
    handleDataChange,
    top = 0, // Default value
    left = 0, // Default value
    right = undefined, // Default value
    zIndex = 10, // Default value
    backgroundColor = '#ffffff'
  } = props;

  if (!isDropdownOpen) {
    return null;
  }

  // Apply custom styles to the container View component
  const containerStyles = StyleSheet.flatten([
    styles.container,
    { top },
    { left },
    { right },
    { zIndex },
  ]);

  // Apply custom styles to the dropdown ScrollView component
  const dropdownStyles = StyleSheet.flatten([
    styles.dropdown,
    { backgroundColor },
  ]);

  return (
    <View style={containerStyles}>
      <ScrollView style={dropdownStyles}>
        {Array.from(data).map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleDataChange(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  dropdown: {
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    maxHeight: 200,
    zIndex: 2,
  },
});

export default DropdownContainer;
