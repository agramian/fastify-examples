const fastify = require('fastify')
const compress = require('fastify-compress');

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.register(compress);

server.listen(8080, (err, address) => {
  if(err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
