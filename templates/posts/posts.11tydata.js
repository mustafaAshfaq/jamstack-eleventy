const wretch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
module.exports= async function posts(){
    return await wretch('https://jsonplaiceholder.typicode.com/posts')
   .then(res=>res.json())
   .then(posts=>{return {posts:posts};})
    .catch(error=>{return {posts:`api-error ${error}`};})
}