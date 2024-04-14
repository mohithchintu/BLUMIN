import React from 'react';
import AccordionComponent from '../components/AccordionComponent';
import pic1 from '../assets/indus-1.jpeg';

const Industry = () => {
    return (
        <>
            <section className="text-gray-600 body-font py-24"> {/* Added more padding above and below */}
                <div className="container px-5 mx-auto">
                    <h1 className="text-6xl font-medium title-font text-gray-900 mb-12 text-center">INDUSTRY</h1>
                </div>
            </section>
            <div className="container mx-auto px-5 py-10">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 flex items-center justify-center">
                        <h2 className="text-4xl font-medium text-gray-900">How we aim to help the Industry?</h2>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <p className="text-xl text-gray-600 leading-relaxed">BLUMIN facilitates strategic partnerships between industry leaders, academic institutions, and global innovators to drive growth and foster innovation. Access top talent, leverage cutting-edge research, and accelerate R&D initiatives with us.</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-5 py-24 flex items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    {/* Left Section for Image */}
                    <div className="max-w-md md:w-1/2 mb-6 md:mb-0 flex items-center justify-center"> {/* Centralize the image */}
                        <img src={pic1} alt="Your Image" className="mx-auto rounded-lg" /> {/* Slightly rounded edges */}
                    </div>
                    {/* Right Section for Accordion */}
                    <div className="md:w-1/2 px-10 flex items-center justify-center"> {/* Centralize the accordion */}
                        <AccordionComponent
                            items={[
                                { trigger: "Global Connections", content: "Access global networks for talent, partnerships, and funding Partnerships with governments, incubators, and key companies." },
                                { trigger: "Innovators Community", content: "Collaborative model with top researchers. Flexible project plans and shared talent investments." },
                                { trigger: "Business Innovation", content: "Embrace challenges, boost ROI in R&D. Connect with global expertise for projects." },
                                { trigger: "Building the Right Team", content: "Find expertise before job postings. Consider interns for reduced risk. Align strategy with talent needs." },
                                { trigger: "Talent Solutions", content: "100+ advisors for support. Identify and recruit skilled talent" },
                                { trigger: "Guidance from Start to Finish", content: "Receive guidance at every project stage." },
                                { trigger: "Budget Efficiency", content: "Seek funding support through IIC. Leverage investments for expanded budgets." }
                            ]}
                        />
                    </div>
                </div>
            </div>
            <section className="text-gray-600 body-font pt-20 pb-0 pl-10"> {/* Added more left padding */}
                <div className="container px-5 mx-auto">
                    <h2 className="text-4xl font-medium text-gray-900">Why choose us</h2>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">INDUSTRY ENGAGEMENT AND PROBLEM IDENTIFICATION</h2>
                            <ul className="text-base leading-relaxed mt-2 ml-4 list-disc">
                                <li>Initiate discussions with potential industry partners.</li>
                                <li>Arrange introductory meetings with industry representatives and gather insights.</li>
                            </ul>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">NEEDS ASSESSMENT AND PROBLEM DEFINITION</h2>
                            <ul className="text-base leading-relaxed mt-2 ml-4 list-disc">
                                <li>Analyze industry trends, market dynamics, and regulations.</li>
                                <li>Collaborate with stakeholders to define challenges and opportunities.</li>
                            </ul>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">DEPARTMENTAL ALLOCATION</h2>
                            <ul className="text-base leading-relaxed mt-2 ml-4 list-disc">
                                <li>Assign requirements based on identified challenges.</li>
                                <li>Form cross-functional teams and Allocate tasks to departments as per capabilities and expertise.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Industry;