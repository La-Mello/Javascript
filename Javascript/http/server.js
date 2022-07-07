const http=require('http');
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'});


const server=http.createServer((req,res)=>{

    switch (req.url) {
        case '/':
            res.statusCode=200;
            res.end("Home page");
            break;

        case '/about':
            res.statusCode=200;
            res.end("About Page")
            break;
    
        case '/contacts':
            res.statusCode=200;
            res.end("Contacts Page")
            break;
        default:
            res.statusCode=404
            res.end("404 error !!!\nPage not Found")
            break;
    }

})

const PORT=3000 || process.env.PORT;


server.listen(PORT,()=>{
    console.log(`Server started at http:/localhost:${PORT}`);
})

