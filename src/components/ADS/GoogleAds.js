import {BannerAd, TestIds, BannerAdSize} from '@react-native-admob/admob';

const GoogleADS = props => {
  const {type, unitId, ...rest} = props;
  switch (type) {
    case 'bannerAd':
      <BannerAd
        size={BannerAdSize.ADAPTIVE_BANNER}
        unitId={unitId ? unitId : TestIds.BANNER}
        {...rest}
      />;
      break;

    case 'bannerMediumAd':
      <BannerAd
        size={BannerAdSize.MEDIUM_RECTANGLE}
        unitId={unitId ? unitId : TestIds.BANNER}
        {...rest}
      />;
      break;
  }
};

export default GoogleADS;
