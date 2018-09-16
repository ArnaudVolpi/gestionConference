var jsonConcat = require('json-concat');

jsonConcat({
    src: "db/data",
    dest: "db/data.json",
}, function(json){
    console.log(json);
});