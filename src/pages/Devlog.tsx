import { useEffect, useState } from "react";
import matter from "gray-matter";
// Polyfill Node's Buffer for gray-matter in the browser
import { Buffer } from "buffer";

if (typeof globalThis !== "undefined" && !(globalThis as Record<string, unknown>).Buffer) {
  (globalThis as Record<string, unknown>).Buffer = Buffer;
}
import AOS from "aos";
import "aos/dist/aos.css";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import PageLayout from "../components/PageLayout";
import FramedPanel from "../components/FramedPanel";
import Divider from "../components/Divider";

/** Developer diary with expandable markdown posts */
export default function Devlog() {
  // Loaded markdown posts
  const [posts, setPosts] = useState<
    {
      id: string;
      content: string;
      data: { title?: string; date?: string; description?: string };
    }[]
  >([]);
  // Track which post is currently expanded
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ once: true });

    // Dynamically import all Markdown files
    const importMarkdownFiles = async () => {
      const markdownFiles = import.meta.glob("/src/devlog/*.md", { as: "raw" });
      const loadedPosts = await Promise.all(
        Object.entries(markdownFiles).map(async ([path, loader]) => {
          const raw = await loader();
          const { data, content } = matter(raw);
          const id = path.split("/").pop()?.replace(".md", "") || "unknown";
          return { id, content, data };
        })
      );
      loadedPosts.sort((a, b) => {
        const dateA = new Date(a.data.date || 0).getTime();
        const dateB = new Date(b.data.date || 0).getTime();
        return dateB - dateA;
      });
      setPosts(loadedPosts);
    };

    importMarkdownFiles();
  }, []);

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden font-gothic text-white page-bg bg-[url('/assets/devlog-bg.png')]"
    >
      {/* ☠ NavBar */}
      <NavBar />

      {/* 📝 Devlog Header */}
      <Section className="relative z-0 py-20 text-center">
        <FramedPanel variant="default" className="p-8 framed-panel-static">
          <h1
            className="text-5xl md:text-6xl font-bold tracking-widest text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]"
            data-aos="fade-up"
          >
            Devlog
          </h1>
          <p
            className="text-lg md:text-xl text-gray-300 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Follow our journey as we bring Crypthouse Studio to life.
          </p>
        </FramedPanel>
      </Section>

      {/* Divider */}
      

      {/* 📝 Devlog Posts */}
      <Section padding="py-20">
        <PageLayout layout="grid" columns={2} gap="gap-8">
          {posts.map((post) => (
            <FramedPanel
              key={post.id}
              title={post.data.title || post.id.replace(/-/g, " ")}
              variant="default"
              className={`cursor-pointer transition-transform duration-300 ${
                expandedPost === post.id ? "scale-105" : ""
              }`}
              onClick={() =>
                setExpandedPost(expandedPost === post.id ? null : post.id)
              } // Toggle expand/collapse
            >
              {/* Title and Date */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-red-700 font-bold text-xl">
                  {post.data.title || post.id.replace(/-/g, " ")}
                </h2>
                {post.data.date && (
                  <p className="text-gray-300 text-sm italic">
                    {new Date(post.data.date).toLocaleDateString()}
                  </p>
                )}
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedPost === post.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ReactMarkdown
                      components={{
                        p: (props) => (
                          <p className="text-gray-300 mt-2" {...props} />
                        ),
                        h1: (props) => (
                          <h1
                            className="text-red-700 font-bold text-2xl"
                            {...props}
                          />
                        ),
                        h2: (props) => (
                          <h2
                            className="text-red-500 font-semibold text-xl"
                            {...props}
                          />
                        ),
                        li: (props) => (
                          <li
                            className="list-disc list-inside text-gray-300"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </motion.div>
                )}
              </AnimatePresence>

              {expandedPost !== post.id && post.data.description && (
                <p className="text-gray-300 mt-2">{post.data.description}</p>
              )}

              {/* Read More Button */}
              {expandedPost !== post.id && (
                <button
                  className="mt-4 text-red-500 hover:text-red-700 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent parent click
                    setExpandedPost(post.id);
                  }}
                >
                  Read More →
                </button>
              )}
            </FramedPanel>
          ))}
        </PageLayout>
      </Section>

      {/* Divider */}
      <Divider />

      {/* Footer */}
      <Footer />
    </div>
  );
}
