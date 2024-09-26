

export default function Home() {
  return (
    <div>
      <h2>Jobe Camp Start website</h2>
      <div className="flex justify-center items-center gap-4 p-4">
      <button className="btn btn-active">Default</button>
      <button className="btn btn-active btn-neutral">Neutral</button>
      <button className="btn btn-active btn-primary">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      <button className="btn btn-active btn-accent">Accent</button>
      <button className="btn btn-active btn-ghost">Ghost</button>
      </div>
    </div>
  );
}
