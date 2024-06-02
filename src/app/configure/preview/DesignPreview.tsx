"use client"

import Phone from "@/components/Phone"
import { cn } from "@/lib/utils"
import { COLORS, MODELS } from "@/validators/option-validator"
import { Configuration } from "@prisma/client"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"
import Confetti from "react-dom-confetti"

const DesignPreview = ({configuration}: { configuration: Configuration }) => {

    const [showConfetti, setShowConfetti] = useState<boolean>(false)
    useEffect(() => setShowConfetti(true))

    const { color, model, material } = configuration
    const tw = COLORS.find((supportedColor) => supportedColor.value === color)?.tw

    const {label: modelLabel } = MODELS.options.find(({value}) => value === model)!

    return <>
        <div aria-hidden="true" className="pointer-events-none select-none absolute z-[999999] inset-0 overflow-hidden flex justify-center">
                <Confetti active={showConfetti} config={{elementCount: 200, spread: 90}} />
        </div>

        <div className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
            <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
                <Phone className={cn(`bg-${tw}`)} imgSrc={configuration.croppedImageUrl!} />
            </div>

            <div className="mt-6 sm:col-span-9 sm:mt-0 md:row-end-1">
                <h3 className="text-3xl font-bold tracking-tight text-gray-900">Your {modelLabel} Case</h3>
                <div className="mt-3 flex items-center gap-1.5 text-base">
                    <Check className="w-4 h-4 text-green-500" />
                    In stock and ready to ship
                </div>
            </div>
        </div>
    </>
}

export default DesignPreview