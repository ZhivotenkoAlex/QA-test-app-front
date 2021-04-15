import axios from 'axios';

async function fetchTechQuestions() {
  const response = await fetch('http://localhost:3000/api/test-tech');

  return await response.json();
}

async function fetchTheoryQuestions() {
  const response = await fetch('http://localhost:3000/api/test-theory');

  return await response.json();
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
