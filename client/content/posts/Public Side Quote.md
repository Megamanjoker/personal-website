---
title: "Public Side Quote"
date: 2020-03-01T05:00:00Z
image: /images/posts/USAA-banner.jpg
categories:
  - Projects
  - Programming
draft: false
---

#### Purpose
The goal of this project was to have a public facing UI for getting an Auto Quote for Non-members

#### Architecture
Simple Redux form that on submission mapped to a POST REST endpoint's payload schema.

<Accordion title="Lessons Learned">

  <Accordion title="Payload conversions"> 

In hindsight, if it had been possible, allowing the REST endpoint to accept the Redux Form payload as it was would have greatly expedited the project. This decision would have eliminated the need for spending approximately 2 weeks transforming the form data structure into a format compatible with the endpoint.

By accepting the Redux Form payload directly, the development team could have avoided the time-consuming process of reformatting the data. This transformation involved mapping and reshaping the payload to match the expected structure of the REST endpoint. Not only did this require additional coding, but it also introduced the potential for errors and bugs during the data transformation process.

By bypassing this data transformation step, the team could have allocated more time and resources towards other critical aspects of the project. This could have included additional feature development, testing, or addressing other project requirements. Ultimately, this would have expedited the project timeline and potentially improved overall efficiency and productivity.

However, it is important to note that this decision may have been dependent on various factors, such as the limitations of the REST endpoint or specific requirements imposed by the project stakeholders. Evaluating these factors and assessing the feasibility of accepting the Redux Form payload directly would have been crucial in determining whether this approach was viable.

In conclusion, if it had been feasible, accepting the Redux Form payload as is by the REST endpoint would have saved approximately 2 weeks that were spent on transforming the form data structure. This alternative approach could have accelerated the project timeline and allowed the team to focus on other crucial aspects of the development process.

  </Accordion> 

  <Accordion title="Growing Pains of Extreme Agile">

Under the methodology of Extreme Agile, our team embarked on its first project with high hopes and aspirations. However, like any new venture, we encountered several growing pains that initially slowed down our progress. Nonetheless, through perseverance and adaptability, we quickly learned from these challenges and accelerated the project in its later stages.

At the outset, transitioning to Extreme Agile required us to embrace a radically different approach to project management. We had to shift our mindset from a traditional, linear process to one that emphasized flexibility, collaboration, and iterative development. This change was accompanied by a steep learning curve as team members adjusted to the new methodologies, tools, and communication frameworks.

During the initial phase, we faced challenges related to team dynamics and coordination. Some team members were initially resistant to change, clinging to familiar practices. This resistance created friction and hindered our ability to fully embrace the principles of Extreme Agile. Additionally, our team struggled to find the right balance between autonomy and interdependence, leading to confusion and duplication of efforts.

Moreover, as we began implementing the Extreme Agile principles, we encountered difficulties in estimating the project timeline and scope accurately. The iterative nature of the methodology meant that requirements and priorities could evolve rapidly, requiring constant adjustment. We initially underestimated the effort required for this adaptability and found ourselves struggling to keep up with changing requirements.

Despite these early challenges, we remained committed to the principles of Extreme Agile. We sought solutions through open and honest communication, fostering an environment where feedback and ideas were freely exchanged. As a result, we gradually developed a shared understanding of our goals and a unified vision for the project.

As time progressed, we began to witness the true power of Extreme Agile. Our team's adaptability and resilience allowed us to respond swiftly to changes, incorporating feedback and continuously improving our work. The iterative development cycles facilitated regular customer involvement, ensuring that our deliverables aligned closely with their evolving needs. By embracing collaboration and promoting transparency, we established a high level of trust among team members, allowing us to resolve conflicts more effectively and make informed decisions together.

As we moved into the later stages of the project, our efforts started to bear fruit. The team became more synchronized and adept at utilizing the Extreme Agile principles. Our communication channels improved, and we leveraged tools and techniques to streamline collaboration and information sharing. The project gained momentum, and our progress accelerated significantly.

In conclusion, while the implementation of Extreme Agile initially presented us with growing pains, our team's perseverance and willingness to adapt allowed us to overcome these obstacles. Through open communication, continuous learning, and embracing change, we gradually harnessed the power of Extreme Agile, leading to a remarkable acceleration in the project's later stages. The experience not only transformed our project management approach but also fostered a culture of collaboration and innovation within our team.
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

