//API Doc: https://n15-214-137-h69.arcsight.com/rec/rest-api-docs/#/

const postRequest = (resource, endpoint) => {
    cy.request('POST', endpoint, resource)
}


describe('Scheduled Searches - Endpoint API Test - DEMO', function () {

    // beforeEach(function(){
    //     cy.visit('https://n15-214-137-h69.arcsight.com/')
    //     cy.get('input[name="Ecom_User_ID"]').type('admin@mf.com')
    //     cy.get('input[name="Ecom_Password"]').type('arst@dm1n')
    //     cy.get('button[name="loginButton2"]').click();
    // })

    it('Create a scheduled Search', function () {

        cy.request('POST','test', ss)
        .should(response => { 
           expect(response.status).to.equal(200)
           expect(response.statusText).to.equal('OK')
           expect(response.headers['content-type']).to.include('application/json')
           expect(response.body).to.have.any.keys('id', 'type', 'active', 'name', 'range', 'schedule', 'userId', 'timezone', 'lastChangeDate','createdAt', 'data', 'type', 'start', 'end','occurrences', 'templateSearchId', 'overrideResults', 'dateTimeFormat')
           
           //This can be handled in a custom command.
           //Save the ID for further usage in a fixture file.
           cy.readFile("cypress/fixtures/api-demo/schedule-data.json", (err, data) => {
            if (err) {
                return console.error(err);
            };
            }).then((data) => {
                data.id = response.body["id"] //save the New Value of Unique ID
                cy.writeFile("cypress/fixtures/api-demo/schedule-data.json", JSON.stringify(data)) //Write it to the fixtures file
            })

            //End of the custom command.
           
        })
    })

    it.skip('Update a scheduled Search', ()=>{

        cy.fixture('api-demo/schedule-data').then(data=>{

            cy.request('PUT',`https://test/${data.id}`, ssUpdated)
            .should(response => { 
                expect(response.status).to.equal(200)
                expect(response.statusText).to.equal('OK')
                expect(response.headers['content-type']).to.include('application/json')
                expect(response.body["active"]).to.equal(false)
                expect(response.body["name"]).to.equal('Test1-Changed')
            })

        })

    })

    it('Delete a schheduled search', function(){
        cy.fixture('api-demo/schedule-data').then(data=>{

            cy.request('DELETE',`test/${data.id}`)
            .should(response => { 
                expect(response.status).to.equal(200)
                expect(response.statusText).to.equal('OK')
                expect(response.headers['content-type']).to.include('application/json')
                expect(response.body).to.equal(data.id)
            })

        })
        
    })

})

var ssUpdated = {
        "active": false,
        "createdAt": 1622827461639,
        "data": {
            "dateTimeFormat": "MM/DD/YY HH:mm:ss",
            "overrideResults": false,
            "templateSearch": {
                "datePicker": {
                    "datePickerLabel": "Last 30 minutes",
                    "dynamicEndDateFlag": false,
                    "dynamicStartDateFlag": false,
                    "endDate": 1622819724373,
                    "endDateLabel": "$Now",
                    "startDate": 1622817924373,
                    "startDateLabel": "$Now - 30m",
                    "timeColumnId": "ba7c498e-a413-4753-ac78-ad6340d5170d"
                },
                "eventsTable": "Recon",
                "fieldset": {
                    "fieldIds": [
                        "84832ae6-252f-4986-a79d-cd08ac5f5a87",
                        "c7857bcd-5760-4012-b8ed-80f8d9f9b41e",
                        "a2ca6315-edfd-492f-83e8-bc567003a4c6",
                        "3dc72759-70e1-4467-a1f1-22b5c9021e61",
                        "6e264fc5-3e7b-4653-af0d-747fef4ef5c2",
                        "7d7a79ea-efef-4d71-afef-2f7723d9c66c",
                        "dd0792ed-ae17-4601-8c6b-e6a27e02eeed",
                        "a3fc99c6-5923-4000-922f-475f466819b5",
                        "3e914d34-afd9-4993-9984-b6c73bef5fed",
                        "46ff5163-2f32-431b-bf0a-b1382a75a5ef",
                        "2bde8e9a-9466-409c-83b1-83c6b6cb83f8",
                        "2891bbd4-beba-4b9b-84b4-ade61a59fa96",
                        "369bc4de-b220-41a2-a7be-090c6386aa2e",
                        "3d0a88ed-07b4-439a-92bc-c7808f4e8aa1",
                        "08102da4-f666-4273-a77c-ef7b40a4c5bc",
                        "cdb52b4a-db78-4afe-b8c8-bc6ee9de7b4a",
                        "87518c01-8c50-403e-8092-88c1ff40499a",
                        "db5a9289-1f80-44f2-9ede-42ae2f5e71e8",
                        "eaf9c897-8dfb-4e52-92bc-8cc9e48ed04b",
                        "c8fab72b-145e-4f0d-9cf5-4fa20e11e601",
                        "231db447-465d-460c-b1b8-ed99bd991689"
                    ],
                    "fieldsetId": "eb59353c-4bb5-4f74-8e26-5e03fe9f7bfa",
                    "hiddenFieldIds": [
                        "84832ae6-252f-4986-a79d-cd08ac5f5a87",
                        "6e264fc5-3e7b-4653-af0d-747fef4ef5c2"
                    ],
                    "lastHiddenFieldIds": []
                },
                "grid": {
                    "columnState": {
                        "columnView": []
                    },
                    "expanded": true,
                    "view": "columnView"
                },
                "id": "cac23d15-fb83-4214-b14c-22d152a1869f",
                "name": "Search 1",
                "numberOfSearchResults": 10000,
                "query": "",
                "queryObject": {
                    "joins": [],
                    "query": {},
                    "query2": {},
                    "table": ""
                },
                "seSearch": {},
                "searchExpirationTime": {
                    "type": "days",
                    "value": "1"
                },
                "timeline": {
                    "granularity": 30,
                    "groupBy": "seconds"
                },
                "type": 20
            },
            "templateSearchId": "cac23d15-fb83-4214-b14c-22d152a1869f",
            "timezonePreference": {
                "type": "userBrowserTimeZone",
                "value": null
            }
        },
        "id": "4522518d-d1df-4415-8654-4e169419be31",
        "lastChangeDate": 1622827461639,
        "name": "Test1-changed",
        "range": {
            "end": null,
            "occurrences": null,
            "start": 1622905200000,
            "type": "FOREVER"
        },
        "schedule": "0 0 */5 * * *",
        "scheduleObject": {
            "hourly": {
                "checkBoxvalue": "Every",
                "selectedHour": [],
                "selection": "Every",
                "value": 5
            },
            "minutes": 0,
            "monthly": {
                "dayCounter": "",
                "monthlyHourlyInput": "",
                "value": 1
            },
            "schedulePattern": {
                "selection": "Hourly",
                "time": {
                    "hours": 9,
                    "minutes": 0,
                    "units": "AM"
                }
            },
            "weekly": {
                "daysChecked": [],
                "hourlyType": "hour of day",
                "weeklyHourlyInput": ""
            },
            "yearly": {
                "dayCounter": "",
                "dayOfWeek": "Monday",
                "firstStringSelect": "The day of",
                "month": [],
                "position": "first",
                "value": 1
            }
        },
        "timezone": -6,
        "type": "searchScheduler",
        "updatedAt": 1622827461639,
        "userId": 1
    }

    var ss = {
        "active": true,
        "createdAt": 1622827461639,
        "data": {
            "dateTimeFormat": "MM/DD/YY HH:mm:ss",
            "overrideResults": false,
            "templateSearch": {
                "datePicker": {
                    "datePickerLabel": "Last 30 minutes",
                    "dynamicEndDateFlag": false,
                    "dynamicStartDateFlag": false,
                    "endDate": 1622819724373,
                    "endDateLabel": "$Now",
                    "startDate": 1622817924373,
                    "startDateLabel": "$Now - 30m",
                    "timeColumnId": "ba7c498e-a413-4753-ac78-ad6340d5170d"
                },
                "eventsTable": "Recon",
                "fieldset": {
                    "fieldIds": [
                        "84832ae6-252f-4986-a79d-cd08ac5f5a87",
                        "c7857bcd-5760-4012-b8ed-80f8d9f9b41e",
                        "a2ca6315-edfd-492f-83e8-bc567003a4c6",
                        "3dc72759-70e1-4467-a1f1-22b5c9021e61",
                        "6e264fc5-3e7b-4653-af0d-747fef4ef5c2",
                        "7d7a79ea-efef-4d71-afef-2f7723d9c66c",
                        "dd0792ed-ae17-4601-8c6b-e6a27e02eeed",
                        "a3fc99c6-5923-4000-922f-475f466819b5",
                        "3e914d34-afd9-4993-9984-b6c73bef5fed",
                        "46ff5163-2f32-431b-bf0a-b1382a75a5ef",
                        "2bde8e9a-9466-409c-83b1-83c6b6cb83f8",
                        "2891bbd4-beba-4b9b-84b4-ade61a59fa96",
                        "369bc4de-b220-41a2-a7be-090c6386aa2e",
                        "3d0a88ed-07b4-439a-92bc-c7808f4e8aa1",
                        "08102da4-f666-4273-a77c-ef7b40a4c5bc",
                        "cdb52b4a-db78-4afe-b8c8-bc6ee9de7b4a",
                        "87518c01-8c50-403e-8092-88c1ff40499a",
                        "db5a9289-1f80-44f2-9ede-42ae2f5e71e8",
                        "eaf9c897-8dfb-4e52-92bc-8cc9e48ed04b",
                        "c8fab72b-145e-4f0d-9cf5-4fa20e11e601",
                        "231db447-465d-460c-b1b8-ed99bd991689"
                    ],
                    "fieldsetId": "eb59353c-4bb5-4f74-8e26-5e03fe9f7bfa",
                    "hiddenFieldIds": [
                        "84832ae6-252f-4986-a79d-cd08ac5f5a87",
                        "6e264fc5-3e7b-4653-af0d-747fef4ef5c2"
                    ],
                    "lastHiddenFieldIds": []
                },
                "grid": {
                    "columnState": {
                        "columnView": []
                    },
                    "expanded": true,
                    "view": "columnView"
                },
                "id": "cac23d15-fb83-4214-b14c-22d152a1869f",
                "name": "Search 1",
                "numberOfSearchResults": 10000,
                "query": "",
                "queryObject": {
                    "joins": [],
                    "query": {},
                    "query2": {},
                    "table": ""
                },
                "seSearch": {},
                "searchExpirationTime": {
                    "type": "days",
                    "value": "1"
                },
                "timeline": {
                    "granularity": 30,
                    "groupBy": "seconds"
                },
                "type": 20
            },
            "templateSearchId": "cac23d15-fb83-4214-b14c-22d152a1869f",
            "timezonePreference": {
                "type": "userBrowserTimeZone",
                "value": null
            }
        },
        "id": "4522518d-d1df-4415-8654-4e169419be31",
        "lastChangeDate": 1622827461639,
        "name": "Test1",
        "range": {
            "end": null,
            "occurrences": null,
            "start": 1622905200000,
            "type": "FOREVER"
        },
        "schedule": "0 0 */5 * * *",
        "scheduleObject": {
            "hourly": {
                "checkBoxvalue": "Every",
                "selectedHour": [],
                "selection": "Every",
                "value": 5
            },
            "minutes": 0,
            "monthly": {
                "dayCounter": "",
                "monthlyHourlyInput": "",
                "value": 1
            },
            "schedulePattern": {
                "selection": "Hourly",
                "time": {
                    "hours": 9,
                    "minutes": 0,
                    "units": "AM"
                }
            },
            "weekly": {
                "daysChecked": [],
                "hourlyType": "hour of day",
                "weeklyHourlyInput": ""
            },
            "yearly": {
                "dayCounter": "",
                "dayOfWeek": "Monday",
                "firstStringSelect": "The day of",
                "month": [],
                "position": "first",
                "value": 1
            }
        },
        "timezone": -6,
        "type": "searchScheduler",
        "updatedAt": 1622827461639,
        "userId": 1
    }

    