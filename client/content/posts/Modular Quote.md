---
title: "Modular Quote"
date: 2021-03-01T05:00:00Z
image: /images/posts/USAA-banner.jpg
categories: 
  - Projects
  - Programming
draft: false
---

#### Purpose
The goal of this project was to have a public facing UI for Non-members to check if they could become a Member. 
After they were verified to have member eligibility, they would be able to get an auto quote and have the auto quote tie to that member for 30 Days.   

#### Architecture
This project start off with dependencies from the very start. 
At a high level, half of the process as handled by another team and could transfer data between applications via the cache and local storage.
On the other half, we would ask question pertaining to an Auto Quote and send it off for quoting.
After getting a quote back, we would display the information and give option on what to do next.


<Accordion title="Lessons Learned">
  <Accordion title="Input and Output Contracts"> 
    To ensure clear expectations and effective collaboration, it is essential to establish an Input and Output contract from the beginning of the planning phase. This contract outlines the agreed-upon inputs required for the project and the expected outputs to be delivered. Additionally, maintaining constant communication, preferably on a daily basis, about any changes to the contract is vital. This regular dialogue allows for transparency, enables early identification of potential issues, and ensures that all stakeholders are aligned throughout the project, promoting efficiency and minimizing misunderstandings.
  </Accordion> 

  <Accordion title="Always Do Retrospectives">
    Retrospectives hold great significance in the project lifecycle and necessitate full team engagement to be effective. These reflective sessions provide an opportunity for the team to collectively assess their performance, identify strengths, and pinpoint areas for improvement. To maximize the benefits of retrospectives, it is crucial for every team member to actively participate, share their perspectives, and contribute to the discussion. This inclusive involvement promotes a sense of ownership, encourages open dialogue, and fosters a culture of continuous learning and growth. By embracing retrospectives and engaging the entire team, projects can become more efficient, adaptable, and successful.
  </Accordion>
</Accordion>

<Accordion title="Project Technologies">
- [React.js](https://react.dev/)
- [Webpack](https://webpack.js.org/)
- [Openshift](https://www.redhat.com/en/technologies/cloud-computing/openshift)
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/en)
</Accordion>

<Accordion title="Languages">
- Javascript
- HTML
- CSS
</Accordion>

