// this design for list {}
import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet, Dimensions} from 'react-native';

//ads
import {BannerAd, TestIds, BannerAdSize} from '@react-native-admob/admob';
//end ads

const WIDTH = Dimensions.get('window').width;
const Height = Dimensions.get('window').height - 35;

export const TopSlider = props => {
  const {num, backgroundColor} = props;

  return <View style={[styles.Slider, num, backgroundColor]} />;
};

const StyleReadBook = props => {
  const {item, fontSizee} = props;
  const {title, text} = item;

  var length = Math.ceil(text.length / 2);

  while (text[length] != ' ') {
    length = length + 1;
  }

  const text1 = text.slice(0, length);
  const text2 = text.slice(length);

  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text style={[styles.text1, {fontSize: fontSizee}]}>{text1}</Text>
        <View style={styles.BannerAd}>
          <BannerAd
            size={BannerAdSize.ADAPTIVE_BANNER}
            unitId={TestIds.BANNER}
          />
        </View>
        <Text style={[styles.text2, {fontSize: fontSizee}]}>{text2}</Text>
      </View>
    </ScrollView>
  );
};
var fontSize = 30;

const styles = StyleSheet.create({
  wrapper: {
    width: WIDTH,
    height: Height - 5,
    paddingLeft: 10,
    marginBottom: 0,
    backgroundColor: 'white',
  },
  title: {
    margin: 35,
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
  },
  text1: {
    color: 'black',
    fontSize,
    paddingBottom: 0,
  },
  text2: {
    color: 'black',
    fontSize,
    paddingBottom: 80,
    marginBottom: 50,
  },
  Slider: {
    height: 10,
    marginTop: 1,
    borderColor: 'white',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'yallow',
  },

  BannerAd: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default StyleReadBook;
