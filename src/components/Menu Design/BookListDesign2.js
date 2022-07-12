// this design for list {Book_Reviews}

import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';

const Style2 = props => {
  const {item} = props;

  return (
    <TouchableOpacity>
      <View>
        <Image source={item.source} style={styles.Image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: Dimensions.get('window').width / 2 + 50,
    height: Dimensions.get('window').height / 3 - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    margin: 10,
    resizeMode: 'stretch',
  },
});

export default Style2;
