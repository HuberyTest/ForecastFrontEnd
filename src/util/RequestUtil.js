
function get(uri) {
    let req = {
        method:'GET',
        headers:{
            'Content-Type':'application/json;charset=UTF-8'
        },
        cache:'default',
        credentials: 'same-origin'
    }
    return fetch("/api" + uri, req)
        .then(res => res.json())
        .catch((err) => {
                console.error("fetch get error", err);
            }
        );
}

export default get;