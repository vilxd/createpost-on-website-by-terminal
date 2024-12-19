'use strict'

const fastify = require("fastify")({logger:true});
const path = require("path");

fastify.register(require("@fastify/mongodb"), {
  url: "your link"
})

fastify.register(require("@fastify/view"), {
    engine: {
      ejs: require("ejs")
    }
  })


fastify.register(require("./router"))


fastify.listen({port:3000}, (err) => {
    if(err) return err;

    console.log("SERVER LISTENING");
})
