import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import macbook from './yes.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={Styles.text}>Styling Component</Text>
      {/* <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#0abdf4',
            borderWidth: 2,
            borderColor: '#5f27cd',
            marginTop: 20,
            marginLeft: 20,
          }}
        /> */}
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 160, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2021
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 12,
            color: 'orange',
          }}>
          Rp. 25.000.000
        </Text>
        <Text style={{fontSize: 12, marginTop: 12}}>Jakarta Barat</Text>
        <View
          style={{
            backgroundColor: 'green',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Buy
          </Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 30,
  },
});

export default StylingComponent;
