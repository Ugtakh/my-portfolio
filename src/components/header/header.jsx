import NavSection from "./nav-section";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 py-4">
      <h1 className="text-3xl font-bold">UGT</h1>
      <NavSection />
    </header>
  );
};

export default Header;
