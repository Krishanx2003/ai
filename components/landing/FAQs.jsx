import LayoutEffect from "./LayoutEffect"
import SectionWrapper from "./SectionWrapper"

const faqsList = [
    {
        q: "What is AIHubPro, and what does it offer?",
        a: "AIHubPro is a comprehensive platform that provides AI and machine learning education, tools, and solutions.",
    },
    {
        q: "Who can benefit from AIHubPro?",
        a: "AIHubPro caters to a diverse audience, including beginners looking to enter the AI field, professionals seeking to upskill or specialize in AI, and businesses aiming to leverage AI technologies for growth and innovation.",
    },
    {
        q: "What courses are available on AIHubPro?",
        a: "Our courses cater to different skill levels, ensuring there is something for everyone, from beginners to experienced professionals.",
    },
    {
        q: "How can AIHubPro's AI tools enhance my learning and development?",
        a: "AIHubPro provides cutting-edge AI tools, including data analysis software, model development frameworks, and visualization tools.",
    },
    {
        q: "Can I access AIHubPro's resources for free?",
        a: "Users can access certain courses, blogs, and basic features of the AI/ML application for free.",
    },
    {
        q: "How can I get support or guidance on my AI projects?",
        a: "Our experienced AI professionals can assist you with AI strategy, best practices, and tailored solutions to help you achieve success in your AI projects.",
    }
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    Everything you need to know
                </h2>
                <p className="mt-3">
                    Here are the most questions people always ask about.
                </p>
            </div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-100">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs