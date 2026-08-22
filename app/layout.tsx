import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import '@/app/globals.css'

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}