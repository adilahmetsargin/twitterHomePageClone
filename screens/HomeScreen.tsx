import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import Feed from '../components/Feed/index'
import NewTweetButton from '../components/NewTweetButton/index'



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTweetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
