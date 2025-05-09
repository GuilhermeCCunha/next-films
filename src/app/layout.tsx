import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from '../components/header'
import DataContextProvider from "@/context/datacontextprovider";
import { Suspense } from "react";
import SideBar from "@/components/sidebar";
import GenresContextProvider from "@/context/genrescontextprovider";
import { Genre } from "@/utils/types/details";
import { getGenreList } from "@/utils/get-data";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Next Films',
    default: 'Next Films'
  }, 
  description: "Generated by create next app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const genrelist: Genre[] = await getGenreList();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Suspense>
          <Header />
        </Suspense>
        <GenresContextProvider genres={genrelist}>
          <SideBar />
          <DataContextProvider>{children}</DataContextProvider>
        </GenresContextProvider>
      </body>
    </html>
  );
}
