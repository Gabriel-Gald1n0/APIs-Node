import express from "express"
import multer from "multer";
import cors from "cors";

import { listarPosts, criarPosts, uploadImg, putPosts } from "../controllers/postsControllers.js";

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200 
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
  
const upload = multer({ dest: "./uploads", storage})

const routes = (app) => {
    app.use(cors(corsOptions));

    app.use(express.json());

    app.get("/posts", listarPosts);
    app.post("/posts", criarPosts);
    app.post("/upload", upload.single("imagem"), uploadImg);
    app.put("/upload/:id", putPosts);
}

export default routes;

