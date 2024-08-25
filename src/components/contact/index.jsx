import LabelTag from "../label-tag";
import { FiGithub, FiTwitter, FiFigma } from "react-icons/fi";

const Contact = () => {
	return (
		<div className="flex flex-col py-24 bg-white items-centerpx-20 py-22 dark:bg-gray-950">
			<div className="flex justify-center">
				<LabelTag label="Get in touch" />
			</div>
			<div className="flex flex-col gap-12">
				<p className="w-1/2 m-auto mt-4 text-center text-[#4B5563] text-xl font-light">
					What's next? Feel free to reach out to me if you're looking for a
					developer, have a query, or simply want to connect.
				</p>
				<div className="flex flex-col text-4xl font-semibold gap-5">
					<div className="flex items-center justify-center gap-5">
						<img src="../images/icons/icon-email.svg" alt="email" />
						<span>tom@pinecone.mn</span>
						<img src="../images/icons/icon-copy.svg" alt="copy" />
					</div>
					<div className="flex items-center justify-center gap-5">
						<img src="../images/icons/icon-phone.svg" alt="phone" />
						<span>+976 88112233</span>
						<img src="../images/icons/icon-copy.svg" alt="copy" />
					</div>
				</div>
				<div className="flex flex-col text-center">
					<p className="text-[#4B5563] mb-2">
						You may also find me on these platforms!
					</p>
					<div className="flex justify-center gap-3">
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FiGithub size={20} color="#4B5563" />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FiTwitter size={20} color="#4B5563" />
						</a>
						<a
							href="https://dribbble.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FiFigma size={20} color="#4B5563" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
