import "./globals.css";

export const metadata = {
  title: "Guillermo Montemayor — Portfolio",
  description: "Web & Mobile Developer · Turning ideas into digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased site-bg site-grid">{children}</body>
    </html>
  );
}
