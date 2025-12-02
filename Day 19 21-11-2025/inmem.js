//caching--store some data in to the cache.-request to the same data-fetched from cache-cache hit
//dont the data in cahce-
//ttl-time to live
//node-cache

// download the package before using this code
// npm install node-cache

// const NodeCache = require('node-cache');
// const cache = new NodeCache({ stdTTL: 5});
// cache.set("test", "HelloStoredInCache");
// console.log("Stored Value: ", cache.get("test"));

// setTimeout(() => {
//     console.log("After 3 seconds, Value: ", cache.get("test")); // should be undefined after ttl
// }, 3000);

// setTimeout(() => {
//     console.log("After 6 seconds, Value: ", cache.get("test"));
// }, 6000);

// ****************************************************************** //

const NodeCache = require('node-cache')
const cache = new NodeCache({stdTTL: 5})

function fetchUser(id){
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = {
                id,
                name: `user${id}`,
                email: `user${id}@gmail.com`
            };
            resolve(user)
        }, 2000)
    })
}

function getUser(id){
    const cachedUser = cache.get(id)
    
    if(cachedUser){
        console.log("Cache Hit")
        return Promise.resolve(cachedUser)
    }
    
    console.log("Cache Miss - Fetching from DB")
    
    return fetchUser(id).then(user => {
        cache.set(id, user)
        return user
    })
}

getUser('123').then(user => {
    console.log("First Fetch Result:", user)
})

setTimeout(() => {
    getUser('123').then(user => { 
        console.log("After 3 seconds (Expected Hit):", user)
    })
}, 3000)

setTimeout(() => {
    getUser('123').then(user => { 
        console.log("After 6 seconds (Expected Hit):", user)
    })
}, 6000)