import { Urbanist } from "next/font/google";
import AsideForm from "../ui/asideform/AsideForm";
import "../globals.css";
import "aos/dist/aos.css";
import WithAOS from "../ui/withAOS/WithAos";
import "react-phone-input-2/lib/style.css";
const urbanist = Urbanist({
  subsets: ["latin"], // Add other subsets if needed
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Specify the font weights you need
});
export default function GetAQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <WithAOS>
          <div className="grid grid-cols-1 gap-12  lg:gap-0 lg:grid-cols-[464px,1fr]">
            <AsideForm />
            <main className="order-1 lg:order-2 relative my-12   flex justify-center items-center lg:min-h-[100vh]">
              {children}
            </main>
          </div>
        </WithAOS>
      </body>
    </html>
  );
}
