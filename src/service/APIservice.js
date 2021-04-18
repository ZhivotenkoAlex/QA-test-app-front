import axios from 'axios';

async function fetchTechQuestions() {
  const { data } = await axios.get('/test-tech');

  return data;
}

async function fetchTheoryQuestions() {
  const { data } = await axios.get('/test-theory');

  return data;
}

async function sendChekResults(result, curentTest) {
  const { data } = await axios.post(
    curentTest === 'tech'
      ? '/test-tech/right-answers'
      : '/test-theory/right-answers',
    result,
  );

  return data.data.rightAnswer;
}

const api = {
  fetchTechQuestions,
  fetchTheoryQuestions,
  sendChekResults,
};

export default api;
