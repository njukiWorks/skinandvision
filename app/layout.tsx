import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/analytics/MetaPixel";
import { clinicSchema, websiteSchema } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skinandvision.nl"),
  title: {
    default: "Skin & Vision Clinic | Ooglidcorrectie & Botoxbehandelingen Amsterdam",
    template: "%s | Skin & Vision Clinic",
  },
  description:
    "BIG-geregistreerde oogartsen gespecialiseerd in ooglidcorrectie en botoxbehandelingen in Amsterdam. 28+ jaar ervaring, 9.9/10 ZorgkaartNederland.",
  keywords: [
    "ooglidcorrectie Amsterdam",
    "blepharoplastiek",
    "botoxbehandelingen oogarts",
    "BIG-geregistreerde oogarts Amsterdam",
    "oculoplastische chirurgie",
    "ptosis correctie",
    "oogarts Amsterdam",
    "Dr. Kloos oogarts",
    "hangen oogleden behandeling",
    "blepharospasme behandeling",
    "Skin & Vision Clinic",
  ],
  authors: [{ name: "Dr. R.J.H.M. Kloos", url: "https://skinandvision.nl/over-ons" }],
  creator: "Skin & Vision Clinic",
  publisher: "Skin & Vision Clinic",
  openGraph: {
    siteName: "Skin & Vision Clinic",
    locale: "nl_NL",
    type: "website",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <html
      lang="nl"
      className={`${cormorant.variable} ${dmSans.variable} ${lora.variable}`}
    >
      <head>
        <meta name="theme-color" content="#ff8835" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C01BBE28ZX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-C01BBE28ZX');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
