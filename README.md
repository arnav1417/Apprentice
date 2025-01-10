### Apprentice:
#### Bit of background:
I have a computer that runs 24/7, to access it I use Tailscale (VPN). This has saved me a ton of security hassle while helping me learn multiple aspects in system management. I use Docker for containerization solely for it's support and ease of use. To efficiently manage it through SSH. I've created aliases but connection via VPN while good in whole proved finicky. Also at this time I added tailscale image to individual services for sort of subdomain behaviour and isolation, updating tens of same image is tedious, cumbersome.

---
## My solution:
While this might not be the best out there, Like I could really "just" buy a domain and reverse proxy to a random port and call it a day, but I care about security and affordability, so the next best thing is a stand alone bot that communicates without VPN. Discord the popular messenger has well documented Bot Support and I had some prior knowledge with NodeJS so Discord-JS fits in perfectly.  
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
