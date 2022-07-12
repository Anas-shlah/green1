import React from 'react';
import {Text, Image, View} from 'react-native';

const HomeIcon = () => {
  return (
    <View>
      <Image source={require('./bookIcon.png')} />
    </View>
  );
};

export default HomeIcon();
