"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<"all" | "completed" | "running">("all");

  const completedProjects = projects.filter((p) => p.status === "Completed");
  const runningProjects = projects.filter((p) => p.status === "Running");

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[var(--bg)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal variant="fade-up">
          <SectionHeading
            eyebrow="Proven Track Record"
            title="Supplied Construction & Real-Estate Projects"
            subtitle="Explore prestigious residential developments and ongoing construction projects across Nagpur supplied with comprehensive bath fittings and plumbing materials by S V Sales."
          />
        </Reveal>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            type="button"
            className={cn(
              "px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border",
              filter === "all"
                ? "bg-[var(--navy-surface)] text-[var(--navy-fg)] border-[var(--navy-surface)] shadow-sm"
                : "bg-[var(--bg-elevated)] text-[var(--fg-muted)] border-[var(--border)] hover:border-[var(--accent)]"
            )}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setFilter("completed")}
            type="button"
            className={cn(
              "inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border",
              filter === "completed"
                ? "bg-[var(--status-completed-bg)] text-[var(--status-completed-fg)] border-green-400/40 shadow-sm"
                : "bg-[var(--bg-elevated)] text-[var(--fg-muted)] border-[var(--border)] hover:border-[var(--accent)]"
            )}
          >
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Completed ({completedProjects.length})</span>
          </button>
          <button
            onClick={() => setFilter("running")}
            type="button"
            className={cn(
              "inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border",
              filter === "running"
                ? "bg-[var(--status-running-bg)] text-[var(--status-running-fg)] border-amber-400/40 shadow-sm"
                : "bg-[var(--bg-elevated)] text-[var(--fg-muted)] border-[var(--border)] hover:border-[var(--accent)]"
            )}
          >
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Running ({runningProjects.length})</span>
          </button>
        </div>

        {/* Completed Projects Group */}
        {(filter === "all" || filter === "completed") && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-[var(--border)]">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="text-xl font-bold text-[var(--fg)]">
                Completed Projects
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--status-completed-bg)] text-[var(--status-completed-fg)] font-bold">
                {completedProjects.length}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Running Projects Group */}
        {(filter === "all" || filter === "running") && (
          <div>
            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-[var(--border)]">
              <Clock className="w-5 h-5 text-amber-600" />
              <h3 className="text-xl font-bold text-[var(--fg)]">
                Running Projects
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--status-running-bg)] text-[var(--status-running-fg)] font-bold">
                {runningProjects.length}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {runningProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
