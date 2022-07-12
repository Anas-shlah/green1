import React, {useState} from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Tab from './TabText';

const {width} = Dimensions.get('screen');

const TabBar = ({state, navigation}, props) => {
  const [selected, setSelected] = useState('استماع');
  ///const {data} = props;
  const {routes} = state;

  const navigate = useNavigation();

  const handlepress = (activeTab, index, data) => {
    if (routes.index !== index) {
      setSelected(activeTab);
      navigate.navigate(activeTab, {data});
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onpress={() => handlepress(route.name, index, route.params.data)}
            key={route.key}
          />
        ))}
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
