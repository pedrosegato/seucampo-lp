'use client';

import ResponsiveTitle from '@/pages/components/Responsive/ResponsiveTitle';
import { useState } from 'react';

export default function CTA() {
	const [email, setEmail] = useState<string>();
	const [phone, setPhone] = useState<string>();

	return (
		<>
			<ResponsiveTitle>
				Descubra o poder do SeuCampo para impulsionar o seu negócio!
			</ResponsiveTitle>
			<div className='text-center text-gray-500 flex flex-col gap-10'>
				<p>
					SeuCampo não é apenas um sistema de gerenciamento de campos
					esportivos;{' '}
					<span className='font-bold'>
						é a chave para o crescimento do seu negócio
					</span>
					.{' '}
					<span className='font-bold'>
						Aumente sua taxa de clientes
					</span>
					,{' '}
					<span className='font-bold'>
						simplifique seu gerenciamento
					</span>{' '}
					e{' '}
					<span className='font-bold'>
						descomplique a locação para seus clientes
					</span>
					.
				</p>
				<p>Quer estar na vanguarda desta revolução no esporte?</p>
				<p>
					<span className='font-bold'>
						Entre na lista de espera agora mesmo e seja um dos
						primeiros a testar este sistema transformador.
					</span>
				</p>
			</div>

			<form
				id='mc-embedded-subscribe-form'
				name='mc-embedded-subscribe-form'
				className='flex flex-col gap-3'
				action='https://gmail.us12.list-manage.com/subscribe/post?u=1be280e38ec9442eef338e706&amp;id=5d3a5aedde&amp;f_id=009976e0f0'
				method='post'
			>
				<fieldset className='flex flex-row gap-5'>
					<div className='flex flex-col gap-2 w-[50%]'>
						<p className='font-bold text-gray-500'>E-mail</p>
						<input
							type='email'
							placeholder='email@exemplo.com'
							className='bg-gray-200 p-3 rounded outline-0 w-full'
							name='EMAIL'
							id='mce-EMAIL'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex flex-col gap-2 w-[50%]'>
						<p className='font-bold text-gray-500'>Telefone</p>
						<input
							type='text'
							placeholder='+55 (11) 91234-5678'
							className='bg-gray-200 p-3 rounded outline-0 w-full'
							name='PHONE'
							id='mce-PHONE'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</fieldset>
				<button className='bg-green-600 hover:bg-green-700 active:bg-green-800 rounded px-4 py-2 font-bold w-full text-white text-sm'>
					Enviar
				</button>
			</form>
		</>
	);
}
