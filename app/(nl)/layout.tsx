import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NlLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar lang="nl" />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
