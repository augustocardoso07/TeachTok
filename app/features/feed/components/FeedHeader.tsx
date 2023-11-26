import { SearchIcon, TimerIcon } from '@@/assets/icons';
import { StyleSheet, Text, View } from 'react-native';
import { useTimer } from '../hooks/useTimer';

const Timer = () => {
  const time = useTimer();
  return <Text style={styles.headerTimeText}>{time}</Text>;
};

export const FeedHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTimer}>
        <TimerIcon color="white" />
        <Timer />
      </View>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>For You</Text>
        <View style={styles.headerTitleLine} />
      </View>
      <View style={styles.headerSearch}>
        <SearchIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerTimer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    opacity: 0.5,
    width: 70,
  },
  headerTimeText: {
    color: 'white',
    fontSize: 14,
  },
  headerSearch: {
    width: 50,
    alignItems: 'flex-end',
  },
  headerTitleContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  headerTitleLine: {
    backgroundColor: 'white',
    height: 4,
    width: 36,
    position: 'absolute',
    bottom: -10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
