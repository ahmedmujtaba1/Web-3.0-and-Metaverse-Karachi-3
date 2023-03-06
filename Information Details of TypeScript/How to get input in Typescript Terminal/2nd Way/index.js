"use strict";
process.stdin.setEncoding('utf-8');
process.stdout.write('Enter your name: ');
process.stdin.on('data', (data) => {
    const name = data.trim();
    console.log(`Hello, ${name}!`);
    process.stdin.pause();
});
