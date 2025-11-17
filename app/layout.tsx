import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mickey Mouse - O Ícone da Disney',
  description: 'Descubra a magia do Mickey Mouse, o personagem mais amado da Disney',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
