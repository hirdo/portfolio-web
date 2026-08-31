const DEVTO_API_URL = 'https://dev.to/api/articles';
const USERNAME = 'hirdo';

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
    for (const tag of article.tag_list) {
      tagSet.add(tag);
    }
  }
  const tags = Array.from(tagSet).sort().map(capitalize);
  return ['All', ...tags];
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
