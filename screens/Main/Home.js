import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  SectionList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  data1,
  dataBook_Reviews,
  dataSections,
  dataGreen_folders,
} from '../../src/components/First';

import Form from '../../src/components/Form';
import Search from '../../src/components/Search';
import For_You from '../../src/components/For_You';
import Book_Reviews from '../../src/components/Book_Reviews.js';
import Sections from '../../src/components/Sections.js';
import Green_folders from '../../src/components/Green_folders.js';
//ads
import {BannerAd, TestIds} from '@react-native-admob/admob';

//end ads

const SectionSearch = [{comp: <Search />, id: 1}];

const SectionFor_You = [
  {comp: <For_You data={data1} name={'خصصنا لك'} />, id: 2},
];

const SectionBook_Reviews = [
  {comp: <Book_Reviews data={dataBook_Reviews} />, id: 3},
];
const SectionSections = [{comp: <Sections data={dataSections} />, id: 4}];

const SectionLatest_summaries = [
  {comp: <For_You data={data1} name={'أحدث ملخصات أخضر'} />, id: 5},
];

const SectionMost_Read = [
  {comp: <For_You data={data1} name={'الأكثر قرائة'} />, id: 6},
];

const SectionGreen_folders = [
  {comp: <Green_folders data={dataGreen_folders} />, id: 7},
];

const Section = [
  {data: SectionSearch},
  {data: SectionFor_You},
  {data: SectionBook_Reviews},
  {data: SectionSections},
  {data: SectionLatest_summaries},
  {data: SectionMost_Read},
  {data: SectionGreen_folders},
];

const keyExtractor = (item, index) => item.id.toString();
const RenderItem = ({index, item, section}) => {
  const {comp} = item;
  return <View>{comp}</View>;
};

const Home = () => {
  const bannerRef = useRef(null);
  const [datas, setDatas] = useState(Section);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <BannerAd size={'ADAPTIVE_BANNER'} unitId={TestIds.BANNER} />
      </View>
      <ScrollView>
        <Form />
        <SectionList
          sections={datas}
          keyExtractor={keyExtractor}
          renderItem={RenderItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0F0F0',
  },
  tex: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Home;
