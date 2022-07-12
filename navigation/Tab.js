import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

const Tab = ({icon, tab, onpress}) => {
  var icons =
    icon == 'aliIcon'
      ? require('../img/icon/aliIcon.png')
      : require('../img/icon/headphoneIcon.png');

  return (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      <Image source={icons} style={styles.Image} />
      <Text style={styles.title}>{tab.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 12,
    color: 'white',
  },
  Image: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
  },
  horiaon: {},
});

export default Tab;
