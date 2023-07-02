import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/"
        alt="Split logo"
        {...props}
        width={86}
        height={48}
        priority
    />
)
export default Brand