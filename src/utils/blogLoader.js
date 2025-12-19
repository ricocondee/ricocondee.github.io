import frontMatter from 'front-matter';

export const getPosts = async () => {
  const modules = import.meta.glob('../posts/*.md', { as: 'raw' });
  const posts = [];

  for (const path in modules) {
    const markdown = await modules[path]();
    const { attributes, body } = frontMatter(markdown);
    const slug = path.split('/').pop().replace('.md', '');
    
    let formattedDate = attributes.date;
    if (formattedDate instanceof Date) {
        formattedDate = formattedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    posts.push({
      slug,
      ...attributes,
      date: formattedDate,
      body
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getPostBySlug = async (slug) => {
  const posts = await getPosts();
  return posts.find(post => post.slug === slug);
};
