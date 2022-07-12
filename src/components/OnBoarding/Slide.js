import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';

const Slide = props => {
  const {item, width} = props;
  return (
    <View style={styles.container}>
      <Image source={item.image} style={[styles.image, {width}]} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  image: {
    height: '50%',
    resizeMode: 'contain',
    marginTop: 50,
  },
});

export default Slide;
