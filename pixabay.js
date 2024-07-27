const axios = require('axios');

const PIXABAY_API_KEY = '45144423-96b2fa911614230dbbef334ec'; 
const PIXABAY_API_URL = 'https://pixabay.com/api/';

async function searchImages(query) {
  try {
    const response = await axios.get(PIXABAY_API_URL, {
      params: {
        key: PIXABAY_API_KEY,
        q: encodeURIComponent(query)
      }
    });
    const images = response.data.hits.map(hit => ({
      imageUrl: hit.webformatURL,
      imageAlt: hit.tags.replace(',', ', ')
    }));

    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

module.exports = searchImages;
