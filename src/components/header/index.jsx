import NavSection from "./nav-section";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 md:px-20 dark:bg-gray-950">
      <div className="text-2xl font-bold">UGT</div>
      <NavSection />
    </header>
  );
};

export default Header;
