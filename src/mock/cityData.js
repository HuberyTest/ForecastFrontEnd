import fetchMock from 'fetch-mock';

export default fetchMock.mock("/api/v1/forecast/cities", {
    code: 20000,
    message: "",
    data: [
        {
            id: "11", 
            name: "London"
        },
        {
            id: "12", 
            name: "NewYork"
        },
        {
            id: "13", 
            name: "Tokeyo"
        }
    ]
});

