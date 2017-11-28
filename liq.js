
const fs = require("fs");
const stream = fs.createWriteStream(process.argv[3])



fs.readFile(process.argv[2], "utf8", function(error, data) {

    // We will then print the contents of data
    // console.log(data)
    

    data = data.split("=-=")
    idname = process.argv[3].slice(0, -4)
        // var json=JSON.stringify(data)
        // parsedData=JSON.parse(json)
        // console.log(JSON.parse(parsedData))
    stream.write(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
		xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd
	http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">`)


    for (var i = 0; i < data.length; i++) {
        stream.write(`<changeSet author="Kevin" id="SPRINT_48.${idname}.${i+1}0">
									<preConditions  onFail="MARK_RAN">
										<sqlCheck expectedResult="0">
											
										</sqlCheck>
									</preConditions>
									<comment>
										${idname}
									</comment>
									<sql>
										${data[i]}
									</sql>
								</changeSet>
								`)
    }

    stream.write(`</databaseChangeLog>`)
    
    console.log("your xml file "+process.argv[3]+" has been created")
});
