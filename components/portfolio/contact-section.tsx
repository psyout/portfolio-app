'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Check, Copy } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import { featureTitle, sectionEyebrow } from './styles';

const field =
	'w-full rounded-[10px] border border-portfolio-line bg-transparent px-4 py-3.5 text-base text-portfolio-text outline-none transition-colors placeholder:text-portfolio-text/35 focus:border-portfolio-title';

export function ContactSection() {
	const form = useRef<HTMLFormElement>(null);
	const [copied, setCopied] = useState(false);
	const [emailSent, setEmailSent] = useState(false);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const copyEmail = async () => {
		await navigator.clipboard.writeText('hello@felipegonzalez.dev');
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1800);
	};

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
				body: JSON.stringify({ name, email, message, website })
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
		<section
			className='px-5 pb-5 pt-[clamp(64px,8vw,88px)] min-[761px]:px-8'
			id='contact'>
			<div className='mx-auto grid max-w-240 gap-12 border-y border-portfolio-line py-[clamp(60px,8vw,88px)] min-[820px]:grid-cols-[.85fr_1.15fr] min-[820px]:gap-16'>
				<div>
					<p className={`m-0 ${sectionEyebrow}`}>Contact</p>
					<h2 className={`mb-0 mt-4 max-w-[430px] ${featureTitle}`}>Have a problem worth solving?</h2>
					<p className='mb-0 mt-6 max-w-[430px] text-[16px] leading-[1.7] text-portfolio-text/65'>
						I&apos;m open to full-time developer roles, contract work, and thoughtful collaborations.
					</p>

					<div className='mt-9 flex items-center gap-3'>
						<a
							className='text-[16px] font-semibold underline decoration-portfolio-title decoration-2 underline-offset-[6px]'
							href='mailto:hello@felipegonzalez.dev'>
							hello@felipegonzalez.dev
						</a>
						<button
							className='button-hover grid size-10 cursor-pointer place-items-center rounded-full border border-portfolio-line bg-transparent hover:border-portfolio-title hover:bg-portfolio-title hover:text-white'
							type='button'
							onClick={copyEmail}
							aria-label='Copy email address'>
							{copied ? (
								<Check
									size={17}
									aria-hidden='true'
								/>
							) : (
								<Copy
									size={17}
									aria-hidden='true'
								/>
							)}
						</button>
					</div>

					<div
						className='mt-8 flex gap-3'
						aria-label='Social links'>
						<a
							className='button-hover grid size-11 place-items-center rounded-full border border-portfolio-line hover:border-portfolio-title hover:bg-portfolio-title hover:text-white'
							href='https://www.linkedin.com/in/felipegonzalezcare/'
							target='_blank'
							rel='noreferrer'
							aria-label='LinkedIn'>
							<FaLinkedinIn
								size={19}
								aria-hidden='true'
							/>
						</a>
						<a
							className='button-hover grid size-11 place-items-center rounded-full border border-portfolio-line hover:border-portfolio-title hover:bg-portfolio-title hover:text-white'
							href='https://github.com/psyout'
							target='_blank'
							rel='noreferrer'
							aria-label='GitHub'>
							<SiGithub
								size={19}
								aria-hidden='true'
							/>
						</a>
					</div>
				</div>

				<div className='relative'>
				<form
					ref={form}
					onSubmit={sendEmail}>
					<div
						className='absolute -left-[9999px]'
						aria-hidden='true'>
						<label htmlFor='website'>Website</label>
						<input
							id='website'
							name='website'
							type='text'
							tabIndex={-1}
							autoComplete='off'
						/>
					</div>
					<h3 className='m-0 text-[22px] font-semibold tracking-[-.02em]'>Send a message</h3>
					<div className='mt-7 grid gap-5 sm:grid-cols-2'>
						<label className='grid gap-2 text-[13px] font-semibold'>
							Your name
							<input
								className={field}
								name='user_name'
								type='text'
								placeholder='John Doe'
								autoComplete='name'
								maxLength={100}
								required
							/>
						</label>
						<label className='grid gap-2 text-[13px] font-semibold'>
							Email address
							<input
								className={field}
								name='user_email'
								type='email'
								placeholder='john@company.com'
								autoComplete='email'
								maxLength={254}
								required
							/>
						</label>
					</div>
					<label className='mt-5 grid gap-2 text-[13px] font-semibold'>
						What are you working on?
						<textarea
							className={`${field} min-h-[170px] resize-y`}
							name='message'
							placeholder='A short description of the role, project, or idea…'
							maxLength={5000}
							required
						/>
					</label>
					<button
						className='button-hover mt-6 cursor-pointer rounded-full bg-portfolio-button-bg px-6 py-3 text-[14px] font-semibold text-portfolio-button-text hover:bg-portfolio-title disabled:cursor-wait disabled:opacity-60'
						type='submit'
						disabled={loading}>
						{loading ? 'Sending…' : 'Send message'}
					</button>
				</form>
				<div
					className='min-h-8'
					aria-live='polite'>
					{emailSent && <p className='mb-0 mt-3 text-[13px] font-semibold text-portfolio-title'>Message sent successfully.</p>}
					{error && <p className='mb-0 mt-3 text-[13px] font-semibold text-red-700'>Failed to send the message. Please try again.</p>}
				</div>
				</div>
			</div>
		</section>
	);
}
