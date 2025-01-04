import { getPosts, createPost, updatePost } from "../models/postsModels.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res){
    const posts = await getPosts();
    res.status(200).json(posts);
}

export async function criarPosts(req, res){
    const newPost = req.body;

    try {
        const postCreate = await createPost(newPost);
        
        res.status(200).json(postCreate);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function uploadImg(req, res){
    const newPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCreate = await createPost(newPost);
        const updateImg = `uploads/${postCreate.insertedId}.jpg`;
        fs.renameSync(req.file.path, updateImg);

        res.status(200).json(postCreate);
    } catch(erro) {
        console.error(erro.message);
        
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function putPosts(req, res){
    const id = req.params.id;
    const urlImg = `http://localhost:3000/${id}.jpg`;

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.jpg`);
        const descricao = await gerarDescricaoComGemini(imgBuffer);

        const post = {
            imgUrl: urlImg,
            descricao: descricao,
            alt: req.body.alt
        }

        const postCreate = await updatePost(id, post);
        res.status(200).json(postCreate);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}