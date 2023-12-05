import axios from "axios";

export const HEROKU_APP = "https://cors-anywhere.herokuapp.com/";
export const YELP_API = "https://api.yelp.com/v3";
export const API_KEY = process.env.REACT_APP_YELP_API_KEY;

function businessRoutes(app) {
  const config = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Access-Control-Allow-Origin": "*",
    },
  };
  const findBusinesses = async (req, res) => {
    const { term, location } = req.params;
    const businesses = await axios.get(
      //   `${HEROKU_APP}${YELP_API}/businesses/search?term=${term}&location=${location}`,
      `${YELP_API}/businesses/search?term=${term}&location=${location}`,
      config
    );
    res.json(businesses.data);
  };

  const findBusinessById = async (req, res) => {
    const { id } = req.params;
    const business = await axios.get(
      //   `${HEROKU_APP}${YELP_API}/businesses/${businessId}`,
      `${YELP_API}/businesses/${id}`,
      config
    );
    res.json(business.data);
  };
  const findReviewsByBusinessId = async (req, res) => {
    const { id } = req.params;
    const reviews = await axios.get(
      //   `${HEROKU_APP}${YELP_API}/businesses/${businessId}/reviews`,
      `${YELP_API}/businesses/${id}/reviews`,
      config
    );
    res.json(reviews.data);
  };

  app.get("/api/businesses/:term/:location", findBusinesses);
  app.get("/api/businesses/:id", findBusinessById);
  app.get("/api/businesses/:id/reviews", findReviewsByBusinessId);
}

export default businessRoutes;
