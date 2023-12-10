import * as dao from "./dao.js";

function WatchedRoutes(app) {
  const findAllWatched = async (req, res) => {
    console.log("findAllWatched");
    const watched = await dao.findAllWatched();
    res.send(watched);
  };
  const createUserWatchedShow = async (req, res) => {
    const { userId, showId, showName } = req.params;
    const watch = await dao.createUserWatchedShow(userId, showId, showName);
    res.send(watch);
  };
  const deleteUserWatchedShow = async (req, res) => {
    const { userId, showId } = req.params;
    const watch = await dao.deleteUserWatchedShow(userId, showId);
    res.send(watch);
  };
  const findShowsUserWatched = async (req, res) => {
    const { userId } = req.params;
    const watched = await dao.findShowsUserWatched(userId);
    res.send(watched);
  };
  const findUsersWhoWatchedShow = async (req, res) => {
    const { showId } = req.params;
    const watched = await dao.findUsersWhoWatchedShow(showId);
    res.send(watched);
  };
  const findIfUserWatchedShow = async (req, res) => {
    const { userId, showId } = req.params;
    const watched = await dao.findIfUserWatchedShow(userId, showId);
    res.send(watched);
  }

  app.get("/api/watched", findAllWatched);
  app.post("/api/users/:userId/watched/:showId/:showName", createUserWatchedShow);
  app.delete("/api/users/:userId/watched/:showId", deleteUserWatchedShow);
  app.get("/api/show/:userId/watched", findShowsUserWatched);
  app.get("/api/shows/:showId/watched", findUsersWhoWatchedShow);
  app.get("/api/shows/:userId/watched/:showId", findIfUserWatchedShow);
}

export default WatchedRoutes;