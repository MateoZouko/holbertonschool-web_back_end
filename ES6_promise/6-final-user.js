import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);
  return Promise.all([signUpPromise, uploadPromise])
    .then(([signUpResult, uploadResult]) => {
      return results.map((result) => {
        return [
          { status: 'fulfilled', value: signUpResult },
          { status: 'fulfilled', value: uploadResult },
        ];
      });
    })
    .catch((error) => {
      return [
        {
          status: 'rejected',
          value: error,
        },
      ];
    });
}
