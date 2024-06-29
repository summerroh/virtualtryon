import Image from "next/image";

import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function PhotoLayout({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  showTitle = false,
  selected,
  ...props
}) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          {selected && (
            <div className="bg-primary rounded-full w-6 h-6 border-[1.5px] border-solid border-white absolute top-3 left-3 z-10 flex items-center justify-center">
              <Check className="h-4 w-4" color="white" />
            </div>
          )}

          <div className="overflow-hidden rounded-md">
            <Image
              src={album.cover}
              alt={album.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className="space-y-1 text-sm text-center">
        {showTitle && (
          <h3 className="font-medium leading-none">{album.name}</h3>
        )}
        {/* <p className="text-xs text-muted-foreground">{album.artist}</p> */}
      </div>
    </div>
  );
}
