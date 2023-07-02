import SectionWrapper from "./SectionWrapper"
import Feature1 from "@/public/images/feat1.jpg"
import Feature2 from "@/public/images/feat2.jpg"
import Image from "next/image"

const VisualFeatures = () => {

    const features = [
        {
            title: "Instructor Teaching AI Concepts",
            desc: "Learn from industry experts and experienced instructors who provide practical insights and real-world applications",
            img: Feature1
        },
        {
            title: "Exciting AI Projects and Applications",
            desc: "Witness the impact of AI through inspiring projects and innovative applications across various industries.",
            img: Feature2
        },
    ]
    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-300">
                <div className="max-w-xxl mx-auto text-center">
                    <h2 className="text-gray-50 text-3xl font-bold sm:text-4xl">
                    Join a vibrant community of AI enthusiasts and learners. Collaborate, connect, and grow together.
                    </h2>
                    <p className="mt-3">
                        With Mailgo's powerful features, you can easily create and send beautiful emails that will engage your customers and drive more sales.
                    </p>
                </div>
                <div className="mt-14">
                    <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
                        {
                            features.map((item, idx) => (
                                <li className="flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl" key={idx}
                                    style={{
                                        background: "radial-gradient(141.61% 141.61% at 29.14% -11.49%, rgba(203, 213, 225, 0.15) 0%, rgba(203, 213, 225, 0) 57.72%)"
                                    }}
                                >
                                    <div className="p-8">
                                        <h3 className="text-gray-50 text-xl font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 sm:text-sm md:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="pl-8">
                                        <Image
                                            src={item.img}
                                            className="w-11/12 ml-auto"
                                            alt={item.title}
                                        />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default VisualFeatures