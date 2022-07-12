import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Tab from './Tab';

const TabBar = ({state, navigation}, props) => {
  console.log(state.routes);
  const {routes} = state;

  const navigate = useNavigation();

  const RenderTab = routes => {
    return routes.map((route, index) => (
      <Tab
        tab={route}
        icon={route.params.icon}
        onpress={() => handlepress(route.name, index, route.params.data)}
        key={route.key}
      />
    ));
  };

  const handlepress = (activeTab, index, data) => {
    if (routes.index !== index) {
      navigate.navigate(activeTab, {data});
    }

    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>{RenderTab(routes)}</View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    bottom: 15,

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
});

export default TabBar;

/*
{routes.map(route => (
          <Tab
            tab={route}
            // icon={}
            //  onpress={}
            // color={}
            key={route.key}
          />
        ))}
*/
