import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesShow = (userId, showId, showName) =>
  model.create({ user: userId, showId: showId, showName: showName });
export const deleteUserLikesShow = (userId, showId) =>
  model.deleteOne({ user: userId, showId: showId });
export const findShowsUserLikes = (userId) => model.find({ user: userId });
export const findUsersWhoLikeShow = (showId) =>
  model.find({ showId: showId });
export const findIfUserLikesShow = (userId, showId) => 
  model.find({ user: userId, showId: showId });
