import * as dao from "./dao.js";

function CuratedRoutes(app) {
  const findAllCurated = async (req, res) => {
    console.log("findAllCurated");
    const curated = await dao.findAllCurated();
    res.send(curated);
  };
  const createUserCuratedShow = async (req, res) => {
    const { userId, showId, userName, showName } = req.params;
    const curate = await dao.createUserCuratedShow(userId, showId, userName, showName);
    res.send(curate);
  };
  const deleteUserCuratedShow = async (req, res) => {
    const { showId } = req.params;
    const curate = await dao.deleteUserCuratedShow(showId);
    res.send(curate);
  };
  const findShowsUserCurated = async (req, res) => {
    const { userId } = req.params;
    const curated = await dao.findShowsUserCurated(userId);
    res.send(curated);
  };
  const findUsersWhoCuratedShow = async (req, res) => {
    const { showId } = req.params;
    const curated = await dao.findUsersWhoCuratedShow(showId);
    res.send(curated);
  };
  const findIfUserCuratedShow = async (req, res) => {
    const { userId, showId } = req.params;
    const curated = await dao.findIfUserCuratedShow(userId, showId);
    res.send(curated);
  }

  app.get("/api/curated", findAllCurated);
  app.post("/api/users/:userId/curated/:showId/:userName/:showName", createUserCuratedShow);
  app.delete("/api/users/curated/:showId", deleteUserCuratedShow);
  app.get("/api/show/:userId/curated", findShowsUserCurated);
  app.get("/api/shows/:showId/curated", findUsersWhoCuratedShow);
  app.get("/api/shows/:userId/curated/:showId", findIfUserCuratedShow);
}

export default CuratedRoutes;