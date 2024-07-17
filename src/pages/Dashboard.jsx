import React from "react";
import FeatureCard from "../components/feature-card/FeatureCard";
import { feature } from "../data/feature-data";

export default function Dashboard() {
  return (
    <div className="section-wrapper">
      <section className="feature-section">
        {feature.map((item) => (
          <FeatureCard
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </div>
  );
}
