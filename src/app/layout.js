// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Sonaimuri Mother and Child Hospital (Pvt.)",
  description: "Best specialized care for mothers and children in Sonaimuri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
