# fips-lookup
Convert from state names and abbreviations to FIPS codes

# Summary
Web app that converts from state names and abbreviations to FIPS codes. The purpose of this app is to allow users to programatically convert batches of state names and abbrevations to FIPS codes on any programming language or device. Modules to do these conversions exist in various languages, but this app is cross-functional and doesn't increase the number of dependencies. For instance, you can GET request a list of state names recieved from user inputs, and convert them to FIPS codes to query Census data on locations specified by the user.

# Instructions
Add query parameters for any number of states to `'https://script.google.com/macros/s/AKfycbxYuzwcZe6pmlx-fBCeThSbufUvmxeScFy7B4Thf0n34ozIcNk/exec?'`.

For example:

`'https://script.google.com/macros/s/AKfycbxYuzwcZe6pmlx-fBCeThSbufUvmxeScFy7B4Thf0n34ozIcNk/exec?'name=Alaska`
`'https://script.google.com/macros/s/AKfycbxYuzwcZe6pmlx-fBCeThSbufUvmxeScFy7B4Thf0n34ozIcNk/exec?'abbr=AK`

both return the FIPS code for Alaska. All responses can be read as JSON objects. The query above returns: `{"AK":"02"}`

You can string together as many parameters as you want. For instance:

`'https://script.google.com/macros/s/AKfycbxYuzwcZe6pmlx-fBCeThSbufUvmxeScFy7B4Thf0n34ozIcNk/exec?'name=Alaska&abbr=CA`

returns: `{"CA":"06","Alaska":"02"}`

[This Gist](https://gist.github.com/soyrice/281d9602c93a98bda3a60c512fcd054e) finds all the state names and abbreveations in a list of inputs, queries all the states in the list with requests module in Python, and parses the response from the app.




