import './globals.css';

export const metadata = {
  title: '이력서',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
