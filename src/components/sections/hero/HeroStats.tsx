import Container from "@/components/ui/Container";

export default function HeroStats() {
  return (
    <div className="absolute inset-x-0 bottom-8 z-20 lg:bottom-12">
      <Container>
        <div className="mx-auto max-w-[1280px] rounded-[32px] border border-white/20 bg-black/60 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <Stat number="500K+" title="AAC Blocks Produced" />
            <Stat number="100%" title="Quality Tested" />
            <Stat number="ISO 9001" title="Certified Quality" />
            <Stat number="24/7" title="Customer Support" />
          </div>
        </div>
      </Container>
    </div>
  );
}

function Stat({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center px-4 py-8 text-center sm:px-6 md:px-8">
      <p className="text-4xl font-black text-white transition-transform duration-300 hover:scale-110 sm:text-5xl">
        {number}
      </p>
      <p className="mt-3 text-sm text-gray-400 sm:text-base">
        {title}
      </p>
    </div>
  );
}