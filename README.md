# CS3200Movies-Series

Name of the project: WikiMovie

Team members and the section they belong to: Anika Das - Section 3, Mirah Gordon - Section 3, Swasti Dadhich - Section 3, Emily Gringorten - Section 4 

Brief description of the project : An application to learn/view information about a movie series, including its individual movies, actors, etc. Users can make an account to view this information and also choose a series that is their favorite to be linked to. 

Link to UML: [UML Diagram](https://github.com/swastidadhich/CS3200Movies-Series/blob/6c5e5499cb1ab3b876e714b5b449b60ba31f3983/db_design_final_project_UML.pdf)

Description of user data model: A data model to represent a user with specific parameters. A user has a unique user id, first name, last name, username, password, email, date of birth, and favorite series. 

Description of the two domain object data models: Our two domain object data models are a cast and a movie. A series can have multiple movies but only one cast. 

Description of the user to domain object relationship: A user can choose a series that is their favorite this is represented through a foreign key to series in user.

Description of the domain object to domain object relationship: A cast can have multiple actors, but each actor can only be assigned to one cast.
 
Description of the portable enumeration(s): A movies genre can be one of "horror, comedy, drama, sci-fi, romance".

Description of the user interface requirements: 
