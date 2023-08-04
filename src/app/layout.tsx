import { Container } from '@styled-system/jsx';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { css } from '@styled-system/css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Some Title',
	description: 'Some Title App',
};

export default function RootLayout({ children }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<div className={css({ backgroundColor: 'darkgray' })}>
						<Container>
							<div className={css({
								fontSize: 48,
								fontWeight: 'bold',
							})}>
							Some Title
							</div>
						</Container>
					</div>
					<Container>
						{children}
					</Container>
				</Providers>
			</body>
		</html>
	);
}
