# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails create new Uppercase -d postgresql 


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - Read/ recieve
library - url
:id - symbol
book - the database
show - the instance

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

add_column of id of parent model




4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails g model Person shirt:string pants:string shoes:string



5. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

rails g model Uppercase
