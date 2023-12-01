import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesShow = (userId, showId) =>
  model.create({ user: userId, showId: showId });
export const findShowsUserLikes = (userId) => model.find({ user: userId });
export const findUsersWhoLikeShow = (showId) =>
  model.find({ showId: showId });
