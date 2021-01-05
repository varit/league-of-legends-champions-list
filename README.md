
# Project Overview

## Project Name
League of Legends Champions List (LoLCL)

## Project Description
- The LoLCL will display images of all LoL champions in a single page. 
- Each images is clickable to load and open up champions own page, displaying that champions image, name and lore/brief description

## API:
- http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json

## API Snippet

    "type": "champion",
    "format": "standAloneComplex",
    "version": "10.25.1",
    "data": {
        "Aatrox": {
            "version": "10.25.1",
            "id": "Aatrox",
            "key": "266",
            "name": "Aatrox",
            "title": "the Darkin Blade",
            "blurb": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
            "info": {
                "attack": 8,
                "defense": 4,
                "magic": 3,
                "difficulty": 4
            },
            "image": {
                "full": "Aatrox.png",
                "sprite": "champion0.png",
                "group": "champion",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
## Wireframes

![Desktop Wireframe](https://i.imgur.com/EgfkKBV.png)

![Mobile Wireframe](https://i.imgur.com/MTaC9Z8.png)

## MVP
- Search bar for champions name
- Champions Image (original skin)
- Champions Name
- Champions Description

## Post-MVP
- Fine tune CSS
- Filter search bar
- Champions (additional) Skins 
- Basic info (Attack, defense, magic, difficulty) displayed using animated graph
- Ally tips
- Enemy tips

## Project Schedule

### Week 1(MVP)

Monday: 
- HTML setup (Desktop)
- Basic CSS setup (Desktop)
- JavaScript setup (Desktop)

Tuesday: 
- Implement API 
- Test(Phase 1) search functionality
- Test(Phase 2) page navigation

Wednesday:
- CSS setup (Tablet and mobile)

Thursday:
- CSS setup con (Tablet and mobile)

Friday:
- Buffer

Saturday: N/A
Sunday: N/A

### Week 2(Post MVP)
- Advanced CSS
- Filter search bar
- Add extra data

|  Day | Deliverable | Status
|---|---| ---|
|Dec 18| Wireframes / Priority Matrix / Timeframes | Complete
|Dec 21| Project Approval / HTML Setup / Basic CSS Setup | Complete
|Dec 22| API Implementation / Test(Phase 1) Search Functionality / Test(Phase 2) Page Navigation | Complete
|Dec 23| CSS Setup (Tablet and Mobile) | Complete
|Dec 24| CSS Setup con (Tablet and mobile) | Complete
|Dec 25| Fine Tune CSS | Complete
|Jan 4| MVP | Complete
|Jan 5| Presentations | Complete

## Priority Matrix

![Priority Matrix](https://i.imgur.com/OfOKV3E.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML + JavaScript | M | 3-6hrs| 6hrs | 6hrs |
| Basic CSS | M | 3hrs| 3hrs | 3hrs |
| API Implementation | H | 6-9hrs| 9hrs | 9hrs |
| Test(Phase 1 + Phase 2) | H | 3hrs| 3hrs | 3hrs |
| CSS (Tablet and mobile) | L | 3hrs| 3hrs | 3hrs |
| Advanced CSS | L | 6-9+ hrs| 9hrs | 9hrs |
| Total | N/A | 27-35+ hrs| 35hrs | 35hrs |


## Code Snippet

.champs-box {
    clip-path: inset(20px 20px 0px 20px);
    margin: 20px;
    max-width: 308px;
    max-height: 592px;
    overflow: hidden;
    cursor: pointer;
}
.champs-box:hover .zoom,
.champs-box:focus .zoom {
    transform: scale(.95);
    transition-duration: 500ms;
}
## Change Log

Change from autocomplete search to filter search
