import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {Component} from 'react';

export const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'blue'}} />
      <Text>Severian</Text>
      <Zenitsu />
      <Text>Mola</Text>
      <Text>Mordex</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxBlue />
      <Profile />
    </View>
  );
};

// Functional Component (Hooks)
const Zenitsu = () => {
  return <Text>Test</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

// Class Component
class BoxBlue extends Component {
  render() {
    return <Text>Ini component dr class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
          }}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini pantai</Text>
      </View>
    );
  }
}

// export default SampleComponent;
