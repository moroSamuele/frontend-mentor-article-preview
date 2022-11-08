import Head from 'next/head'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';


const Home = () => {
	const [shareTooltip, setShareTooltip] = useState(0);
	const ref = useRef(null);


	const onClickOutside = () => {
		setShareTooltip(0);
	}


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };

        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [ onClickOutside ]);


	return(
		<div className="w-[100vw] h-[100vh] bg-lightBlue">
			<Head>
				<title>Frontend Mentor - Article Preview</title>

				<meta charSet="UTF-8" />
				<meta name="description" content="Your challenge is to build out this article preview component and get it looking as close to the design as possible." />
				<meta name="keywords" content="Frontend Mentor, Moro Samuele, NextJs, React, Article Preview" />
				<meta name="author" content="Moro Samuele" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<div className="flex flex-col w-[327px] h-[512px] md:flex-row md:w-[730px] md:h-[280px] bg-white rounded-[10px] shadow-3xl left-1/2 top-1/2 relative translate-x-[-50%] translate-y-[-50%]">
				<div className="relative w-[327px] h-[200px] md:w-[285px] md:h-full">
					<Image
						alt="Drawers"
						src="/images/drawers.jpg"
						layout='fill'
    					objectFit='cover'
						className="rounded-tl-[10px] rounded-tr-[10px] md:rounded-bl-[10px] md:rounded-tr-none"
					/>
				</div>
				<div className="relative flex flex-col w-full md:w-[calc(100%-285px)] pt-[36px] pb-[20px] px-[32px] md:py-[32px] md:px-[40px]">
					<h1 className="font-[600] text-mediumBlue leading-[28px] tracking-[0.25px] text-[20px]">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
					<p className="mt-[12px] mb-[32px] md:mb-[20px] font-[400] text-[13px] leading-[20px] tracking-[0.121875px] text-lightGray">
						Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
					</p>
					<div className="flex justify-between items-center">
						<div className="flex">
							<Image
								alt="Michelle"
								src="/images/avatar-michelle.jpg"
								width="40"
								height="40"
								className="rounded-full"
							/>
							<div className="flex flex-col ml-[16px]">
								<p className="text-mediumBlue text-[13px] font-[700] tracking-[0.12px] leading-[20px]">Michelle Appleton</p>
								<p className="text-[13px] leading-[20px] tracking-[0.12px] text-veryLightGray">28 Jun 2020</p>
							</div>
						</div>
						<div class={`md:relative group w-[32px] h-[32px] rounded-full ${ shareTooltip ? "bg-lightGray" : "bg-lightBlue" } flex justify-center items-center cursor-pointer transition-all hover:bg-lightGray`} onClick={ () => setShareTooltip(!shareTooltip) }>
							<div ref={ref} className={`${ shareTooltip ? "flex" : "hidden" } before:content-none md:before:content-[""] px-[32px] md:px-0 justify-between  select-none socialShareContainer bottom-0 left-0 md:bottom-[60px] md:left-1/2 md:translate-x-[-50%] bg-mediumBlue rounded-bl-[10px] rounded-br-[10px] md:rounded-[10px] shadow-4xl md:justify-center items-center w-full md:w-[248px] h-[80px] md:h-[55px] absolute`} onClick={ (e) => e.stopPropagation() }>
								<div className="flex">
									<p className="uppercase text-veryLightGray text-[13px] leading-[20px] tracking-[5px] font-[500] mr-[21px]">Share</p>
									<Image
										src="/images/icon-facebook.svg"
										width="20"
										height="20"
										className="mr-[16px]"
									/>
									<Image
										src="/images/icon-twitter.svg"
										width="20"
										height="20"
										className="mr-[16px]"
									/>
									<Image
										src="/images/icon-pinterest.svg"
										width="20"
										height="20"
									/>
								</div>
								<div class="md:hidden bg-lightGray w-[32px] h-[32px] rounded-full flex justify-center items-center cursor-pointer transition-all hover:bg-lightGray" onClick={ () => setShareTooltip(!shareTooltip) }>
									<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" className="fill-white -mt-[2px]"><path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
								</div>
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" className={`${ shareTooltip ? "fill-white" : "fill-lightGray" } group-hover:fill-white -mt-[2px]`}><path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;