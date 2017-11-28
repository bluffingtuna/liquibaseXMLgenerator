# liquibaseXMLgenerator
This Node.Js app will create precondition XML files for liquibase based on SQL scripts.

One of my duty at work was to create XML files for liquibase for ORACLE DB.

Liquibase is an open source database-independent library for tracking, managing and applying database schema changes.

I normally have to create more than 100 different files for every SQL scripts that need to be deployed, and it was very time consuming.

By using Node.Js, I was able to create an application that will generate XML files based on SQL scripts.

To use the application, you need to put the SQL script files into the file directory and simply run the pack batch file.

You are going to see the files generated on your result folder.
