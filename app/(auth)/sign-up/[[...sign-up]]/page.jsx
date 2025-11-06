import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return <SignUp />;
};

export default SignUpPage;

//----------------------------------------------------

// "use client";

// import { useSignUp } from "@clerk/nextjs";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Loader2 } from "lucide-react";
// import Link from "next/link";

// export default function SignUpPage() {
//   const { isLoaded, signUp, setActive } = useSignUp();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   if (!isLoaded) return null;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await signUp.create({
//         emailAddress: email,
//         password,
//       });

//       await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
//       alert("Verification code sent to your email.");
//       window.location.href = "/verify-email";
//     } catch (err) {
//       setError(err.errors?.[0]?.message || "Something went wrong. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignUp = async () => {
//     await signUp.authenticateWithRedirect({
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
//           Join <span className="text-amber-400">GearUp</span>
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="text-gray-300 text-sm">Full Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               placeholder="John Doe"
//               className="w-full mt-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
//             />
//           </div>

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
//             {loading ? "Creating Account..." : "Sign Up"}
//           </button>
//         </form>

//         <div className="flex items-center my-6">
//           <hr className="flex-grow border-zinc-700" />
//           <span className="mx-3 text-gray-400 text-sm">or</span>
//           <hr className="flex-grow border-zinc-700" />
//         </div>

//         <button
//           onClick={handleGoogleSignUp}
//           className="w-full bg-white hover:bg-gray-200 text-black font-medium py-3 rounded-lg flex items-center justify-center gap-3 transition-all"
//         >
//           <img src="/google.svg" alt="Google" className="w-5 h-5" />
//           Continue with Google
//         </button>

//         <p className="text-center text-gray-400 text-sm mt-6">
//           Already have an account?{" "}
//           <Link href="/sign-in" className="text-amber-400 hover:underline">
//             Sign in
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }
