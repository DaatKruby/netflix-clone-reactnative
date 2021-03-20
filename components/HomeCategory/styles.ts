import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 100,
      },
      image:{
        width: 150,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        margin: 5,
      }, 
      title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
      }
});


export default styles;