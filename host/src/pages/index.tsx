import dynamic from "next/dynamic";

type GuestHomePageProps = Record<string, never>;
type AuthUserHomePageProps = Record<string, never>;


const RemoteGuestHome = dynamic<GuestHomePageProps>(
  () =>
    import("guest/GuestHomePage").then(
      (mod) => mod.default as React.ComponentType<GuestHomePageProps>
    ),
  { ssr: false }
);

const RemoteAuthUserHome = dynamic<AuthUserHomePageProps>(
  () =>
    import("authUser/AuthUserHomePage").then(
      (mod) => mod.default as React.ComponentType<AuthUserHomePageProps>
    ),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <div className="text-6xl">Hello from host (8000)</div>
      <RemoteGuestHome />
      <RemoteAuthUserHome />
    </>
  );
}
