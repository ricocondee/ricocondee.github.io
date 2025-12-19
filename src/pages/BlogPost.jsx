import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { getPostBySlug } from "../utils/blogLoader";
import styles from "../styles/BlogPost.module.css";
import { FaArrowLeft } from "react-icons/fa";
import SEO from "../components/SEO";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPostBySlug(slug);
      setPost(data);
    };
    fetchPost();
  }, [slug]);

  if (!post) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <SEO 
        title={post.title}
        description={post.excerpt || `Read ${post.title} by Emanuel Rico Conde`}
        image={post.thumbnail}
        url={`blog/${slug}`}
        type="article"
      />
      <Link to="/blog" className={styles.backButton}>
        <FaArrowLeft /> Back to Blog
      </Link>

      <div className={styles.heroSection}>
        <div className={styles.heroBackground}>
          {post.thumbnail ? (
            <img src={post.thumbnail} alt={post.title} className={styles.heroImage} />
          ) : (
            <div className={styles.heroGradient} />
          )}
        </div>
        <div className={styles.heroContent}>
          <span className={styles.date}>{post.date}</span>
          <h1 className={styles.title}>{post.title}</h1>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.markdownBody}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
