import { ImageBackground, Text, StyleSheet, View, Platform, Dimensions } from 'react-native';
import { AddIcon, BookmarksIcon, CommentsIcon, LikeIcon, ShareIcon, YoutubeIcon } from '@@/assets/icons';
import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import Constants from 'expo-constants';
import { Choices } from './Choices';
import { MultiChoiceQuestion } from '../types';
import React from 'react';
import { FeedHeader } from './FeedHeader';

function splitString(input: string, length: number) {
  let result = [];
  let start = 0;
  let end = length;

  while (start < input.length) {
    while (input[end] !== ' ' && end < input.length) {
      end++;
    }

    result.push(input.slice(start, end));
    start = end + 1;
    end = start + length;
  }

  return result;
}

const actionBarButtons = [
  { Icon: LikeIcon, text: '87', onclick: () => {} },
  { Icon: CommentsIcon, text: '2', onclick: () => {} },
  { Icon: BookmarksIcon, text: '203', onclick: () => {} },
  { Icon: ShareIcon, text: '17', onclick: () => {} },
];

type AvatarProps = {
  avatarUrl: string;
};

const Avatar = ({ avatarUrl }: AvatarProps) => {
  return (
    <View style={styles.avatarContainer}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <AddIcon size={22} style={styles.avatarPlusButton} />
    </View>
  );
};

type MultipleChoiceQuestionProps = {
  question: MultiChoiceQuestion;
};

export const MultipleChoiceQuestion = React.memo(({ question }: MultipleChoiceQuestionProps) => {
  const statementParts = splitString(question.question, 15);
  return (
    <ImageBackground source={{ uri: question.image }} style={styles.backgroundImg} imageStyle={{ opacity: 1 }}>
      <View style={styles.container}>
        <FeedHeader />
        <View style={styles.content}>
          <View style={styles.questionContainer}>
            <View style={styles.statement}>
              {statementParts.map((part, index) => (
                <Text key={index} style={styles.statementQuestion}>
                  {part}
                </Text>
              ))}
            </View>
            <Choices options={question.options} correctOptions={question.correct_options} />
            <View style={styles.details}>
              <Text style={styles.detailsTextTitle}>{question.user.name}</Text>
              <Text style={styles.detailsText}>{question.description}</Text>
            </View>
          </View>
          <View style={styles.aside}>
            <Avatar avatarUrl={question.user.avatar} />
            {actionBarButtons.map((item, index) => {
              const Icon = item.Icon;
              return (
                <View key={index} style={styles.footerTextIcon}>
                  <Icon size={30} color="white" />
                  <Text style={{ color: 'white', textAlign: 'center' }}>{item.text}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerPlaylist}>
            <YoutubeIcon size={12} />
            <Text style={styles.footerText}>Playlist • Unit 5: Period 5: 1865-1898</Text>
          </View>
          <FontAwesome name="chevron-right" size={12} color="white" />
        </View>
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: Dimensions.get('window').height,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Platform.OS === 'android' ? 20 : 78,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
  avatarPlusButton: {
    position: 'absolute',
    bottom: -9,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  footer: {
    height: 36,
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#161616',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
  footerPlaylist: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerTextIcon: {
    gap: 4,
  },
  questionContainer: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
  },

  aside: {
    height: '100%',
    width: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 24,
    paddingRight: 16,
  },
  statement: {
    flex: 1,
    width: '100%',
    paddingTop: 40,
  },
  statementQuestion: {
    color: 'white',
    fontSize: Platform.OS === 'android' ? 20 : 24,
    backgroundColor: '#0000008e',
    alignSelf: 'flex-start',
    paddingVertical: 4,
  },
  details: {
    width: '100%',
  },
  detailsTextTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  detailsText: {
    color: 'white',
    fontSize: 13,
  },
});
