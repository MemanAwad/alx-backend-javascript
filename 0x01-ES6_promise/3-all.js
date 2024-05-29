import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((result) => {
      const [photoResult, userResult] = result;
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
