/**
 * Section heading — eyebrow (mono), title (display), optional subtitle.
 */
export default function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div className="section-heading" data-component="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </div>
  );
}
