import { WhatsAppIcon } from "@/components/ui/icons";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className={[
        "fixed bottom-6 right-6 z-[60]",
        "bg-[var(--color-wa)] text-white",
        "w-[60px] h-[60px] rounded-full",
        "grid place-items-center",
        "shadow-[0_12px_32px_rgba(37,211,102,0.4),0_4px_12px_rgba(0,0,0,0.1)]",
        "transition-all duration-200 hover:scale-[1.08] hover:-rotate-[4deg]",
        "hover:shadow-[0_16px_40px_rgba(37,211,102,0.5)]",
        /* anel pulsante via pseudo-element simulado com ::before no globals */
        "before:content-[''] before:absolute before:inset-[-6px]",
        "before:rounded-full before:bg-[var(--color-wa)] before:opacity-25",
        "before:animate-[wa-pulse_2.4s_ease-out_infinite]",
        "relative",
      ].join(" ")}
    >
      <WhatsAppIcon width={30} height={30} />
    </a>
  );
}
