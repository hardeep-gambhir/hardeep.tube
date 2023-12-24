import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hardeep Gambhir",
  description: "Hardeep Gambhir's Personal Website",
  keywords: [
    "Hardeep Gambhir",
    "Hardeep",
    "Gambhir",
    "Personal Website",
  ],
  creator: "Hardeep Gambhir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Head>
        <title>Hardeep Gambhir</title>
        <meta
          name="description"
          content={"Hardeep Gambhir's Personal Website"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
