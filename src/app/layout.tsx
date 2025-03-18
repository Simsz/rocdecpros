import "@/app/globals.css";
import { Provider } from "@/components/ui/provider";
import { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Rochester Deck Pros | Premium Deck Building in Rochester, NY",
  description: "Rochester Deck Pros offers high-quality deck building, design, and installation services in Rochester, NY and surrounding areas.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className} ${montserrat.variable}`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}