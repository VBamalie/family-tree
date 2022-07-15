import { JsonParsing, ParsingOptions } from "gedcom.json";


let parsingOptions = new ParsingOptions();

// parsingOptions.SetFilePath("/Users/amalievonbehren/Documents/family-tree/vonBehren.ged");
// parsingOptions.SetConfigFile("./test.yaml");

parsingOptions.SetText(`
0 @I6862819516@ INDI
1 NAME Michael /VON BEHREN/
2 GIVN Michael
2 SURN VON BEHREN
2 SOUR @S_1733212834@
3 DATA
4 TEXT Birth date:  13 Dec 1964
5 CONT Birth place:  
5 CONT Residence date:  1996
5 CONT Residence place:  Brandon, FL</line><line />
0 @I_1884986968@ INDI
1 NAME Erwin Henry /VON BEHREN/
2 GIVN Erwin Henry
2 SURN VON BEHREN
2 SOUR @S_1793831411@
3 DATA
4 TEXT Birth date:  abt 1940
5 CONT Birth place:  
5 CONT Residence date:  1956
5 CONT Residence place:  Saint Louis, Missouri</line><line />
`);

parsingOptions.SetConfig(`
---
Definition:
- Tag: INDI
  CollectAs: Individuals
  CollectAsArray: true
  Property: Id
  Properties:
  - Tag: NAME
    Property: Fullname
    Properties:
    - Tag: GIVN
      Property: Givenname
      MergeWithLast: INDI
    - Tag: SURN
      Property: Surname
      MergeWithLast: INDI12
...
`);

let parse = new JsonParsing(parsingOptions);

parse.ParseTextAsync().then(result => parse.SaveAs(result.Object, "test.json")).catch(e => console.error(e));



