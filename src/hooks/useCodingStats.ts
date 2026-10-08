import { useEffect, useState } from "react";
import { getCodeforcesSolves } from "../api/codeforces";
import { getLeetCodeStats } from "../api/leetcode";

export function useCodingStats() {
    const [codeforce, setCfSolved] = useState<number | null>(null);
    const [cfLastUpdated, setCfLastUpdated] = useState<string | null>(null);

    const [leetcode, setLeetcode] = useState<any>(null);
    const [lcLastUpdated, setLcLastUpdated] = useState<string | null>(null);

    useEffect(() => {
        getCodeforcesSolves("Berxwedan")
            .then((cf) => {
                setCfSolved(cf);
                setCfLastUpdated(new Date().toLocaleString());
            })
            .catch((err) => console.error("Codeforces failed:", err));

        getLeetCodeStats("DenizIsikli")
            .then((lc) => {
                setLeetcode(lc);
                setLcLastUpdated(new Date().toLocaleString());
            })
            .catch((err) => console.warn("LeetCode failed:", err));
    }, []);

    return {
        codeforce,
        cfLastUpdated,
        leetcode,
        lcLastUpdated,
    };
}
