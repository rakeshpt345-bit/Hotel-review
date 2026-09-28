export default function Brand({ dark = false }) {
  return (
    <div className={`flex items-center gap-3 ${dark ? 'text-cream-soft' : 'text-forest-700'}`}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm">
        <img
          src="/srd-logo-mark.png"
          alt="Shree Ramdev Rajasthani Dhaba logo"
          className="h-11 w-11 object-contain"
        />
      </div>
      <div>
        <div className="font-display text-lg leading-tight">Shree Ramdev</div>
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-70">Rajasthani Dhaba</div>
      </div>
    </div>
  );
}
