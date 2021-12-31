import { MouseEventHandler } from "react";

export type CoffeeShopsType = {
	id: string;
	name: string;
	roaster: boolean;
	address: string;
	city: string;
	state: string;
	website: string;
	counter: CounterType;
	coordinates: CoordinatesType;
	socials: SocialMediaType;
};

export type CounterType = {
	likes: number;
	dislikes: number;
	handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export type CoordinatesType = {
	lat: string;
	lng: string;
};

export type SocialMediaType = {
	facebook: string;
	instagram: string;
};
