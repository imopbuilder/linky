import NextAuthSession from '@/client/providers/next-auth-session';
import ReduxProvider from '@/client/providers/redux-provider';
import { ThemeProvider } from '@/client/providers/theme-provider';
import { ToastProvider } from '@/client/providers/toast-provider';
import { TRPCReactProvider } from '@/client/providers/trpc-react-provider';
import '@/styles/main.scss';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { type ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Linky',
	description: 'Generated by create-t3-app',
};

export default function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className}`}>
				<TRPCReactProvider cookies={cookies().toString()}>
					<ReduxProvider>
						<NextAuthSession>
							<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
								{children}
								<ToastProvider />
							</ThemeProvider>
						</NextAuthSession>
					</ReduxProvider>
				</TRPCReactProvider>
			</body>
		</html>
	);
}
