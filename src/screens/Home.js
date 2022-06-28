import React from 'react';
import { Button, Text, View } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>List</Text>
      <Button
        title="go to the list screen"
        onPress={() => navigation.navigate('List')}
      />
      <Text>Item</Text>
      <Button
        title="go to the Item screen"
        onPress={() => navigation.navigate('Item')}
      />
    </View>
  );
};

export default Home;