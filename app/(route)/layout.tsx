import Header from "@app/(route)/layout/Header";
import Footer from "@app/(route)/layout/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-7xl bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
