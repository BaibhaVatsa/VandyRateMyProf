//the string which will the professor's name and "vanderbilt" added to it
const String query = "http://www.ratemyprofessors.com/search.jsp?query=";
while() {
	while() {
		String profFullName = document.getElementbyClass("classInstructor").innerHTML.trim();
		String profFirstName = profFullName.splice(0, profFullName.indexOf(','));
	//	String profLastName = profFullName.splice(profFullName.indexOf(','),);		yet to be implemented completely
		String searchString = query + profFirstName + "vanderbilt";
	//	window.open(searchString, "_newtab");
		int found = 0;
	//	loop through the webpages till you run out of pages
	//	or the name is found. "listings", "listing PROFESSOR", "listing-name", "sub"
	//	if they have both in common, check the first name also
		if(found==1) {
	//		a href = professor's ratings link
	//		"grade" for rating
	//		int rating = parseInt();			yet to be implemented completely
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