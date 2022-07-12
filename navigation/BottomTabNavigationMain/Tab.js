import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

const Tab = ({icon, tab, onpress}) => {
  var icons;
  /*
    icon == 'aliIcon'
      ? require('../../img/icon/')
      : require('../../img/icon/headphoneIcon.png');*/
  icon = require('../../img/icon/headphoneIcon.png');

  return (
    <TouchableOpacity onPress={onpress} style={styles.container}>
      <Image source={icons} style={styles.Image} />
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
  } /*,
  title: {
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
  },
  horiaon: {},*/,
});

export default Tab;
