import React from 'react';
import {View, ScrollView, FlatList, StyleSheet, Text} from 'react-native';
import Style3 from './Menu Design/BookListDesign3';

const keyExtractor = (item, index) => item.id.toString();
const RenderItem = ({item, index}) => {
  return <Style3 item={item} />;
};
class Sections extends React.Component {
  data = this.props.data;
  NumColumns = Math.ceil(this.data.length / 2);
  render() {
    return (
      <View>
        <Text style={styles.tex}>الأقسام</Text>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 20}}>
          <FlatList
            scrollEnabled={false}
            keyExtractor={keyExtractor}
            contentContainerStyle={{
              alignSelf: 'flex-start',
            }}
            numColumns={this.NumColumns}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={this.data}
            renderItem={RenderItem}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tex: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Sections;
