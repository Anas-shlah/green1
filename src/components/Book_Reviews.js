import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import Style2 from './Menu Design/BookListDesign2';

const Book_Reviews = props => {
  const keyExtractor = (item, index) => item.id.toString();
  const renderItem = ({item, index}) => {
    return <Style2 item={item} />;
  };

  return (
    <View>
      <Text style={styles.tex}>مراجعات الكتب</Text>
      <FlatList
        data={props.data}
        keyExtractor={keyExtractor}
        horizontal={true}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    padding: 50,
    borderRadius: 30,
  },
  tex: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Book_Reviews;
