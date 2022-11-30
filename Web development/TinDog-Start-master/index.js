const {
    createPool


} = require('mysql');

const pool = createPool({
    host : "localhost",
    user: "root",
    password: "",
    database: "aseem",
    connectionLimit : 10
})

pool.query(`select * from dog`,(err,result,fields) =>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})
// }, 200)
 /* app.get('/', function(req,res)){
	 const config ={
		 user: 'SA',
		 password: 'Your_Password',
		 server: 'localhost',
		 database:'aseem'
	 };
	 mssql.connect(config, function (err){
		 var request = new mssql.Request();
		 request.query('select * from student',
	 function (err,records){
		 if (err) console.log(err)
		 res.send(records);
	 });
 });
});
var server =app.listen(5000, function(){
	console.log('Server is listening at port 5000');
});*/
