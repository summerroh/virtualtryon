import Image from "next/image";

import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";

export function PhotoLayout({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  showTitle = false,
  ...props
}) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
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
