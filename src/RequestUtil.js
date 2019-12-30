
const Domain = 	"http://47.92.227.178:8081/api";
function get(uri) {
    let req = {
        method:'GET',
        headers:{
            'Content-Type':'application/json;charset=UTF-8'
        },
        mode:'cors',
        cache:'default'
    }
    return fetch(Domain + uri, req)
        .then(res => res.json())
        .catch((err) => {
                console.error("fetch get error", err);
            }
        );
}

export default get;