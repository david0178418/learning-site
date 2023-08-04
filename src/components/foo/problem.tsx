'use client';
import { css, cx } from '@styled-system/css';
import { HStack } from '@styled-system/jsx';
import { useAtomValue } from 'jotai';
import { atom } from 'jotai';
import { Fragment } from 'react';

const Operations = {
	'+': (a: number, b: number) => a + b,
	'-': (a: number, b: number) => a - b,
	'×': (a: number, b: number) => a * b,
	'÷': (a: number, b: number) => a / b,
} as const;

export
type Operator = keyof typeof Operations;

export
const UserAnswerAtom = atom('');
const ProblemValuesAtom = atom([1, 21]);
const ProblemOperatorAtom = atom<Operator>('+');

const CorrectStyle = css({ color: 'green' });
const NBSP = '\u00A0';

export default
function Problem() {
	const values = useAtomValue(ProblemValuesAtom);
	// const userAnswer = useAtomValue(UserAnswerAtom);
	const operator = useAtomValue(ProblemOperatorAtom);
	const answer = values.reduce(Operations[operator]);

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
					{`${answer}`.split('').map((c, i) => (
						<div
							key={`${i}-${c}`}
							className={css({
								textAlign: 'center',
								fontSize: 52,
								border: '1px solid black',
							})}
						>
							{NBSP}
						</div>
					))}
				</HStack>
			</div>
		</>
	);
}
