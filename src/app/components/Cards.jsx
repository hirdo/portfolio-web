import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "./ScrollReveal";
import GradientText from "./GradientText";
import { fetchDevToArticles, capitalize, getArticleImage } from "@/lib/devto";

const CardSection = async () => {
    let latestArticles = [];
    try {
        const articles = await fetchDevToArticles();
        latestArticles = articles.slice(0, 3);
    } catch {
        latestArticles = [];
    }

    if (latestArticles.length === 0) return null;

    return (
        <section id="blogs">
            <div className="py-16 lg:py-20 px-4 lg:px-8 bg-gray-100 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                                Latest <GradientText className="text-4xl sm:text-5xl font-bold">Blogs</GradientText>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                                Insights and thoughts on technology, design, and development.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {latestArticles.map((article, index) => {
                            const coverImage = getArticleImage(article);
                            const primaryTag = article.tag_list?.[0] || 'article';

                            return (
                                <ScrollReveal key={article.id} delay={index * 100}>
                                    <Link href={article.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                                        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                            <div className="relative h-48 overflow-hidden">
                                                <Image
                                                    src={coverImage}
                                                    alt={article.title}
                                                    fill
                                                    unoptimized={coverImage.startsWith('http')}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-semibold rounded-full">
                                                    {capitalize(primaryTag)}
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 min-h-[3.5rem]">
                                                    {article.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 h-16">
                                                    {article.description}
                                                </p>
                                                <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                                                    Read Article
                                                    <FontAwesomeIcon icon={faArrowRight} className="ml-1.5 text-xs group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            );
                        })}
                    </div>

                    <ScrollReveal>
                        <div className="text-center mt-10">
                            <Link
                                href="/blogs"
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
                            >
                                View All Blogs
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default CardSection;
