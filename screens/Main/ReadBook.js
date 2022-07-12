import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';
import TabNavigatorTex from '../../navigation/TabNavigatorText/BottomTabNavigatorText';

import StyleReadBook, {
  TopSlider,
} from '../../src/components/Menu Design/StyleReadBook';

const {width} = Dimensions.get('window');

// start function top slider green
var backgroundColor;
function onTopSlider(content, indexs, length) {
  return content.map(
    (i, index) => (
      indexs >= index
        ? (backgroundColor = 'green')
        : (backgroundColor = '#E5E5E5'),
      (
        <TopSlider
          num={{width: width / length}}
          backgroundColor={{backgroundColor}}
        />
      )
    ),
  );
}

//keyExtractor for flatlist
const keyExtractor = (item, index) => index.toString();

var save = 0;
var e = 0;
var indexs = 0;

const ReadBook = ({route, navigation}) => {
  //

  const renderItem = ({item, index}) => {
    return (
      <View>
        <StyleReadBook item={item} fontSizee={fontSize} />
      </View>
    );
  };

  var {content} = route.params.data;

  const [fontSize, SetFontSize] = useState(20);

  {
    route.params.data.indexs === undefined
      ? (indexs = 0)
      : ({indexs} = route.params.data);
  }

  const [inIndex, SetInIndex] = useState(indexs);
  const length = content.length;

  return content ? (
    <View style={styles.container}>
      <View style={styles.scroll} horizontal={true}>
        {onTopSlider(content, inIndex, length)}
        {useEffect(() => {
          onTopSlider(content, inIndex, length);
        }, [inIndex])}
      </View>

      <View style={styles.containerList}>
        <FlatList
          data={content}
          horizontal={true}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          invertStickyHeaders={true}
          fadingEdgeLength={10}
          snapToInterval={width * 1}
          snapToEnd={false}
          decelerationRate={-1}
          initialScrollIndex={indexs}
          pagingEnabled={true}
          scrollEventThrottle={100}
          onScrollEndDrag={x => {
            e = x.nativeEvent.contentOffset.x;
            e < save
              ? SetInIndex(inIndex + 1)
              : e > save
              ? SetInIndex(inIndex - 1)
              : null;
            save = e;
          }}
        />
      </View>

      <TabNavigatorTex
        content={content}
        navigation={navigation}
        fontSize={fontSize}
        SetFontSize={SetFontSize}
      />
    </View>
  ) : (
    <View style={styles.errorView}>
      <Text style={styles.errorText}>عذراً, لم يتم إضافة محتوى بعد</Text>
    </View>
  );
};

export const FontSize = props => {
  const {fontSize, SetFontSize} = props;
  return (
    <View>
      <View style={styles.textSlider}>
        <Text> {fontSize}</Text>
      </View>
      <Slider
        value={fontSize}
        onValueChange={value => SetFontSize(value)}
        minimumValue={10}
        maximumValue={40}
        step={2}
        tapToSeek={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  containerList: {
    marginBottom: 0,
  },
  errorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 30,
    color: 'black',
  },
  scroll: {
    flexDirection: 'row',
    width: width,
  },
  size: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textSlider: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ReadBook;
