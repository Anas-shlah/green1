// this design for list {Sections}

import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

const WIDTH = Dimensions.get('window').width / 10;
const Height = Dimensions.get('window').height / 20;

const Style3 = props => {
  const {item} = props;

  return (
    <TouchableOpacity>
      <View style={styles.titl}>
        <Image source={item.source} style={styles.Image} />
        <Text style={styles.titleTex}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titl: {
    margin: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTex: {
    fontSize: 20,
    color: 'black',
    margin: 5,
  },
  Image: {
    width: WIDTH,
    height: Height,
    borderRadius: 30,
    resizeMode: 'stretch',
  },
});

export default Style3;
