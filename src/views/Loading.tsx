import React, { useState } from 'react';
import Lottie from 'react-lottie-player'
import loading from "../assets/vault-loading.json"

export default function Loading() {
    const [ transition, setTransition ] = useState(false);

    setTimeout(() => {
        setTransition(true);
    }, 1000)

    return (
        <div className={transition ? 'transition' : ''} id="loading">
            <Lottie animationData={loading} play />
        </div>
    )
}