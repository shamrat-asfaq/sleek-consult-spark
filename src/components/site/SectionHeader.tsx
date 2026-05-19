export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-16 max-w-3xl">
      {eyebrow && (
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl lg:text-5xl font-medium text-ink-1 leading-tight text-balance mb-4">
        {title}
      </h2>
      <div className="h-px w-24 bg-gold" />
      {description && (
        <p className="text-ink-2 mt-6 text-base lg:text-lg max-w-2xl text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
