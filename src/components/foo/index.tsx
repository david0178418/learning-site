import { css, cx } from '@styled-system/css';
import { Center } from '@styled-system/jsx';
import { Schoolbell } from 'next/font/google';
import Answer from './answer';
import Keypad from './keypad';

const font = Schoolbell({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
});

export default
function Foo() {
	return (
		<Center flexDir="column">
			<Bar
				values={[1, 21]}
				operator="+"
			/>
			<Keypad />
		</Center>
	);
}

const Operations = {
	'+': (a: number, b: number) => a + b,
	'-': (a: number, b: number) => a - b,
	'×': (a: number, b: number) => a * b,
	'÷': (a: number, b: number) => a / b,
} as const;

type Operator = keyof typeof Operations;

interface Props {
	values: number[];
	operator: Operator;
}

function Bar(props: Props) {
	const {
		values,
		operator,
	} = props;

	return (
		<div
			className={cx(
				font.className,
				css({
					fontSize: '10vh',
					letterSpacing: 30,
					wordSpacing: 30,
				}),
			)}
		>
			<div className={css({
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-end',
			})}>
				{values.map((v, i) => (
					<>
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
					</>
				))}
				<Answer />
			</div>
		</div>
	);
}
