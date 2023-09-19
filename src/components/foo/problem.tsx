'use client';
import { css, cx } from '@styled-system/css';
import { HStack } from '@styled-system/jsx';
import { atom } from 'jotai';
import { Fragment } from 'react';
import { useAtomValue } from 'jotai';

const Operations = {
	'+': (a: number, b: number) => a + b,
	'-': (a: number, b: number) => a - b,
	'×': (a: number, b: number) => a * b,
	'÷': (a: number, b: number) => a / b,
} as const;

export
type Operator = keyof typeof Operations;

export
const ProblemValuesAtom = atom([1, 145]);
const ProblemOperatorAtom = atom<Operator>('+');
const renderedAnswerAtom = atom('   '); // TODO Figure out how to set initial values
const AnswerAtom = atom(get => {
	const values = get(ProblemValuesAtom);
	const operator = get(ProblemOperatorAtom);
	return values.reduce(Operations[operator]);
});

export
const setAnswerCharacterAtom = atom(
	null,
	(get, set, character: string) => {
		const answer = get(AnswerAtom);
		const renderedAnswer = get(renderedAnswerAtom);
		const newAnswer = foo(answer.toString(), renderedAnswer, character);

		console.log(answer, renderedAnswer, character);
		console.log(newAnswer);

		set(
			renderedAnswerAtom,
			newAnswer,
		);
	}
);

// Suggest a good name for this
function foo(base: string, current: string, newChar: string) {
	let result = '';
	let replaced = false;

	for (let i = 0; i < base.length; i++) {
		if (!replaced && current[i] === ' ' && base[i] === newChar) {
			result += newChar;
			replaced = true;
		} else {
			result += current[i];
		}
	}

	return result;
}

const CorrectStyle = css({ color: 'green' });
const NBSP = '\u00A0';

export default
function Problem() {
	const values = useAtomValue(ProblemValuesAtom);
	// const userAnswer = useAtomValue(UserAnswerAtom);
	const operator = useAtomValue(ProblemOperatorAtom);
	const renderedAnswer = useAtomValue(renderedAnswerAtom);

	const styles: string[] = [];

	// if(isCorrect) {
	styles.push(CorrectStyle);
	// }

	return (
		<>
			{values.map((v, i) => (
				<Fragment key={i}>
					{i !== values.length - 1 && (
						<div>
							{v}
						</div>
					)}
					{i === values.length - 1 && (
						<div className={css({
							display: 'flex',
							flexDirection: 'row',
							borderBottom: '5px solid black',
						})}>
							<div>
								{operator}
							</div>
							<div>
								{v}
							</div>
						</div>
					)}
				</Fragment>
			))}

			<div className={cx(
				...styles,
				css({ marginTop: 10 })
			)}>
				<HStack>
					{renderedAnswer.split('').map((c, i) => (
						<div
							key={`${i}-${c}`}
							className={css({
								textAlign: 'center',
								fontSize: 52,
								border: '1px solid black',
							})}
						>
							{c === ' ' && NBSP}
							{c !== ' ' && c}
						</div>
					))}
				</HStack>
			</div>
		</>
	);
}
