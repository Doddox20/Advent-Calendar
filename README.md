This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Qualification work - Fullstack Intern

## The exercice

This project involves creating an interactive Advent Calendar web application using Next.js, tailored for users interested in health and wellness, inspired by ResterJeune.com's focus. The calendar will feature daily wellness activities suitable for individuals over 50.

## Steps

1. **UI Design:**
    - Use Next.js and React to create a grid layout representing the days of December up to the 25th.
    - Each grid item should be a clickable component that represents a day.
2. **State Management:**
    - Implement React state or a state management library to keep track of which days have been "opened."
    - Ensure that once a day is opened, its state persists even after refreshing the page.
3. **Dynamic Content Loading:**
    - For each day, load content dynamically. This could involve fetching data from an API or loading content conditionally based on the day.
    - Content types can include exercise videos, nutrition tips, or wellness articles, relevant to ResterJeune.com's theme.
4. **Styling and Responsiveness:**
    - Use pure CSS or tailwind.css to make the calendar visually appealing.
    - Ensure the layout is responsive, displaying properly on various screen sizes.
5. **User Interaction and Feedback:**
    - Implement animations or visual feedback when a day is opened.
    - Optionally, include features like user registration to track individual progress.

## Duration and submission

1. **GitHub Repository:** Fork a base repository you provide and push their final code to their fork. They can then submit a link to their repository.
2. **Deployment Link:** Deploy your application using a service like Vercel or Netlify and provide me with the live URL.
3. **Documented Code:** Include a README file documenting your approach, challenges faced, and how you solved them.

  ## Major Probleme Encountered

  1. I wanted to display videos with react youtube but the youtube link and its ID were random and therefore could not find any video, so I used Vimeo which worked directly, so I spent 1h30 debugging this problem .
  2. I had big problems building in vercel, because of localStorage which had to be surrounded by a condition
