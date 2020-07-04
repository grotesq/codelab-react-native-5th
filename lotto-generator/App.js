import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  // React.Fragment 실제 렌더링에 반영되지 않는 추상 컨테이너
  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.row }>
        <View style={ styles.ball }>
          <Text style={ styles.text }>1</Text>
        </View>
        <View style={ styles.ball }>
          <Text style={ styles.text }>11</Text>
        </View>
        <View style={ styles.ball }>
          <Text style={ styles.text }>21</Text>
        </View>
        <View style={ styles.ball }>
          <Text style={ styles.text }>31</Text>
        </View>
        <View style={ styles.ball }>
          <Text style={ styles.text }>41</Text>
        </View>
        <View style={ styles.ball }>
          <Text style={ styles.text }>45</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});
