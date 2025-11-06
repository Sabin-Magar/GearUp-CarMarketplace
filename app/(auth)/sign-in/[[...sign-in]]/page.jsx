import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return <SignIn />;
};

export default SignInPage;

//----------------------------------------------------

// "use client";

// import { useSignIn } from "@clerk/nextjs";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Loader2 } from "lucide-react";
// import Link from "next/link";

// export default function SignInPage() {
//   const { isLoaded, signIn, setActive } = useSignIn();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   if (!isLoaded) return null;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const result = await signIn.create({ identifier: email, password });
//       if (result.status === "complete") {
//         await setActive({ session: result.createdSessionId });
//         window.location.href = "/";
//       } else {
//         console.log(result);
//       }
//     } catch (err) {
//       setError("Invalid credentials. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     await signIn.authenticateWithRedirect({
//       strategy: "oauth_google",
//       redirectUrl: "/",
//       redirectUrlComplete: "/",
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center text-white">
//       <motion.div
//         className="w-full max-w-md bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-zinc-700 shadow-2xl"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center">
//           Welcome Back to <span className="text-amber-400">GearUp</span>
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="text-gray-300 text-sm">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="you@example.com"
//               className="w-full mt-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
//             />
//           </div>

//           <div>
//             <label className="text-gray-300 text-sm">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="••••••••"
//               className="w-full mt-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
//             />
//           </div>

//           {error && <p className="text-red-400 text-sm">{error}</p>}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
//           >
//             {loading && <Loader2 className="animate-spin" size={18} />}
//             {loading ? "Signing In..." : "Sign In"}
//           </button>
//         </form>

//         <div className="flex items-center my-6">
//           <hr className="flex-grow border-zinc-700" />
//           <span className="mx-3 text-gray-400 text-sm">or</span>
//           <hr className="flex-grow border-zinc-700" />
//         </div>

//         <button
//           onClick={handleGoogleSignIn}
//           className="w-full bg-white hover:bg-gray-200 text-black font-medium py-3 rounded-lg flex items-center justify-center gap-3 transition-all"
//         >
//           <img src="/google.svg" alt="Google" className="w-5 h-5" />
//           Continue with Google
//         </button>

//         <p className="text-center text-gray-400 text-sm mt-6">
//           Don’t have an account?{" "}
//           <Link href="/sign-up" className="text-amber-400 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }
