export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Leonel Piter</h3>
          <p className="text-slate-400 mb-4">Desarrollador Web | Control de Calidad | Soluciones Tecnológicas</p>
          <div className="flex justify-center gap-6 text-sm text-slate-400">
            <span>Gualeguaychú, Entre Ríos</span>
            <span>•</span>
            <a href="mailto:leonelpiter@gmail.com" className="hover:text-white transition-colors">
              leonelpiter@gmail.com
            </a>
            <span>•</span>
            <span>+54 3446-597723</span>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-800 text-slate-500 text-sm">
            <p>© 2025 Leonel Piter. Transformando experiencia industrial en soluciones web.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
