import { IBM_Plex_Mono, Geist_Mono } from "next/font/google";
import "./globals.css";

const IBMPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Techno",
  description: "An e-commerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${IBMPlexMono.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
