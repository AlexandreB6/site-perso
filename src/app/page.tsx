import Header from "@/app/components/header";
import Presentation from "@/app/components/presentation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Presentation />
    </main>
  );
}
