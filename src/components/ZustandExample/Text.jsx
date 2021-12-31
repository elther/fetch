import React from 'react'
import create from 'zustand';

const useStore = create((set) => ({
    fontSize: 14,
    increaseFonstSize: () => set((state) => ({ fontSize: state.fontSize + 1})),
    trigger: false,
    toggleTrigger: () => set((state) => ({trigger: !state.trigger})),
}));

function FontLabel() {
    const {fontSize, increaseFonstSize, fontSizeLabel, trigger, toggleTrigger} = useStore((state) => ({
        fontSize: state.fontSize,
        increaseFonstSize: state.increaseFonstSize,
        fontSizeLabel: state.fontSize + "px",
        trigger: state.trigger,
        toggleTrigger: state.toggleTrigger,
    }),
    (oldState, newState) => oldState.trigger === newState.trigger
    );

    return (
        <>
            <div>Current font size: {fontSizeLabel}</div>
            <button onClick={increaseFonstSize}>size up</button>
            <button onClick={toggleTrigger}>toggle: {trigger.toString()}</button>
        </>
    )
}

export default function Text() {
    const fontSize = useStore((state) => state.fontSize);
    const increaseFonstSize = useStore((state) => state.increaseFonstSize);
    return (
        <>
            <p style={{fontSize}}>This text will increase in size too.</p>
            <FontLabel />
        </>
    );
}
