import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Links from "./components/Links";
import Head from "next/head";
import TabValg from "./components/Tab";
import { createServerContext } from "react";
import { headers } from "next/headers";
import { ValgtKategoriProvider } from "./context/ValgtKategoriContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ES52",
  description: "Erling Skakkes gate 52B",
};

export let TabServerContext = createServerContext("lang", "Generelt");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  console.log(headersList);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="manifest" href="site.webmanifest" />
      </Head>
      <ValgtKategoriProvider>
        <body className={inter.className}>
          <main>
            <nav>
              <span>
                <h1>ES52</h1>
                <div>
                  <p>
                    Erling Skakkes gate 52B
                    <br />
                    7012, Trondheim
                    <br />
                    lnr: H0203
                  </p>
                </div>
              </span>
              <div className="planlosning">
                <svg
                  width="334"
                  height="214"
                  viewBox="0 0 334 214"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M78.5 212.5L56.5 175.5H2V100M78.5 212.5H157.5L181.5 175.5H206M78.5 212.5V100H2M2 100V2L65.5 2M206 175.5H332L323.908 67.5M206 175.5V67.5M206 67.5H188.5M206 67.5H323.908M188.5 67.5V2M188.5 67.5H163.5M188.5 2H319L323.908 67.5M188.5 2H139H121M121 2H65.5M121 2V34.75V67.5H65.5V34.75V2"
                    stroke="black"
                    stroke-width="3"
                  />
                </svg>
                <Links numberOfRooms={8} />
                <TabValg />
              </div>
            </nav>
            <div className="kort">{children}</div>
          </main>
        </body>
      </ValgtKategoriProvider>
    </html>
  );
}
