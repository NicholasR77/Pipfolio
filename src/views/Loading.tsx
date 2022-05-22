import Lottie from 'react-lottie-player'
import loading from '../assets/vault-loading.json'

export default function Loading() {

    return (
        <div id='loading'>
            <Lottie animationData={loading} play />
        </div>
    )
}