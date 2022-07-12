import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';

const ListBookContent = ({route, navigation}, state) => {
  const {content} = route.params;

  return content ? (
    <View>
      {content.map((T, index) => {
        return (
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                navigation.setParams({indexId: 3});
                const data = {content, indexs: index};
                navigation.replace('قرائة', {data});
              }}>
              <View style={styles.view}>
                <Text style={styles.textnum}>{index == 0 ? null : index}</Text>
                <Text style={styles.textti}>{T.title}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.horiaon} />
          </ScrollView>
        );
      })}
    </View>
  ) : (
    <View>
      <Text>null</Text>
    </View>
  );
};

export const Indexlist = () => {};

export default ListBookContent;

const styles = StyleSheet.create({
  horiaon: {
    marginHorizontal: 10,
    height: 1,
    backgroundColor: '#bbb',
    marginTop: 15,
    paddingBottom: 0,
  },
  view: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  textnum: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  textti: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 20,
  },
});
