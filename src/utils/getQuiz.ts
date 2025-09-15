import type { APIResponse } from "types";
import { questions } from "questions";
import { isNullOrUndefined } from "./isNullOrUndefined";
import { decryptQuiz } from "./decryptQuiz";
import type { APIContext } from "astro";

// Yolo cache but it works
let cachedData: { [x: string]: { res: APIResponse; lastFetch: number } } = {};
const CACHE_DURATION = import.meta.env.DEV ? 60 * 60 * 8 * 1000 : 10 * 60 * 1000; // *hours in dev otherwise 10 minute
const SCRIPT_URL =
	"https://script.google.com/macros/s/AKfycbxsUnyUPjQhv1mjnRLPcIN8Z5W3vjzG1AWvVhcQOEmENHUkkB2mb77oL31pXSW8Q-6J/exec";
const API_KEY = import.meta.env.API_KEY;

export async function getQuiz(
	quizId: string, sessions? : APIContext["session"]
): Promise<APIResponse | undefined> {

	const now = Date.now();
	if ( quizId === "generated" && (await sessions?.has("generatedQuiz"))) 
	{
		const value = await sessions?.get("generatedQuiz")
		return value;
	}

	if (
		cachedData &&
		cachedData[quizId]?.lastFetch &&
		now - cachedData[quizId].lastFetch < CACHE_DURATION
	) {
		return cachedData[quizId].res;
	}

	cleanCache();

	const fullURL = `${SCRIPT_URL}?${new URLSearchParams({ key: API_KEY, name: quizId }).toString()}`;
	const response = await fetch(fullURL);
	const json = (await response.json()) as APIResponse;


	cachedData[quizId] = { res: json, lastFetch: now };

	return cachedData[quizId].res;
}

function cleanCache() {
	const now = Date.now();
	cachedData = Object.entries(cachedData).reduce<typeof cachedData>(
		(acc, [quizId, resAndLastFetch]) => {
			if (now - resAndLastFetch.lastFetch < CACHE_DURATION) {
				return {
					...acc,
					[quizId]: resAndLastFetch,
				};
			}

			return acc;
		},
		{},
	);
}
