import { type PageProps } from "$fresh/server.ts";
import { Logo } from "../components/Logo.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>eloydotco</title>
        <link rel="icon" href="/eloydotco-logo.svg" type="image/svg+xml" />
        {
          /* <meta name="title" content={title} />
        <meta name="author" content="Eloy Castelo Otero" />
        <meta name="description" content={description} /> */
        }
        <meta
          name="keywords"
          content="Eloy, Eloy Castelo, Eloy Castelo Otero, eloy.co"
        />
        <link rel="canonical" href="eloy.co" />
        <meta name="application-name" content="eloy.co" />

        {/* <!-- OpenGraph Tags --> */}
        <meta property="og:type" content="website" />
        {
          /* <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalURL} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={canonicalImageSrc} />
        <meta property="og:image:alt" content={socialImageAlt} /> */
        }

        {/* <!-- Twitter Tags --> */}
        {
          /* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eloydotco" />
        <meta name="twitter:creator" content="@eloydotco" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={canonicalImageSrc} />
        <meta name="twitter:image:alt" content={socialImageAlt} /> */
        }

        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
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
