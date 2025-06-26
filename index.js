import chalk from 'chalk';

import axios from 'axios';

console.log('Hello Boolean');

console.log(chalk.bgRed(process.env.SUPER_SECRET_KEY));

axios.get('https://lanciweb.github.io/demo/api/pictures/')
.then(function (response) {
    console.log(response.data);
});

console.log(process.argv[2]);

const replacedText = process.argv[2];

console.log(replacedText.replace("Boolean", "Tutors!"));
