import React, { type FC } from "react";
type Props = {
	children: React.ReactNode;
};
const FeedActionButtons: FC<Props> = ({ children }) => {
	return (
		<div className="flex justify-center">
			<button className="text-gray-500 text-xl p-3 b-0 rounded-full hover:bg-slate-700 cursor-pointer">
				{children}
			</button>
		</div>
	);
};

export default FeedActionButtons;
