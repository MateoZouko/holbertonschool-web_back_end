import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  Promise.all([promise1, promise2])
    .then(([photoResult, userResult]) => {
      const { body } = photoResult;
      const { firstName, lastName } = userResult;
      console.log(body, firstName, lastName);
    })
    .catch(() => {
      console.error('body firstName lastName');
    });
}
