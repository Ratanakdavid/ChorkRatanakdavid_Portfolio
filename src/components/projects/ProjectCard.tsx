"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

interface Tech {
  name: string;
}

interface ProjectCardProps {
  imagePath: string;
  title: string;
  description: string;
  tags?: string[];
  techs?: Tech[];
  githubUrl?: string;
}

export default function ProjectCard({
  imagePath,
  title,
  description,
  tags = [],
  techs = [],
  githubUrl = "#",
}: ProjectCardProps) {
  const [showMore, setShowMore] = useState(false);
  const visibleTechs = techs.slice(0, 3);
  const extraTechs = techs.slice(3);

  return (
    <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group">

      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={imagePath}
          alt={title}
          width={800}
          height={500}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

        {/* Tags — top left */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub — top right */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-indigo-600 hover:border-indigo-400 transition-all duration-200"
        >
          <FaGithub size={18} />
        </a>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>

        {/* Tech badges */}
        {techs.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {visibleTechs.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-indigo-300 border border-slate-700"
              >
                {tech.name}
              </span>
            ))}
            {extraTechs.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-gray-400 border border-slate-700 hover:border-indigo-500 hover:text-indigo-300 transition-all"
                >
                  +{extraTechs.length}
                </button>
                {showMore && (
                  <div className="absolute bottom-8 left-0 z-10 bg-slate-800 border border-slate-700 rounded-xl shadow-xl p-3 flex flex-col gap-2 min-w-[120px]">
                    <p className="text-xs text-gray-500 font-semibold mb-1">More</p>
                    {extraTechs.map((tech, i) => (
                      <span key={i} className="text-xs text-gray-300 px-2 py-1 rounded-lg bg-slate-700">
                        {tech.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}