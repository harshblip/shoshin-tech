import { useEffect, useState } from "react"
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar";
import Main from "../components/main";

export default function Index() {
    const [open, setOpen] = useState(true)
    useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
        );
    })
    return (
        <div className="flex h-full w-full">
            <Sidebar
                open={open}
                onClose={() => setOpen(false)}
            />
            <div className="bg-[#f8f8f8] h-full w-full">
                <main className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}>
                    <div className="h-full">
                        <Navbar
                            openSideNav={() => setOpen(true)}
                        />
                        <Main />
                    </div>
                </main>
            </div>
        </div>
    )
}