import success from './1-promise';

export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      const objeto = {
        status: 200,
        body: success,
      };
      resolve(objeto);
      console.log('Got a response from the API');
    } else {
      const error = new Error();
      reject(error);
      console.log('Got a response from the API');
    }
  });
}
