export default function RootDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <p>Root Dashboard Layout</p>
      {children}
    </>
  );
}
