import { heroData } from '@/data/content';

export default function Hero() {
  return (
    <section>
      <div>
        <span>{heroData.badge}</span>
      </div>

      <h1>{heroData.title}</h1>

      <p>{heroData.description}</p>

      <div>
        <button type="button">{heroData.primaryBtn}</button>
        <button type="button">{heroData.secondaryBtn}</button>
      </div>
    </section>
  );
}
