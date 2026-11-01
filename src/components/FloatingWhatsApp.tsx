import React from "react";
import { siteContent } from "@/data/content";

export function FloatingWhatsApp() {
  const { contact } = siteContent;

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-6 right-6 z-50 pointer-events-none flex items-center"
    >
      <div className="relative flex items-center pointer-events-auto group">
        {/* Tooltip */}
        <span
          role="tooltip"
          className="absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#3B3B3D] text-xs font-bold shadow-lg border border-[#E2E9EB] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
        >
          <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
          <span>Chat with us on WhatsApp</span>
        </span>

        {/* Button */}
        <a
          href={contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact The Educatee Centre on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.908.536 3.69 1.468 5.215L2.094 22l4.908-1.342a9.99 9.99 0 005.029 1.373c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.727 14.195c-.242.682-1.22 1.306-1.722 1.38-.475.07-1.077.103-3.414-.85-2.616-1.066-4.321-3.722-4.452-3.896-.13-.174-1.055-1.402-1.055-2.673 0-1.272.668-1.898.906-2.155.238-.256.52-.32.693-.32.174 0 .347.002.498.01.163.007.38-.062.593.45.22.528.749 1.828.815 1.96.065.132.109.288.022.463-.087.174-.13.282-.26.434-.13.152-.272.34-.389.456-.13.13-.265.27-.114.53.152.26.674 1.109 1.445 1.796.994.885 1.832 1.16 2.092 1.29.26.13.412.115.564-.06.152-.174.65-0.757.824-1.017.174-.26.347-.217.585-.13.238.087 1.517.715 1.777.845.26.13.434.195.498.304.065.108.065.628-.177 1.31z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
