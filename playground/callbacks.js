var getUser = (id, callback) => {
  var user = {
    id : id,
    name : 'Rupal'
  };
  setTimeout(()=> {
    callback(user);
  },3000)
  //callback(user);
};

getUser(31,(userObj) => { //The name doesn't matter, all that matters is argument position while calling the method
  console.log(userObj);
});
