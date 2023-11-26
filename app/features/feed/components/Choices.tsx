import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Option } from '../types';
import { useState } from 'react';

type ChoicesProps = {
  options: Option[];
  correctOptions: Option[];
};

export const Choices = ({ options, correctOptions }: ChoicesProps) => {
  const [studentAnswer, setStudentAnswer] = useState<null | Option>(null);

  const revealAnswer = (studentOption: Option) => {
    setStudentAnswer(studentOption);
  };

  return (
    <View style={styles.options}>
      {options.map((option, index) => {
        const shouldRevealAnswer = studentAnswer !== null && correctOptions.some((o) => o.id === option.id);
        const isStudentChoice = studentAnswer !== null && studentAnswer.id === option.id;
        const isCorrect = studentAnswer !== null && correctOptions.some((o) => o.id === studentAnswer.id);
        const imageResult = isCorrect
          ? require('@@/assets/images/correct.gif')
          : require('@@/assets/images/incorrect.gif');
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              shouldRevealAnswer && styles.correctOption,
              isStudentChoice && !isCorrect && styles.incorrectOption,
            ]}
            onPress={() => revealAnswer(option)}
          >
            <Text style={styles.optionText}>{option.answer}</Text>
            <View>
              {isStudentChoice && (
                <Image
                  source={imageResult}
                  style={isCorrect ? styles.questionCorrectResultImage : styles.questionIncorrectResultImage}
                />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  options: {
    width: '100%',
    paddingVertical: 24,
    gap: 8,
  },
  option: {
    backgroundColor: '#ffffff75',
    padding: 20,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  optionText: {
    fontSize: Platform.OS === 'android' ? 14 : 16,
    color: 'white',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 2,
    width: '80%',
  },
  questionCorrectResultImage: {
    position: 'absolute',
    right: -10,
    top: -25,
    width: 40,
    height: 40,
    transform: [{ rotateY: '180deg' }],
  },
  questionIncorrectResultImage: {
    position: 'absolute',
    right: -10,
    top: -15,
    width: 40,
    height: 40,
    transform: [{ rotate: '180deg' }],
  },
  correctOption: {
    backgroundColor: '#00ff0069',
  },
  incorrectOption: {
    backgroundColor: '#dc5f5fb8',
  },
});
