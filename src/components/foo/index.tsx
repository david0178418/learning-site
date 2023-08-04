import { css, cx } from '@styled-system/css';
import { Center } from '@styled-system/jsx';
import { Schoolbell } from 'next/font/google';
import Keypad from './keypad';
import Problem from './problem';

const font = Schoolbell({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
});

export default
function Foo() {
	return (
		<Center flexDir="column">
			<div
				className={cx(
					font.className,
					css({
						fontSize: '10vh',
						letterSpacing: 30,
						wordSpacing: 30,
						marginBottom: 10,
					}),
				)}
			>
				<div className={css({
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-end',
				})}>
					<Problem />
				</div>
			</div>
			<Keypad />
		</Center>
	);
}
