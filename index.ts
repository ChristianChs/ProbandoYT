const {search} =  require('walle-utils')

async function test(te) {
    var info= await search(te)
    console.log(info)
}

test("Daniela darcourt")