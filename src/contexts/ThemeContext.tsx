import { createTheme, ThemeProvider as Provider } from '@mui/material/styles'
import * as React from 'react'

type Props = {
	children: React.ReactNode
}

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function ThemeProvider(props: Props) {
	const getTheme = (): 'dark' | 'light' => {
		if (window.localStorage.getItem('tm') === 'dark') {
			return 'dark'
		} else {
			return 'light'
		}
	}

	const [mode, setMode] = React.useState<'light' | 'dark'>(getTheme())

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => {
					if (prevMode === 'light') {
						window.localStorage.setItem('tm', 'dark')
						return 'dark'
					} else {
						window.localStorage.setItem('tm', 'light')
						return 'light'
					}
				})
			},
		}),
		[]
	)
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					primary: {
						main: '#F2652E'
					},
					background: {
						// default: '#0E142D'
					}
				},
			}),
		[mode]
	)
	return (
		<ColorModeContext.Provider value={colorMode}>
			<Provider theme={theme}>{props.children}</Provider>
		</ColorModeContext.Provider>
	)
}
