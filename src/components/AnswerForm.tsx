import { getRelativeLocaleUrl } from "astro:i18n";
import clsx from "clsx";
import { CheckIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { Question } from "types";
import { isNullOrUndefined } from "utils/isNullOrUndefined";

type AnswerFormProps = {
	answers: Question["answers"];
	question: Question["question"];
	answerIndex?: number;
	correctAnswerIndex: number;
	quizId: string;
	nextQuestionIndex: number;
	hasMoreQuestions: boolean;
	currentLocale: string;
};
export const AnswerForm = ({
	answers,
	question,
	answerIndex,
	correctAnswerIndex,
	hasMoreQuestions,
	quizId,
	nextQuestionIndex,
	currentLocale,
}: AnswerFormProps) => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<form
			id="answerForm"
			method="POST"
			onSubmit={() => {
				setIsSubmitting(true);
			}}
			className="flex flex-col gap-8"
		>
			<fieldset
				className={`flex flex-col gap-8 ${
					answerIndex ? "pointer-events-none" : ""
				}`}
			>
				<legend className="sr-only">
					Selectionner la réponse à la question : {question}
				</legend>
				{answers.map((answer, i) => (
					<div key={answer} className="flex">
						<input
							id={`answer-${i}`}
							name="answerIndex"
							type="radio"
							value={i}
							className="peer appearance-none focus:outline-none"
							disabled={!isNullOrUndefined(answerIndex)}
							checked={
								!isNullOrUndefined(answerIndex) ? answerIndex === i : i === 0
							}
							onChange={() => {}}
							required
							data-is-correct={
								!isNullOrUndefined(answerIndex) ? answerIndex === i : undefined
							}
						/>
						<label
							data-correct={
								!isNullOrUndefined(answerIndex) ? answerIndex === i : undefined
							}
							className={clsx(
								`flex-grow flex cursor-pointer items-center gap-4 rounded-xl border-2 border-base-content bg-base-200 p-2 font-medium shadow transition-colors`,
								isNullOrUndefined(answerIndex)
									? "peer-checked:[&>_span[data-letter]]:bg-primary peer-checked:border-primary"
									: "",
								{
									"border-success text-success [&>_span[data-letter]]:bg-success [&>_span[data-letter]]:text-success-content":
										!isNullOrUndefined(answerIndex) &&
										correctAnswerIndex === i &&
										answerIndex === i,
									"border-error text-error [&>_span[data-letter]]:bg-error [&>_span[data-letter]]:text-error-content":
										!isNullOrUndefined(answerIndex) &&
										answerIndex === i &&
										correctAnswerIndex !== i,
								},
							)}
							htmlFor={`answer-${i}`}
						>
							<span
								data-letter
								className="transition-color grid size-12 place-items-center rounded-xl bg-base-content text-base-200 duration-300"
							>
								{String.fromCharCode(64 + i + 1)}
							</span>
							<span className="flex-grow">{answer}</span>
							<div>
								{!isNullOrUndefined(answerIndex) &&
								answerIndex === i &&
								correctAnswerIndex === i ? (
									<CheckIcon className="size-8 text-success" />
								) : null}
								{!isNullOrUndefined(answerIndex) &&
								answerIndex === i &&
								correctAnswerIndex !== i ? (
									<XIcon className="size-8 text-error" />
								) : null}
							</div>
						</label>
					</div>
				))}
			</fieldset>
			{!isNullOrUndefined(answerIndex) ? (
				<>
					{hasMoreQuestions ? (
						<a
							href={getRelativeLocaleUrl(
								currentLocale,
								`/quiz/${quizId}/${nextQuestionIndex}`,
							)}
							className="btn btn-primary w-full btn-md"
						>
							Question suivante
						</a>
					) : (
						<a
							href={getRelativeLocaleUrl(
								currentLocale,
								`/quiz/${quizId}/results`,
							)}
							className="btn btn-primary w-full btn-md"
						>
							Voir mon résultat
						</a>
					)}
				</>
			) : (
				<button
					disabled={isSubmitting}
					className="btn btn-primary w-full btn-md"
				>
					Valider ma réponse
				</button>
			)}
		</form>
	);
};
