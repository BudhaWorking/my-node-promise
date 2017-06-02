/*function service(){
   return "This is callback"
}
var array = [];

var obj ={
	name : "Abhi",
	city : "banglore"
}

function sample(name){
	console.log(name())
		console.log(name())
			console.log(name())
				console.log(name())
}
sample(service)*/

//var promise = reqiure("promise")

function getData(val, err){
	return new Promise(function(resolve, reject){
		if(err){
			reject(err)
		}
		resolve(val)
	})
}

getData(1, "i am the error")
.then(function(data){
	console.log(data)
})
.catch(function(err){
	console.log("this is the error block")
	console.log(err)
})


