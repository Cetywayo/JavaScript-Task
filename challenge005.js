function findSomeChar(text1, text2){
	for (i = 0; i < text1.length; i++) { 
  		for (j = 0; j < text2.length; j++){
  			if (text1[i] == text2[j])
				console.log(text1[i]);
		}
	} 
}

findSomeChar("house", "computers");