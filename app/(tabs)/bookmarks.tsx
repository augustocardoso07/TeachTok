import { StyleSheet, Text, View } from 'react-native';

const Bookmarks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bookmarks</Text>
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

export default Bookmarks;
