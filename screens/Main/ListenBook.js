import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListenBook = ({route}) => {
  console.log(route.params.route);

  return (
    <View style={styles.container}>
      <Text>listenBook</Text>
      <Text>{route.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default ListenBook;
