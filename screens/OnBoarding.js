import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  Button,
  View,
  FlatList,
  Dimensions,
} from 'react-native';

import {dataOnBoarding} from '../src/components/First';
import Slide from '../src/components/OnBoarding/Slide';
import Footer from '../src/components/OnBoarding/Footer';
import Header from '../src/components/OnBoarding/Header';

const {width, height} = Dimensions.get('window');
const keyExtractor = (item, index) => item.id.toString();

const OnBoarding = ({navigation, route}) => {
  const {setuser} = route.params;

  const [invertCurrentSlideIndex, setInvertCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const [headerTypes, setHeaderTypes] = useState('skip');

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    const invert = dataOnBoarding.length - currentIndex - 1;
    setInvertCurrentSlideIndex(invert);
    setIndex(invert);
  };

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
    });
    console.log(index);
    index < 3 ? setHeaderTypes('skip') : setHeaderTypes('guest');
  }, [index]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#9BC1AD'} />
      <View style={{height: height * 0.1}}>
        <Header
          types={headerTypes}
          setIndex={setIndex}
          length={dataOnBoarding.length}
          navigation={navigation}
          setuser={setuser}
        />
      </View>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        data={dataOnBoarding}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        keyExtractor={keyExtractor}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        renderItem={({item}) => <Slide item={item} width={width} />}
      />
      <Footer
        height={height}
        data={dataOnBoarding}
        invertCurrentSlideIndex={invertCurrentSlideIndex}
        setInvertCurrentSlideIndex={setInvertCurrentSlideIndex}
        setIndex={setIndex}
        index={index}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9BC1AD',
  },
});

export default OnBoarding;

/*
{index == dataOnBoarding.length - 1 ? (
          <Header types={headerTypes} />
        ) : null}*/
