import API from '../../service/APIservice';
import action from './questions-action';

export const fetchTechQuestion = () => async dispatch => {
  dispatch(action.fetchQuestionsRequuest());
  try {
    const questions = await API.fetchTechQuestions();
    dispatch(action.fetchQuestionsSuccess(questions));
  } catch (error) {
    dispatch(action.fetchQuestionsError(error.message));
  }
};

export const fetchTheoryQuestion = () => async dispatch => {
  dispatch(action.fetchQuestionsRequuest());
  try {
    const questions = await API.fetchTheoryQuestions();
    dispatch(action.fetchQuestionsSuccess(questions));
  } catch (error) {
    dispatch(action.fetchQuestionsError(error.message));
  }
};
export const getRightAnswers = (body, curentTest) => async dispatch => {
  dispatch(action.getRightAnswersRequuest());
  try {
    const rightAnswer = await API.sendChekResults(body, curentTest);
    dispatch(action.getRightAnswersSuccess(rightAnswer));
  } catch (error) {
    dispatch(action.getRightAnswersError(error.message));
  }
};

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsAction.fetchContactsRequuest());
//   try {
//     const contacts = await API.FetchContacts();
//     dispatch(contactsAction.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsAction.fetchContactsError(error.message));
//   }
// };
