import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  return Promise.all([promise1, promise2])
    .then(([photoResult, userResult]) => {
      const { body } = photoResult;
      const { firstName, lastName } = userResult;
      const text = (`${body} ${firstName} ${lastName}`);
      console.log(text);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
