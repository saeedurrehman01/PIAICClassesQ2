import Head from "next/head";
import Card from "./components/card/Card";


const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Head>
        <title>Next.js Card Component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <Card
          title="Beautiful Scenery"
          description="This is a description of the beautiful scenery."
          imageUrl="/scenery.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
