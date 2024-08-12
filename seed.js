const tuf=require("./models/tuf")

async function seed() {
    await tuf.deleteMany();
    await tuf.create({visibility:true,timer:10,content:"Life is TUF",link:'https://takeuforward.org/'});
    console.log('db seeded');
}

module.exports=seed
