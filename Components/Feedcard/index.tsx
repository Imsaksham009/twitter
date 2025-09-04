import Image from "next/image";
import React from "react";
import FeedActionButtons from "../FeedActionButtons";
import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import { BiUpload } from "react-icons/bi";

const FeedCard: React.FC = () => {
	return (
		<div className="p-4 border-t-1 border-gray-600 hover:bg-gray-900 transition-all cursor-pointer">
			<div className="grid grid-cols-12 gap-2 w-[95%]">
				<div className="col-span-1">
					<Image
						src="https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg"
						alt="FeedCard Image"
						className="rounded-full"
						width={50}
						height={50}
					/>
				</div>
				<div className="col-span-11">
					<h5>Saksham Gupta</h5>
					<p>
						World should be under my control. I will tell people what to do. and
						what not to do. They should listen to me. and I will make them
						listen.
					</p>
					<div className="flex justify-between mt-2">
						<FeedActionButtons>
							<FaRegComment />
						</FeedActionButtons>
						<FeedActionButtons>
							<FaRetweet />
						</FeedActionButtons>
						<FeedActionButtons>
							<FaRegHeart />
						</FeedActionButtons>
						<FeedActionButtons>
							<BiUpload />
						</FeedActionButtons>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedCard;
