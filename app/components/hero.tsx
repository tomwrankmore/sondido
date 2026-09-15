import AnimatedCopy from "./AnimatedCopy/AnimatedCopy";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <AnimatedCopy delay={1}>
        <h1 className="text-center font-bold">Sonido Media</h1>
      </AnimatedCopy>
    </div>
  );
}
