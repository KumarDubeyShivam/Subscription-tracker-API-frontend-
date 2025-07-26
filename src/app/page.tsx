"use client";

// pages/index.tsx
import Link from 'next/link';

import Image from 'next/image';
import AuthForm from './components/auth.tsx';

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-100">
            {/* NavBar */}
            <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">Subscription Tracker</h1>
                <div className="space-x-4">
                    <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
                    <Link href="/login" className="text-blue-600 hover:underline">Log In</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-100 to-blue-200">
                <h2 className="text-4xl font-bold mb-6 text-blue-800">Now track and renew your subscriptions</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Manage all your subscriptions effortlessly on a single platform. Stay informed, stay subscribed, and never miss a renewal again.
                </p>
                <div className="mt-8">
                    <Link href="/signup" className="px-8 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 transition">
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Scrolling Brand Logos */}
            <section className="bg-white py-10">
                <h3 className="text-xl text-center font-semibold text-gray-700 mb-6">Popular Subscription Services</h3>
                <div className="overflow-hidden whitespace-nowrap animate-scroll flex space-x-10 px-4">
                    <Image src="/logos/amazon.jpeg" alt="Amazon" width={100} height={100} />
                    <Image src="/logos/netflix.jpg" alt="Netflix" width={100} height={100} />
                    <Image src="/logos/swiggydownload.png" alt="Swiggy" width={100} height={100} />
                    <Image src="/logos/spotify.png" alt="Spotify" width={100} height={100} />
                    <Image src="/logos/z5jpeg.jpeg" alt="Zee5" width={100} height={100} />
                    <Image src="/logos/hotstar.jpeg" alt="Hotstar" width={100} height={100} />
                    <Image src="/logos/sony.jpeg" alt="SonyLiv" width={100} height={100} />
                    <Image src="/logos/amazon.jpeg" alt="Amazon" width={100} height={100} />
                    <Image src="/logos/netflix.jpg" alt="Netflix" width={100} height={100} />
                    <Image src="/logos/swiggydownload.png" alt="Swiggy" width={100} height={100} />
                    <Image src="/logos/spotify.png" alt="Spotify" width={100} height={100} />
                    <Image src="/logos/z5jpeg.jpeg" alt="Zee5" width={100} height={100} />
                    <Image src="/logos/hotstar.jpeg" alt="Hotstar" width={100} height={100} />
                    <Image src="/logos/sony.jpeg" alt="SonyLiv" width={100} height={100} />
                </div>
            </section>
        </main>
    );
}











//import Image from "next/image";

//export default function Home() {
//  return (
//    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//        <Image
//          className="dark:invert"
//          src="/next.svg"
//          alt="Next.js logo"
//          width={180}
//          height={38}
//          priority
//        />
//        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//          <li className="mb-2 tracking-[-.01em]">
//            Get started by editing{" "}
//            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//              src/app/page.tsx
//            </code>
//            .
//          </li>
//          <li className="tracking-[-.01em]">
//            Save and see your changes instantly.
//          </li>
//        </ol>

//        <div className="flex gap-4 items-center flex-col sm:flex-row">
//          <a
//            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            <Image
//              className="dark:invert"
//              src="/vercel.svg"
//              alt="Vercel logomark"
//              width={20}
//              height={20}
//            />
//            Deploy now
//          </a>
//          <a
//            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Read our docs
//          </a>
//        </div>
//      </main>
//      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//        <a
//          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          <Image
//            aria-hidden
//            src="/file.svg"
//            alt="File icon"
//            width={16}
//            height={16}
//          />
//          Learn
//        </a>
//        <a
//          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          <Image
//            aria-hidden
//            src="/window.svg"
//            alt="Window icon"
//            width={16}
//            height={16}
//          />
//          Examples
//        </a>
//        <a
//          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          <Image
//            aria-hidden
//            src="/globe.svg"
//            alt="Globe icon"
//            width={16}
//            height={16}
//          />
//          Go to nextjs.org →
//        </a>
//      </footer>
//    </div>
//  );
//}
