import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  Promise.all([promise1, promise2])
    .then((result) => {
      let [result1, result2] = result;
      console.log(`${result1.body} ${result2.firstName} ${result2.lastName}`);
    })
    .catch(() => {
      console.error('body firstName lastName');
    });
}
