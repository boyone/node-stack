*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
First Page Should Show Hello, boyone
    Open Browser    url=https://localhost     browser=gc    options=add_argument("--ignore-certificate-errors")
    Element Should Contain    id=message    Hello, boyone
    Close Browser