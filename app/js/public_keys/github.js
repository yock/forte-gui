import 'whatwg-fetch';

class Github {
  static get(path) {
    return Promise.resolve(
      fetch(`https://api.github.com/${path}`).then((response) => {
        return response.text();
      }).then((body) => {
        return JSON.parse(body);
      })
    );
  }
}

export default Github;
