#!/usr/bin/node

export default function handleResponseFromAPI(promise) {
  const objData = { status: 200, body: 'success' };

  return promise
    .then(() => objData)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
