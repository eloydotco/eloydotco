import { type PageProps } from "$fresh/server.ts";
import { Logo } from "../components/Logo.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>eloydotco</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header class="top-banner">
          <Logo />
        </header>
        <div class="main-container">
          <aside class="left-banner">
          </aside>
          <main class="content">
            <Component />
          </main>
        </div>
      </body>
    </html>
  );
}
