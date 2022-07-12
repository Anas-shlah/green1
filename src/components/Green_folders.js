import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Style4 from './Menu Design/BookListDesign4';

const keyExtractor = (item, index) => item.id.toString();
const RenderItem = ({item, index}) => {
  return <Style4 item={item} />;
};

class Green_folders extends React.Component {
  data = this.props.data;

  render() {
    return (
      <View>
        <Text style={styles.tex}>مجلدات أخضر</Text>
        <FlatList
          data={this.data}
          keyExtractor={keyExtractor}
          horizontal={true}
          renderItem={RenderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tex: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Green_folders;
