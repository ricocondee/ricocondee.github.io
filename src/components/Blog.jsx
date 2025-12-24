import React, { useState, useEffect } from "react";
import styles from "../styles/Blog.module.css";
import { Link } from "react-router-dom";
import { getPosts } from "../utils/blogLoader";
import { getImageUrl } from "../utils/imageUtil";
import { FaArrowRight, FaClock } from "react-icons/fa";
import SEO from "../components/SEO";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      const postsWithReadTime = data.map(post => ({
        ...post,
        readTime: Math.ceil(post.body.split(/\s+/).length / 200) + ' min read'
      }));
      setPosts(postsWithReadTime);
    };
    fetchPosts();
  }, []);

  return (
    <div className={styles.blog}>
      <SEO 
        title="Blog"
        description="Exploring the intersection of design, technology, and user experience. Read my latest thoughts and tutorials."
        url="blog"
      />
      <header className={styles.header}>
        <h2 className={styles.sectionTitle}>Insights & Thoughts</h2>
        <p className={styles.subtitle}>
          Exploring the intersection of design, technology, and user experience.
        </p>
      </header>
      
      <div className={styles.blogContainer}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.postCard}>
            {post.thumbnail && (
              <div className={styles.thumbnailWrapper}>
                <img src={getImageUrl(post.thumbnail)} alt={post.title} className={styles.thumbnail} />
              </div>
            )}
            <div className={styles.cardHeader}>
              <span className={styles.postDate}>{post.date}</span>
              <span className={styles.readTime}><FaClock className={styles.clockIcon}/> {post.readTime}</span>
            </div>
            
            <div className={styles.cardContent}>
              <Link to={`/blog/${post.slug}`} className={styles.titleLink}>
                <h3 className={styles.postTitle}>{post.title}</h3>
              </Link>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
            </div>

            <div className={styles.cardFooter}>
              <Link to={`/blog/${post.slug}`} className={styles.readMoreLink}>
                Read Article <FaArrowRight className={styles.arrowIcon} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
