"use client";
import { cva, VariantProps } from "class-variance-authority";
import { useState, useEffect, HTMLAttributes } from "react";
import { cn } from "./utils";

const ChangeTextVariants = cva("text-primary w-full text-center select-none", {
  variants: {
    variant: {
      default:
        "text-2xl font-extrabold tracking-tight leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-primary to-background",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
interface IChangingText
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof ChangeTextVariants> {
  variant?: "default";
  text: string[];
}

const ChangingText = ({ text, variant, ...props }: IChangingText) => {
  // Estado para armazenar o índice do texto atual
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Função para atualizar o índice do texto
    const updateText = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    };

    // Configura um intervalo para chamar updateText a cada segundo
    const interval = setInterval(updateText, 5000);

    // Cleanup function para limpar o intervalo quando o componente desmontar
    return () => clearInterval(interval);
  }, []); // A dependência vazia [] faz com que o useEffect rode apenas uma vez

  return (
    <div>
      <h1 className={cn(ChangeTextVariants({ variant }))}>
        {text[currentIndex]}
      </h1>
    </div>
  );
};

export default ChangingText;
