import model from "./model.js";

export const findAllCurated = () => model.find();
export const createUserCuratedShow = (userId, showId, userName, showName) =>
  model.create({ user: userId, showId: showId, userName: userName, showName: showName });
export const deleteUserCuratedShow = (showId) =>
  model.deleteOne({ showId: showId });
export const findShowsUserCurated = (userId) => model.find({ user: userId });
export const findUsersWhoCuratedShow = (showId) =>
  model.find({ showId: showId });
export const findIfUserCuratedShow = (userId, showId) => 
  model.find({ user: userId, showId: showId });
