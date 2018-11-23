import urllib2
import lxml
#import the Beautiful soup functions to parse the data returned from the website
from bs4 import BeautifulSoup

yes = "https://acad.app.vanderbilt.edu/more/SearchClasses!input.action?"

courseTable = BeautifulSoup.find_all('td', attrs={'class': 'classInstructor'})

for each in courseTable:
	profName = each.text.strip().encode('utf-8').replace(", ", "+")
	wiki = "http://www.ratemyprofessors.com/search.jsp?query=" + profName + "+vanderbilt"
	req = urllib2.Request(wiki, headers={'User-Agent' : "Magic Browser"})

	#Query the website and return the html to the variable 'page'
	page = urllib2.urlopen(req)

	soup = BeautifulSoup(page, features = "lxml")

	all_links = soup.find_all('a')

	a=0

	for link in all_links:
		nice = link.get('href')
		a=a+1
		if a==59:
			query = nice

	print query

	result = 0

	if query[:6] != "/ShowR":
		result = -1
	else:
		wiki1 = "http://www.ratemyprofessors.com" + query
		req1 = urllib2.Request(wiki1, headers={'User-Agent' : "Magic Browser"})
		page1 = urllib2.urlopen(req1)
		soup1 = BeautifulSoup(page1, features = "lxml")
		result = soup1.find('div', class_='grade').text

	each.text = profName+" - "+(str)+result