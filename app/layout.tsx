import type { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Next-Gen Learning Dashboard",
  description: "Futuristic high-fidelity portfolio tracking bento interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#09090b]">
        {children}
      </body>
    </html>
  );
}