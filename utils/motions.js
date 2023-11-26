export const slideInfromBottom = (dly = "0.3", dur = "0.6") => {
    return {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { delay: dur, duration: dly } }
    }
}

export function circleAnimation() {
    return {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.5,
            },
        },
    }
}

export const navbarMenuItem= (delay) => ({
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
            delay: delay,
            duration: 0.5,
        },
    },
    hidden: {
        y: 50,
        opacity: 0,
    },
});