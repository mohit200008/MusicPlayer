import React, {useState, useEffect} from 'react'
import { setUpPlayer,addTrack } from '../musicPlayerService'
import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import MusicPlayer from './screens/MusicPlayer'

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setUp() {
    let isSetup = await setUpPlayer()

    if(isSetup) {
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }
  useEffect(() => {
    setUp()
  },[])

  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }
  return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle={"light-content"} />
         <MusicPlayer />
      </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})