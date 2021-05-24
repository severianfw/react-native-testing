import React from 'react';
import {View, ScrollView} from 'react-native';
import {SampleComponent} from './SampleComponent';
import StylingComponent from './StylingComponent';

// Main Functional Component
const App = () => {
  return (
    <View>
      <ScrollView>
        <StylingComponent />
        <SampleComponent />
      </ScrollView>
    </View>
  );
};

export default App;
