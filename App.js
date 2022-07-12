import React, {useState, useEffect, createContext, useContext} from 'react';
//navigation
import {NavigationContainer} from '@react-navigation/native';
///import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './navigation/BottomTabNavigationMain/TabBar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
/// import Profile from './screens/Main/Profile';
/// import Main from './screens/Main/Main';
import OnBoarding from './screens/OnBoarding';

//ads
import {AppOpenAdProvider, TestIds} from '@react-native-admob/admob';

import {UserContext} from './Context/UserContext';
import TabNavigatorApp from './navigation/TabNavigatorApp/TabNavigatorApp';
import SignUp from './screens/User registration/SignUp';
import Login from './screens/User registration/Login';

///const Tab = createBottomTabNavigator();
export const UserContexts = createContext();

export default function App() {
  const [user, SetUser] = useState('');
  //console.log('App.js ', user);
  console.log('useI name  ', user);
  const HomeStack = createNativeStackNavigator();

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer Independent={true}>
        <HomeStack.Navigator>
          {user == '' ? (
            <HomeStack.Screen
              name="OnBoarding"
              component={OnBoarding}
              options={{headerShown: false}}
              initialParams={{
                setuser: SetUser,
                User: user,
              }}
            />
          ) : (
            <HomeStack.Screen
              name="TabNavigatorApp"
              component={TabNavigatorApp}
              options={{headerShown: false}}
              initialParams={{
                setuser: SetUser,
                User: user,
              }}
            />
          )}
          <HomeStack.Screen
            name="Login"
            component={Login}
            options={{
              title: '',
              animation: 'slide_from_bottom',
              contentStyle: {backgroundColor: 'white'},
            }}
            initialParams={{
              setuser: SetUser,
              User: user,
            }}
          />
          <HomeStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: '',
              animation: 'slide_from_bottom',
              contentStyle: {backgroundColor: 'white'},
            }}
            initialParams={{
              setuser: SetUser,
              User: user,
            }}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
