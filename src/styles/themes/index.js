export function getTheme(device, mode) {
    const colorMode = mode === 'light' ? lightMode : darkMode
    const deviceMode = device < 3 ? mobileMode : desktopMode
    return {
        mode,
        shadows: {
            outline: '0 0 0 3px rgba(98, 78, 227, 0.6)'
        },
        colors: {
            brand: {
                default: '#624EE3',
                light: '#7C6BE0',
                secondary: '#B946F0',
            },
            feedback: {
                success: '#9AE6B4',
                warning: '#FBD38D',
                error: '#FC8181',
                info: '90CDF4'
            },
            ...colorMode
        },
        fontSizes: {
            ...deviceMode.fontSizes
        },
        components: {
            Button: {
                variants: {
                    primary: {
                        bg: 'brand.default',
                        color: 'white',
                        border: `none`,
                        padding: '0 12px',
                        borderRadius: '4px',
                        fontSize: '15px',
                        fontWeight: 600,
                        _hover: {
                            boxShadow: '0 0 8px 4px rgba(102, 78, 227, 0.5)'
                        }
                    },
                    secondary: {
                        bg: colorMode.bg.secondary,
                        color: colorMode.text.default,
                        border: `1px solid ${colorMode.text.light}`,
                        padding: '0 12px',
                        borderRadius: '4px',
                        fontSize: '15px',
                        fontWeight: 600,
                        _hover: {
                            bg: mode === 'light' ? colorMode.text.lighter : colorMode.bg.primary
                        }
                    }
                }
            }
        }
    }
}

export const lightMode = {
    bg: {
        primary: '#FFF',
        secondary: '#F5F5F5',
        light: '#F7F7F7'
    },
    text: {
        default: '#707070',
        strong: '#3D3D3D',
        light: '#AAAAAA',
        lighter: '#D8D6DE'
    }
}

export const darkMode = {
    bg: {
        primary: '#161D31',
        secondary: '#283046',
        light: '#283046'
    },
    text: {
        default: '#B9BFCE',
        strong: '#fff',
        light: '#ABABAB',
        lighter: '#2c3654'
    }
}

const mobileMode = {
    fontSizes: {
        default: '11px',
        small: '10px',
        lg: '12px',
        xl: '14px',
        xxl: '16px'
    }
}

const desktopMode = {
    fontSizes: {
        default: '12px',
        small: '11px',
        lg: '15px',
        xl: '18px',
    }
}