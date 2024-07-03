import { Navbar } from "@components";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
