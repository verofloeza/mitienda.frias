import { 
  StyleSheet, 
  View,
} from 'react-native';
import Header from './componentes/Header';
import Grid from './screen/Grid';


export default function App() {
  return (
    <View style={styles.container}>

      <Header />

      <Grid/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  
});
