import { 
    StyleSheet,
    Text, 
    View, 
    TouchableOpacity
  } from 'react-native';
import Colors from '../constantes/Colors';
  
  
  export default function Grid() {
    return (
        <View style={styles.containerGrid}>
            <View style={styles.categorias}>
                <TouchableOpacity>
                    <View style={styles.listFilter}>
                        <Text style={styles.listItemActive}>Mujer</Text>
                        <Text style={styles.listItem}>Hombre</Text>
                        <Text style={styles.listItem}>Niño</Text>
                        <Text style={styles.listItem}>Más</Text>
                    </View> 
                </TouchableOpacity>
               
            </View>
            <View style={styles.catalogo}>
                <Text>catalogo</Text>
            </View>
        </View>
        
    );
  }
  
  const styles = StyleSheet.create({
    containerGrid:{
        flex:10,
        width: "100%",
        padding:20
    },
    catalogo: {
      flex:10,
      width: "100%"
    },
    listFilter:{
        flex:1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        paddingBottom:20
    },
    listItem:{
        marginLeft: 5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
        padding:10,
    },
    listItemActive:{
        marginLeft: 5,
        borderWidth: 1,
        borderColor: Colors.accent,
        color: Colors.accent,
        paddingHorizontal:15,
        padding:10,
        borderRadius:10
    }
  });
  