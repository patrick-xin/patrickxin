import Image from "next/image";

const Avatar = () => {
	return (
		<div className="relative">
			<Image
				alt="author-avatar"
				src="/assets/images/avatar.jpg"
				height={50}
				width={50}
				className="rounded-full"
				priority
				sizes="50px"
			/>
		</div>
	);
};

export default Avatar;
