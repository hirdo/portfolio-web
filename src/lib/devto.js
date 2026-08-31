const DEVTO_API_URL = 'https://dev.to/api/articles';
const USERNAME = 'hirdo';

const TAG_IMAGES = {
  javascript: '/masterjs.webp',
  ai: '/ai.webp',
  security: '/cyber-security.webp',
  cybersecurity: '/cyber-security.webp',
  nextjs: '/nextjs.webp',
  machinelearning: '/machine-learning.webp',
  datascience: '/data-science.webp',
  webdev: '/design.webp',
  docker: '/developer.gif',
  python: '/data-science.webp',
};

export async function fetchDevToArticles() {
  try {
    const res = await fetch(
      `${DEVTO_API_URL}?username=${USERNAME}&per_page=100`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export function extractUniqueTags(articles) {
  const tagSet = new Set();
  for (const article of articles) {
    if (article.tag_list?.[0]) {
      tagSet.add(article.tag_list[0]);
    }
  }
  const tags = Array.from(tagSet).sort().map(capitalize);
  return ['All', ...tags];
}

export function getArticleImage(article) {
  if (article.cover_image) return article.cover_image;
  if (article.social_image) return article.social_image;
  const primaryTag = article.tag_list?.[0];
  return primaryTag ? (TAG_IMAGES[primaryTag] || '/main-image.webp') : '/main-image.webp';
}

export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
