import { Router } from "express";
import {
  createBird,
  deleteBird,
  getAllBirds,
  getBird,
  updateBird,
} from "../controllers/bird";
import { Request } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const allBirds = await getAllBirds();
  res.send(allBirds);
});

router.post("/create", async (req: Request, res) => {
  await createBird(req.body);
  res.send({ message: "Created" }).status(201);
});

router.get("/:id", async (req, res) => {
  const bird = await getBird(req.params.id);
  res.send(bird);
});

router.put("/:id", async (req, res) => {
  //todo: proper return message
  const bird = await updateBird(req.params.id, req.body);
  res.send(bird);
});

router.delete("/:id", async (req, res) => {
  const bird = await deleteBird(req.params.id);
  res.send(bird);
});

export default router;
