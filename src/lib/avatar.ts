// Picks a researcher's photo. Priority:
//   1. avatarUrl in the markdown (external image)
//   2. avatar in the markdown (any file under src/assets)
//   3. a file in src/assets/members named after the markdown file, e.g. hong-gildong.md -> hong-gildong.jpg
//   4. the default silhouette
import type { CollectionEntry } from 'astro:content';
import placeholder from '../assets/avatar-placeholder.svg';

const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/members/*.{jpg,jpeg,png,webp,avif}', { eager: true });

const bySlug = new Map(
  Object.entries(photos).map(([path, mod]) => [
    path.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase(),
    mod.default.src,
  ]),
);

export function memberPhotoSrc(member: CollectionEntry<'team'>): string {
  const { avatarUrl, avatar } = member.data;
  if (avatarUrl) return avatarUrl;
  if (avatar) return avatar.src;
  const slug = member.id.replace(/\.[^/.]+$/, '').toLowerCase();
  return bySlug.get(slug) ?? placeholder.src;
}
