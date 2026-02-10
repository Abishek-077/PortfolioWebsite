import { blogPosts } from '../../data/blog';
import { projects } from '../../data/projects';
import { techStack } from '../../data/techStack';
import { testimonials } from '../../data/testimonials';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function HomePage() {
  return (
    <main>
      <section>
        <h2>Featured Projects</h2>
        <div>
          {projects.map((project) => (
            <article key={project.id}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Completed: {formatDate(project.completedAt)}</p>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div>
                {project.links.live ? <a href={project.links.live}>Live Demo</a> : null}
                {project.links.github ? <a href={project.links.github}>GitHub</a> : null}
                {project.links.caseStudy ? <a href={project.links.caseStudy}>Case Study</a> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Testimonials</h2>
        <div>
          {testimonials.map((testimonial) => (
            <article key={testimonial.id}>
              <img src={testimonial.avatar} alt={`${testimonial.name} avatar`} />
              <blockquote>{testimonial.quote}</blockquote>
              <p>
                {testimonial.name} · {testimonial.role}, {testimonial.company}
              </p>
              <p>
                {testimonial.project} · {formatDate(testimonial.date)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Latest Blog Posts</h2>
        <div>
          {blogPosts.map((post) => (
            <article key={post.id}>
              <img src={post.coverImage} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <p>
                {formatDate(post.publishedAt)} · {post.readTimeMinutes} min read
              </p>
              <ul>
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a href={post.slug}>Read article</a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Tech Stack</h2>
        <div>
          {techStack.map((tech) => (
            <article key={tech.id}>
              <img src={tech.icon} alt={tech.name} />
              <h3>{tech.name}</h3>
              <p>
                {tech.category} · {tech.proficiency}
              </p>
              <p>{tech.years}+ years experience</p>
              <a href={tech.website}>Visit website</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
