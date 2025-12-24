import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { getPostBySlug } from "../utils/blogLoader";
import { getImageUrl } from "../utils/imageUtil";
import styles from "../styles/BlogPost.module.css";
import { FaArrowLeft, FaShareAlt, FaCheck, FaTwitter, FaLinkedin, FaWhatsapp, FaLink, FaTimes } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import SEO from "../components/SEO";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPostBySlug(slug);
      setPost(data);
    };
    fetchPost();
  }, [slug]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareToSocial = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this post: ${post.title}`);
    let shareUrl = "";

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'linkedin':
        // using the feed sharing URL which is often more reliable for immediate posting
        shareUrl = `https://www.linkedin.com/feed/?shareActive=true&shareUrl=${url}`;
        break;
      case 'threads':
        shareUrl = `https://www.threads.net/intent/post?text=${text}%20${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text}%20${url}`;
        break;
      case 'copy':
        handleCopyLink();
        return;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    setShowShareMenu(false);
  };

  if (!post) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <SEO 
        title={post.title}
        description={post.excerpt || `Read ${post.title} by Emanuel Rico Conde`}
        image={getImageUrl(post.thumbnail)}
        url={`blog/${slug}`}
        type="article"
      />
      <Link to="/blog" className={styles.backButton}>
        <FaArrowLeft /> Back to Blog
      </Link>
      
      <div className={styles.shareContainer}>
        <div className={`${styles.shareMenu} ${showShareMenu ? styles.show : ''}`}>
          <button onClick={() => shareToSocial('twitter')} className={styles.shareOption} style={{'--i': 0}} aria-label="Share on Twitter">
            <FaTwitter />
          </button>
          <button onClick={() => shareToSocial('linkedin')} className={styles.shareOption} style={{'--i': 1}} aria-label="Share on LinkedIn">
            <FaLinkedin />
          </button>
          <button onClick={() => shareToSocial('threads')} className={styles.shareOption} style={{'--i': 2}} aria-label="Share on Threads">
            <SiThreads />
          </button>
          <button onClick={() => shareToSocial('whatsapp')} className={styles.shareOption} style={{'--i': 3}} aria-label="Share on WhatsApp">
            <FaWhatsapp />
          </button>
        </div>

        <button 
          onClick={() => setShowShareMenu(!showShareMenu)} 
          className={`${styles.shareButton} ${showShareMenu ? styles.active : ''}`}
          aria-label="Toggle share menu"
        >
          {copied ? <FaCheck /> : (showShareMenu ? <FaTimes /> : <FaShareAlt />)}
        </button>
      </div>

      <div className={styles.heroSection}>
        <div className={styles.heroBackground}>
          {post.thumbnail ? (
            <img src={getImageUrl(post.thumbnail)} alt={post.title} className={styles.heroImage} />
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
          <ReactMarkdown 
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({node, ...props}) => <img {...props} src={getImageUrl(props.src)} />
            }}
          >
            {post.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;