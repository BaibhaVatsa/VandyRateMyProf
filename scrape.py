
import urllib2
import lxml




wiki = "http://www.ratemyprofessors.com/search.jsp?query=vikash+singh"
req = urllib2.Request(wiki, headers={'User-Agent' : "Magic Browser"})

#Query the website and return the html to the variable 'page'
page = urllib2.urlopen(req)

#import the Beautiful soup functions to parse the data returned from the website
from bs4 import BeautifulSoup

soup = BeautifulSoup(page, features = "lxml")



all_links = soup.find_all('a')

a=0


for link in all_links:
	nice = link.get('href')
	a=a+1
	
	if a==59:
		query = nice



print query

if query[:6] != "/ShowR":
	print "fuck you"
else:
	wiki1 = "http://www.ratemyprofessors.com" + query
	req1 = urllib2.Request(wiki1, headers={'User-Agent' : "Magic Browser"})
	page1 = urllib2.urlopen(req1)
	soup1 = BeautifulSoup(page1, features = "lxml")
	print soup1.find('div', class_='grade').string







	








