import { cn } from "@/lib/utils";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image, { type ImageProps } from "next/image";
import { Badge } from "./badge";
import type { ProjectCategory } from "@/types";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
				className,
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	link,
	image,
	categories,
}: {
	className?: string;
	title: string | React.ReactNode;
	description: string | React.ReactNode;
	link: string;
	image: ImageProps;
	categories: ProjectCategory[];
}) => {
	return (
		<div
			className={cn(
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition-all duration-200 shadow-input dark:shadow-none p-4 bg-primary/10 dark:bg-primary/5 hover:bg-primary/10 dark:border-white/[0.2] h-full border overflow-hidden border-transparent flex flex-col space-y-2",
				className,
			)}
		>
			<div className="relative mb-4 group/bento opacity-50 group-hover/bento:opacity-70 transition duration-200 min-h-[200px] flex-1">
				<Image
					className="rounded-xl imageWithGrain"
					src={image.src}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					alt={image.alt}
				/>
			</div>

			<div className="flex-1 flex flex-col flex-shrink-0">
				<div className="transition duration-200">
					<div className="font-bold text-lg font-heading mb-2">{title}</div>
					<div className="text-muted-foreground text-sm">{description}</div>
				</div>
			</div>

			<div className="flex justify-between space-y-2 items-center transition duration-400">
				<div className="flex gap-2 flex-wrap my-2">
					{categories.map((category, index) => (
						<Badge key={category.name} variant={category.badgeColor}>
							{category.name}
						</Badge>
					))}
				</div>
				<div className="flex gap-4 items-center">
					<a href={link} rel="noreferrer" target="_blank">
						<ExternalLinkIcon className="size-6 text-muted-foreground hover:text-foreground transition-colors ease-linear" />
					</a>
				</div>
			</div>
		</div>
	);
};
