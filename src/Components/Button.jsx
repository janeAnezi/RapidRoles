import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
      ochre: {
        main: '#0EA5E9',
        light: '#67c0E9',
        dark: '#0284C7',
        contrastText: '#FFFFFF',
      },
    },
});

export default function Button(label) {
    return (
        <>
            <ThemeProvider  theme={theme}>
                <Button variant="contained" color="ochre">{label}</Button>
            </ThemeProvider>
            
        </>
    )

}