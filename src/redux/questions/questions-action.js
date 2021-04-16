import { createAction } from '@reduxjs/toolkit';

const fetchQuestionsRequuest = createAction('questions/fetchQuestionsRequuest');
const fetchQuestionsSuccess = createAction('questions/fetchQuestionsSuccess');
const fetchQuestionsError = createAction('questions/fetchQuestionsError');

const getRightAnswersRequuest = createAction(
  'questions/getRightAnswersRequuest',
);
const getRightAnswersSuccess = createAction('questions/getRightAnswersSuccess');
const getRightAnswersError = createAction('questions/getRightAnswersError');

// const resultRightAnswer = createAction('questions/resultRightAnswer');
const test = createAction('questions/test');
const visibleSpiner = createAction('questions/visibleSpiner');

const action = {
  fetchQuestionsRequuest,
  fetchQuestionsSuccess,
  fetchQuestionsError,
  getRightAnswersRequuest,
  getRightAnswersSuccess,
  getRightAnswersError,
  // resultRightAnswer,
  test,
  visibleSpiner,
};
export default action;
