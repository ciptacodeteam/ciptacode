"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProjectDetailModal from "../modals/ProjectDetailModal";
import type { Project } from "../portfolio/PortfolioGallerySection";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type Props = {
  data: Project;
};

const ProjectCard = ({ data }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="glass group h-full overflow-hidden border-0 py-0">
      <div
        className="relative cursor-pointer overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <Image
          src={data.image || "https://placehold.co/500x300?text=No+Image"}
          priority
          alt={data.title}
          className="h-[268px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={500}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary/90 text-primary-foreground">
            {data.category}
          </Badge>
        </div>
      </div>

      <CardContent className="px-6 pb-6">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {data.industry}
          </Badge>
          <span className="text-muted-foreground text-xs">{data.year}</span>
        </div>
        <h3 className="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
          {data.client}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
          {data.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1">
          {data.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {data.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{data.technologies.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          <ProjectDetailModal data={data} open={open} setOpen={setOpen} />
          <Button size="sm" onClick={() => setOpen(true)} className="flex-1">
            <Eye className="mr-2 h-4 w-4" />
            Quick View
          </Button>

          {data.previewLink && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-primary"
                >
                  <Link
                    href={data.previewLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Live Preview</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
export default ProjectCard;
