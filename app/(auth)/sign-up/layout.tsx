import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import '../../globals.css';
const inter = Inter({subsets:['latin']})
export const metadata = {
  title: "Threads",
  description: "A next.js 13 meta threads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
