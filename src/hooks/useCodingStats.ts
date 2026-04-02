import { useEffect, useState } from "react";
import { getCodeforcesSolves } from "../api/codeforces";
import { getLeetCodeStats } from "../api/leetcode";

export function useCodingStats() {
  const [codeforce, setCfSolved] = useState<number | null>(null);
  const [cfLastUpdated, setCfLastUpdated] = useState<string | null>(null);

  const [leetcode, setLeetcode] = useState<any>(null);
  const [lcLastUpdated, setLcLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const cf = await getCodeforcesSolves("Berxwedan");
        setCfSolved(cf);
        setCfLastUpdated(new Date().toLocaleString());

        try {
          const lc = await getLeetCodeStats("DenizIsikli");
          setLeetcode(lc);
          setLcLastUpdated(new Date().toLocaleString());
        } catch (err) {
          console.warn("LeetCode failed:", err);
        }
      } catch (error) {
        console.error("Codeforces failed:", error);
      }
    }

    fetchData();
  }, []);

  return {
    codeforce,
    cfLastUpdated,
    leetcode,
    lcLastUpdated,
  };
}
