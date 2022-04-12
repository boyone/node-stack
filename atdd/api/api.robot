*** Settings ***
Library    RequestsLibrary

*** Test Cases ***
Greeting Api Should Response Hello
    ${response}=    Get     url=https://localhost/api/greeting    verify=${False}
    Should Be Equal As Strings    Hello    ${response.json()}[message]