function randomDelay() {
    const delay = Math.floor(Math.random() * 20 + 1) * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    })
}
randomDelay().then(delay => console.log(`There appears to have been a delay of ${delay} milliseconds.`)).catch(delay => console.log(`There appears to be a failure because of the delay of ${delay} milliseconds.`))