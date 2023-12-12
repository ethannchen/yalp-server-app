import * as dao from "./dao.js";
function ReviewRoutes(app) {
  const findAllReviewsByRestaurantId = async (req, res) => {
    const { restaurantId } = req.params;
    const reviews = await dao.findAllReviewsByRestaurantId(restaurantId);
    res.json(reviews);
  };

  const createReviewsByUser = async (req, res) => {
    const { restaurantId, username, userId, reviewContent } = req.params;
    const review = await dao.createReviewsByUser(
      userId,
      username,
      restaurantId,
      reviewContent
    );
    res.json(review);
  };

  const updateReviews = async (req, res) => {
    const { restaurantId, userId, reviewContent } = req.params;
    const status = await dao.updateReviews(userId, restaurantId, reviewContent);
    res.json(status);
  };

  const deleteReviews = async (req, res) => {
    const { restaurantId, userId } = req.params;
    const status = await dao.deleteReviews(userId, restaurantId);
    res.json(status);
  };

  const findReviewByUserId = async (req, res) => {
    const { userId, restaurantId } = req.params;
    const review = await dao.getReviewByUserId(userId, restaurantId);
    res.json(review);
  };

  const getReviewsByUserId = async (req, res) => {
    const { userId } = req.params;
    const reviews = await dao.getReviewsByUserId(userId);
    res.json(reviews);
  };
  const getRecentReviews = async (req, res) => {
    const reviews = await dao.getRecentReviews();
    res.json(reviews);
  };

  app.get("/api/review/:restaurantId", findAllReviewsByRestaurantId); //ok
  app.get("/api/user/:userId/:restaurantId", findReviewByUserId); //ok
  app.post(
    "/api/review/:restaurantId/:userId/:reviewContent/:username",
    createReviewsByUser
  ); //ok
  app.put("/api/review/:restaurantId/:userId/:reviewContent", updateReviews); //ok
  app.delete("/api/review/:restaurantId/:userId", deleteReviews); //ok

  app.get("/api/reviews/:userId", getReviewsByUserId);
  app.get("/api/reviews", getRecentReviews);
}
export default ReviewRoutes;
