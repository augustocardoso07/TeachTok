export type MultiChoiceQuestion = {
  type: string;
  id: number;
  playlist: string;
  description: string;
  question: string;
  image: string;
  options: Option[];
  correct_options: Option[];
  user: User;
};

export type User = {
  name: string;
  avatar: string;
};

export type Option = {
  id: string;
  answer: string;
};
