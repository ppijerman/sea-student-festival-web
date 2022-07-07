import {useEffect, useState} from 'react'

// @ts-ignore
const Countdown = ({ time }) => {
    let ticker: NodeJS.Timer

    const countDuration = (time: number) => {
        return Math.max(0, time - Date.now())
    }

    const [duration, setDuration] = useState(countDuration(time))

    useEffect(() => {
        startCountdown()
        return () => {
            stopCountDown()
        }
    })

    const startCountdown = () => {
        if (duration && duration > 0) {
            ticker = setInterval(countDown, 1000)
        }
    }

    const countDown = () => {
        setDuration(_second => {
            const res = countDuration(time)
            if (res === 0) {
                stopCountDown()
            }
            return res
        })
    }

    const stopCountDown = () => {
        clearInterval(ticker)
    }

    return (
        <div>
            <div>
                <div>
                    {(duration / (3600 * 24 * 1000)).toFixed(0)}
                </div>
                <div>
                    {duration / (3600 * 24 * 1000) > 1 ? 'Days' : 'Day'}
                </div>
            </div>
            <div>
                <div>
                    {new Date(duration).getHours()}
                </div>
                <div>
                    {new Date(duration).getHours() > 1 ? 'Hours' : 'Hour'}
                </div>
            </div>
            <div>
                <div>
                    {new Date(duration).getMinutes()}
                </div>
                <div>
                    {new Date(duration).getMinutes() > 1 ? 'Minutes' : 'Minute'}
                </div>
            </div>
            <div>
                <div>
                    {new Date(duration).getSeconds()}
                </div>
                <div>
                    {new Date(duration).getSeconds() > 1 ? 'Seconds' : 'Second'}
                </div>
            </div>
        </div>
    )
}

export default Countdown