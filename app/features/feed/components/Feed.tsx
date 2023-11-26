import { FlatList, Text, useWindowDimensions } from 'react-native';
import { MultipleChoiceQuestion } from './MultipleChoiceQuestion';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getQuestionWithAnswer } from '../services/questions';

export const Feed = () => {
  const { height } = useWindowDimensions();

  const query = useInfiniteQuery({
    queryKey: ['feed'],
    queryFn: getQuestionWithAnswer,
    getNextPageParam: () => true,
    initialPageParam: true,
  });

  if (query.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (query.isError) {
    return <Text>Error: {query.error.message}</Text>;
  }

  return (
    <FlatList
      keyExtractor={(item, i) => item.id.toString() + i} // TO deal with duplicate keys
      data={query.data?.pages.flat()}
      bounces={false}
      pagingEnabled
      decelerationRate="fast"
      snapToInterval={height}
      disableIntervalMomentum
      onEndReachedThreshold={0.6}
      onEndReached={() => {
        query.fetchNextPage();
      }}
      renderItem={({ item }) => {
        return <MultipleChoiceQuestion question={item} />;
      }}
    />
  );
};
