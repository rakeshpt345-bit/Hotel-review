import { useEffect, useState } from 'react';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import Brand from '../components/Brand';
import StarRating from '../components/StarRating';
import { recordScan, submitFeedback } from '../services/review';

export default function Review() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [googleUrl, setGoogleUrl] = useState('');

  useEffect(() => { recordScan().finally(() => setLoading(false)); }, []);

  async function submit(e) {
    e.preventDefault(); setError('');
    if (!rating) return setError('Please select your rating first.');
    setSubmitting(true);
    try {
      const data = await submitFeedback({ rating, comment });
      setGoogleUrl(data.googleReviewUrl);
      if (data.googleReviewUrl) window.location.href = data.googleReviewUrl;
      else window.location.href = '/thank-you';
    } catch (err) { setError(err.message); setSubmitting(false); }
  }

  if (loading) return <div className="flex min-h-screen items-center justify-center"><Loader2 className="animate-spin text-forest-500"/></div>;
  return <main className="min-h-screen bg-cream px-4 py-7 sm:py-12">
    <div className="mx-auto max-w-md">
      <Brand />
      <section className="surface-card mt-7 overflow-hidden">
        <div className="bg-forest-700 px-6 py-9 text-center text-cream-soft">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">Thank you for visiting</p>
          <h1 className="mt-3 text-3xl">How was your experience?</h1>
          <p className="mt-2 text-sm text-cream-soft/75">Your feedback helps us serve you better.</p>
        </div>
        <form onSubmit={submit} className="space-y-6 p-6 sm:p-8">
          <div><p className="mb-3 text-center text-sm font-semibold text-ink-soft">Rate your experience</p><StarRating value={rating} onChange={setRating}/></div>
          <div>
            <label htmlFor="comment" className="mb-2 block text-sm font-semibold text-ink-soft">Your feedback <span className="font-normal opacity-60">(optional)</span></label>
            <textarea id="comment" value={comment} onChange={e=>setComment(e.target.value)} maxLength={1000} rows={5} placeholder="Tell us about your experience..." className="w-full resize-none rounded-2xl border border-forest-900/10 bg-white px-4 py-3.5 text-sm outline-none focus:border-forest-500" />
            <div className="mt-1 text-right text-xs text-ink-soft/60">{comment.length}/1000</div>
          </div>
          {error && <p role="alert" className="rounded-xl bg-brick-500/10 px-4 py-3 text-sm text-brick-500">{error}</p>}
          <button disabled={submitting} className="btn-primary w-full">{submitting ? <><Loader2 size={18} className="animate-spin"/>Submitting...</> : <><Send size={17}/>Submit Feedback</>}</button>
          <p className="text-center text-xs leading-5 text-ink-soft/65">After submitting, you'll be taken to Google to share your review.</p>
        </form>
      </section>
    </div>
  </main>;
}
