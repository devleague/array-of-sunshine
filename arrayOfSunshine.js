/**
* challengeTwo(word)
* 
* the point of challenge two is to print a supplied backwards
*
* params
* string word: a string to move backwards
* 
* returns: 
* strng backwards: a backwards string of the initial word pushed 
*
*/
function challengeTwo(word){
	var backWords = word.split('').reverse('').join('');
	return backWords;
}

/**
* challengeThree(word, charecter)
*
* takes a word and removes the last charecter and inserts it 
* into the beginning of the word. It also adds a given char
* into the second to the last part
*
*
* params 
* string word: a word to be sent
* char charecter: a charecter sent to be put into the second 
* last place
*
* returns
* the entire array joined back
*/
function challengeThree(word, charecter){
	//split the word into an array
	var array = word.split('');
	//get rid of the last one
	var removed = array.splice(-1, 1)
	//add the removed letter to the end
	array.splice(0, 0, removed);
	//add to the second to the last charecter passed charecter
	array.splice(word.length-1, 0, charecter);
	//join the spliced array
	return array.join('');
}

/**
* challengeFour(array)
*
* take an array and for each element 
* 
* params
* string(array) array: an array of strings
* 
* returns 
* the array of changed strings with the first letter 
* and ay on the end
*/
function challengeFour(array){

	/**
	* pigLatin(currentValue, index, array)
	*
	* params 
	* int currentValue: the current value of the array
	* int index: current index in the array
	* string(array) array: the array strings are passed
	* 
	* return
	*  returns all fixed words one at a time
	*/
	function pigLatin(currentValue, index, array){
		
		//slice off the string's first letter
		var removedFirst = currentValue.slice(0,1);
		//get the rest of the word
        var secondHalf = currentValue.slice(1);
        //put it back together and add the ay
        var newWord = secondHalf + removedFirst + "ay";
        //return the reformed word
        return newWord;
	}
	//get a new array worth of changed strings
	var newArr = array.map(pigLatin);

	//return it to be used
    return newArr;
}