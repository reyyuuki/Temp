import { Pressable, StyleSheet } from 'react-native';
import { Link} from 'expo-router';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock Papper Scissors</Text>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Press the button of your choice before the hand stops. First to 3 wins.</Text>
        <Link href='game' asChild>
        <Pressable style={styles.button}>
          <Text style={styles.play}>PLAY VS.</Text>
          <Text style={styles.bot}>BOT</Text>
        </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#DAF7A6',
  },
  title: {
    fontSize: 60,
    flexWrap:'wrap',
    fontWeight: 'bold',
    marginBottom: 20,
    justifyContent:'center',
    alignItems:'center',
  },
  wrapper: {
    justifyContent:'space-around',
    alignItems:'center',
    width: '80%',
    height: '60%',
    borderRadius: 20,
    backgroundColor: 'white',
    padding:20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  heading: {
    fontSize:20,
    fontWeight:'bold'
  },
  button:{
    backgroundColor:'blue',
    width:'80%',
    height:'30%',
    borderRadius:20,
    flexDirection:'column',
    justifyContent:'center',
    paddingLeft:50,
    shadowColor: 'lightblue',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 2,  
    elevation: 5
  },
  play:{
    fontSize:15,
    fontWeight:'bold',
    color:'white'
  },
  bot:{
    fontSize:40,
    fontWeight:'900',
    color:'white'
  },
 
});
