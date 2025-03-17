// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     async session({ session, token }) {
//       session.user.id = token.sub;
//       return session;
//     },
//   },
// });

// frontend code to use the session
// import { useState } from "react";
// import { signIn, signOut, useSession } from "next-auth/react";

// export default function AuthPage() {
//   const { data: session } = useSession();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Email:", email, "Password:", password);
//     // Tu peux ajouter ici une logique pour une authentification classique
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
//       {session ? (
//         <div>
//           <p>Bienvenue, {session.user.name}!</p>
//           <img src={session.user.image} alt="Avatar" width="50" />
//           <button onClick={() => signOut()}>Se déconnecter</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Connexion</h2>

//           {/* Boutons de connexion avec Google et Facebook */}
//           <button onClick={() => signIn("google")} style={buttonStyle}>
//             Connexion avec Google
//           </button>
//           <button onClick={() => signIn("facebook")} style={buttonStyle}>
//             Connexion avec Facebook
//           </button>

//           <hr />

//           {/* Formulaire de connexion */}
//           <form onSubmit={handleSubmit} style={formStyle}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={inputStyle}
//             />
//             <input
//               type="password"
//               placeholder="Mot de passe"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               style={inputStyle}
//             />
//             <button type="submit" style={submitButtonStyle}>
//               Se connecter
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }
