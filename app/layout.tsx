import "./global.css";

export const metadata = {
  title: "Fisker Ocean",
  description: "Configure Your Fisker Ocean",
  keywords: "fisker, ocean, nextjs, tailwind, configurator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="fisker, ocean, nextjs, tailwind, configurator" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
