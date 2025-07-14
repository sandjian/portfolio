import { Hero} from "@/components/sections/HeroSection";
import { AboutMe} from "@/components/sections/AboutMe";
import { Projects} from "@/components/sections/Projects";
import { CTA } from "@/components/sections/CTA";
import { TechStack } from "@/components/sections/Stack";
import { Contact } from "@/components/sections/Contact";

export default function Home () {
    return (
        <main className="w-full px-1 md:px-8">
            <div className="max-w-7xl w-full m-auto border-x border-dashed border-white/5">
                <Hero/>
                <AboutMe/>
                <Projects/>
                <CTA/>
                <TechStack/>
                <Contact/>
            </div>
        </main>
    )
}