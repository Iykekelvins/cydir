import { useState } from 'react';

interface DropdownProps {
	options: string[];
	value: string | string[];
	onSelect?: (option: string | string[]) => void;
	placeholder?: string;
	multiSelect?: boolean;
	label: string;
}

const Dropdown: React.FC<DropdownProps> = ({
	options,
	onSelect,
	value,
	placeholder = 'Select an option',
	multiSelect = false,
	label,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string | string[]>(value);

	const handleSelect = (option: string) => {
		if (multiSelect) {
			const currentSelected = Array.isArray(selectedOption) ? selectedOption : [];
			const newSelected = currentSelected.includes(option)
				? currentSelected.filter((item) => item !== option)
				: [...currentSelected, option];

			setSelectedOption(newSelected);
			if (onSelect) {
				onSelect(newSelected);
			}
		} else {
			setSelectedOption(option);
			setIsOpen(false);
			if (onSelect) {
				onSelect(option);
			}
		}
	};

	const removeOption = (option: string, e: React.MouseEvent) => {
		e.stopPropagation();
		if (multiSelect && Array.isArray(selectedOption)) {
			const newSelected = selectedOption.filter((item) => item !== option);
			setSelectedOption(newSelected);
			if (onSelect) {
				onSelect(newSelected);
			}
		}
	};

	const isSelected = (option: string): boolean => {
		if (multiSelect && Array.isArray(selectedOption)) {
			return selectedOption.includes(option);
		}
		return selectedOption === option;
	};

	const getDisplayText = (): string => {
		if (multiSelect && Array.isArray(selectedOption) && selectedOption.length > 0) {
			return '';
		}
		if (!multiSelect && typeof selectedOption === 'string' && selectedOption) {
			return selectedOption;
		}
		return placeholder;
	};

	const hasSelection = multiSelect
		? Array.isArray(selectedOption) && selectedOption.length > 0
		: typeof selectedOption === 'string' && selectedOption !== '';

	return (
		<div className='relative w-full'>
			{/* Trigger Button */}
			<h4 className={`text-14 font-medium font-satoshi text-blue leading-normal`}>
				{label}
			</h4>
			<div
				role='button'
				onClick={() => setIsOpen(!isOpen)}
				className={`
          w-full min-h-[max(2.75rem,40px)] text-left border 
					border-solid border-blue rounded-[max(0.5rem,8px)] 
					flex justify-between items-center mt-[max(0.375rem,6px)]
          px-[max(10px,0.625rem)] py-[max(0.5rem,8px)] 
        `}>
				<div className='flex-1 flex flex-wrap gap-[max(0.5rem,8px)] items-center'>
					{multiSelect &&
					Array.isArray(selectedOption) &&
					selectedOption.length > 0 ? (
						selectedOption.map((option) => (
							<span
								key={option}
								className='inline-flex items-center gap-[max(0.25rem,4px)] 
								bg-blue text-white px-[max(0.5rem,8px)] py-[max(0.25rem,4px)] rounded text-14'>
								{option}
								<button
									type='button'
									onClick={(e) => removeOption(option, e)}
									className='hover:bg-gray-600 rounded-full p-0.5 transition-colors'>
									<svg
										width='14'
										height='14'
										viewBox='0 0 14 14'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5'
											stroke='currentColor'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</button>
							</span>
						))
					) : (
						<span
							className={`${
								hasSelection ? 'text-blue' : 'text-[#FFFFFF66]'
							} text-base`}>
							{getDisplayText()}
						</span>
					)}
				</div>

				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={`transition-transform duration-200 shrink-0 ml-[max(0.5rem,8px)] ${
						isOpen ? 'transform rotate-180' : ''
					}`}>
					<path d='M5 7.5L10 12.5L15 7.5' fill='#192A4D' />
				</svg>
			</div>

			{/* Dropdown Menu */}
			<div
				className={`
        absolute top-full left-0 w-full mt-1 bg-white border border-white 
        rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-200 origin-top
        ${
					isOpen
						? 'opacity-100 scale-y-100 translate-y-0'
						: 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
				}
      `}>
				<div className='max-h-[max(15rem,200px)] overflow-y-auto' data-lenis-prevent>
					{options.map((option) => (
						<button
							type='button'
							key={option}
							onClick={() => handleSelect(option)}
							className={`
                w-full px-[max(1rem,16px)] py-[max(0.5rem,8px)] text-left
								 hover:bg-gray-100 focus:bg-gray-100
                focus:outline-none transition-colors duration-150
                text-base text-blue flex items-center gap-2
                ${isSelected(option) ? 'bg-gray-100 font-medium' : ''}
              `}>
							{multiSelect && (
								<div
									className={`w-[max(1rem,16px)] h-[max(1rem,16px)] border-2 
									rounded flex items-center justify-center shrink-0 ${
										isSelected(option) ? 'bg-blue border-blue' : 'border-gray-300'
									}`}>
									{isSelected(option) && (
										<svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
											<path
												d='M2 6L5 9L10 3'
												stroke='white'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									)}
								</div>
							)}
							{option}
						</button>
					))}
				</div>
			</div>

			{/* Backdrop */}
			{isOpen && (
				<div className='fixed inset-0 z-40' onClick={() => setIsOpen(false)} />
			)}
		</div>
	);
};

// Example usage

export default Dropdown;
