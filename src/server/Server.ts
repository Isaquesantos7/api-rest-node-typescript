import express from "express";

const server = express();

server.get('/api/teste', (_, res) => {
  res.status(200).json({"message": "sucesso."});
});

export { server };