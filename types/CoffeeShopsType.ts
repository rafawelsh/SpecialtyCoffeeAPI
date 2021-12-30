import { MouseEventHandler } from "react";

export type CoffeeShopsType = {
	id: string;
	name: string;
	roaster: boolean;
	city: string;
	state: string;
	counter: CounterType;
};

export type CounterType = {
	likes: number;
	dislikes: number;
	handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
	// handleClick?: MouseEventHandler;
};
