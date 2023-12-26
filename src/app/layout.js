import { DM_Sans as FontSans } from "next/font/google";
import { Provider } from "@/components/provider";

import "@/styles/globals.css";
import { DefaultLayout } from "@/components/template/DefaultLayout";

const fontSans = FontSans({ subsets: ["latin"] });

export const metadata = {
  title: "TodayFocus - Focus Board",
  description: "Board to focus on today tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Provider>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </Provider>
      </body>
    </html>
  );
}
