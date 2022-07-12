// this design for list {Green_folders}

import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

const WIDTH = Dimensions.get('window').width / 2 - 10;
const Height = Dimensions.get('window').height / 3 - 45;

const Style4 = props => {
  const {item} = props;
  return (
    <TouchableOpacity>
      <View style={styles.wrapper}>
        <Image source={item.source} style={styles.image} />
        <View style={styles.view}>
          <Text style={styles.Text}>{item.title}</Text>
          <Text style={styles.Text}>{item.num}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    paddingBottom: 20,
    backgroundColor: '#1e7145',
  },
  image: {
    width: WIDTH,
    height: Height,
    borderRadius: 30,
    resizeMode: 'stretch',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Style4;
