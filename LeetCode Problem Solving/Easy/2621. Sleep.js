async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}
console.log(sleep(100));
console.log(sleep(200));
console.log(sleep(1000));
console.log(sleep(5000));
