import Bird, { birdSchema } from "../models/bird";

export const getAllBirds = async () => {
  const birds = await Bird.find({});
  return birds;
};

export const createBird = async (bird: any) => {
  //todo: add type checking
  const newbird = new Bird(bird);
  await newbird.save();
};

export const getBird = async (id: String) => {
  const bird = await Bird.findOne({ _id: id });
  return bird;
};

export const updateBird = async (id: String, bird: any) => {
  const updatedBird = await Bird.updateOne({ _id: id }, bird);

  return updatedBird.upsertedId;
};

export const deleteBird = async (id: String) => {
  const updatedBird = await Bird.deleteOne({ _id: id });

  return updatedBird.acknowledged;
};
