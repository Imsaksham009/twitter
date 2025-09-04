import FeedCard from "@/Components/Feedcard";
import { BiHash, BiHomeCircle } from "react-icons/bi";
import {
	BsBell,
	BsBookmark,
	BsEnvelope,
	BsPerson,
	BsTwitter,
} from "react-icons/bs";
export default function Home() {
	interface SideBarItems {
		title: string;
		icon: React.ReactNode;
	}
	const sideBarItems: SideBarItems[] = [
		{
			title: "Home",
			icon: <BiHomeCircle />,
		},
		{
			title: "Explore",
			icon: <BiHash />,
		},
		{
			title: "Notifications",
			icon: <BsBell />,
		},
		{
			title: "Messages",
			icon: <BsEnvelope />,
		},
		{
			title: "Bookmarks",
			icon: <BsBookmark />,
		},
		{
			title: "Profile",
			icon: <BsPerson />,
		},
	];
	return (
		<div className={`grid grid-cols-12 h-screen w-screen px-56 `}>
			<div className="col-span-3 mt-5 ml-20 mr-3">
				<BsTwitter className="text-6xl hover:bg-gray-600 border-2 border-transparent hover:border-gray-600 rounded-full p-2 cursor-pointer transition-all" />
				<ul className="mt-10 space-y-3">
					{sideBarItems.map((item, index) => (
						<li
							key={index}
							className="flex text-2xl font-semibold justify-start items-center space-x-2 px-5 py-2 hover:bg-gray-600 transition-all w-fit rounded-full cursor-pointer mt-5"
						>
							{item.icon}
							<span>{item.title}</span>
						</li>
					))}
				</ul>
				<button className="bg-blue-500 text-xl font-bold text-white rounded-full w-full p-2 mt-5 hover:bg-blue-600 transition-all cursor-pointer">
					Tweet
				</button>
			</div>
			<div className="col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
			</div>
			<div className="col-span-3"></div>
		</div>
	);
}
