import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  return (
    <>
      <Navbar lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
