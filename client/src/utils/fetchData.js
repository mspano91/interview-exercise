import axios from "axios";

export const allTickers = async () => {
  try {
    const data = await axios.get(`http://localhost:4000/ticker`);
    return data;
  } catch (error) {
    throw new Error("error fetching data in Fetch client side");
  }
};
