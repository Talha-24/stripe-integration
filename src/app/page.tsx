"use client"
import Image from "next/image";
import styles from "@/app/stripe.module.css"
import { checkout } from "./checkout";
export default function Home() {
  // CHECKOUT
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className={styles.main}>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={58}
        />
        <br />
        <br />
        <div className="text-center">
          <button onClick={()=>{
            checkout([{price: "prod_SrL9B3ppLWZrK5",quantity:1}])
          }} className={styles.button}>Buy this image</button>
        </div>
      </main>
    </div>
  );
}
