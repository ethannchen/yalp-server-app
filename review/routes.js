import * as dao from "./dao.js";
function ReviewRoutes(app) {
  const findAllReviews = async (req, res) => {
    const reviews = await dao.findAllReviews();
    res.json(reviews);
  };

  const createReviewsByUser = async (req, res) => {
    const review = await dao.createReviewsByUser(req.body);
    res.json(review);
  };

  const updateReviews = async (req, res) => {
    const { restaurantId } = req.params;
    const status = await dao.updateReviews(restaurantId, req.body);
    res.json(status);
  };

  const deleteReviews = async (req, res) => {
    const review = await dao.deleteReviews(req.params.restaurantId);
    res.json(review);
  };
  
  app.get("/api/review", findAllReviews);
  app.post("/api/review", createReviewsByUser);
  app.put("/api/review/:restaurantId", updateReviews);
  app.delete("/api/review/:restaurantId", deleteReviews);
}
export default ReviewRoutes;