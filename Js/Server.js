let http=require(`http`);
let url=require(`url`);
let fs=require(`fs`);

let reqQueue=[];
console.log(`create server listen 3001`);
http.createServer((req,res)=>{
    var pathObj=url.parse(req.url,true);
    if(pathObj.pathname===`/send`)
    {
        console.log(pathObj.query.msg);
        res.end(`ok`);
        while(reqQueue.length>0)
        {
            reqQueue.shift().end(pathObj.query.msg);
        }
    
    }
    else if(pathObj.pathname===`/getMsg`)
    {
        reqQueue.push(res);
    }  
    else
    {
     fs.readFile(__dirname+`/index.html`,function(err,data){
        res.end(data);
     });
    }
}).listen(3001)