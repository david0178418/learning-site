'use client';

import { css, cx } from '@styled-system/css';
import { atom, useAtomValue } from 'jotai';

export
const UserAnswerAtom = atom('');

const NBSP = '\u00A0';
const CorrectStyle = css({ color: 'green' });

export default
function Answer() {
	const userAnswer = useAtomValue(UserAnswerAtom);
	const styles: string[] = [];

	// if(isCorrect) {
	styles.push(CorrectStyle);
	// }

	return (
		<div className={cx(...styles)} >
			{userAnswer ?
				(+userAnswer).toLocaleString() :
				NBSP
			}
		</div>
	);
}
