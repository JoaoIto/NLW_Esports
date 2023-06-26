import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

app.get("/", async (requeste, response) => {
  return response.status(200).json("Start server!");
})
/* https://localhost:3333/ */
const prisma = new PrismaClient({
  log: ["query"],
});
// Listagem de games:

app.get("/games", async (requeste, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  return response.json([games]);
});

// Criação de um anúncio:
/* Usado método status(),  
indicando qual o formato que foi aceito: 
de sucesso ou não, de resposta da API é valida, etc... */

app.post("/ads", (requeste, response) => {
  return response.status(201).json([]);
});

// listagem de anúncios por game...
/* Colocada a propriedade dinâmica de ":" dois pontos, 
para que consigamos listar o ID do anúncios de game 
em sua resposta JSON */

app.get("/games/:id/ads", async (request, response) => {
  const gameID = request.params.id;
  const ads = await prisma.ad.findMany({
    select: {
        id: true,
        name: true, 
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hoursStart: true,
    },

    orderBy:{
        createAt: 'desc'
    }
  });
  return response.json([ads]);
});

// Buscar discord do player com ads ID

app.get("/ads/:id/discord", (request, response) => {
  // const adID =  request.params.id;
  return response.json([]);
});

app.listen(3333);
