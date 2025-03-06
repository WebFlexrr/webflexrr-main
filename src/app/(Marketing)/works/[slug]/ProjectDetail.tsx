import Image from "next/image";
import React from "react";

const ProjectDetail = (): React.JSX.Element => {
	return (
		<section className="h-auto w-full">
			<section className="h-auto w-full px-8 py-20 md:px-5 xl:py-36">
				<section className="mx-auto flex h-auto w-full max-w-[100rem] flex-col gap-20">
					<section>
						<section className="flex h-[50rem] w-full">
							<section className="flex h-full w-1/2 flex-col justify-between border pr-[14%] pb-40">
								<div className="flex w-full flex-col gap-5 border">
									<span>
										<h4>Description :</h4>
									</span>
									<span>
										<p>
											Aliquam erat volutpat. Nulla molestie risus eget nibh
											mollis ultricies. Integer porttitor vehicula nisi, sit met
											volutpat erat tincidunt non. Praesent lacinia commodo
											massa, ac mattis sem facilisis ut.
										</p>
									</span>
								</div>
								<div className="flex w-full flex-col gap-5 border">
									<span>
										<h4>Client :</h4>
									</span>
									<span>
										<p>
											Maecenas eu vehicula felis Aen ean eleme ntum tortor ac nu
											Aliquam erat volutpat. Nulla molestie risus eget nibh
											mollis ultricies. Integer porttitor vehicula nisi, sit
											amet volutpat erat tincidunt non.
										</p>
									</span>
								</div>
								<div className="flex w-full flex-col gap-5 border">
									<span>
										<h4>Category :</h4>
									</span>
									<span>
										<p>
											Aliquam erat volutpat. Nulla molestie risus eget nibh
											mollis ultricies. Integer porttitor vehicula nisi, sit met
											volutpat erat tincidunt non. Praesent lacinia commodo
											massa, ac mattis sem facilisis ut.
										</p>
									</span>
								</div>
								<div className="flex w-full flex-col gap-5 border">
									<span>
										<h4>Share :</h4>
									</span>
									<span>
										<p>
											Aliquam erat volutpat. Nulla molestie risus eget nibh
											mollis ultricies. Integer porttitor vehicula nisi, sit met
											volutpat erat tincidunt non. Praesent lacinia commodo
											massa, ac mattis sem facilisis ut.
										</p>
									</span>
								</div>
							</section>
							<section className="h-full w-1/2 border">
								<Image
									src={
										"https://gaaga.wpengine.com/wp-content/uploads/2023/06/portfolio-1.jpg"
									}
									width={"1000"}
									height={"0"}
									alt={""}
									className="h-full w-full"
								/>
							</section>
						</section>
						<section></section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ProjectDetail;
