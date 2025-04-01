import { SignedIn, UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="flex justify-end p-4 border-b">
      <SignedIn>
        <UserButton showName />
      </SignedIn>
    </header>
  );
};
