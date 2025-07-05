import MainSection from "./MainSection"


export default function Blog() {
    return (<main className="flex flex-col w-screen min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white overflow-hidden">

        {/* Background gradients */}
        <div className="pointer-events-none fixed inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
            <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-white/2 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-zinc-500/3 blur-[120px]" />
        </div>
        <MainSection></MainSection>
    </main>
    )

}