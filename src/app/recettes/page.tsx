import Link from "next/link";
import Image from "next/image";
import Search from "@/app/components/search";

const recettes = [
  {
    href: "/recettes/recette",
    titre: "Poulet au Curry",
    image: "/pommes.jpg",
    ingredients: [
      "Poulet",
      "Curry en poudre",
      "Lait de coco",
      "Oignon",
      "Ail",
      "Gingembre",
      "Tomates",
    ],
    niveauDeDifficulte: "Facile",
  },
  {
    href: "/",
    titre: "Lasagnes à la Bolognese",
    image: "/pommes.jpg",
    ingredients: [
      "Pâtes à lasagnes",
      "Viande hachée",
      "Tomates",
      "Oignon",
      "Ail",
      "Carottes",
      "Fromage râpé",
    ],
    niveauDeDifficulte: "Moyen",
  },
  {
    href: "/",
    titre: "Ratatouille",
    image: "/pommes.jpg",
    ingredients: [
      "Aubergines",
      "Courgettes",
      "Poivrons",
      "Tomates",
      "Oignon",
      "Ail",
      "Herbes de Provence",
    ],
    niveauDeDifficulte: "Facile",
  },
  {
    href: "/",
    titre: "Soufflé au Fromage",
    image: "/pommes.jpg",
    ingredients: [
      "Fromage râpé",
      "Beurre",
      "Farine",
      "Lait",
      "Oeufs",
      "Muscade",
    ],
    niveauDeDifficulte: "Difficile",
  },
];

console.log("test");

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <div>
      <h1>Liste de recette</h1>
      <Search placeholder="Recherche une recette" />
      <div className="flex justify-center gap-8 wrap">
        {recettes.map((recette, index, query) => (
          <Link
            href={recette.href}
            key={index}
            className="p-2 rounded-lg bg-orange-800 hover:animate-scale-up text-white"
          >
            <h2>{recette.titre}</h2>
            <Image
              src={recette.image}
              width={50}
              height={50}
              alt={recette.titre}
            />
            <span>Niveau de difficulté: {recette.niveauDeDifficulte}</span>
            <ul>
              {recette.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
