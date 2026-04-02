import { http } from "./clients/http";

export async function getCodeforcesSolves(handle: string) {
  const res = await http.get("/user.status", {
    params: { handle },
  });

  const solved = new Set();

  for (const sub of res.data.result) {
    if (sub.verdict === "OK") {
      const key = `${sub.problem.contestId}-${sub.problem.index}`;
      solved.add(key);
    }
  }

  return solved.size;
}
