import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/sidenav";

const openSans = Open_Sans({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Finanzas Micheleiva",
	description: "por Matías Micheletti",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${openSans.className} antialiased text-md xl:text-lg`}>
				<div className="h-screen flex flex-row overflow-hidden">
					<SideNav />
					<div className="h-screen overflow-scroll min-w-90 w-full bg-gray-200">
					{children}
					</div>
				</div>
			</body>
		</html>
	);
}
