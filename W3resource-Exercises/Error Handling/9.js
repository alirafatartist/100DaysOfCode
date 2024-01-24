// 9. Write a JavaScript program that uses a try-catch block to catch and handle a 'URIError' when decoding an invalid URI.

function decod(uri) {
  try {
    const decodedURI = decodeURI(uri);
    console.log('Decoded URI:', decodedURI);
  } catch (error) {
    if (error instanceof URIError) {
      console.log('URIError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}
decod("https://mozilla.org/?x=шеллы");
decod(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%%"
);
