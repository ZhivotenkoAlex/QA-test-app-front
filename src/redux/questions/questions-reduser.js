import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import action from './questions-action';

const techQustions = createReducer([], {
  [action.fetchQuestionsSuccess]: (state, action) => (state = action.payload),
});
const theoryQustions = createReducer([], {
  [action.fetchQuestionsSuccess]: (state, action) => (state = action.payload),
});
const rightAnswer = createReducer(null, {
  [action.getRightAnswersSuccess]: (state, action) => (state = action.payload),
});

const curentTest = createReducer('', {
  [action.test]: (state, action) => (state = action.payload),
});

export default combineReducers({
  techQustions,
  theoryQustions,
  rightAnswer,
  curentTest,
});
