// Picks a "story of the day" client-side so the choice changes daily even on
// a static site that isn't rebuilt every day, without needing a server.
function dayKey(date) {
  return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
}

function seededIndex(seed, length) {
  let hash = seed;
  hash = (Math.imul(hash ^ (hash >>> 16), 0x45d9f3b)) | 0;
  hash = (Math.imul(hash ^ (hash >>> 16), 0x45d9f3b)) | 0;
  hash = (hash ^ (hash >>> 16)) | 0;
  return Math.abs(hash) % length;
}

const section = document.getElementById('story-of-day');
const dataEl = document.getElementById('sotd-data');
const stories = dataEl?.textContent ? JSON.parse(dataEl.textContent) : [];

if (stories.length > 0) {
  const story = stories[seededIndex(dayKey(new Date()), stories.length)];

  const image = document.getElementById('sotd-image');
  const link = document.getElementById('sotd-link');
  const description = document.getElementById('sotd-description');

  if (image instanceof HTMLImageElement) {
    image.src = story.image;
    image.alt = story.imageAlt;
  }
  if (link instanceof HTMLAnchorElement) {
    link.href = story.href;
    link.textContent = story.title;
  }
  if (description) {
    description.textContent = story.description;
  }
} else {
  section?.remove();
}
