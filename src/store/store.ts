import { writable } from 'svelte/store';

export const pickColor =writable('#000000');
export const pickColorIndex =writable(0);


export const colorArr=writable(["#EDFA2D","#B40E5B"]);

export const visibleRender=writable(true);