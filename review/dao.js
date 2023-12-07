import model from "./model.js";
export const updateReviews = (restaurantId, review) =>
  model.updateOne({ _id: restaurantId }, { $set: review });
export const findAllReviews = () => model.find();
export const deleteReviews = (restaurantId) => model.deleteOne({ _id: restaurantId });
export const createReviewsByUser = (review) => model.create(review);
export const getReviewsByUserId = (userId) =>model.findById(userId);
export const getReviewsByRestaurantId = (restaurantId) =>model.findById(restaurantId);
