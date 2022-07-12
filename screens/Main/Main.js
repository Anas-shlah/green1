import React, {useState, useContext} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import BookDescriptionScreen from './BookDescriptionScreen';
import ReadBook from './ReadBook';
import ListenBook from './ListenBook';
import ListBookContent from './ListBookContent';
import {UserContext} from '../../Context/UserContext';
import OnBoarding from '../OnBoarding';

//ads
import {AppOpenAdProvider, TestIds} from '@react-native-admob/admob';

const HomeStack = createNativeStackNavigator();

export default function Main() {
  const user = useContext(UserContext);
  console.log('use   ', user);

  return (
    <AppOpenAdProvider
      unitId={TestIds.APP_OPEN}
      options={{showOnColdStart: true, loadOnDismissed: true}}>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <HomeStack.Screen
          name="Read Book Screens"
          component={BookDescriptionScreen}
          options={{headerShown: false, animation: 'slide_from_bottom'}}
        />
        <HomeStack.Screen
          name="قرائة"
          component={ReadBook}
          initialParams={{icon: 'aliIcon', indexId: 4}}
          options={{
            headerShown: true,
            animation: 'slide_from_bottom',
          }}
        />
        <HomeStack.Screen
          name="استماع"
          component={ListenBook}
          initialParams={{icon: 'headphoneIcon'}}
          options={{headerShown: false, animation: 'slide_from_bottom'}}
        />
        <HomeStack.Screen
          name="المحتوى"
          component={ListBookContent}
          initialParams={{icon: 'listicon', indexId: 0}}
          options={{
            animation: 'slide_from_bottom',
            contentStyle: {backgroundColor: 'white'},
          }}
        />
      </HomeStack.Navigator>
    </AppOpenAdProvider>
  );
}
