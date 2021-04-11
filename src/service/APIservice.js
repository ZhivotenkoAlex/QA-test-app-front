async function fetchTechQuestions() {
  const response = await fetch(
    'https://safe-bayou-94848.herokuapp.com/api/test-tech',
  );

  return await response.json();
}

async function fetchTheoryQuestions() {
  const response = await fetch(
    'https://safe-bayou-94848.herokuapp.com/api/test-theory',
  );

  return await response.json();
}

const api = {
  fetchTechQuestions,
  fetchTheoryQuestions,
};

export default api;
