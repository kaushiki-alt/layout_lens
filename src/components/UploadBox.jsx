import { UploadCloud } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const UploadBox = () => {
    return (
        <div className='bg-card p-6 rounded-3xl border border-border shadow-lg shadow-black/10'>
            <section className='upload-box flex flex-col gap-6 backdrop-blur-sm'>
                <div className="header flex flex-col gap-2">
                    <h2 className="capitalize text-xl font-semibold tracking-tight">
                        upload UI screenshot
                    </h2>

                    <p className='text-secondary text-sm leading-relaxed'>
                        Upload a UI screenshot for AI analysis
                    </p>
                </div>

                <div className="upload min-h-80 border-dashed border border-primary/40 bg-background/40 flex flex-col justify-center items-center text-center gap-3 px-6 rounded-2xl cursor-pointer hover:border-primary hover:bg-background/60 transition-all duration-300">
                    <UploadCloud size={45} className='text-primary stroke-[1.5] opacity-90' />
                    <h3 className='text-lg font-medium'>
                        Drag & drop your image first
                    </h3>
                    <span className="text-secondary text-sm">or</span>
                    <button type="button" className='cursor-pointer capitalize p-2.5 shadow-sm hover:scale-105 px-5 bg-primary hover:bg-primary-hover rounded-lg'>browse image</button>

                    <p className="text-secondary text-sm leading-relaxed">PNG, JPG or WEBP supported upto 10MB</p>
                </div>

            </section>

            <section className="preview flex flex-col gap-4 mt-6">
                <div className="header flex gap-2 items-center">
                    <span className='size-2 rounded-full bg-success'></span>
                    <h2 className="capitalize font-medium tracking-tight">
                        preview
                    </h2>
                </div>

                <div className="uploded-img">
                    <Image src="/UIDesign.png" width={1200} height={800} alt="uploaded image" className='rounded-lg w-full object-cover border border-border' />
                </div>
            </section>

        </div>
    )
}

export default UploadBox


//  ------------------- TODO --------------------------
// responsive on small screens : upload and preview - side by side
// few UI improvements from last prompt on chatgpt