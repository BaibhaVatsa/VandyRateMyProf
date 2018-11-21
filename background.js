//the string to which the professor's last name and "vanderbilt" will be added to
const String query = "http://www.ratemyprofessors.com/search.jsp?query=";
while() { //tables in search results page in YES (Student Portal)
	while() { //there are rows of results 
		//pick classInstructor
		String profFullName = document.getElementbyClass("classInstructor").innerHTML.trim();
		String profLastName = profFullName.splice(0, profFullName.indexOf(','));
	//	String profFirstName = profFullName.splice(profFullName.indexOf(','),);		yet to be implemented completely
		String searchString = query + profLastName + " vanderbilt";
	//	window.open(searchString, "_newtab"); 	FIND ALTERNATIVE AS THIS DOESN"T LET THE EXTENSION WORK IN BACKGROUND
		
		int found = 0;
	//	while() there are list items in listings
			//access main of listing prof
			//if main has profLastName, profFirstName
				//go to link in href
				//access grade i.e. rating

	//	change inner HTML to profFullName + " ~ " + rating 

			if(found==1) {
	//		a href = professor's ratings link
	//		"grade" for rating
	//		int rating = parseInt();			yet to be `implemented completely
			if(rating > 3.5) {
		//			show in green the professor's name and rating
			}
			else if (rating > 2.0) {
		//			show in orange the professor's name and rating
			}
			else {
		//			show in red the professor's name and rating
			}
		}
	}
}