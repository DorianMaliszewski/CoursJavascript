import type { Question } from "types";

export function getRandomQuestion(
	array: Question[],
	excludedIndexes: number[],
): [Question, number] | undefined {
	if (!array.length) return null;

	const validIndexes = array
		.map((_, i) => i)
		.filter((i) => !excludedIndexes.includes(i));

	if (!validIndexes.length) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return [array[randomIndex], randomIndex];
  }

	const randomIndex =
		validIndexes[Math.floor(Math.random() * validIndexes.length)];

	return [array[randomIndex], randomIndex];
}
