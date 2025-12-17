'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';

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
	openCommForm: boolean;
	setOpenCommForm: (e: boolean) => void;
	openMenu: boolean;
	setOpenMenu: (e: boolean) => void;
	isPlaying: boolean;
	setIsPlaying: (e: boolean) => void;
	service: Service | null;
	setService: (e: Service) => void;
}

const AppContext = createContext<ContextProps | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [openServicesModal, setOpenServicesModal] = useState(false);
	const [openCommForm, setOpenCommForm] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const [service, setService] = useState<Service | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const audio = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		audio.current = new Audio('/audio/cydir-audio.mp3');
	}, []);

	useEffect(() => {
		if (!audio.current) return;

		if (isPlaying) {
			audio?.current.play();

			if (audio) audio.current.loop = true;
		} else {
			audio?.current.pause();
		}
	}, [isPlaying, audio]);

	return (
		<AppContext.Provider
			value={{
				openServicesModal,
				setOpenServicesModal,
				service,
				setService,
				openCommForm,
				setOpenCommForm,
				openMenu,
				setOpenMenu,
				isPlaying,
				setIsPlaying,
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
