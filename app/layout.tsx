import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const font = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teammate",
  description:
    "Teammate is a platform where you can communicate with your team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl={"/sign-in"}>
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
