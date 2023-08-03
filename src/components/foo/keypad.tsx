'use client';
import { range } from '@/common/utils';
import { css } from '@styled-system/css';
import { Grid, GridItem } from '@styled-system/jsx';
import { useAtom } from 'jotai';
import { UserAnswerAtom } from './answer';

const BtnCls = css({
	textAlign: 'center',
	fontSize: 52,
	border: '1px solid black',
	cursor: 'pointer',
	_hover: { backgroundColor: 'lightgrey' },
});

function usePushAnswerNum() {
	const [userAnswerAtom, setUserAnswerAtom] = useAtom(UserAnswerAtom);

	return (num: number) => {
		setUserAnswerAtom(`${userAnswerAtom}${num}`);
	};
}

export default
function Keypad() {
	const pushAnswerNum = usePushAnswerNum();

	return (
		<Grid
			columns={3}
			className={css({ width: 350 })}
		>
			{range(10).reverse().map(n => (
				<button
					key={n}
					className={BtnCls}
					onClick={() => pushAnswerNum(n)}
				>
					{n}
				</button>
			))}
			<GridItem
				className={BtnCls}
				colSpan={2}
			>
				Enter
			</GridItem>
		</Grid>
	);
}
