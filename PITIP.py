import requests

destination = input("Enter wher you want to go")
destination_fixed = destination.replace(" ", "+")

request = request.get(https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=" + destination_fixed" + ,NY&key=AIzaSyBcD63_p64TD3zlDytg9DA5FsrUrx-lsjM)

data = request.json()

rows = data["rows"]
the_row = row[0]

elements = the_row["elements"]
the_elements = elements[0]

duration =  the_elements["duration"]
the_time = duration["text"]


destination_google = data["destination_addresses"]
google_the_destination = destination_google[0]
print("the time it takes to get there is" + the_time)
