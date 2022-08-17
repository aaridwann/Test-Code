import React, { useCallback } from 'react'

function InputComponent({ type, placeholder, ref, length, value }) {
    const input = useCallback((e) => {
        value(e.target.value)
    }, [value])
    return (
        <input
            onChange={(e) => input(e)}
            required
            minLength={length}
            ref={ref}
            placeholder={placeholder}
            className="hover:border-blue-500 duration-700 focus:outline-none focus:border-sky-500 border-blue-200 text-zinc-600 border-2 text-center min-w-full h-8 rounded-3xl"
            type={type}
        />
    )
}

export default React.memo(InputComponent)