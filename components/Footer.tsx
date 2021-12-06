import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <hr />
      <Link href="/about">&copy; Peter Sheppard</Link>
    </footer>
  );
}
