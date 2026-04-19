import { notFound } from "next/navigation";
import Header from "@/components/sections/Header";
import AgentHero from "@/components/sections/AgentHero";
import AgentBio from "@/components/sections/AgentBio";
import PropertiesByAgent from "@/components/sections/PropertiesByAgent";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";
import { agents } from "@/constants/properties";

export function generateStaticParams() {
  return agents.map((agent) => ({
    id: agent.id,
  }));
}

export default async function AgentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = agents.find((a) => a.id === id);

  if (!agent) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <AgentHero agent={agent} />
      <AgentBio agent={agent} />
      <PropertiesByAgent agent={agent} />
      <Newsletter />
      <Footer />
    </main>
  );
}
