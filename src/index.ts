import { server } from "./server/Server";

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Servidor instanciado e operando na porta ", PORT));