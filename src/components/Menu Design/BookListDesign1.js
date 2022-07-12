// this design for list {For_You , Latest_summaries , Most_Read}
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

import {Height, WIDTH} from '../First';

//start ads
import {useInterstitialAd, TestIds} from '@react-native-admob/admob';
//end ads
import {UserContext} from '../../../Context/UserContext';

const Style1 = (props, navigation) => {
  const {item} = props;
  const navigate = useNavigation();

  //start ads
  const {adLoaded, adDismissed, show} = useInterstitialAd(
    TestIds.INTERSTITIAL,
    {
      requestOptions: {
        requestNonPersonalizedAdsOnly: true,
        serverSideVerificationOptions: {userId: UserContext},
      },
    },
  );

  useEffect(() => {
    if (adDismissed) {
      navigate.push('Read Book Screens', {item});
    }
  }, [adDismissed, navigation]);

  //end ads

  return (
    <TouchableOpacity
      onPress={() => {
        if (adLoaded) {
          show();
        } else {
          navigate.push('Read Book Screens', {item});
        }
      }}>
      <View style={{margin: 5}}>
        <Image source={item.source} style={styles.image} />
        <Text style={styles.author}>الكاتب: {item.author}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    padding: 50,
    borderRadius: 30,
  },
  tex: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: WIDTH,
    height: Height,
    borderRadius: 30,
    resizeMode: 'stretch',
  },
  author: {
    color: '#1e7145',
    fontSize: 12,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
});

export default Style1;
