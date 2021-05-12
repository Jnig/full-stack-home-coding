import fastify from 'fastify';

const server = fastify();

interface IQuerystring {
  identifier: string;
}
server.get<{ Querystring: IQuerystring }>(
  '/api/get-result',
  async (request, reply) => {
    // implement logic to open the file results.json
    // and return the result for the provided identifier in the querystring
    return {};
  }
);

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
