import WeatherProvider from "@/context/weatherContext";
import "./style.css";
import GeolocationProvider from "@/context/geolacationContext";






export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GeolocationProvider>
          <WeatherProvider>
            {children}
          </WeatherProvider>
        </GeolocationProvider>
      </body>

    </html>
  );
}
