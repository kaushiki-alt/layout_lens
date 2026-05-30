import { BrainCircuit, CheckCircle2, Copy, GitBranch, LayoutGrid, LoaderCircle, Palette } from 'lucide-react';
import React, { useState } from 'react'

const AnalysisPanel = ({ uploadImage }) => {
    const dummyAnalysis = {
        sections: [
            "Navbar",
            "Hero Section",
            "Features Grid",
            "Testimonials",
            "Footer",
        ],

        hierarchy: `
<App>
├── Navbar
├── HeroSection
├── FeaturesGrid
├── Testimonials
└── Footer
  `,

        designStyle: {
            title: "Modern SaaS Interface",

            characteristics: [
                "Rounded corners",
                "Soft shadows",
                "Spacious layout",
                "Indigo accent palette",
            ],
        },
    };

    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [copied, setCopied] = useState(false)

const handleCopy = async (question) => {
  try {
    await navigator.clipboard.writeText(question);
    setCopied(true);

    setTimeout(() => {
      setCopied(false)
    }, 400);
  }
  catch(error){
    console.error(
      "Failed to copy:",
      error
    )
  }
}

    const analyzingImage = () => {
        setIsAnalyzing(true);
        setAnalysisResult(dummyAnalysis);
        setIsAnalyzing(false)
    }
    return (
        <div className='bg-card p-6 rounded-3xl border border-border shadow-lg shadow-black/10 overflow-y-scroll'>
            <section className='text-center flex flex-col items-center justify-center gap-4 h-full min-h-150'>
                {/* Empty state */}
                {!uploadImage ?
                    <>
                        <BrainCircuit size={50} className='text-primary opacity-80' />

                        <h2 className="text-xl font-semibold">
                            AI Analysis
                        </h2>

                        <p className="text-secondary max-w-sm">
                            Upload a UI screenshot to begin analysis and get frontend insights.
                        </p>
                    </>

                    // loading state
                    : isAnalyzing ? <>
                        <LoaderCircle className="size-12 text-primary animate-spin" />

                        <h2 className="text-xl font-semibold">
                            Analyzing Screenshot
                        </h2>

                        <p className="text-secondary max-w-sm">
                            Detecting sections, component hierarchy and design patterns...
                        </p>
                    </>
                        // Analyzed state
                        : analysisResult ? <section className="flex flex-col gap-4 w-full h-full">

                            <div className="header flex flex-col gap-2 text-left">
                                <h2 className="text-xl font-semibold tracking-tight">
                                    AI Analysis
                                </h2>

                                <p className="text-secondary text-sm">
                                    Here's the AI breakdown of your UI
                                </p>
                            </div>

                            <div className="bg-background/40 border border-border rounded-2xl p-4 flex flex-col gap-4">
                                <h3 className="font-semibold text-left capitalize flex items-center">
                                    <span><LayoutGrid className='text-primary mr-2 size-5' /></span> Detected Sections
                                </h3>

                                <div className="flex gap-3 flex-wrap">
                                    {analysisResult.sections.map((section) => (
                                        <span key={section} className='rounded-full bg-card p-1 px-3 text-sm'>
                                            {section}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-background/40 border border-border rounded-2xl p-4 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-left capitalize flex items-center">
                                    <GitBranch className="text-primary mr-2 size-5" />
                                    Component Hierarchy
                                </h3>

                                <button className='flex bg-transparent border border-border rounded-xl px-3 py-1 items-center text-secondary text-sm hover:bg-background/60' onClick={() => handleCopy(analysisResult.hierarchy)}>
                                    <span><Copy className='mr-1 size-4' /></span>
                                    {copied ? 'Copied' : 'Copy'}</button>
                                </div>

                                <div className="bg-card rounded-xl p-4 font-mono">
                                    <pre className="text-sm text-secondary whitespace-pre-wrap text-left">
                                        {analysisResult.hierarchy}
                                    </pre>
                                </div>
                            </div>

                            <div className="text-left bg-background/40 border border-border rounded-2xl p-4 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold flex items-center">
                                        <Palette className="text-primary mr-2 size-5" />
                                        Design Style Analysis
                                    </h3>

                                    <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                                       {analysisResult.designStyle.title}
                                    </span>
                                </div>

                                <p className="text-sm text-secondary">
                                    This UI follows a {analysisResult.designStyle.title} with a {analysisResult.designStyle.characteristics.join(", ")}.
                                </p>

                                <ul className='grid md:grid-cols-2 justify-between gap-2 text-sm text-secondary'>{analysisResult.designStyle.characteristics.map((item) => (
                                    <li key={item} className='flex gap-2'>
                                        <span><CheckCircle2 className="text-success size-5" /> </span>
                                        {item} </li>
                                ))}</ul>
                            </div>
                        </section >
                            // uploaded but not analyzing
                            : <>
                                <BrainCircuit size={50} className="text-primary opacity-80" />

                                <h2 className="text-xl font-semibold">
                                    Ready for Analysis
                                </h2>

                                <p className="text-secondary max-w-sm">
                                    Your screenshot is ready. Click below to analyze its layout and design.
                                </p>

                                <button
                                    type="button"
                                    onClick={analyzingImage}
                                    className="mt-2 px-5 py-2.5 bg-primary hover:bg-primary-hover rounded-lg font-medium"
                                >
                                    Analyze UI
                                </button>
                            </>
                }
            </section>

        </div>
    )
}

export default AnalysisPanel
