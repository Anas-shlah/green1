import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Button, View} from 'react-native';

const Footer = ({
  height,
  data,
  invertCurrentSlideIndex,
  setInvertCurrentSlideIndex,
  setIndex,
  index,
  navigation,
}) => {
  const goNextSlide = () => {
    if (index === data.length - 1) {
      return;
    }
    setIndex(index + 1);
    setInvertCurrentSlideIndex(index + 1);
  };

  return (
    <View
      style={{
        height: height * 0.15,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              invertCurrentSlideIndex == index && {
                backgroundColor: 'green',
                width: 25,
              },
            ]}
          />
        ))}
      </View>
      <View style={{marginBottom: 20}}>
        {index == data.length - 1 ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => {
                navigation.push('Login');
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'white',
                }}>
                تسجيل دخول
              </Text>
            </TouchableOpacity>
            <View style={{width: 15}} />
            <TouchableOpacity
              style={[
                styles.btn2,
                {
                  borderColor: '#1e7145',
                  borderWidth: 1,
                  backgroundColor: 'transparent',
                },
              ]}
              onPress={() => {
                navigation.push('SignUp');
              }}>
              <Text
                style={{
                  color: '#1e7145',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                إنشاء حساب
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{height: 50}}>
            <TouchableOpacity
              style={[styles.btn]}
              onPress={() => {
                goNextSlide();
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
                التالي
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indicator: {
    backgroundColor: 'white',
    height: 3,
    width: 10,
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#1e7145',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#1e7145',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
