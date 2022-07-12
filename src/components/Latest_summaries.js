import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Style1 from './Menu Design/BookListDesign1';

const Latest_summaries = props => {
  const keyExtractor = (item, index) => item.id.toString();
  const renderItem = ({item, index}) => {
    return <Style1 item={item} />;
  };
  return (
    <View>
      <Text style={styles.tex}>أحدث ملخصات أخضر</Text>
      <FlatList
        data={props.data}
        horizontal={true}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  tex: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
});
export default Latest_summaries;
