


const router = (fastify, options) => {
    fastify.get("/", (req, res) => {
        return res.send("Welcome to my website!")
    })

    fastify.post("/create-post", async (req, res) => {
        const connectToDBPosts = req.server.mongo.db.collection("posts");
        const { title, description, date_of_creating, nameurl, author } = req.body;
        try{
            await connectToDBPosts.insertOne({ title:title, description: description, date_of_creating: date_of_creating, nameurl:nameurl, author: author});
            return res.status(200).send();
        }
        catch{
            return res.status(406).send();
        }
        
    })

    fastify.get("/:nameurl", async (req, res) => {
        const getPostNameurl = req.params.nameurl;
        const connectToDB = req.server.mongo.db.collection("posts");
        const getPost = await connectToDB.findOne({nameurl: getPostNameurl});

        if(getPost){
            return res.viewAsync("./public/post.ejs", {title: getPost.title, description: getPost.description, date_of_creating: getPost.date_of_creating, author: getPost.author})
        }
        else{
            return res.status(404).send()
        }
    })

}

module.exports = router
