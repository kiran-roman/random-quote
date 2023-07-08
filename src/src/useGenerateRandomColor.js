import { useState } from 'react';
import quotes from "success-motivational-quotes";
const useGenerateRandomColor = () => {
	const num=Math.floor(Math.random()*2000);
	const quote=quotes.getQuoteById(num);
	const [color, setColor] = useState("")
	const generateColor = () => {
		setColor(Math.random().toString(16).substr(-6));
	};
	return { color, generateColor,quote };

};
export default useGenerateRandomColor;
