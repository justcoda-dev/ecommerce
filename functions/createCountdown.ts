export const createCountdown = (currentUnixTime: number) => {
    const currentDate = new Date(currentUnixTime)
    const times = {
        hours: (23 - currentDate.getHours()),
        minutes: (60 - currentDate.getMinutes()),
        seconds: (60 - currentDate.getSeconds())
    }
    const timeCorrector = (time: number) => time < 10 ? "0" + time : time
    return `${timeCorrector(times.hours)}:${timeCorrector(times.minutes)}:${timeCorrector(times.seconds)}`
}