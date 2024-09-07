import "./globals.css";

export const metadata = {
  title: "Gangadhar-Profile",
  description: "Created by Gangadhar",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
