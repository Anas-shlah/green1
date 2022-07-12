import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Form = () => {
  return (
    <View>
      <Text style={styles.title}>أخضر</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#1e7145',
    fontWeight: '900',
    margin: 10,
  },
});

export default Form;
