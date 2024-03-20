import axios from "axios";

export const allTickers = async () => {
  try {
    const data = await axios.get(`http://localhost:4000/ticker`);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("error fetching data in Fetch client side");
  }
};

export const ticker_by_name = async (name) => {
  console.log(name);
  try {
    const data = await axios.get(
      `http://localhost:4000/ticker/byName/?n=${name}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("error fetching data in Fetch client side");
  }
};
