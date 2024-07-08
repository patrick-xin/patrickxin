import Image from "next/image";
import { cn } from "@/lib/utils";

type PostThumbnailProps = {
	title?: string;
	author?: string;
	fromUrl?: string;
	src: string;
	hasInfo?: boolean;
	rounded?: boolean;
};

const PostThumbnail = async ({
	title,
	src,
	hasInfo = true,
	rounded = false,
}: PostThumbnailProps) => {
	return (
		<div>
			<Image
				quality={100}
				src={src}
				className={cn(
					"aspect-[4/3] w-full object-cover shadow-md",
					rounded && "rounded",
				)}
				width={800}
				height={600}
				alt={`${title}-image`}
				priority
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
			/>
			{hasInfo && (
				<div className="mt-2 text-center text-xs text-muted-foreground lg:mt-4">
					Image generated by Midjourney
				</div>
			)}
		</div>
	);
};

export default PostThumbnail;
