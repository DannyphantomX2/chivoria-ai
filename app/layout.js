import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";

export const metadata = {
  title: "Chivoria AI",
  description: "AI Video Creation for Beginners",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProviderWrapper>
          <ThemeProvider>{children}</ThemeProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
