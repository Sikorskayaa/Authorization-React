import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

function AppBar() {
  return (
    <header>
      <Navigation />
      <AuthNav />
    </header>
  );
}
export default AppBar;
