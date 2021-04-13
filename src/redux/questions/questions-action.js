import { createAction } from '@reduxjs/toolkit';

const fetchQuestionsRequuest = createAction('questions/fetchQuestionsRequuest');
const fetchQuestionsSuccess = createAction('questions/fetchQuestionsSuccess');
const fetchQuestionsError = createAction('questions/fetchQuestionsError');

const resultRightAnswer = createAction('questions/resultRightAnswer');

const action = {
  fetchQuestionsRequuest,
  fetchQuestionsSuccess,
  fetchQuestionsError,
  resultRightAnswer,
};
export default action;
