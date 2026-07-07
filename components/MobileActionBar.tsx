import { MapPin, MessageCircle, Phone } from "lucide-react";
import { DIRECTIONS_HREF, PHONE_HREF, WHATSAPP_HREF } from "@/lib/contact";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-forest/15 bg-paper/95 px-3 py-2 shadow-[0_-12px_32px_-24px_rgba(22,36,28,0.45)] backdrop-blur-md md:hidden">
      <nav aria-label="Quick contact actions" className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={PHONE_HREF}
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg bg-forest text-[11px] font-semibold text-paper"
        >
          <Phone aria-hidden size={16} />
          Call
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg bg-brass text-[11px] font-semibold text-ink"
        >
          <MessageCircle aria-hidden size={16} />
          WhatsApp
        </a>
        <a
          href={DIRECTIONS_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg border border-forest/20 bg-steam text-[11px] font-semibold text-forest"
        >
          <MapPin aria-hidden size={16} />
          Directions
        </a>
      </nav>
    </div>
  );
}
