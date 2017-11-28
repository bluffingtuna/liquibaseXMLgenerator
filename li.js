var fs = require("fs");
// parsedDT= JSON.parse(filelist)

fs.readdir('./file', (err, files) => {
    files.forEach(file => {
        // console.log(typeof file);
        const idname = file.slice(0, 10)
        const filename = file.slice(0, 15)
        const stream = fs.createWriteStream(`./result/` + filename + `.xml`)
        fs.readFile(`./file/${file}`, "utf8", function(error, data) {
        	
            data = data.split("=-=")

            stream.write(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"\n
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n
		xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"\n
		xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd\n
	http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">\n`, 'ascii')

            for (var i = 0; i < data.length; i++) {
                stream.write(`<changeSet author="Kevin" id="SPRINT_48.${idname}.${i+1}0">\n
									<preConditions  onFail="MARK_RAN">\n
										<sqlCheck expectedResult="0">\n
											
										</sqlCheck>\n
									</preConditions>\n
									<comment>\n
										${idname}
									</comment>\n
									<sql>\n
										${data[i]}
									</sql>\n
								</changeSet>\n
								`, 'ascii')
            }

            stream.write(`</databaseChangeLog>`, 'ascii')
            console.log("your xml file " + filename + " has been created")
        })
    })
})

// for (var i = 0; i < parsedDT.length; i++) {
// 	console.log(parsedDT[i])
//     const stream = fs.createWriteStream(`${parsedDT[i]}`.xml)
//     console.log(parsedDT[i])
//     fs.readFile(parsedDT[i], "utf8", function(error, data) {
//         data = data.split("=-=")
//         idname = parsedDT[i]
//         stream.write(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
// <databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
// 		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
// 		xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
// 		xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd
// 	http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">`)

//         for (var i = 0; i < data.length; i++) {
//             stream.write(`<changeSet author="Kevin" id="SPRINT_48.${idname}.${i+1}0">
// 									<preConditions  onFail="MARK_RAN">
// 										<sqlCheck expectedResult="0">

// 										</sqlCheck>
// 									</preConditions>
// 									<comment>
// 										${idname}
// 									</comment>
// 									<sql>
// 										${data[i]}
// 									</sql>
// 								</changeSet>
// 								`)
//         }
//         stream.write(`</databaseChangeLog>`)
//         console.log("your xml file " + filelist[i] + " has been created")

//     })
// }

// fs.readFile(process.argv[2], "utf8", function(error, data) {

//     // We will then print the contents of data
//     // console.log(data)


//     data = data.split("=-=")
//     idname = process.argv[3].slice(0, -4)
//         // var json=JSON.stringify(data)
//         // parsedData=JSON.parse(json)
//         // console.log(JSON.parse(parsedData))
//     stream.write(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
// <databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
// 		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
// 		xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
// 		xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd
// 	http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">`)


//     for (var i = 0; i < data.length; i++) {
//         stream.write(`<changeSet author="Kevin" id="SPRINT_48.${idname}.${i+1}0">
// 									<preConditions  onFail="MARK_RAN">
// 										<sqlCheck expectedResult="0">

// 										</sqlCheck>
// 									</preConditions>
// 									<comment>
// 										${idname}
// 									</comment>
// 									<sql>
// 										${data[i]}
// 									</sql>
// 								</changeSet>
// 								`)
//     }
//     stream.write(`</databaseChangeLog>`)
//     console.log("your xml file "+process.argv[3]+" has been created")
// });
