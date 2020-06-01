# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: model view controller. Another version of the CRUD path

  Researched answer:
- Models for handling data and business logic
- Controllers for handling the user interface and application
- Views for handling graphical user interface objects and presentation



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: Create Read Update Delete, It means it has manageable database and an interactive site

  Researched answer:
- CREATE procedures: Performs the INSERT statement to create a new record.
- READ procedures: Reads the table records based on the primary keynoted within the input parameter.
- UPDATE procedures: Executes an UPDATE statement on the table based on the specified primary key for a record within the WHERE clause of the statement.
- DELETE procedures: Deletes a specified row in the WHERE clause.



3. What is a migration? Why would you use one?

  Your answer: is an update to the model

  Researched answer: Migrations are a convenient way to alter your database schema over time in a consistent way. They use a Ruby DSL so that you don't have to write SQL by hand, allowing your schema and changes to be database independent. You can think of each migration as being a new 'version' of the database. -rubyonrails.com



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: A person has_many computers and a computer belongs_to a person. The computers would have the id of the person they belong too.

  Researched answer:the child and parent table may, in fact, be the same table, i.e. the foreign key refers back to the same table. Such a foreign key is known in SQL:2003 as a self-referencing or recursive foreign key. In database management systems, this is often accomplished by linking a first and second reference to the same table.

A table may have multiple foreign keys, and each foreign key can have a different parent table. Each foreign key is enforced independently by the database system. Therefore, cascading relationships between tables can be established using foreign keys.
-good ole' wikipedia


5. What is object-relational mapping?

  Your answer:  idk

  Researched answer:The heart of the problem involves translating the logical representation of the objects into an atomized form that is capable of being stored in the database while preserving the properties of the objects and their relationships so that they can be reloaded as objects when needed. If this storage and retrieval functionality is implemented, the objects are said to be persistent.

  again wikipedia-- also I get it more now



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes -- A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.
- JSON JavaScript Object Notation (JSON, pronounced /ˈdʒeɪsən/; also /ˈdʒeɪˌsɒn/[note 1]) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as a replacement for XML in AJAX systems.[6]
- API An application programming interface (API) is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. It can also provide extension mechanisms so that users can extend existing functionality in various ways and to varying degrees.
- Endpoints A SQL Server endpoint is the point of entry into SQL Server. It is implemented as a database object that defines the ways and means in which SQL Server may communicate over the network. SQL Server routes all interactions with the network via endpoints and each endpoint supports a specific type of communication.Jul 6, 2007
- Strong params Search Results
Featured snippet from the web
Strong Parameters. It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.
