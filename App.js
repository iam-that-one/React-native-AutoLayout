import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import { nft01, nft02, nft03, nft04, nft05, nft07 } from './components/assets';

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.container}>
        <View style={{ flex: 1, margin: 20, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 360, width: 360, shadowColor: 'gray', shadowOpacity: 1 }}>
          <Image
            source={nft01}
            resizeMode='cover'
            style={styles.image} 
            />
          <View style={styles.crimsonText}>
            <Text>Abstracto #312</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flex: 1, margin: 20, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 300, width: 300, shadowColor: 'gray', shadowOpacity: 1 }}>
            <Image
              source={nft02}
              resizeMode='cover'
              style={styles.image} 
               />
            <View style={styles.darkseagreenText}>
              <Text>Green Coins</Text>
            </View>
          </View>
          <View style={{ flex: 1, margin: 20, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 300, width: 300, shadowColor: 'gray', shadowOpacity: 1 }}>
            <Image
              source={nft03}
              resizeMode='cover'
              style={styles.image} 
              />
            <View style={styles.darkgoldenrodText}>
              <Text>NFT coins race</Text>
            </View>
          </View>
          <View style={{ flex: 1, margin: 20, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 300, width: 300, shadowColor: 'gray', shadowOpacity: 1 }}>
            <Image
              source={nft04}
              resizeMode='cover'
              style={styles.image} 
               />
            <View style={styles.lavenderText}>
              <Text>Nifty NFT</Text>
            </View>
          </View>
          <View style={{ flex: 1, margin: 20, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 300, width: 300, shadowColor: 'gray', shadowOpacity: 1 }}>
            <Image
              source={nft05}
              resizeMode='cover'
              style={styles.image} 
               />
            <View style={styles.deepskyblueText}>
              <Text>Colorful circles</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ flex: 1, margin: 20, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 360, width: 360, shadowColor: 'gray', shadowOpacity: 1 }}>
          <Image
            source={nft07}
            resizeMode='cover'
            style={styles.image} 
            />
          <View style={styles.darkgreyText}>
            <Text>Abstracto soulful art</Text>
          </View>
        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  darkgreyText:{
    padding: 10, 
    backgroundColor: 'darkgrey', 
    borderRadius: 20, 
    position: 'absolute',
     center: 0,
     shadowColor:'black',
     shadowOpacity:1
  },
  deepskyblueText:{
    padding: 10, 
    backgroundColor: 'deepskyblue', 
    borderRadius: 20, 
    position: 'absolute',
    center: 0,
    shadowColor:'black',
    shadowOpacity:1
  },
  lavenderText:{
    padding: 10, 
    backgroundColor: 'lavender', 
    borderRadius: 20, 
    position: 'absolute',
    center: 0,
    shadowColor:'black',
    shadowOpacity:1
  },
  darkgoldenrodText:{
    padding: 10, 
    backgroundColor: 'darkgoldenrod', 
    borderRadius: 20, 
    position: 'absolute',
    center: 0,
    shadowColor:'black',
    shadowOpacity:1
  },
  darkseagreenText:{
    padding: 10, 
    backgroundColor: 'darkseagreen', 
    borderRadius: 20, 
    position: 'absolute',
    center: 0,
    shadowColor:'black',
    shadowOpacity:1
  },
  crimsonText:{
    padding: 10, 
    backgroundColor: 'crimson', 
    borderRadius: 20, 
    position: 'absolute',
    center: 0,
    shadowColor:'black',
    shadowOpacity:1
  },
  image:{
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  card:{},
});
