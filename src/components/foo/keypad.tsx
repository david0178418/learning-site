'use client';
import { range } from '@/common/utils';
import { css } from '@styled-system/css';
import { Grid, GridItem } from '@styled-system/jsx';
import { useSetAtom } from 'jotai';
import { setAnswerCharacterAtom } from './problem';

const BtnCls = css({
	textAlign: 'center',
	fontSize: 52,
	border: '1px solid black',
	cursor: 'pointer',
	_hover: { backgroundColor: 'lightgrey' },
});

export default
function Keypad() {
	const setAnswerCharacter = useSetAtom(setAnswerCharacterAtom);

	function handleNumber(digit: number) {
		setAnswerCharacter(digit.toString());
	}

	return (
		<Grid
			columns={3}
			className={css({ width: 350 })}
		>
			{range(10).reverse().map(n => (
				<button
					key={n}
					className={BtnCls}
					onClick={() => handleNumber(n)}
				>
					{n}
				</button>
			))}
			<GridItem
				className={BtnCls}
				colSpan={2}
			>
				Delete
			</GridItem>
		</Grid>
	);
}
