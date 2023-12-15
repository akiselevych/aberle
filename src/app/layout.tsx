import type {Metadata} from 'next'
//styles
import "@/styles/global.scss"
//components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";

export const metadata: Metadata = {
    title: 'Aberle Solutions',
    description: 'Entdecken Sie bei Aberle Solutions maßgeschneiderte Finanzlösungen, die auf Ihre einzigartigen Bedürfnisse zugeschnitten sind. Unser Team arbeitet eng mit kompetenten Partnern zusammen, um Werte und Ziele zu verwirklichen, die unser Unternehmen auszeichnen. Wählen Sie uns für eine vertrauensvolle und ganzheitliche Finanzberatung, die sich anfühlt wie ein Maßanzug – individuell angepasst und perfekt zugeschnitten auf Ihre finanziellen Bedürfnisse.',
}


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
          <body>
          <Header/>
            <main>
                {children}
                <Banner/>
            </main>
          <Footer/>
          </body>
        </html>
    )
}
