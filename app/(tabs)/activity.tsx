import { StyleSheet, Text, View } from 'react-native';

const Activity = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Activity</Text>
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

export default Activity;
