import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata = {
  title: "Chivoria AI",
  description: "AI Video Creation for Beginners",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
