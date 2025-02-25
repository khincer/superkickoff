import fastify from "fastify";

const server = fastify({ logger: true });

server.get("/ping", async (req, res) => {
    return "pong\n";
});

server.listen({port:8080}, (err, address) => {
    if(err) {
        server.log.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});