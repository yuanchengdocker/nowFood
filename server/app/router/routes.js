const router = require('koa-router')();
import index from '../controller/indexController'

function addMapping(router, mapping) {
    const api = '/now'
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            path = api + path
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            path = api + path
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            path = api + path
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        } else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            path = api + path
            router.del(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addController(router, allC){
    allC.map((c)=>{
        addMapping(router,c)
    })
}

addController(router, [index])

export default router