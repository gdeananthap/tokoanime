const breakpoints = [375, 576, 768, 992, 1200, 1920]

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)