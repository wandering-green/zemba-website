import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zemba — Own Your E-Rickshaw Battery in 15 Months",
  description: "Small down-payment. Easy EMI. 36-month warranty. Exchange program. Local service in Agra.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
