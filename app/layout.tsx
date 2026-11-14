import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
 title: 'Stefan Kostovski | Data Analytics & Software Development',
 description: 'Portfolio of Stefan Kostovski — IT, data analytics, software development and business systems projects. Based in North Macedonia.',
 openGraph: { title: 'Stefan Kostovski | Professional Portfolio', description: 'Data analytics, software development and IT projects.', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
