import { useState, useEffect } from "react";

const Clock = () => {
    const [clock, setClock] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const flashTimeSale = '2023-08-01T00:00:00'
    const startClock = (seconds) => {
        let remainSec = seconds
        const interval = setInterval(() => {
            remainSec--
            if (remainSec === 0) {
                clearInterval(interval)
            }
            setClock(convertToTime(remainSec))
        }, 1000)
    }
    const convertToTime = (seconds) => {
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remain = seconds % 60;

        return {
            days,
            hours,
            minutes,
            seconds: remain
        };
    }
    useEffect(() => {
        const date1 = new Date()
        const date2 = new Date(flashTimeSale)
        const diffSeconds = Math.floor(Math.abs((date1.getTime() - date2.getTime()) / 1000))
        startClock(diffSeconds)
    }, []);
    return (
        <div className="flex items-center gap-1 md:gap-4 text-xl md:text-4xl">
            <div className="flex flex-col">
                <div className="text-sm font-semibold hidden md:block">Days</div>
                <div id="days" className="font-inter font-bold">{clock.days}</div>
            </div>
            <div className="text-[#E07575]">:</div>
            <div className="flex flex-col">
                <div className="text-sm font-semibold hidden md:block">Hours</div>
                <div id="hours" className="font-inter font-bold">{clock.hours < 10 ? '0' + clock.hours : clock.hours}</div>
            </div>
            <div className="text-[#E07575]">:</div>
            <div className="flex flex-col">
                <div className="text-sm font-semibold hidden md:block">Minutes</div>
                <div id="minutes" className="font-inter font-bold">{clock.minutes < 10 ? '0' + clock.minutes : clock.minutes}</div>
            </div>
            <div className="text-[#E07575]">:</div>
            <div className="flex flex-col">
                <div className="text-sm font-semibold hidden md:block">Seconds</div>
                <div id="seconds" className="font-inter font-bold">{clock.seconds < 10 ? '0' + clock.seconds : clock.seconds}</div>
            </div>
        </div>
    )
}

export default Clock