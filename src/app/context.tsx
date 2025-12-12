'use client';

import { createContext, useContext, useState } from 'react';

interface Service {
	tag: string;
	title: string;
	info: string;
	featuresTitle: string;
	features: string[];
	btnText: string;
	bookingLink: string;
	img: string;
	alt: string;
}

interface ContextProps {
	openServicesModal: boolean;
	setOpenServicesModal: (e: boolean) => void;
	service: Service | null;
	setService: (e: Service) => void;
}

const AppContext = createContext<ContextProps | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [openServicesModal, setOpenServicesModal] = useState(false);
	const [service, setService] = useState<Service | null>(null);

	return (
		<AppContext.Provider
			value={{
				openServicesModal,
				setOpenServicesModal,
				service,
				setService,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useProvider = (): ContextProps => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useContext must be wrapped inside AppProvider');
	}
	return context;
};
