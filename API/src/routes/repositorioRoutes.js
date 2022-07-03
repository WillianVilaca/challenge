import express from "express";
import RepositorioController from "../controllers/repositorioController.js";

const router = express.Router();

router
    .get("/repositorios", RepositorioController.buscaRepositorio)    


export default router;