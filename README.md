# hd22_queue
Hackduke 2022 Project
## Set up
- Install Node.js and npm
- start development server
    ```sh
    cd [repo-name]/app
    npm install
    npm start
    ```
# Project Explanation
## Inspiration
The queue at Duke student mail center can drive you crazy. There are some hours when there¡¯s only a few people in the queue, while other times you will have to wait up to 50 minutes to get your package. Even worse, these hours fluctuate drastically from week to week. This makes it very hard for students to visit the mail center at the right time in between classes to pick up a potentially urgently-needed package, especially since the mail center does not open during weekends. 

## What it does
Our web app has three main functions. Students can check the real time length of the line in the mailing center, check historical data, and contribute their estimation of queue length if they are lining up at the moment.

Historical data gives the maximum queue length during every hour of operation for the past week. For example, a student planning to pick up their package at 9:00 a.m. on a Monday is able to estimate roughly the number of students who will also show up according to the data from last Monday. 

When students scan the QR codes pasted on the wall in the mailing center, they will be directed to our website. They can then contribute their data points by submitting their netID and their approximation of the length of the queue at the current time. When they first enter the website, there is an estimate of the length of the line depending on which QR code they scanned, and they can adjust the number accordingly. 

Every student has a one-time free access to view historical or real time data. In order to access the data in the future, students need to contribute at least one data point. This is tracked according to their netID.

## How we built it

We first designed the homepage, dashboard page, and the database. We then split up our work into frontend and backend. We built an API that allows user¡¯s netid, timestamp, and position in queue to be added to the database. For the homepage, we aimed for a user-friendly design, where the user can either submit the default value as an estimate of their position, use the ¡°+1¡± and ¡°-1¡± buttons to count their position one-by-one, or input their value in the text field. After hitting submit, they will be asked for their netid to track their contribution. For the dashboard page, we fetch from the database the real-time data of how long the queue is and the approximate wait time. We also generate a graph that visualizes the fluctuations in average queue length by hour of day or day of week.



## Challenges we ran into

One challenge of our product is how to incentivize users to make contributions. We realize shortly that if there are no incentives, people might not submit to our website at all when queuing. We eventually decided that a user has to at least make one contribution before he or she is able to view the dashboard page - where users would be able to see real time data on the queues. 


## Accomplishments that we're proud of

We successfully deployed a full stack web app, with a user-friendly frontend design that adds a user¡¯s timestamp, netid, and position in queue to the database, and a functional backend that generates a graph that helps you visualize the fluctuations in average queue length by hour of day or day of week.

## What we learned

Team work. It becomes much more efficient when we divide up the project into individual delegatable components so that each person can focus on one small part alone. 
Design choice. We at first made the choice of a node server architecture while later quickly pivoting to a firebase serverless solution. The reason being, given the time and resources we have, using firebase to handle both the server and database and removing the node server as a middle layer is most cost efficient choice for us


## What's next for Peek-A-Queue

We could extend it from a single location of Mail Center to multiple locations in Western Union. Through that expansion of business we might need to rethink our key user flow since posting QR code posters to indicate queue length might not be feasible for all locations. This app can even be expanded beyond Duke to any in-person service that does not have an online queuing or queue-monitoring support, from shopping mall check-out lines to covid-test walk-up lines in the streets.
