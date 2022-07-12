import RNBootSplash from 'react-native-bootsplash';
import {useAppOpenAd} from '@react-native-admob/admob';

export default function SplashScreen({onSplashHandler}) {
  const [loaded, setLoaded] = useState(false);
  const {adDismissed, adLoadError} = useAppOpenAd();

  useEffect(() => {
    const load = async () => {
      // Dummy Long Running Task
      await new Promise(resolve => setTimeout(resolve, 3000));
      setLoaded(true);
    };
    load();
  }, []);

  useEffect(() => {
    async function hide() {
      await RNBootSplash.hide({fade: true});
      onSplashHandler();
    }
    if (loaded && (adDismissed || adLoadError)) {
      hide();
    }
  }, [loaded, adDismissed, adLoadError, onSplashHandler]);

  return <View />;
}
