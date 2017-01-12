function doGet(e) {
  // state FIPS codes, names, and abbreviations from http://www.bls.gov/cew/cewedr10.htm
  // indeces of codes, names, and abbreviations are the same accross lists
  
  var stateCode = ['01','02','04','05','06','08','09','10','11','12','13','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31',
                   '32','33','34','35','36','37','38','39','40','41','42','44','45','46','47','48','49','50','51','53','54','55','56','72','78']
  
  var stateLong = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii',
                    'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
                    'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma',
                    'Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
                    'Wisconsin','Wyoming','Puerto Rico','Virgin Islands']
  
  var stateShort = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","IA","ID", "IL","IN","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO",
                    "MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VI","WA","WV","WI","WY","PR","VI"]
  
  // create list of states from parameters passed to web app
  var states = []
  for(var k in e.parameters) {
    states.push(e.parameters[k].toString())
  }
  
  // find fips code of state in same position as its name, abbrev
  // or find fips abbrev of state in same position as code
  var results = {}
  
  // get index from list of state names if param is full name
  for(var s in states) {
    for(var state in stateLong) {
      if(states[s] == stateLong[state]) {
        var stateName = stateLong[state]
        var code = stateLong.indexOf(stateLong[state])
        results[stateName] = stateCode[code]
        }
    }
    
    // get index from list of abbreviations if param is an abbreviation
    for(var state in stateCode) {
      if(states[s] == stateShort[state]) {
        var stateName = stateShort[state]
        var code = stateShort.indexOf(stateShort[state])
        results[stateName] = stateCode[code]
        }
    }
  
    // get index from list of codes if param is a fips code
    for(var state in stateCode) {
      if(states[s] == stateCode[state]) {
        var stateFips = stateCode[state]
        var code = stateCode.indexOf(stateCode[state])
        results[stateFips] = stateShort[code]
        }
    }
  }
  
  // return json object of dictionary mapping each input-output relationship
  // usually {name/abbrev: fips code, ...}
  return ContentService.createTextOutput(JSON.stringify(results))
    .setMimeType(ContentService.MimeType.JSON);
  
}
