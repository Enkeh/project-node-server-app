import model from "./model.js";

export const findAllWatched = () => model.find();
export const createUserWatchedShow = (userId, showId, showName) =>
  model.create({ user: userId, showId: showId, showName: showName });
export const deleteUserWatchedShow = (userId, showId) =>
  model.deleteOne({ user: userId, showId: showId });
export const findShowsUserWatched = (userId) => model.find({ user: userId });
export const findUsersWhoWatchedShow = (showId) =>
  model.find({ showId: showId });
export const findIfUserWatchedShow = (userId, showId) => 
  model.find({ user: userId, showId: showId });
