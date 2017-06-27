let express = require('express');
let app=express();
let users=[{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}];
app.get('/users',function(req,res){
	res.send(`
	print(${JSON.stringify(users)})
`)
});
app.listen(9090);
