import { KEYWORD_API } from '../../constants/api';

class KeywordsService {
  constructor(url = '') {
    this.url = url
    this.getKeywords = this.getKeywords.bind(this);
  }

  async getKeywords() {
    try {
      const response = await fetch(this.url)
        .then((response) => {
          return response.json();
        })

      return response.keywords;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
}

const Service = new KeywordsService(KEYWORD_API)

export default Service;
export { Service as KeywordsService }
