import { AuthProvider } from "@/hooks/contexts/AuthContext";
import MuiThemeProvider from "@/mui-theme/MuiThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider>
       <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
    </MuiThemeProvider>
  );
}
