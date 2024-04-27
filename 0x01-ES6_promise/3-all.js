#!/usr/bin/node

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((info) => {
      console.log(`${info[0].body} ${info[1].firstName} ${info[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
