import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View, Text, SafeAreaView, Button, Alert } from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text> HEllo world!!</Text>
        <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')} />
      </View>
    </SafeAreaView>
  );
}

export default App;
