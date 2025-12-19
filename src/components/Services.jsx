import React from "react";
import styles from "../styles/Services.module.css";
import { FaCode, FaMobileAlt, FaRocket, FaPaintBrush } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Web Development",
    description: "Building modern, responsive, and scalable web applications using React, Vite, and the latest web standards. I focus on clean code and maintainable architecture."
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    description: "Creating high-performance, offline-first mobile experiences with React Native. Specialized in cross-platform development for both iOS and Android."
  },
  {
    id: 3,
    icon: <FaPaintBrush />,
    title: "UI/UX Implementation",
    description: "Translating design concepts into pixel-perfect, interactive interfaces. I believe in 'Lagom' design—minimalist, balanced, and user-centric."
  },
  {
    id: 4,
    icon: <FaRocket />,
    title: "Performance Optimization",
    description: "Auditing and improving application speed, accessibility, and SEO. Ensuring your digital products run smoothly on all devices."
  }
];

const Services = () => {
  return (
    <div className={styles.services}>
      <h2 className={styles.sectionTitle}>What I Do</h2>
      <div className={styles.servicesContainer}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              {service.icon}
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
