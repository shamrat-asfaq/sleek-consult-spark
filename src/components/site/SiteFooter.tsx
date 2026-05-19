import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-noir">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Multiple Icon Technology" className="h-10 w-auto" />
            <span className="font-display font-semibold text-gold tracking-tight text-sm">
              MULTIPLE ICON TECHNOLOGIES
            </span>
          </div>
          <p className="text-ink-3 text-sm max-w-md leading-relaxed">
            A global intelligence engineering enterprise shaping the future of
            digital civilization through precision technology.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-4">
            Navigate
          </h4>
          <ul className="space-y-3 text-sm text-ink-2">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/industries" className="hover:text-gold">Industries</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-4">
            Global Ops
          </h4>
          <ul className="space-y-3 text-sm text-ink-2">
            <li>Zurich, CH</li>
            <li>Singapore, SG</li>
            <li>London, UK</li>
            <li>New York, US</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium text-ink-3 tracking-widest uppercase">
          <div>© {new Date().getFullYear()} Multiple Icon Technologies</div>
          <div className="flex gap-8">
            <span>Legal</span>
            <span>Sovereignty</span>
            <span>Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
