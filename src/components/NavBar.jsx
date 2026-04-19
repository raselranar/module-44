import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background">
      <header className="flex h-16 items-center justify-between px-6">
        <div>Logo</div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <div className="">
          <ThemeToggle />
        </div>
      </header>
    </nav>
  );
};
export default NavBar;
