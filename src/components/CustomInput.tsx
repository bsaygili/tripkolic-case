'use client'
export default function CustomInput({
    min,
    max,
    defaultValue,
    onChange,
    displayValue,
    labelName,
    type
}: {
    min: number,
    max: number
    defaultValue?: number,
    onChange: (val: string) => void,
    displayValue?: string
    labelName: string
    type?: string
}) {
    return (
        <div className='flex justify-between items-center gap-3'>

            <input
                type={type}
                className="w-full border rounded-md my-2 p-2"
                title={labelName}
                min={min}
                max={max}
                defaultValue={defaultValue}
                onChange={(e) => onChange(e.target.value)}
            />
            {displayValue && <span className="p-1 border rounded ml-2">{displayValue}</span>}

        </div>
    )
}