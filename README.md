### Helper-Bot:
#### Bit of background:
I have a computer that runs 24/7, a server you may say!, to access it I use Virtual Private Network (VPN). This has saved me a ton of security hassle while helping me learn multiple aspects in system management. I use Docker for containerization solely for it's support and ease of use. To efficiently manage it through SSH. I've created aliases but connection via VPN while good in whole proved finicky. Also at this time I added tailscale image to individual services for sort of subdomain behaviour and isolation, updating tens of same image is tedious, cumbersome and Yes I will not use an auto updater for breaking reasons.

---
## My solution:
While this might not be the best out there, Like I could really "just" buy a domain and reverse proxy to a random port and call it a day, but I care about security and affordability so the next best thing is a stand alone bot that communicates without VPN. And it clicked, *Discord* the popular messenger that has well documented Bot Support. I have some prior knowledge with NodeJS so Discord-JS fits in perfectly.  
After some documentation and relentless searching, I created ***Sub-ordinate*** discord bot, for my chores. At this stage I can:
- Start/Stop/Restart a container
- Specifically update tailscale across all containers simultaneously.
- Pull specific image
- Container list and status
- Docker Logs
---
### Further:
Features I have planned:
- System update
- System restart
- General integration with my containers
---
### Technicalities:
- **Discord-JS**: Provides a way to communicate with Discord.
- **Node-JS**:  Helps to integrate Discord-JS with other functionality to provide an environment for execution.
- **Bash**: Much of Bot's functionality is dependent on running a command and appropriately  carry-out it's job.