import Link from "next/link";

const Navigation: React.FC = () => {
  const isLogged = true;

  return (
    <>
      <nav className="navcont noselect">
        <h3 className="logo">{isLogged ? "Hello Bek" : "Welcome"}</h3>
        <div className="links">
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/posts">
            <a>Posts</a>
          </Link>

          <Link href="/discover">
            <a>Discover</a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
