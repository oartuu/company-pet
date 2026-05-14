import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-linear-to-tl from-indigo-400 to-purple-500 font-sans ">
      <h1 className="text-5xl font-black text-zinc-100 border-b border-zinc-100 pb-2">
        S.I.R.I.U.S
      </h1>
      <DotLottieReact src="/robot.lottie" loop autoplay className="h-72" />
      <p className="text-2xl pt-2 text-zinc-200">
        Serviço Inteligente Robótico para Interações, Usuários e Suporte
      </p>
    </div>
  );
}
