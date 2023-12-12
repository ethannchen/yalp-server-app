import model from "./model.js";
export const updateReviews = (userId, restaurantId, reviewContent) =>
  model.updateOne(
    { userId: userId, restaurantId: restaurantId },
    { $set: { content: reviewContent } }
  );

export const findAllReviewsByRestaurantId = (restaurantId) =>
  model.find({ restaurantId });

export const deleteReviews = (userId, restaurantId) =>
  model.deleteOne({ userId: userId, restaurantId: restaurantId });

export const createReviewsByUser = (userId, username, restaurantId, content) =>
  model.create({
    userId,
    username,
    restaurantId,
    content,
  });

export const getReviewByUserId = (userId, restaurantId) =>
  model.find({ userId, restaurantId });
// export const getReviewsByRestaurantId = (restaurantId) =>
//   model.findById(restaurantId);

export const getReviewsByUserId = (userId) => model.find({ username: userId });

export const getRecentReviews = () => model.find();
