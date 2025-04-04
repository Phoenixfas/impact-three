import Auth from "./Auth"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <Auth>
      {children}
    </Auth>
  )
}
