import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Style1 from './Menu Design/BookListDesign1';

const keyExtractor = (item, index) => item.id.toString();
const renderItem = ({item, index}) => {
  return <Style1 item={item} />;
};
const For_You = props => {
  const [datas, setDatas] = useState(props.data);

  return (
    <View>
      <Text style={styles.tex}>{props.name}</Text>
      <FlatList
        data={datas}
        keyExtractor={keyExtractor}
        horizontal={true}
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

export default For_You;
