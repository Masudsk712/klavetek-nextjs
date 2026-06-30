import Container from "@/components/ui/Container";
import Link from "next/link";
import { NAVIGATION } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 py-16 text-slate-300">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold text-white">Klavetek</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Leading manufacturer of premium AAC blocks and construction solutions across India.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {NAVIGATION.main.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-3">
              {NAVIGATION.footer.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Klavetek. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
