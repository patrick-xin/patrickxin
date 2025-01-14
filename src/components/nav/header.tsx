"use client";

import type React from "react";
import { motion } from "framer-motion";
import useScrollCounter from "@/lib/hooks/useScrollCounter";
import { cn } from "@/lib/utils";
import { useTOCStore } from "@/store/toc";
import MainNav from "./main-nav";
import ReadingProgress from "../reading-progress";

const headerVariants = {
	open: {
		height: 80,
		transition: { ease: "easeInOut", duration: 0.3 },
	},
	collapsed: {
		height: 64,
		transition: { ease: "easeInOut", duration: 0.3, delayChildren: 0.5 },
	},
};

type MovingHeaderProps = {
	count?: number;
	children?: React.ReactNode;
	isGradiant?: boolean;
};

const Header = ({
	count = 100,
	children,
	isGradiant = false,
}: MovingHeaderProps) => {
	const reached = useScrollCounter(count);
	const showTOC = useTOCStore((state) => state.showTOC);

	return (
		<div>
			<div
				className={cn(
					"fixed left-0 top-0 z-40 w-full backdrop-blur-lg transition-all ease-in-out",
					{
						"ml-48 duration-200": showTOC,
						"bg-gradient-to-r from-blue-600/10 to-violet-600/10": isGradiant,
					},
				)}
			>
				<motion.header
					viewport={{ once: true }}
					initial="open"
					animate={reached ? "collapsed" : "open"}
					variants={headerVariants}
					className={cn("flex items-center transition-all ease-linear", {})}
				>
					{!reached ? (
						<MainNav />
					) : (
						<div className="relative w-full">
							<div className="flex w-full justify-center px-4 lg:py-6">
								{children}
							</div>
							<div className="absolute -bottom-1.5 w-full md:w-[70%] lg:inset-x-0 lg:bottom-8 lg:mx-auto">
								<ReadingProgress />
							</div>
						</div>
					)}
				</motion.header>
			</div>
		</div>
	);
};

export default Header;
