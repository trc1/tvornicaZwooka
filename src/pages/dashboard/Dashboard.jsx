import FeatureCard from "../../components/feature-card/FeatureCard";
import PodcastCard from "../../components/podcast-card/PodcastCard";
import Button from "../../components/button/Button";
import CategoryCard from "../../components/category-card/CategoryCard";
import { feature } from "../../data/feature-data";
import { podcast } from "../../data/podcast-data";
import { featured } from "../../data/featured-data";
import { category } from "../../data/category-data";

export default function Dashboard() {
  return (
    <div className="content-section">
      <section className="content-section__featured">
        <div className="content-section__overflow">
          {feature.map((item) => (
            <FeatureCard key={item.title} data={item} />
          ))}
        </div>
      </section>
      <div className="content-section__sections-wrapper">
        <section className="section">
          <header className="section__header">
            <h3 className="section__title">Podcasts</h3>
            <Button className="btn-small-outline" label="View All" />
          </header>
          <div className="section__carusel">
            <div className="section__overflow">
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
        <section className="section">
          <header className="section__header">
            <h3 className="section__title">Featured</h3>
            <Button className="btn-small-neutral" label="All" />
            <Button className="btn-small-outline" label="Premium" />
            <Button className="btn-small-outline" label="Disabled" />
          </header>
          <div className="section__carusel">
            <div className="section__overflow">
              {featured.map((item, index) => (
                <CategoryCard
                  key={index}
                  image={item.image}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <header className="section__header">
            <h3 className="section__title">Categories</h3>
            <Button className="btn-small-outline" label="View All" />
          </header>
          <div className="section__carusel">
            <div className="section__overflow">
              {category.map((item, index) => (
                <CategoryCard
                  key={index}
                  image={item.image}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
