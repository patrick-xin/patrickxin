import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex w-fit items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
				secondary:
					"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
				green:
					"border border-green-500 bg-green-100 text-green-600 dark:bg-green-900/20",
				orange:
					"border border-orange-500 bg-orange-100 text-orange-600 dark:bg-orange-900/20",
				lime: "border border-lime-500 bg-lime-100 text-lime-600 dark:bg-lime-900/20",
				pink: "border border-pink-500 bg-pink-100 text-pink-600 dark:bg-pink-900/20",
				indigo:
					"border border-indigo-500 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20",
				cyan: "border border-cyan-500 bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
				outline: "text-foreground",
				// New variants
				purple:
					"border border-purple-500 bg-purple-100 text-purple-600 dark:bg-purple-900/20",
				teal: "border border-teal-500 bg-teal-100 text-teal-600 dark:bg-teal-900/20",
				yellow:
					"border border-yellow-500 bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20",
				red: "border border-red-500 bg-red-100 text-red-600 dark:bg-red-900/20",
				blue: "border border-blue-500 bg-blue-100 text-blue-600 dark:bg-blue-900/20",
				gray: "border border-gray-500 bg-gray-100 text-gray-600 dark:bg-gray-900/20",
				emerald:
					"border border-emerald-500 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20",
				amber:
					"border border-amber-500 bg-amber-100 text-amber-600 dark:bg-amber-900/20",
				violet:
					"border border-violet-500 bg-violet-100 text-violet-600 dark:bg-violet-900/20",
				rose: "border border-rose-500 bg-rose-100 text-rose-600 dark:bg-rose-900/20",
			},
			rounded: {
				normal: "rounded-md",
				full: "rounded-full",
			},
		},
		defaultVariants: {
			variant: "default",
			rounded: "normal",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

type BadgeVariantProps = VariantProps<typeof badgeVariants>;
type BadgeVariant = BadgeVariantProps["variant"];

export { Badge, type BadgeVariant };
