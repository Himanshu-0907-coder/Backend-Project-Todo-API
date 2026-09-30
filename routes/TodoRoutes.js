import express from "express";
import { createUser , getUser, updateTodo, updatePatchTodo, deleteTodos} from "../controller/todoController.js";

const router = express.Router();
//post
router.post('/',createUser);
//get
router.get('/',getUser);
//Put
router.put('/:id',updateTodo);
//patch
router.patch('/:id',updatePatchTodo);
//Delete
router.delete('/:id',deleteTodos)
export default router