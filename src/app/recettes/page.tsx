import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Liste de recettes</h1>
      <ul>
        <li>
          <Link href="recettes/recette">Tartes aux pommes</Link>
        </li>
      </ul>
    </>
  );
}
