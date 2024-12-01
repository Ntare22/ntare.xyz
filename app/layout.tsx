import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/sections/Navbar";
import ApolloProviderWrapper from "./lib/apolloClient";

export const metadata: Metadata = {
  title: "Jim Ntare",
  description: "Tech & Data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloProviderWrapper>
          <Navbar />
          {children}
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
