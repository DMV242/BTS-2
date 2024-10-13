import WeatherProvider from "@/context/weatherContext";
import "./style.css";






export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WeatherProvider>
          {children}
        </WeatherProvider>
      </body>

    </html>
  );
}
