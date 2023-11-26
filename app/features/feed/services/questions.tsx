import axios from 'axios';
// fetch questions using axios with base as https://cross-platform.rp.devfactory.com
//

const baseUrl = 'https://cross-platform.rp.devfactory.com';

export const getQuestion = async () => {
  const response = await axios.get(`${baseUrl}/for_you`);
  return response.data;
};

export const getAnswer = async (id: number) => {
  const response = await axios.get(`${baseUrl}/reveal?id=${id} `);
  return response.data;
};

export const getQuestionWithAnswer = async () => {
  const question = await getQuestion();
  const answer = await getAnswer(question.id);
  const result = [{ ...question, ...answer }];
  return result;
};
