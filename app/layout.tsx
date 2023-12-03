import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navjot Blog",
  description: "Created by create Navjot Dhiman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-200">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
