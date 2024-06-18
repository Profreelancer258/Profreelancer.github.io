import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main className={styles.main}>
        <header className={styles.title}>
          <h1>Welcome to My Portfolio</h1>
          <p>Freelancer offering various services</p>
        </header>
        <section className={styles.description}>
          <h2>Services</h2>
          <ul className={styles.grid}>
            <li className={styles.card}>
              <h3>Pro Writing & Editing Services</h3>
              <p>Professional writing and editing tailored to your needs.</p>
            </li>
            <li className={styles.card}>
              <h3>Basic Web Pages Design</h3>
              <p>Clean and functional web page designs for your business.</p>
            </li>
            <li className={styles.card}>
              <h3>Data Entry & Analysis</h3>
              <p>Accurate data entry and insightful analysis services.</p>
            </li>
            <li className={styles.card}>
              <h3>Web Content</h3>
              <p>Engaging and SEO-friendly content creation for websites.</p>
            </li>
            <li className={styles.card}>
              <h3>Social Media Marketing</h3>
              <p>Strategic social media marketing campaigns to boost your presence.</p>
            </li>
            <li className={styles.card}>
              <h3>Conversational English Tutoring</h3>
              <p>Personalized tutoring sessions to improve your English skills.</p>
            </li>
            <li className={styles.card}>
              <h3>Virtual Assistant</h3>
              <p>Efficient virtual assistant services to support your business needs.</p>
            </li>
          </ul>
        </section>
        <section className={styles.description}>
          <h2>Contact Me</h2>
          <p>Get in touch to discuss your project needs!</p>
          <ul className={styles.grid}>
            <li className={styles.card}>
              <h3>Email</h3>
              <p>profreelancer258@gmail.com</p>
            </li>
            <li className={styles.card}>
              <h3>Phone</h3>
              <p>+64204849165</p>
            </li>
            <li className={styles.card}>
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/prakash-bhattarai-89171211b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app</a></p>
            </li>
            <li className={styles.card}>
              <h3>Portfolio</h3>
              <p><a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">https://profreelancer258.github.io/</a></p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;