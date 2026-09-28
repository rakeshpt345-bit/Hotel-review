import { Star } from 'lucide-react';
export default function StarRating({ value, onChange }) {
  return <div className="flex items-center justify-center gap-2" role="radiogroup" aria-label="Rating">
    {[1,2,3,4,5].map(n => <button key={n} type="button" onClick={() => onChange(n)} aria-label={`${n} star${n>1?'s':''}`} aria-checked={value===n} role="radio" className="rounded-full p-1 transition hover:scale-110">
      <Star size={34} fill={n <= value ? 'currentColor' : 'none'} className={n <= value ? 'text-gold-500' : 'text-forest-900/20'} />
    </button>)}
  </div>;
}
