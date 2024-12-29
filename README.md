# MEMORY-HELPER

#### Video Demo: [Insert Video URL Here]

---

## Description

Memory-Helper is a simple application built with ReactJS for web browsers. Its primary purpose is to help users quickly note and recall anything that comes to mind, making it easier to stay organized and remember important details. The project emphasizes clean design, simplicity, and ease of use.

The application is structured with reusable components to ensure maintainability and simplicity in understanding. It uses **Redux** to efficiently manage the state of reminders, allowing seamless updates and retrieval of stored information. **React Router** is utilized for navigation, ensuring a single-page application experience by avoiding full page refreshes. This approach retains the Redux state throughout the browsing session.

While **Bootstrap** was initially considered for styling, it did not provide the level of customization desired. Instead, the design focuses on minimalism and simplicity, with **custom CSS** handling the visual elements. This ensures that the user interface remains clean and intuitive.

---

## File and Component Breakdown

The project follows best practices in front-end development and ReactJS, ensuring that files are logically organized and components are reusable. Below is a breakdown of the core components and their roles:

- **Reminders**:  
  The primary component for the main reminders page. It aggregates all reminders and displays them in an organized and visually appealing way.

- **ReminderItem**:  
  Handles the display of individual reminders in the user interface, showing key details such as the reminder’s text and any associated metadata.

- **NewReminder**:  
  This component allows users to create new reminders, which are then displayed on the main page.

- **EditReminder**:  
  Designed to modify existing reminders, this component provides users with the ability edit reminder details.

- **InputField**:  
  A generic component that handles input fields across the application, making it easy to manage and extend input functionality.

- **Button**:  
  This component is used for all buttons across the application, except for navigation links in the navbar. It ensures consistency in button styling and functionality.

- **reminderSlice**:
  A Redux slice responsible for managing reminders. It handles creating, editing, completing, deleting, and updating the order of appearance.

- **Navigation**:
  Handles the navigation of the website using **React Router**.

---

## Design Choices

Throughout the development process, I focused on following best practices for front-end and ReactJS development. This includes:

- **File Organization**: Each file is placed in a logical directory structure, ensuring clarity and ease of access.
- **Naming Conventions**: Functions, properties, and components are named descriptively to make their purpose immediately clear.
- **Reusable Components**: Components are designed to be modular and reusable, reducing redundancy and simplifying future maintenance.

One significant design decision involved styling. While **Bootstrap** is a popular choice for responsive design, it did not meet my specific needs for this project. I opted for **custom CSS** to achieve a minimalist aesthetic and ensure full control over the styling. This decision aligns with the goal of keeping the user interface simple and focused.

---

## Technologies Used

The following technologies were chosen to meet the functional and aesthetic requirements of the application:

- **Redux**:  
  Used for managing the state of reminders, ensuring efficient updates and data consistency.

- **Bootstrap**:  
  Used selectively for responsive layout and UI components.

- **React Router**:  
  Provides smooth navigation within the application without page reloads, preserving the Redux state.

- **Custom CSS**:  
  Handles the styling of the application, prioritizing a clean and minimalist design.

---

## Reflection

Creating this project was an opportunity to implement and refine my understanding of ReactJS, Redux, and front-end best practices. Each design choice was carefully considered to balance functionality, maintainability, and user experience. The use of reusable components not only simplifies the development process but also makes the application extensible for future enhancements.

Through this project, I gained a deeper appreciation for the importance of file organization, naming conventions, and the trade-offs between using libraries like Bootstrap versus crafting custom solutions. These lessons have also helped me improve my understanding of passing and reusing props, understanding of console.log to debug each step of my processes, destructuring objects, utilizing object notation, and working with more JavaScript functions. Additionally, I gained valuable experience manipulating indexes to re-sort objects, which was essential for implementing key features of the application, such as drag and drop functionality shown in the reminders main component.

I'd like to give a special thanks to David J. Malan from the CS50 Harvard Course for expanding my knowledge and understanding of computer programming. Your passion and easy-to-understand explanations have substantially enhanced my skills in this field.
