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
5 CONT Residence place:  Brandon, FL
3 _APID 1,1788::313463519
2 SOUR @S_1733211944@
3 _APID 1,1732::338357638
2 SOUR @S1102909201@
3 PAGE Publication Date: 3/ Oct/ 1986; Publication Place: Woodstock, Illinois, USA; URL: https://www.newspapers.com/image/191725961/?article=df94286f-f1c8-4aa1-9e23-5fb35d364917/56b11cd6-5813-42d4-990b-08356955aac2&focus=0.034732178,0.07127388,0.59806776,
4 CONC 0.257477
3 _APID 1,62116::330162781
2 SOUR @S1102909320@
3 _APID 1,62209::290469381
1 NAME Mike /Vonbehren/
2 GIVN Mike
2 SURN Vonbehren
2 SOUR @S1090315114@
3 PAGE City: Grayslake; State: Illinois; Year(s): 1997
3 _APID 1,7339::207372305
1 SEX M
1 FAMC @F11@
1 FAMS @F60@
1 BIRT
2 DATE 12/13/1964
2 PLAC Groton, New London, Connecticut, USA
2 SOUR @S_1733212834@
3 DATA
4 TEXT Birth date:  13 Dec 1964
5 CONT Birth place:  
5 CONT Residence date:  1996
5 CONT Residence place:  Brandon, FL
3 _APID 1,1788::313463519
2 SOUR @S_1733211944@
3 _APID 1,1732::338357638
2 SOUR @S1102909320@
3 _APID 1,62209::290469381
1 EVEN
2 TYPE Marriage announcement
2 DATE 3 Oct 1986
2 PLAC Woodstock, Illinois
2 SOUR @S1102909119@
3 PAGE  3 
3 OBJE @O11@
2 OBJE @O11@
1 RESI
2 DATE 1992-1996
2 PLAC Grayslake, Illinois, USA
2 SOUR @S1102909320@
3 _APID 1,62209::290469381
1 RESI
2 DATE 1996-2020
2 PLAC Brandon, FL
2 SOUR @S_1733212834@
3 DATA
4 TEXT Birth date:  13 Dec 1964
5 CONT Birth place:  
5 CONT Residence date:  1996
5 CONT Residence place:  Brandon, FL
3 _APID 1,1788::313463519
2 SOUR @S1102909320@
3 _APID 1,62209::290469381
1 RESI
2 DATE 1997
2 PLAC Grayslake, Illinois, USA
2 SOUR @S1090315114@
3 PAGE City: Grayslake; State: Illinois; Year(s): 1997
3 _APID 1,7339::207372305
1 RESI
2 PLAC Brandon, Florida, USA
2 SOUR @S_1733211944@
3 _APID 1,1732::338357638
1 RESI
2 PLAC Ingle-Side
2 SOUR @S1102909201@
3 PAGE Publication Date: 3/ Oct/ 1986; Publication Place: Woodstock, Illinois, USA; URL: https://www.newspapers.com/image/191725961/?article=df94286f-f1c8-4aa1-9e23-5fb35d364917/56b11cd6-5813-42d4-990b-08356955aac2&focus=0.034732178,0.07127388,0.59806776,
4 CONC 0.257477
3 _APID 1,62116::330162781
1 SOUR @S1102909119@
2 PAGE  3 Oct 1986
2 DATA
3 NOTE https://www.newspapers.com/clip/67867426/northwest-herald/?xid=637
2 OBJE @O64@
1 OBJE @O11@
0 @I_1884986968@ INDI
1 NAME Erwin Henry /VON BEHREN/
2 GIVN Erwin Henry
2 SURN VON BEHREN
2 SOUR @S_1793831411@
3 DATA
4 TEXT Birth date:  abt 1940
5 CONT Birth place:  
5 CONT Residence date:  1956
5 CONT Residence place:  Saint Louis, Missouri
3 _APID 1,1265::61313176
2 SOUR @S_1793831411@
3 DATA
4 TEXT Birth date:  abt 1936
5 CONT Birth place:  
5 CONT Residence date:  1956
5 CONT Residence place:  St Louis, Missouri
3 _APID 1,1265::86943745
2 SOUR @S_1794955964@
3 DATA
4 TEXT Residence date:  1959
5 CONT Residence place:  Waukegan, Illinois, USA
3 _APID 1,2469::364932723
2 SOUR @S_1733212834@
3 DATA
4 TEXT Birth date:  19 Aug 1940
5 CONT Birth place:  
5 CONT Residence date:  1993
5 CONT Residence place:  Ingleside, IL
3 _APID 1,1788::401653521
2 SOUR @S1090315114@
3 PAGE City: Ingleside; State: Illinois; Year(s): 1993
3 _APID 1,7339::284490756
2 SOUR @S_1793831411@
3 PAGE "U.S., School Yearbooks, 1880-2012"; School Name: Cleveland High School; Year: 1956
3 _APID 1,1265::802790707
1 SEX M
1 FAMC @F1@
1 FAMS @F11@
1 BIRT
2 DATE 19 AUG 1940
2 PLAC St. Louis, Missouri
2 SOUR @S_1793831411@
3 DATA
4 TEXT Birth date:  abt 1940
5 CONT Birth place:  
5 CONT Residence date:  1956
5 CONT Residence place:  Saint Louis, Missouri
3 _APID 1,1265::61313176
2 SOUR @S_1793831411@
3 DATA
4 TEXT Birth date:  abt 1936
5 CONT Birth place:  
5 CONT Residence date:  1956
5 CONT Residence place:  St Louis, Missouri
3 _APID 1,1265::86943745
2 SOUR @S_1733212834@
3 DATA
4 TEXT Birth date:  19 Aug 1940
5 CONT Birth place:  
5 CONT Residence date:  1993
5 CONT Residence place:  Ingleside, IL
3 _APID 1,1788::401653521
2 SOUR @S_1793831411@
3 PAGE "U.S., School Yearbooks, 1880-2012"; School Name: Cleveland High School; Year: 1956
3 _APID 1,1265::802790707
1 RESI
2 DATE 1956
2 PLAC Saint Louis, Missouri
2 SOUR @S_1793831411@
3 DATA
4 TEXT Birth date:  abt 1940
5 CONT Birth place:  
5 CONT Residence date:  1956
5 CONT Residence place:  Saint Louis, Missouri
3 _APID 1,1265::61313176
1 RESI
2 DATE 1956
2 PLAC St Louis, Missouri
2 SOUR @S_1793831411@
3 DATA
4 TEXT Birth date:  abt 1936
5 CONT Birth place:  
5 CONT Residence date:  1956
5 CONT Residence place:  St Louis, Missouri
3 _APID 1,1265::86943745
2 SOUR @S_1793831411@
3 PAGE "U.S., School Yearbooks, 1880-2012"; School Name: Cleveland High School; Year: 1956
3 _APID 1,1265::802790707
1 RESI
2 DATE 1959
2 PLAC Waukegan, Illinois, USA
2 SOUR @S_1794955964@
3 DATA
4 TEXT Residence date:  1959
5 CONT Residence place:  Waukegan, Illinois, USA
3 _APID 1,2469::364932723
1 RESI
2 DATE 1993
2 PLAC Ingleside, IL
2 SOUR @S_1733212834@
3 DATA
4 TEXT Birth date:  19 Aug 1940
5 CONT Birth place:  
5 CONT Residence date:  1993
5 CONT Residence place:  Ingleside, IL
3 _APID 1,1788::401653521
2 SOUR @S1090315114@
3 PAGE City: Ingleside; State: Illinois; Year(s): 1993
3 _APID 1,7339::284490756
1 UID E1B09BAF3BABFA41B1591A7E5B7AA4E0F7F2
1 OBJE @O5@
2 _PRIM Y
2 _CROP
3 _LEFT 227
3 _TOP 224
3 _WDTH 1520
3 _HGHT 897
3 _TYPE primary
0 @I_1884986966@ INDI
1 NAME George Edward /Traxel/
2 GIVN George Edward
2 SURN Traxel
2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT birth date:  13 NOV 1911
5 CONT birth place:  Missouri
3 _APID 1,6061::58309277
2 SOUR @S_1794955964@
3 PAGE U.S. City Directories, 1821-1989 (Beta)
3 DATA
4 TEXT residence date:  1943
5 CONT residence place:  St Louis, Missouri, USA
3 _APID 1,2469::537144283
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 13/ Apr/ 1952; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140077736/?article=91926f04-42e0-498d-8ae1-bea6e7abdd75&focus=0.23261568,0.30236813,0.
4 CONC 3347283,
3 _APID 1,61843::62145163
2 SOUR @S1090315102@
3 PAGE The National Archives in St. Louis, Missouri; St. Louis, Missouri; WWII Draft Registration Cards for Missouri, 10/16/1940-03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 329
3 _APID 1,2238::15675919
2 SOUR @S1098250046@
3 _APID 1,2441::3832736
2 SOUR @S1084083971@
3 _APID 1,60525::85994791
2 SOUR @S1084083263@
3 _APID 1,60901::634998543
2 SOUR @S_1733212834@
3 _APID 1,1788::169465184
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 30/ Sep/ 1984; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140849250/?article=184c3853-2c19-452d-b643-a23785db073c&focus=0.87308854,0.2579865,0.9
4 CONC 766887,0
3 _APID 1,61843::581939954
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488757
2 SOUR @S1104841883@
3 PAGE National Archives at College Park; College Park, Maryland, United States; Muster Rolls of U.S. Navy Ships, Stations, and Other Naval Activities, 01/01/1939 - 01/01/1949; Record Group: 24, Records of the Bureau of Naval Personnel, 1798 - 2007; Serie
4 CONC s ARC ID
3 _APID 1,1143::37376984
1 NAME George Edward /Traxel/
2 GIVN George Edward
2 SURN Traxel
2 SOUR @S_2117281209@
3 PAGE Number: 495-14-9674; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Name:  George Traxel
5 CONT Birth Date:  13 Nov 1911
5 CONT Birth Place:  
5 CONT Death Date:  Sep 1984
5 CONT Death Place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::63126191
2 SOUR @S_2128957019@
3 DATA
4 TEXT Birth date:  13 Nov 1911
5 CONT Birth place:  
5 CONT Marriage date:  15 Jun 1949
5 CONT Marriage place:  St Andrew, St Louis, Missouri
3 _APID 1,1171::1988352
1 SEX M
1 FAMC @F18@
1 FAMS @F14@
1 FAMS @F15@
1 BIRT
2 DATE 13 NOV 1911
2 PLAC Missouri
2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT birth date:  13 NOV 1911
5 CONT birth place:  Missouri
3 _APID 1,6061::58309277
2 SOUR @S1090315102@
3 PAGE The National Archives in St. Louis, Missouri; St. Louis, Missouri; WWII Draft Registration Cards for Missouri, 10/16/1940-03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 329
3 _APID 1,2238::15675919
2 SOUR @S1098250046@
3 _APID 1,2441::3832736
2 SOUR @S1084083971@
3 _APID 1,60525::85994791
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488757
1 BIRT
2 DATE 13 NOV 1911
2 SOUR @S_2117281209@
3 PAGE Number: 495-14-9674; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Name:  George Traxel
5 CONT Birth Date:  13 Nov 1911
5 CONT Birth Place:  
5 CONT Death Date:  Sep 1984
5 CONT Death Place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::63126191
2 SOUR @S_2128957019@
3 DATA
4 TEXT Birth date:  13 Nov 1911
5 CONT Birth place:  
5 CONT Marriage date:  15 Jun 1949
5 CONT Marriage place:  St Andrew, St Louis, Missouri
3 _APID 1,1171::1988352
1 EVEN
2 TYPE George Traxel Birth Announcement
2 DATE 21 Nov 1911
2 PLAC St. Louis, Missouri
2 SOUR @S1098252787@
3 PAGE George Traxel Birth Announcement 21 
3 OBJE @O49@
2 OBJE @O49@
1 EVEN
2 TYPE George Traxel injury
2 DATE 17 Dec 1916
2 PLAC St. Louis, Missouri
2 SOUR @S1098252921@
3 PAGE George Traxel injury 17 
3 OBJE @O43@
2 OBJE @O43@
1 RESI
2 DATE 1920
2 PLAC St Louis Ward 13, St Louis (Independent City), Missouri
2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT birth date:  13 NOV 1911
5 CONT birth place:  Missouri
3 _APID 1,6061::58309277
1 RESI
2 DATE 1935
2 PLAC St Louis, Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488757
1 RESI Relation to Head: Self; Relative Relation to Head: Wife
2 DATE 1940
2 PLAC Lemay, St Louis, Missouri, USA
2 SOUR @S1090315102@
3 PAGE The National Archives in St. Louis, Missouri; St. Louis, Missouri; WWII Draft Registration Cards for Missouri, 10/16/1940-03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 329
3 _APID 1,2238::15675919
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488757
1 RESI
2 DATE 1943
2 PLAC St Louis, Missouri, USA
2 SOUR @S_1794955964@
3 PAGE U.S. City Directories, 1821-1989 (Beta)
3 DATA
4 TEXT residence date:  1943
5 CONT residence place:  St Louis, Missouri, USA
3 _APID 1,2469::537144283
1 _MILT
2 DATE 24 Apr 1944
2 SOUR @S1098250046@
3 _APID 1,2441::3832736
2 SOUR @S1104841883@
3 PAGE National Archives at College Park; College Park, Maryland, United States; Muster Rolls of U.S. Navy Ships, Stations, and Other Naval Activities, 01/01/1939 - 01/01/1949; Record Group: 24, Records of the Bureau of Naval Personnel, 1798 - 2007; Serie
4 CONC s ARC ID
3 _APID 1,1143::37376984
1 EVEN
2 TYPE George Traxel Obituary
2 DATE 30 Sep 1984
2 PLAC St. Louis, Missouri
2 SOUR @S1098250167@
3 PAGE George Traxel Obituary 30 
3 OBJE @O79@
2 OBJE @O79@
1 RESI
2 DATE 1988
2 PLAC Lutesville, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::169465184
1 RESI
2 PLAC Saint Louis, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::169465184
1 RESI
2 PLAC St Louis, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::169465184
1 _WLNK https://www.ancestry.com/imageviewer/collections/62308/images/43290879-Missouri-151408-0026
2 TITL 1950%20United%20States%20Federal%20Census%20for%20George%20Edwar
1 DEAT
2 DATE 26 SEP 1984
2 PLAC St Louis, St Louis, Missouri, United States
2 SOUR @S_2117281209@
3 PAGE Number: 495-14-9674; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Name:  George Traxel
5 CONT Birth Date:  13 Nov 1911
5 CONT Birth Place:  
5 CONT Death Date:  Sep 1984
5 CONT Death Place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::63126191
2 SOUR @S1098250046@
3 _APID 1,2441::3832736
2 SOUR @S1084083971@
3 _APID 1,60525::85994791
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 30/ Sep/ 1984; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140849250/?article=184c3853-2c19-452d-b643-a23785db073c&focus=0.87308854,0.2579865,0.9
4 CONC 766887,0
3 _APID 1,61843::581939954
1 BURI
2 PLAC Lakewood Park Cemetary
2 SOUR @S1084083971@
3 _APID 1,60525::85994791
1 UID 07179964DC64964BB1B50E9402B3666CCB62
1 SOUR @S_2117281160@
1 SOUR @S_2128957019@
2 DATA
3 TEXT Birth date:  9 Sep 1911
4 CONT Birth place:  
4 CONT Marriage date:  15 Jun 1949
4 CONT Marriage place:  St Andrew, St Louis, Missouri</line><line />
3 NOTE http://search.ancestry.com/cgi-bin/sse.dll?db=momarriages&h=501988352&ti=0&indiv=try&gss=pt
2 _APID 1,1171::501988352
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
1 OBJE @O43@
1 OBJE @O49@
1 OBJE @O79@

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
    - Tag: SURN
      Property: Surname
  - Tag: BIRT
    Property: Birth
    Properties:
    - Tag: DATE
      Property: birthdate
    - Tag: PLAC
      Property: birthplace
  - Tag: DEAT
    Property: death
    Properties:
    - Tag: DATE
      Property: date
  - Tag: BURI
    Property: burial
    Properties:
    - Tag: PLAC
      Property: burial
...
`);

let parse = new JsonParsing(parsingOptions);

parse.ParseTextAsync().then(result => parse.SaveAs(result.Object, "testing.json")).catch(e => console.error(e));



