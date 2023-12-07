import userDao from "../users/dao.js"
import reviewDao from "../review/dao.js"
function HomepageRoutes(app) {
  const getAllUsers = async (req, res) => {
    const users = await userDao.findAllUsers();
    res.json(users);
  }
  
  const getLatestReviews = async (req, res) => {
    const reviews = await reviewDao.findAllReviews();
    res.json(reviews)
  }

  const getReviewsByUserId = async (req, res) => {
    const reviews = await reviewDao.getReviewsByUserId(req.params.userId);
    res.json(reviews)
  }

  const getReviewsByRestaurantId = async (req, res) => {
    const reviews = await reviewDao.getReviewsByRestaurantId(req.params.restaurantId);
    res.json(reviews)
  }

  app.get("/api/home", getAllUsers);
  app.get("/api/home", getLatestReviews);
  app.get("/api/home/:userId", getReviewsByUserId);
  app.get("/api/home/:restaurantId", getReviewsByRestaurantId);

}
export default HomepageRoutes;