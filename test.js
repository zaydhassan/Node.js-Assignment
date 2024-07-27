const searchImages = require('./pixabay.js');

async function testSearch() {
  const query = 'cats';
  try {
    const result = await searchImages(query);
    console.log('Search results:', result);
  } catch (error) {
    console.error('Error during search:', error);
  }
}

testSearch();
