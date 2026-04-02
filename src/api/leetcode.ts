import axios from "axios";

export async function getLeetCodeStats(username: string) {
  const res = await axios.post("/.netlify/functions/leetcodeproxy", {
    query: `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            userAvatar
            ranking
          }
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `,
    variables: { username },
  });

  const user = res.data.data.matchedUser;

  const totalSolved = user.submitStats.acSubmissionNum.find(
    (d: any) => d.difficulty === "All",
  ).count;

  return {
    username: user.username,
    avatar: user.profile.userAvatar,
    ranking: user.profile.ranking,
    solved: totalSolved,
  };
}
