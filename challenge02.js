function calculateArea(){
const sidea =7;
const sideb=8;
const sidec=9;
	const semiperimeter =(sidea + sideb + sidec)/2;
	 	Area = Math.sqrt(semiperimeter*((semiperimeter-sidea)*(semiperimeter-sideb)*(semiperimeter-sidec)));
			console.log(Area); 
}
calculateArea();