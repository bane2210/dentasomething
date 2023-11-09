type DirectionsAnimate = "x" | "y";

export const animateLeftRight =  (s: DirectionsAnimate, initial: number) => {
    return (
        {
            animate: {[s]: 0},
            initial: {[s]: Math.floor(initial)},
            transition: {ease: "easeOut", duration: 1.7}
        }
    )
}