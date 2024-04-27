#!/usr/bin/node

import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const userPromise = await createUser();
    const photoPromise = await uploadPhoto();

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error(error);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
