import React from 'react';
import {Text, View} from 'react-native';
import RNExitApp from 'react-native-exit-app';

const App = () => {
  const onExit = () => {
    RNExitApp.exitApp();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text
        onPress={onExit}
        style={{fontSize: 20, color: 'red', fontWeight: '600'}}>
        Exit App
      </Text>
    </View>
  );
};

export default App;
