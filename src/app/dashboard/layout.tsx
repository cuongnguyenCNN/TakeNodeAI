import SideBar from "./sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {" "}
      <SideBar></SideBar>
      {children}
    </section>
  );
}
