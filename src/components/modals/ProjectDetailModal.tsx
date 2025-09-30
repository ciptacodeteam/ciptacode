"use client";

import { Calendar, ExternalLink, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../portfolio/PortfolioGallerySection";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";

type Props = {
  data: Project | null;
  open: boolean;
  setOpen: (open: boolean) => void;
  setSelectedProject?: (project: Project | null) => void;
};

const ProjectDetailModal = ({
  data,
  open,
  setOpen,
  setSelectedProject,
}: Props) => {
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        setSelectedProject?.(null);
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto lg:!max-w-5xl">
        {data && (
          <>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <Image
                  src={
                    data.image || "https://placehold.co/500x300?text=No+Image"
                  }
                  alt={data.client}
                  className="h-auto w-full rounded-lg border object-cover"
                  width={500}
                  height={300}
                />

                {/* {data.testimonial && (
                  <>
                    <hr className="my-6" />
                    <Card className="my-6 border-none p-0 shadow-none">
                      <CardContent className="grid grid-cols-[auto_1fr] gap-3 p-0">
                        <Avatar className="size-9">
                          <AvatarImage
                            alt={data.testimonial.name || "Avatar"}
                            src={data.testimonial.image}
                            loading="lazy"
                            width="120"
                            height="120"
                          />
                          <AvatarFallback>
                            {data.testimonial?.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <h3 className="font-medium">
                            {data.testimonial.name}
                          </h3>

                          <span className="text-muted-foreground block text-sm tracking-wide">
                            {data.testimonial.name} &#8226;{" "}
                            {data.testimonial.role}
                          </span>

                          <blockquote className="mt-3">
                            <p className="text-gray-700 dark:text-gray-300">
                              {data.testimonial.quote}
                            </p>
                          </blockquote>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )} */}
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <DialogTitle className="text-2xl">{data.client}</DialogTitle>
                  <DialogDescription className="text-muted-foreground text-sm">
                    {data.category} &#8226; {data.industry} &#8226; {data.year}
                  </DialogDescription>
                </div>
                <p className="text-muted-foreground">{data.description}</p>
                <div className="flex flex-wrap gap-2">
                  {data.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="text-muted-foreground h-4 w-4" />
                    <span>{data.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="text-muted-foreground h-4 w-4" />
                    <span>{data.teamSize}</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-t pt-4">
                  {Object.entries(data.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-primary text-lg font-bold">
                        {value}
                      </div>
                      <div className="text-muted-foreground text-xs capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </div>
                    </div>
                  ))}
                </div>
                {data.previewLink && (
                  <Button asChild className="mt-4 w-full">
                    <Link href={data.previewLink}>
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default ProjectDetailModal;
