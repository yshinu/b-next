import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col min-h-screen bg-background">
    <Navbar />
    {children}
    <Footer/>
    </div>;
}
