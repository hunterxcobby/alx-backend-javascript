import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const allSettled = [];

  try {
    const user = await signUpUser(firstName, lastName);
    allSettled.push({
      status: 'fulfilled',
      value: user,
    });
  } catch (error) {
    allSettled.push({
      status: 'rejected',
      value: error.toString(),
    });
  }

  try {
    const photo = await uploadPhoto(fileName);
    allSettled.push({
      status: 'fulfilled',
      value: photo,
    });
  } catch (error) {
    allSettled.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  return allSettled;
}
