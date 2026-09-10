'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function CopyEmailButton({ email }: { email: string }) {
	const [copied, setCopied] = useState(false);

	const copyEmail = async () => {
		await navigator.clipboard.writeText(email);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1800);
	};

	return (
		<button
			className='button-hover grid size-10 cursor-pointer place-items-center rounded-full border border-white/35 text-white hover:border-portfolio-pine hover:bg-portfolio-pine hover:text-white'
			type='button'
			onClick={copyEmail}
			aria-label='Copy email address'>
			{copied ? <Check size={17} aria-hidden='true' /> : <Copy size={17} aria-hidden='true' />}
		</button>
	);
}
