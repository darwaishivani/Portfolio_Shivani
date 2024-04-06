import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata = {
	title: {
		template: "Portfolio || Shivani",
		default: "Portfolio || Shivani",
	},
	description: "A unique creative portfolio. ",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={clsx(
					inter.variable,
					"bg-background text-foreground font-inter"
				)}
			>
				{children}
				<FireFliesBackground />
				<Sound />
				<div id="my-modal" />
			</body>
		</html>
	);
}
