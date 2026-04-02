import axios from "axios";

export const handler = async (event: any) => {
  try {
    const body = JSON.parse(event.body);

    const response = await axios.post("https://leetcode.com/graphql", body);

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch LeetCode" }),
    };
  }
};
