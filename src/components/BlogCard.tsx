export interface Props {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export default function BlogCard({ title, slug, date, excerpt, tags }: Props) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="group">
      <a 
        href={`/blog/${slug}`} 
        className="block bg-base-100 border border-base-300 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
      >
        <div className="p-6 md:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-base-200 text-base-content/70 group-hover:text-primary transition-colors duration-200">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 
            className="text-xl md:text-2xl font-display font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-200 text-base-content"
          >
            {title}
          </h2>

          {/* Date */}
          <time className="text-sm text-base-content/60 mb-4 block" dateTime={date}>
            {formatDate(date)}
          </time>

          {/* Excerpt */}
          <p className="text-base-content/70 leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          {/* Read More Link */}
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </div>
      </a>
    </article>
  );
}
