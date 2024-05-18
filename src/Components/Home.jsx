import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  {Stack}  from '@mui/system';
import Button from '@mui/material/Button';
// import BarMenu from "./BarMenu";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

export default function Home () {
    return(
        <>
            <div className="bg-hero bg-center bg-cover bg-no-repeat p-8">
                <div className="text-center">
                    <Navbar />
                  
                    <div className="mt-40 mb-20">
                        <h1 className="text-4xl font-bold text-slate-200"> FIND THE PERFECT JOB</h1>
                        <p className="text-slate-200 p-4">Your dream job is just one click away</p>

                        <div className="mt-20"  style={{ textAlign: 'center' }}>
                            <ThemeProvider theme={theme}>
                                <Stack spacing={2} direction="row" justifyContent="center">
                                    <Button variant="contained" color="ochre">SEARCH JOB</Button>
                                    <Button variant="contained" color="ochre">FIND TALENT</Button>
                                </Stack>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}