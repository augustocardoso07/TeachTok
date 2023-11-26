import { StyleSheet, Text, View } from 'react-native';

const Discover = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Discover</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default Discover;
