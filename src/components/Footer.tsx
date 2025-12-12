export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Daniel Enrique Prieto Gallani. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con <span className="text-primary">♥</span> en Maracaibo, Venezuela
          </p>
        </div>
      </div>
    </footer>
  );
}
