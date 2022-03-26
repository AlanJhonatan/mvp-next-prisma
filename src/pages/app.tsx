import { signOut } from "next-auth/react";


export default function App() {
  function handleSignOut() {
    signOut({ callbackUrl: 'http://localhost:3000' })
  }

  return (
    <div>
      <h1>Hello world !</h1>
      <button
        onClick={() => handleSignOut()}
      >Logout</button>
    </div>
  )
}