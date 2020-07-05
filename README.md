# Switzerland public transport

### React Native application to handle the information about the public transport in Switzerland.
----
This app allows the user to choose a departure and an arrival station, and optionally
the date and time of the travel.

If the user doesn’t select it, the current date and time will be used as default.

When departure, arrival, and possibly schedule time have been inserted, the
application computes all the possible routes among the two points and shows the list
of the results, properly indicating departure and arrival times as well as an indication
if the travel is direct or it requires any intermediate stop.

If a result is selected, the detailed view of the travel is displayed, showing
intermediate stops.

