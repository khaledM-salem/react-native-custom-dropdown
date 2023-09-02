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
}

interface DropdownContainerProps extends DropdownProps {
  // Set default values for custom styles
  top?: number;
  left?: number;
  right?: number;
  zIndex?: number;
}

const DropdownContainer: React.FC<DropdownContainerProps> = (props) => {
  const {
    data,
    isDropdownOpen,
    handleDataChange,
    top = 0, // Default value
    left = 0, // Default value
    right = undefined, // Default value
    zIndex = 10, // Default value
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

  return (
    <View style={containerStyles}>
      <ScrollView style={styles.dropdown}>
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
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    maxHeight: 200,
    zIndex: 2,
  },
});

export default DropdownContainer;
