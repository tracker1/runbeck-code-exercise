# runbeck-code-exercise
csv parse

Requires Node 10.4+

-----

## Runbeck Code Exercise

Write an application (a Console Application is fine) to process a delimited text file. The file will have a header row, then one row per record. The records may be comma-separated or tab-separated. An example file’s contents could be:

First Name,Middle Name,Last Name
Jane,Taylor,Doe
Chris,Lee
Jose,,Morro


The application should ask the user 3 questions:

* Where is the file located?
* Is the file format CSV (comma-separated values) or TSV (tab-separated values)?
* How many fields should each record contain?

The application should then produce two output files. One file will contain the records (if any) with the correct number of fields. The second will contain the records (if any) with the incorrect number of fields. Neither file should contain the header row. If there are no records for a given output file, do not create the file. 

Based on the above sample input, if the user specified a CSV file with 3 fields per record, the following files would be created:

Correctly formatted records:

    Jane,Taylor,Doe
    Jose,,Morro

 

Incorrectly formatted records:

    Chris,Lee

## USAGE:

### Interview Mode

    npm start


### Arguments

    npm start -- --i test/data/input.csv --f csv --count 3

    --input, -i - path to the input file
    --format, -f - "csv" or "tsv"
    --count, -c - expected number of fields
