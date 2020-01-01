import fetchMock from 'fetch-mock';

export default fetchMock.mock(/\/forecast\/city\/\d*/i, function (url) {
    return {
        code: 20000,
        message: "",
        data: {
            updateTime: (new Date()).getTime() / 1000,
            weather: Math.ceil(Math.random() * 100000),
            temperature: Math.ceil(Math.random() * 30),
            windSpeed: Math.round(Math.random() * 1000) / 100
        }
    }
});