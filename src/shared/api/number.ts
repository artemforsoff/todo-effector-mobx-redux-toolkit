import axios from 'axios';

// if you want to use this endpoint install https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
const getRandomNumber = () =>
    axios.get<string>('https://www.random.org/integers', {
        params: {
            num: 1,
            min: 1,
            max: 100,
            base: 10,
            format: 'plain',
            col: 1,
        },
    });

export const numberApi = {
    getRandomNumber,
};
