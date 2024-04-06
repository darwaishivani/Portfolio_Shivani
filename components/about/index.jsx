import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
	return (
		<section className="py-20 w-full">
			<div className="grid grid-cols-8 gap-4 xs:gap-6  md:gap-8 w-full">
				<ItemLayout
					className={
						" col-span-full lg:col-span-8 row-span-2 flex-col items-start"
					}
				>
					<h2 className="  text-xl md:text-2xl text-left w-full capitalize">
						About Me
					</h2>
					<div className="font-light  text-xs sm:text-sm md:text-base   ">
						<p>
							Welcome to my world of web development mastery. I'm Shivani
							Darwai, a seasoned Front End Developer ready to elevate your
							projects to unparalleled heights. With a wealth of expertise in
							cutting-edge technologies, including Next.js, React.js, Redux,
							Redux Toolkit, Context API, JavaScript, CSS, and HTML, I bring a
							dynamic fusion of creativity and technical prowess to the table.{" "}
						</p>
						<p>
							My passion lies in crafting immersive digital experiences that not
							only captivate but also inspire action. From sleek animations to
							polished interfaces, I specialize in transforming visions into
							visually stunning and highly functional websites. Each line of
							code I write is infused with a dedication to excellence and a
							commitment to exceeding expectations.
						</p>
						<p>
							As you embark on your quest for top talent, consider me your ally
							in achieving unparalleled success. Let's collaborate to create
							digital masterpieces that leave a lasting impression and drive
							tangible results. Together, we'll shape the future of the web, one
							pixel-perfect project at a time.
						</p>
					</div>
				</ItemLayout>

				<ItemLayout className={"col-span-full "}>
					<img
						className="w-full h-24"
						src={`https://skillicons.dev/icons?i=nextjs,react,redux,js,tailwind,bootstrap,css,html`}
						alt="skills"
						loading="lazy"
					/>
				</ItemLayout>
			</div>
		</section>
	);
};

export default AboutDetails;
