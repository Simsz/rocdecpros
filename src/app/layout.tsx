import "@/app/globals.css";
import { Provider } from "@/components/ui/provider";
import theme from "@/theme";
import { Metadata } from "next";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}