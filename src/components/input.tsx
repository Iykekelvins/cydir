import { useState } from 'react';
import { PHONE_PLACEHOLDERS } from '@/utils/mock';

import useOutsideClick from '@/hooks/useOutsideClick';
import Image from 'next/image';

interface InputProps {
	label: React.ReactNode;
	value: string;
	name: string;
	placeholder?: string;
	className?: string;
	required?: boolean;
	textArea?: boolean;
	white?: boolean;
	hidePhone?: boolean;
	labelClass?: string;
	inputClass?: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
	) => void;
}

export default function Input({
	label,
	placeholder,
	name,
	value,
	onChange,
	textArea,
	className,
	white,
	required = true,
	hidePhone,
	labelClass,
	inputClass,
}: InputProps) {
	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedCountry, setSelectedCountry] = useState('CA');

	const modalRef = useOutsideClick(() => setShowDropdown(false));

	return (
		<div className={`w-full ${className && className}`}>
			<label
				htmlFor={name}
				className={`text-14 font-medium font-satoshi text-blue leading-normal ${
					labelClass && labelClass
				}`}>
				{label}
			</label>

			<div
				className={`mt-[max(0.375rem,6px)] border transition-all duration-300 ease-in-out
					 border-blue border-solid ${
							!textArea
								? 'h-[max(2.75rem,40px)]'
								: 'h-[max(7.875rem,84px)] pt-[max(0.625rem,10px)]'
						} shadow-[0px_1px_2px_0px_#1018280D]
					pl-[max(10px,0.625rem)] rounded-[max(0.5rem,8px)] ${inputClass && inputClass}`}>
				{!textArea ? (
					<>
						{!name.includes('phone') || (name.includes('phone') && hidePhone) ? (
							<input
								type={label !== 'email' ? 'text' : 'email'}
								name={name}
								id={name}
								value={value}
								placeholder={placeholder}
								required={required}
								onChange={onChange}
								className={`border-0 outline-0 w-full h-full text-base font-satoshi
             placeholder:text-blue placeholder:font-satoshi placeholder:text-base
						 `}
							/>
						) : (
							name.includes('phone') &&
							!hidePhone && (
								<div className='flex items-center gap-[max(1rem,16px)] h-full'>
									<div className='relative'>
										<button
											className='flex items-center'
											type='button'
											onClick={() => setShowDropdown(!showDropdown)}>
											<span className={`text-base font-satoshi text-blue`}>
												{selectedCountry}
											</span>
											<svg
												width='20'
												height='20'
												viewBox='0 0 20 20'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M5 7.5L10 12.5L15 7.5'
													fill={!white ? 'black' : 'white'}
												/>
											</svg>
										</button>
										<ul
											className={`absolute bottom-0 left-0 w-[max(4rem,60px)] transition-all duration-500 ease-in-out
                       overflow-hidden bg-white overflow-y-auto hide-scroll 
                    shadow-lg  p-[max(4px,0.25rem)] rounded-[max(0.25rem,4px)]
                    border border-blue border-solid  flex flex-col gap-[max(1rem,14px)]
                    ${
											showDropdown
												? 'h-[max(14rem,200px)] opacity-100 pointer-events-auto'
												: 'h-0 opacity-0 pointer-events-none'
										}
                    `}
											data-lenis-prevent
											ref={modalRef}
											data-input='phone-dropdown'
											data-phone-code={
												PHONE_PLACEHOLDERS.find(
													(phone) => phone.country === selectedCountry
												)?.code
											}>
											{PHONE_PLACEHOLDERS.map((phone) => (
												<li key={phone.country}>
													<button
														className={`flex items-center gap-[max(4px,0.25rem)] h-full w-full text-14 
															${selectedCountry !== phone.country ? 'text-gray-900' : 'text-blue'}`}
														type='button'
														onClick={() => {
															setSelectedCountry(phone.country);
															setShowDropdown(false);
														}}>
														<Image
															src={phone.flag}
															width={20}
															height={20}
															alt={`${phone.country} flag`}
														/>
														{phone.code}
													</button>
												</li>
											))}
										</ul>
									</div>
									<input
										type={'number'}
										name={name}
										id={name}
										value={value}
										placeholder={
											PHONE_PLACEHOLDERS.find(
												(item) => item.country === selectedCountry
											)?.placeholder
										}
										required={required}
										onChange={onChange}
										className={`border-0 outline-0 flex-1 h-full text-base font-satoshi
										text-blue placeholder:text-blue
              			placeholder:font-satoshi placeholder:text-base`}
									/>
								</div>
							)
						)}
					</>
				) : (
					<textarea
						name={name}
						id={name}
						value={value}
						onChange={onChange}
						required={required}
						placeholder={placeholder}
						className={`h-full w-full outline-0 text-base font-satoshi
								 placeholder:font-satoshi placeholder:text-base
								 text-blue placeholder:text-blue
								 `}
					/>
				)}
			</div>
		</div>
	);
}
