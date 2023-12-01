import * as dao from "./dao.js";

function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {
    console.log("findAllLikes");
    const likes = await dao.findAllLikes();
    res.send(likes);
  };
  const createUserLikesShow = async (req, res) => {
    const { userId, showId } = req.params;
    const like = await dao.createUserLikesShow(userId, showId);
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

  app.get("/api/likes", findAllLikes);
  app.post("/api/users/:userId/likes/:showId", createUserLikesShow);
  app.get("/api/users/:userId/likes", findShowsUserLikes);
  app.get("/api/shows/:showId/likes", findUsersWhoLikeShow);
}

export default LikesRoutes;
