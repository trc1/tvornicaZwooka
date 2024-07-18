import FeatureCard from "../components/feature-card/FeatureCard";
import PodcastCard from "../components/podcast-card/PodcastCard";
import Button from "../components/button/Button";
import CategoryCard from "../components/category-card/CategoryCard";
import { feature } from "../data/feature-data";
import { podcast } from "../data/podcast-data";
import { featured } from "../data/featured-data";

export default function Dashboard() {
  const item = featured[0];
  return (
    <div className="content-section">
      <section className="content-section__featured">
        {feature.map((item) => (
          <FeatureCard
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
      <div className="content-section__content">
        <section className="podcast-wrapper">
          <header className="podcast-wrapper__header">
            <h3 className="podcast-wrapper__header-title">Mind Matters</h3>
            <Button className="btn-outline" label="View All" />
          </header>
          <div className="podcast-wrapper__carusel">
            <div className="podcast-wrapper__carusel-overflow">
              {podcast.map((item) => (
                <PodcastCard
                  key={item.title}
                  title={item.title}
                  status={item.status}
                  image={item.image}
                  badge={item.badge}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <CategoryCard image={item.image} title={item.title} />
    </div>
  );
}
