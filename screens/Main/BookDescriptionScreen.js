import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import {Height, WIDTH} from '../../src/components/First';
import For_You from '../../src/components/For_You';
import {data1} from '../../src/components/First';
import TabNavigator from '../../navigation/BottomTabNavigation';

const BookDescriptionScreen = props => {
  const {item} = props.route.params;

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.innerWrapper}>
          <Image source={item.source} style={styles.image} />
        </View>
        <View style={styles.innerWrapperview2}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>الكاتب: {item.author}</Text>
        </View>
        <View style={styles.innerWrapperview3}>
          <View style={styles.wrappericon}>
            <Image
              source={require('../../img/icon/shareIcon.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.wrappericon}>
            <Image
              source={require('../../img/icon/downloadIcon.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.wrappericon}>
            <Image
              source={require('../../img/icon/bookmarkIcon.png')}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.horiaon} />
        <View style={styles.innerWrapperview4}>
          <View style={styles.innerWrapperviewicon}>
            <Image
              source={require('../../img/icon/timeIcon.png')}
              style={styles.iconGreenClock}
            />
            <Text style={styles.texticon}>{item.Time} دقيقة</Text>
          </View>
          <View style={styles.innerWrapperviewicon}>
            <Image
              source={require('../../img/icon/bookIcon.png')}
              style={styles.iconGreenBook}
            />
            <Text style={styles.texticon}>{item.NumPages} صفحات</Text>
          </View>
        </View>
        <View style={styles.horiaon} />
        <Text style={styles.description}>{item.Description}</Text>
        <Text style={styles.titleSections}>لمن هذا الكتاب؟</Text>
        <Text style={styles.description}>{item.ForWhom}</Text>
        <Text style={styles.titleSections}>معلومات عن المؤلف</Text>
        <Text style={styles.description}>{item.AboutAuthor}</Text>
        <View style={styles.titlelist}>
          <For_You data={data1} name={'كتب مشابهة'} />
        </View>
      </ScrollView>
      <View>
        <TabNavigator data={item} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  ScrollView: {
    marginBottom: 50,
  },
  innerWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapperview2: {
    paddingHorizontal: 20,
  },
  innerWrapperview3: {
    margin: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  innerWrapperview4: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  innerWrapperview5: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,

    position: 'relative',
    bottom: 100,
    right: 10,
  },
  innerWrapperviewicon: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tex: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: WIDTH + 70,
    height: Height + 80,
    borderRadius: 20,
    flexDirection: 'row',
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texticon: {
    marginHorizontal: 10,
    color: 'black',
  },
  author: {
    color: '#1e7145',
    fontSize: 17,
  },
  title: {
    color: 'black',
    fontSize: 30,
  },
  description: {
    margin: 10,
    marginHorizontal: 20,
    fontSize: 20,
  },
  titleSections: {
    margin: 10,
    marginHorizontal: 20,
    color: '#1e7145',
    fontSize: 17,
  },
  titlelist: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  horiaon: {
    margin: 10,
    marginHorizontal: 20,
    height: 1,
    backgroundColor: '#bbb',
  },
  icon: {
    width: 20,
    height: 20,
  },
  wrappericon: {
    backgroundColor: '#E5E5E5',
    borderRadius: 100,
    padding: 5,
  },
  iconGreenClock: {
    width: 25,
    height: 25,
  },
  iconGreenBook: {
    width: 40,
    height: 40,
  },
});

export default BookDescriptionScreen;

/*<TouchableOpacity style={styles.Button}></TouchableOpacity>
      <View style={styles.vertical} />
      <TouchableOpacity style={styles.Button}></TouchableOpacity>*/
