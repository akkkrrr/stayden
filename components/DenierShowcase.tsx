const deniers = [
  { d: 5,   name: "Ultra Sheer",  opacity: 0.05 },
  { d: 15,  name: "Classic Sheer", opacity: 0.12 },
  { d: 30,  name: "Semi-Opaque",  opacity: 0.22 },
  { d: 40,  name: "Opaque",       opacity: 0.35 },
  { d: 60,  name: "Heavy",        opacity: 0.5 },
  { d: 100, name: "Full Opaque",  opacity: 0.7 },
];

export default function DenierShowcase() {
  return (
    <section className="denier-showcase">
      <div className="denier-showcase__header">
        <div className="editorial-label" style={{ color: "var(--gold)" }}>
          The Scale
        </div>
        <h2 className="denier-showcase__title">
          Find Your <em>Denier</em>
        </h2>
      </div>
      <div className="denier-strip">
        {deniers.map((item) => (
          <div key={item.d} className="denier-item" data-denier={item.d}>
            <div
              className="denier-item__bg"
              style={{
                background: `linear-gradient(180deg, rgba(114,47,55,${item.opacity * 0.5}), rgba(90,37,44,${item.opacity}))`,
              }}
            />
            <div className="denier-item__content">
              <div className="denier-item__number">{item.d}</div>
              <div className="denier-item__d">denier</div>
              <div className="denier-item__name">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
