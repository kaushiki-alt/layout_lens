import { UploadCloud } from 'lucide-react'
import Image from 'next/image'
import React, { useRef } from 'react'

const UploadBox = ({ uploadImage, setUploadImage, previewURL, setPreviewURL }) => {
    const inputRef = useRef();

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        setUploadImage(file)
        const url = URL.createObjectURL(file);
        setPreviewURL(url)

    }
    return (
        <div className='bg-card p-6 rounded-3xl border border-border shadow-lg shadow-black/10 h-full'>
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
                    <input
                        type="file"
                        className="hidden"
                        accept='image/*'
                        ref={inputRef}
                        onChange={(e) => handleImageUpload(e)}
                    />

                    <UploadCloud size={45} className='text-primary stroke-[1.5] opacity-90' />
                    <h3 className='text-lg font-medium'>
                        Drag & drop your image
                    </h3>
                    <span className="text-secondary text-sm">or</span>
                    <button type="button" onClick={() => inputRef.current.click()} className='cursor-pointer capitalize p-2.5 shadow-sm hover:scale-105 px-5 bg-primary hover:bg-primary-hover rounded-lg'>
                        browse image</button>

                    <p className="text-secondary text-sm leading-relaxed">PNG, JPG or WEBP supported upto 10MB</p>
                </div>

            </section>

            {previewURL && <section className="preview flex flex-col gap-4 mt-6">
                <div className="header flex gap-2 items-center">
                    <span className='size-2 rounded-full bg-success'></span>
                    <h2 className="capitalize font-medium tracking-tight">
                        preview
                    </h2>
                </div>

                <div className="uploaded-img bg-background/40 border border-border rounded-2xl p-3 max-h-125 overflow-hidden">
                    <Image src={previewURL} width={1200} height={800} alt="uploaded image" className='rounded-lg w-full max-h-120 object-cover border border-border' />
                </div>
            </section>
            }

        </div>
    )
}

export default UploadBox


//  ------------------- TODO --------------------------
// drag and drop the image
// add image validation
