import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';

export default function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{width: '100%', height: 200}}
        onPress={() => {
          setClicked(true);
        }}>
        <Video
          source={{
            uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          style={styles.video}
          muted
          resizeMode="contain"
        />
        {clicked && (
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                {/* <Image
                  source={require('C:UsersDharmDocumentsNATIVE APPS\videoPlayerassets\backward.png')}
                  style={{width: 30, height: 30, tintColor: 'white'}}
                /> */}
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: '100%',
    height: 200,
  },
});
// https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
