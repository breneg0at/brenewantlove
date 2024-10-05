import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polalov3",
  description: "Brene quer amar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}
