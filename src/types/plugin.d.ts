import { IJodit } from './jodit';
import { IDestructible, IInitable } from './types';
import { IViewBased } from './view';

export class IPlugin implements IDestructible, IInitable {
	jodit: IJodit;

	requires?: string[];
	hasStyle?: boolean;

	init(jodit: IJodit): void;
	destruct(jodit?: IJodit): void;

	constructor(jodit?: IJodit);
}

interface PluginFunction {
	constructor(jodit: IViewBased): void;
}

export type PluginType = typeof IPlugin | IPlugin | PluginFunction;
export type PluginInstance = IPlugin | object;

export interface IExtraPlugin {
	name: string;
	url?: string;
}

export interface IPluginSystem {
	add(name: string, plugin: PluginType): void;
	get(name: string): PluginType | void;
	remove(name: string): void;
	init(jodit: IJodit): Promise<void>;
}
