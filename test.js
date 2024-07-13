const alert = require('./index.js');

alert()
alert({
    type:'success',
    msg:"All done!",
    name : "DONE"
})
alert({
    type:'warning',
    msg:"You didn't add something!"
})
alert({
    type:'info',
    msg:"Awais is awesome!"
})
alert({
    type:'error',
    msg:"something went wrong!"
})
