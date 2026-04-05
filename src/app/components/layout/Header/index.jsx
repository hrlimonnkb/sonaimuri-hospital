import MainNav from "./MainNav";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="w-full">
      <TopBar />
      <MainNav />
    </header>
  );
}