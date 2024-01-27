export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
  if (success) {
    const objeto = {
    status: 200, 
    body: 'Success'
    };
    resolve(objeto);
  } else {
      const error = new Error('The fake API is not working currently')
      reject(error)
  }
  });
}
