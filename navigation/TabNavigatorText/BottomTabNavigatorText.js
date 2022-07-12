import React, {useState} from 'react';
import {
  View,
  Button,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './TabBarText';
import ListenBook from '../../screens/Main/ListenBook';
import ListBookContent from '../../screens/Main/ListBookContent';
import {FontSize} from '../../screens/Main/ReadBook';

const {width} = Dimensions.get('screen');

const TabNavigatorTex = props => {
  const {content, navigation, fontSize, SetFontSize} = props;
  const [display, SetDisplay] = useState('none');
  const onPressFontSize = () => {
    display == 'none' ? SetDisplay('flex') : SetDisplay('none');
  };
  return (
    <View style={styles.wrapper}>
      <View style={[styles.size, {display: display}]}>
        <FontSize fontSize={fontSize} SetFontSize={SetFontSize} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.container2}
          onPress={() => {
            navigation.replace('المحتوى', {content});
          }}>
          <Image
            source={require('../../img/icon/listicon.png')}
            style={styles.Image}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.container2}
          onPress={() => {
            onPressFontSize();
          }}>
          <Image
            source={require('../../img/icon/fontSize.png')}
            style={styles.Image}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.container2}
          onPress={() => {
            navigation.navigate('استماع', {content});
          }}>
          <Image
            source={require('../../img/icon/headphoneIcon.png')}
            style={styles.Image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 15,
    width,

    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1e7145',
    width: 250,
    borderRadius: 100,
  },
  container2: {
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
  size: {
    backgroundColor: '#eee',
    width: 250,
    borderRadius: 100,
  },
});

export default TabNavigatorTex;

/* <Tap.Screen
name="حجم الخط"
component={FontSize}
initialParams={{icon: 'fontSize'}}
*/
/*
return (
    <View>
      <Tap.Navigator tabBar={props => <TabBar {...props} />}>
        <Tap.Screen
          name="المحتوى"
          component={ListBookContent}
          initialParams={{icon: 'listicon', data: {data}}}
        />
        <Tap.Screen
          name="حجم الخط"
          getComponent={() => {
            require('../../screens/ListenBook').default;
          }}
          initialParams={{icon: 'fontSize'}}
        />
        <Tap.Screen
          name="استماع"
          component={ListenBook}
          initialParams={{icon: 'headphoneIcon', data: 'sound'}}
        />
      </Tap.Navigator>
    </View>
  );
  */
