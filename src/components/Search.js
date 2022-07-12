import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Search = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="ابحث عن كتاب أو مؤلف"></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    fontSize: 20,
  },
});

export default Search;
