import "./globals.css";
import { Josefin_Slab } from "next/font/google";

const josefin = Josefin_Slab({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Portfolio Page",
  description: "You can find anything about me here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
