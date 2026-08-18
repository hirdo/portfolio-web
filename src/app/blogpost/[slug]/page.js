import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import Navbar from '../../components/Header';
import Contact from '../../components/Contact';
import Copyright from '../../components/Copyright';
import FAQ from '../../components/FAQ';
import Image from "next/image";

export default async function Page({ params }) {
  // Await params to ensure it's resolved before use
  const { slug } = await params;

  const filepath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  // Extract the FAQs from the front matter
  const faqs = data.faqs || []; // Default to an empty array if no FAQs are provided

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title || "Blog Post" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <>
      <Navbar />
      <div className="py-4 lg:py-8 px-4 lg:px-12">
        {data.image && (
          <div className="mb-8">
            <Image
              src={data.image}
              alt={data.title}
              className="w-full h-96 rounded-lg shadow-lg"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4 mt-12">{data.title}</h1>
        <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
          &quot;{data.description}&quot;
        </p>
        <div className="flex gap-2">
          <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
          <p className="text-sm text-gray-500 mb-4">{data.date}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>

      {/* Render the FAQ component */}
      {faqs.length > 0 && <FAQ faqs={faqs} />}

      <Contact />
      <Copyright />
    </>
  );
}
