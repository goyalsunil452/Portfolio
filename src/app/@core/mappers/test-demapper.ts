let transform = require('node-json-transform').transform;

//let transform = require('').transform;

export function testDeMapper(data:any){
    var map = {
        item :{
            name:'name',
            status : 'status',
            id:'id'
        },
        operate:[
            {
                run: function(val:any){
                    return val ? val :null
                }
            },
            {
                run: function(val:any){
                    if(val.lenght > 0) {
                        return val.map((x:any)=> x.name)
                    }
                }
            }
        ]
    }
    return transform(data,map)
}