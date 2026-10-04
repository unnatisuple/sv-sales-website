"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Clock, Building2 } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isCompleted = project.status === "Completed";

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border)] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
      {/* Image Container with status tag */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-muted)]">
        <Image
          src={project.image}
          alt={`${project.name} - ${project.status} project supplied by S V Sales`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-108"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-3.5 right-3.5">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm border",
              isCompleted
                ? "bg-[var(--status-completed-bg)] text-[var(--status-completed-fg)] border-green-300/40"
                : "bg-[var(--status-running-bg)] text-[var(--status-running-fg)] border-amber-300/40"
            )}
          >
            {isCompleted ? (
              <CheckCircle2 className="w-3.5 h-3.5" />
            ) : (
              <Clock className="w-3.5 h-3.5" />
            )}
            <span>{project.status}</span>
          </span>
        </div>

        {/* Project Name floating inside bottom overlay */}
        <div className="absolute bottom-3.5 left-4 right-4">
          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight drop-shadow-md">
            {project.name}
          </h3>
          {project.note && (
            <p className="text-xs text-gray-300 mt-0.5 line-clamp-1">
              {project.note}
            </p>
          )}
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-4 flex items-center justify-between text-xs text-[var(--fg-muted)]">
        <div className="flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>Supplied by S V Sales</span>
        </div>
        <span className="font-medium text-[var(--fg)]">Nagpur, MH</span>
      </div>
    </div>
  );
}
