import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Tab from './Tab';

const {width} = Dimensions.get('screen');

//start ads
import {useRewardedAd, TestIds} from '@react-native-admob/admob';
//end ads
import {UserContext} from '../Context/UserContext';

const TabBar = ({state, navigation}, props) => {
  const user = useContext(UserContext);

  //start ads
  const {adLoaded, adDismissed, reward, adPresented, show, adLoadError, load} =
    useRewardedAd(TestIds.REWARDED, {
      requestOptions: {
        requestNonPersonalizedAdsOnly: true,
      },
    });

  useEffect(() => {
    if (adDismissed == false && reward == false) {
      load();
    }
    if (adDismissed == true && reward == false) {
      load();
    }
  }, [adDismissed]);

  //end ads
  const [selected, setSelected] = useState('استماع');

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
      setSelected(activeTab);
      if (adLoaded) {
        show();

        if (reward) {
          navigate.push(activeTab, {data});
          console.log('User who viewed the ad: ', user);
        } else {
          load();
        }
      } else {
        load();
        // navigate.push(activeTab, {data});
        alert('يرجى الحصول على مكافئة الإعلان للمتابعة');
      }
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>{RenderTab(routes)}</View>
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
