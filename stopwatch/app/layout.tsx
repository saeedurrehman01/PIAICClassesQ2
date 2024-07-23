import "./globals.css";

export const metadata = {
  title: "Next.js Stopwatch",
  description: "Stopwatch created with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
