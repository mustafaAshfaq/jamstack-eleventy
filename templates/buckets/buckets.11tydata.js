var minio = require("minio");
var minioClient= new minio.Client({
    endpoint:'play.min.io',
    port: 9000,
    useSSL:true,
    accessKey:'iaphackuser',
    secretKey: 'password'
});
module.exports= async function(){
    return await getBuckets()
                .then(buckets=> {return {buckets};} )
                .catch (err=> {return {buckets:`api-error`};})
}
function getBuckets(){
     return new Promise((res,rej)=>{
        minioClient.listBuckets(function(err, buckets) {
            if (err) rej(err);
            else if(buckets) res(buckets);
            else res([]);
          })
     })
    
}
