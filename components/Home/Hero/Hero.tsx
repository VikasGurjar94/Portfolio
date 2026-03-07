import React from 'react'

const Hero = () => {
    return (
        <div className="relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]">
            <div className="relative z-10 text-center">
                <div className="sm:mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">

                        {/* green dot */}
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>

                        {/* text */}
                        <span>Available for opportunities</span>

                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero