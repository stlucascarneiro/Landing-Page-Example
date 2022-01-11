export const screen_size = {
    mobile_sm: 320,
    mobile: 425,
    tablet: 768,
    desktop_sm: 1280,
    desktop: 1920,
    ultra_wide: 2560
}

export const display_size = {
    n_hd: 360,
    q_hd: 540,
    hd: 720,
    full_hd: 1080,
}

export const screen = {
    above: {
        mobile: `(min-width: ${screen_size.mobile}px)`,
        mobile_sm: `(min-width: ${screen_size.mobile_sm}px)`,
        tablet: `(min-width: ${screen_size.tablet}px)`,
        desktop_sm: `(min-width: ${screen_size.desktop_sm}px)`,
        desktop: `(min-width: ${screen_size.desktop}px)`,
        ultra_wide: `(min-width: ${screen_size.ultra_wide}px)`,
    },
    below: {
        mobile: `(max-width: ${screen_size.mobile}px)`,
        mobile_sm: `(max-width: ${screen_size.mobile_sm}px)`,
        tablet: `(max-width: ${screen_size.tablet}px)`,
        desktop_sm: `(max-width: ${screen_size.desktop_sm}px)`,
        desktop: `(max-width: ${screen_size.desktop}px)`,
        ultra_wide: `(max-width: ${screen_size.ultra_wide}px)`,
    }
}

export const display = {
    above: {
        n_hd: `(min-height: ${display_size.n_hd}px)`,
        q_hd: `(min-height: ${display_size.q_hd}px)`,
        hd: `(min-height: ${display_size.hd}px)`,
        full_hd: `(min-height: ${display_size.full_hd}px)`,
    },
    below: {
        n_hd: `(max-height: ${display_size.n_hd}px)`,
        q_hd: `(max-height: ${display_size.q_hd}px)`,
        hd: `(max-height: ${display_size.hd}px)`,
        full_hd: `(max-height: ${display_size.full_hd}px)`,
    }
}