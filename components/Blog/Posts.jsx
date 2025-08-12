import Link from "next/link";

export default function BlogPosts() {
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

  return (
    <div className="max-w-7xl flex flex-col md:flex-row  gap-4 p-4 mx-auto ">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex rounded-md shadow-sm min-h-40 p-4 hover:shadow-md transition border-dashed border-[1px]"
        >
          {/* Content */}
          <div className="flex-1">
            <p className="text-xs mb-1">
              Posted by{" "}
              <span className="hover:underline cursor-pointer">{post.author}</span> • {post.createdAt}
            </p>
            <h2 className="text-lg font-semibold hover:underline cursor-pointer">
              <Link href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm line-clamp-3">{post.content}</p>
            <div className="mt-3 flex gap-6 text-xs">
              <span className="flex items-center gap-1 cursor-pointer hover:underline">
                💬 {post.commentsCount} Comments
              </span>
              <span className="flex items-center gap-1 cursor-pointer hover:underline">
                🏷 {post.tags.join(", ")}
              </span>
              <span className="flex items-center gap-1 cursor-pointer hover:underline">
                🔗 Share
              </span>
            </div>
          </div>

          {/* Thumbnail */}
          {post.thumbnail && (
            <div className="ml-4 flex-shrink-0">
              <img
                src={post.thumbnail}
                alt="thumbnail"
                className="w-20 h-20 object-cover rounded-md"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
