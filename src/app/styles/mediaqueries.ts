const breakpoints = [375, 576, 768, 992, 1200, 1920]

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

// 0 = small Mobile
// 1 = Mobile
// 2 = Tablet
// 3 = Small Laptop
// 4 = Laptop
// 5 = Desktop