import { featuresData } from '@/data/content';

export default function Features() {
  return (
    <section>
      <h2>Features</h2>
      <ul>
        {featuresData.map((f) => (
          <li key={f.id}>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
