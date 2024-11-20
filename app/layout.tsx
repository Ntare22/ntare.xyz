import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apolloClient";

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
        <ApolloProvider client={client}>
          <Navbar />
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
