import { useRouter } from "next/router";

const posts = [
  {
    id: 1,
    slug: "how-to-build-a-blog-like-reddit",
    title: "How to build a blog like Reddit",
    author: "u/yourname",
    createdAt: "4 hours ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur...",
    commentsCount: 12,
    tags: ["webdev", "tutorial"],
    thumbnail:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: 2,
    slug: "why-tailwind-is-awesome-for-layouts",
    title: "Why Tailwind is awesome for layouts",
    author: "u/designer",
    createdAt: "1 day ago",
    content:
      "Tailwind CSS allows you to quickly build modern designs without leaving your HTML...",
    commentsCount: 8,
    tags: ["tailwind", "css"],
    thumbnail:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=80&q=80",
  },
];

export default function PostSlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  const post = posts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found</p>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-2">
        Posted by <span className="underline cursor-pointer">{post.author}</span> • {post.createdAt}
      </p>
      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt="thumbnail"
          className="w-full max-h-96 object-cover rounded-md mb-6"
        />
      )}
      <article className="prose max-w-none">{post.content}</article>
      <div className="mt-6 text-sm text-gray-500">
        Tags: {post.tags.join(", ")}
      </div>
    </div>
  );
}
