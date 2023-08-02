
import { range } from '@/common/utils';
import { css, cx } from '@styled-system/css';
import {
	Center, Grid, GridItem,
} from '@styled-system/jsx';
import { Schoolbell } from 'next/font/google';

const font = Schoolbell({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
});

export default
function Foo() {
	return (
		<Center flexDir="column">
			<Bar />
			<Baz />
		</Center>
	);
}

function Bar() {
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
				<div>
					11
				</div>
				<div className={css({
					display: 'flex',
					flexDirection: 'row',
					borderBottom: '5px solid black',
				})}>
					<div>
						+
					</div>
					<div>
						22
					</div>
				</div>
				<div>
					33
				</div>
			</div>
		</div>
	);
}

const fooClass = css({
	textAlign: 'center',
	fontSize: 32,
	border: '1px solid black',
});

function Baz() {
	return (
		<Grid
			columns={3}
			className={css({ width: 200 })}
		>
			{range(10).reverse().map(n => (
				<button
					key={n}
					className={fooClass}
				>
					{n}
				</button>
			))}
			<GridItem className={fooClass} colSpan={2}>Enter</GridItem>
		</Grid>
	);
}
