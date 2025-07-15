import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { auth, signIn, signOut } from '~/auth';
import { BadgePlus, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Navbar = async () => {
	const session = await auth();

	return (
		<header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
			<nav className='flex items-center justify-between'>
				<Link
					href='/'
					className='ml-4'
				>
					<Image
						src='/logo.png'
						alt='logo'
						width={120}
						height={30}
					/>
				</Link>
				<div className='flex items-center gap-5 text-black'>
					{session && session?.user ? (
						<>
							<Link href='/startup/create'>
								<span className='max-sm:hidden'>Create</span>
								<BadgePlus className='sm:hidden text-blue-500 size-6' />
							</Link>

							<form
								action={async () => {
									'use server';
									await signOut({ redirectTo: '/' });
								}}
							>
								<button type='submit'>
									<span className='max-sm:hidden'>
										Logout
									</span>
									<LogOut className='sm:hidden mt-2 text-red-500 size-6' />
								</button>
							</form>

							<Link
								className='flex items-center sm:font-semibold sm:gap-2 sm:border sm:border-[#3B82F6] sm:rounded-full sm:px-2 sm:py-0.5 sm:pr-0.5 sm:text-[#3B82F6] sm:hover:bg-[#3B82F6] sm:hover:text-white sm:transition'
								href={`/user/${session?.id}`}
							>
								<span className='max-sm:hidden'>
									{session?.user?.name}
								</span>
								<Avatar>
									<AvatarImage
										src={session?.user?.image || ''}
										alt={session?.user?.name || ''}
									/>
									<AvatarFallback>AV</AvatarFallback>
								</Avatar>
							</Link>
						</>
					) : (
						<form
							action={async () => {
								'use server';
								await signIn('github');
							}}
						>
							<button type='submit'>Login</button>
						</form>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
