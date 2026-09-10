'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';

const field =
	'w-full rounded-[12px] border border-white/25 bg-white/8 px-4 py-3.5 text-[15px] text-white outline-none transition-colors placeholder:text-[0.8rem] placeholder:text-white/40 focus:border-portfolio-mint focus:bg-white/12';

export function ContactForm() {
	const form = useRef<HTMLFormElement>(null);
	const [emailSent, setEmailSent] = useState(false);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!form.current || loading) return;

		setLoading(true);
		setEmailSent(false);
		setError(false);

		const formData = new FormData(form.current);
		const name = String(formData.get('user_name') ?? '');
		const email = String(formData.get('user_email') ?? '');
		const message = String(formData.get('message') ?? '');
		const website = String(formData.get('website') ?? '');

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message, website }),
			});

			if (!response.ok) throw new Error('Email request failed');

			form.current.reset();
			setEmailSent(true);
		} catch {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (!emailSent && !error) return;

		const timer = window.setTimeout(() => {
			setEmailSent(false);
			setError(false);
		}, 5000);

		return () => window.clearTimeout(timer);
	}, [emailSent, error]);

	return (
		<div className='relative rounded-3xl bg-portfolio-pine p-[clamp(24px,4vw,42px)] shadow-[0_24px_70px_rgb(0_0_0/20%)]'>
			<form ref={form} onSubmit={sendEmail}>
				<div className='absolute -left-2499.75' aria-hidden='true'>
					<label htmlFor='website'>Website</label>
					<input id='website' name='website' type='text' tabIndex={-1} autoComplete='off' />
				</div>
				<h3 className='m-0 text-[22px] font-semibold tracking-[-.02em]'>Send a message</h3>
				<div className='mt-7 grid gap-5 sm:grid-cols-2'>
					<label className='grid gap-2 text-[15px] font-normal'>
						Your name
						<input className={field} name='user_name' type='text' placeholder='John Doe' autoComplete='name' maxLength={100} required />
					</label>
					<label className='grid gap-2 text-[15px] font-normal'>
						Email address
						<input className={field} name='user_email' type='email' placeholder='john@company.com' autoComplete='email' maxLength={254} required />
					</label>
				</div>
				<label className='mt-5 grid gap-2 text-[15px] font-normal'>
					What are you working on?
					<textarea className={`${field} min-h-42.5 resize-y`} name='message' placeholder='A short description of the role, project, or idea…' maxLength={5000} required />
				</label>
				<button
					className='button-hover group mt-6 inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-portfolio-mint px-6 py-3 text-[14px] font-semibold text-portfolio-pine hover:bg-portfolio-lime disabled:cursor-wait disabled:opacity-60'
					type='submit'
					disabled={loading}>
					{loading ? 'Sending…' : 'Send message'}
					<Send
						className={loading ? 'send-plane' : 'transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1'}
						size={17}
						strokeWidth={2}
						aria-hidden='true'
					/>
				</button>
			</form>
			<div className='min-h-8' aria-live='polite'>
				{emailSent && <p className='mb-0 mt-3 text-[13px] font-semibold text-portfolio-title'>Message sent successfully.</p>}
				{error && <p className='mb-0 mt-3 text-[13px] font-semibold text-red-700'>Failed to send the message. Please try again.</p>}
			</div>
		</div>
	);
}
