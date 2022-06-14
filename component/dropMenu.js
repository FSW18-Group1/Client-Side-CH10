import Link from "next/link";

export default function DropMenu() {
  const { user } = props;
  const logout = () => {
    removeCookie("token");
    removeCookie("data");
    setAuthenticated(false);
    router.push("/login");
  };

  return (
    <div className="dropdown">
      <button className="profile"></button>
      <div className="dropdown-content">
        <Link href={"/profile"}>
          <a>setting</a>
        </Link>
        <Link href={"#"}>
          <a onClick={logout}>Logout</a>
        </Link>
      </div>
    </div>
  );
}
