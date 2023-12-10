import * as dao from "./dao.js";

function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {
    console.log("findAllLikes");
    const likes = await dao.findAllLikes();
    res.send(likes);
  };
  const createUserLikesShow = async (req, res) => {
    const { userId, showId, showName } = req.params;
    const like = await dao.createUserLikesShow(userId, showId, showName);
    res.send(like);
  };
  const deleteUserLikesShow = async (req, res) => {
    const { userId, showId } = req.params;
    const like = await dao.deleteUserLikesShow(userId, showId);
    res.send(like);
  };
  const findShowsUserLikes = async (req, res) => {
    const { userId } = req.params;
    const likes = await dao.findShowsUserLikes(userId);
    res.send(likes);
  };
  const findUsersWhoLikeShow = async (req, res) => {
    const { showId } = req.params;
    const likes = await dao.findUsersWhoLikeShow(showId);
    res.send(likes);
  };
  const findUsersWhoWatchedShow = async (req, res) => {
    const { showId } = req.params;
    const watched = await dao.findUsersWhoWatchedShow(showId);
    res.send(watched);
  };
  const findIfUserLikesShow = async (req, res) => {
    const { userId, showId } = req.params;
    const likes = await dao.findIfUserLikesShow(userId, showId);
    res.send(likes);
  }

  app.get("/api/likes", findAllLikes);
  app.post("/api/users/:userId/likes/:showId/:showName", createUserLikesShow);
  app.delete("/api/users/:userId/likes/:showId", deleteUserLikesShow);
  app.get("/api/show/:userId/likes", findShowsUserLikes);
  app.get("/api/shows/:showId/likes", findUsersWhoLikeShow);
  app.get("/api/shows/:showId/watched", findUsersWhoWatchedShow);
  app.get("/api/shows/:userId/likes/:showId", findIfUserLikesShow);
}

export default LikesRoutes;