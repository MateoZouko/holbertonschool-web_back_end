function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const exito = true;

    if (exito) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}
