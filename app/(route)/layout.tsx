import Header from "@/(route)/layout/Header";
import Footer from "@/(route)/layout/Footer";

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
