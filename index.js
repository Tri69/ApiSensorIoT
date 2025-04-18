import express from "express";
import cors from "cors";
import {postModel, getModel} from "./src/postModel.js";

const RouteApp = express();
const PORT = 2005;

RouteApp.use(cors());
RouteApp.use(express.json());

RouteApp.get("/api/getsensor", getModel)
RouteApp.post("/api/postsensor", postModel);

RouteApp.listen(PORT, ()=> {
	console.log(`Server Running in port ${PORT}`);
})