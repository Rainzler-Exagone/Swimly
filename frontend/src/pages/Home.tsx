import { CardWithForm } from "@/components/Athletecard";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="pt-24 px-4">
          <CardWithForm />
        </main>
      </div>
    </>
  );
}

export default Home;
