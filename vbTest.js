import { JsonParsing, ParsingOptions } from "gedcom.json";


let parsingOptions = new ParsingOptions();

parsingOptions.SetText(`
0 HEAD
1 SUBM @SUBM1@
1 SOUR Ancestry.com Family Trees
2 NAME Ancestry.com Member Trees
2 VERS 2022.06
2 _TREE Von Behren/ Traxel Tree
3 RIN 1865397
3 NOTE Mike's tree
3 _ENV prd
2 CORP Ancestry.com
3 PHON 801-705-7000
3 WWW www.ancestry.com
3 ADDR 1300 West Traverse Parkway
4 CONT Lehi, UT  84043
4 CONT USA
1 DATE 14 Jul 2022
2 TIME 14:15:06
1 GEDC
2 VERS 5.5.1
2 FORM LINEAGE-LINKED
1 CHAR UTF-8
0 @SUBM1@ SUBM
1 NAME Ancestry.com Member Trees Submitter
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
0 @I_1884986967@ INDI
1 NAME Georgia Elzona /Traxel/
2 GIVN Georgia Elzona
2 SURN Traxel
2 SOUR @S_1793831411@
3 PAGE "U.S., School Yearbooks, 1880-2012"; School Name: Hancock Place High School; Year: 1958
3 _APID 1,1265::695985329
2 SOUR @S_1794955964@
3 _APID 1,2469::364932724
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 30/ Sep/ 1984; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140849250/?article=184c3853-2c19-452d-b643-a23785db073c&focus=0.87308854,0.2579865,0.9
4 CONC 766887,0
3 _APID 1,61843::274652453
1 SEX F
2 SOUR @S_1794955964@
3 _APID 1,2469::364932724
1 FAMC @F14@
1 FAMS @F11@
1 BIRT
2 DATE 16 AUG 1942
2 PLAC St. Louis, Missouri
2 SOUR @S_1793831411@
3 PAGE "U.S., School Yearbooks, 1880-2012"; School Name: Hancock Place High School; Year: 1958
3 _APID 1,1265::695985329
1 EVEN
2 TYPE Georgia Traxel Birth Announcement
2 DATE 26 Aug 1942
2 PLAC St. Louis, Missouri
2 SOUR @S1098253104@
3 PAGE Georgia Traxel Birth Announcement 26 
3 OBJE @O47@
2 OBJE @O47@
1 RESI
2 DATE 1958
2 PLAC St Louis, Missouri, USA
2 SOUR @S_1793831411@
3 PAGE "U.S., School Yearbooks, 1880-2012"; School Name: Hancock Place High School; Year: 1958
3 _APID 1,1265::695985329
1 RESI
2 DATE 1959
2 PLAC Waukegan, Illinois, USA
2 SOUR @S_1794955964@
3 _APID 1,2469::364932724
1 UID C8474B6324C90F4188DDD6387B61833A06B2
1 OBJE @O47@
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
0 @I_1884986965@ INDI
1 NAME Lucille Mary /Bujnak-NOBLOT/
2 GIVN Lucille Mary
2 SURN Bujnak-NOBLOT
2 SOUR @S_1794955964@
3 DATA
4 TEXT Residence date:  1943
5 CONT Residence place:  St Louis, Missouri, USA
3 _APID 1,2469::537144284
2 SOUR @S_1792293045@
3 DATA
4 TEXT Marriage date:  22 Apr 1950
5 CONT Marriage place:  Arkansas, United States
5 CONT Residence date:  
5 CONT Residence place:  Lemay, Missouri
3 _APID 1,2548::3960082
2 SOUR @S_2117281209@
3 PAGE Social Security Death Index
3 DATA
4 TEXT death date:  22 JUL 1992
5 CONT death place:  St. Louis, Missouri
5 CONT birth date:  9 SEP 1911
5 CONT birth place:  St. Louis, Missouri
3 _APID 1,3693::8642850
2 SOUR @S_1794955964@
3 _APID 1,2469::626741168
2 SOUR @S1090315102@
3 PAGE The National Archives in St. Louis, Missouri; St. Louis, Missouri; WWII Draft Registration Cards for Missouri, 10/16/1940-03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 329
3 _APID 1,2238::105675919
2 SOUR @S1084083263@
3 _APID 1,60901::784998543
2 SOUR @S1098250942@
3 PAGE St Louis Public Library; St Louis, Missouri
3 _APID 1,9197::159371
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488760
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T625_951; Page: 9A; Enumeration District: 263
3 _APID 1,6061::58326405
1 NAME Lucille Mary /Bujnak-NOBLOT/
2 GIVN Lucille Mary
2 SURN Bujnak-NOBLOT
2 SOUR @S_2128957019@
3 DATA
4 TEXT Birth date:  9 Sep 1911
5 CONT Birth place:  St Andrew, St Louis, Missouri
5 CONT Marriage date:  15 Jun 1949
5 CONT Marriage place:  St Louis
3 _APID 1,1171::501988352
2 SOUR @S_1794955984@
3 DATA
4 TEXT Death date:  1992
5 CONT Death place:  
3 _APID 1,70465::368705
2 SOUR @S_1794955964@
3 DATA
4 TEXT Residence date:  1943
5 CONT Residence place:  St Louis, Missouri, USA
3 _APID 1,2469::537144284
1 NAME Lucille M /Byington/
2 GIVN Lucille M
2 SURN Byington
2 SOUR @S1084083971@
3 _APID 1,60525::6467918
1 SEX F
2 SOUR @S1084083263@
3 _APID 1,60901::784998543
1 FAMC @F5@
1 FAMS @F14@
1 BIRT
2 DATE 9 SEP 1911
2 PLAC St. Louis, Missouri
2 SOUR @S_2117281209@
3 PAGE Social Security Death Index
3 DATA
4 TEXT death date:  22 JUL 1992
5 CONT death place:  St. Louis, Missouri
5 CONT birth date:  9 SEP 1911
5 CONT birth place:  St. Louis, Missouri
3 _APID 1,3693::8642850
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488760
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T625_951; Page: 9A; Enumeration District: 263
3 _APID 1,6061::58326405
1 BIRT
2 DATE 9 SEP 1911
2 PLAC St. Louis, Missouri
2 SOUR @S_2128957019@
3 DATA
4 TEXT Birth date:  9 Sep 1911
5 CONT Birth place:  St Andrew, St Louis, Missouri
5 CONT Marriage date:  15 Jun 1949
5 CONT Marriage place:  St Louis
3 _APID 1,1171::501988352
1 CHR
2 DATE 1 OCT 1911
2 PLAC Holy Trin Slovak Church St. Louis, Mo.
1 RESI Marital Status: Single; Relation to Head: Niece
2 DATE 1920
2 PLAC St Louis Ward 13, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T625_951; Page: 9A; Enumeration District: 263
3 _APID 1,6061::58326405
1 RESI
2 DATE 1931
2 PLAC St Louis, Missouri, USA
2 SOUR @S_1794955964@
3 _APID 1,2469::626741168
1 RESI
2 DATE 1935
2 PLAC St Louis, Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488760
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1940
2 PLAC Lemay, St Louis, Missouri, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488760
1 RESI
2 DATE 1943
2 PLAC St Louis, Missouri, USA
2 SOUR @S_1794955964@
3 DATA
4 TEXT Residence date:  1943
5 CONT Residence place:  St Louis, Missouri, USA
3 _APID 1,2469::537144284
1 RESI
2 PLAC Lemay, Missouri
2 SOUR @S_1792293045@
3 DATA
4 TEXT Marriage date:  22 Apr 1950
5 CONT Marriage place:  Arkansas, United States
5 CONT Residence date:  
5 CONT Residence place:  Lemay, Missouri
3 _APID 1,2548::3960082
1 DEAT
2 DATE 22 JUL 1992
2 PLAC St. Louis, Missouri
2 SOUR @S_2117281209@
3 PAGE Social Security Death Index
3 DATA
4 TEXT death date:  22 JUL 1992
5 CONT death place:  St. Louis, Missouri
5 CONT birth date:  9 SEP 1911
5 CONT birth place:  St. Louis, Missouri
3 _APID 1,3693::8642850
2 SOUR @S1084083971@
3 _APID 1,60525::6467918
2 SOUR @S1098250942@
3 PAGE St Louis Public Library; St Louis, Missouri
3 _APID 1,9197::159371
1 DEAT
2 DATE 22 JUL 1992
2 PLAC St. Louis, Missouri
2 SOUR @S_1794955984@
3 DATA
4 TEXT Death date:  1992
5 CONT Death place:  
3 _APID 1,70465::368705
1 BURI
2 PLAC Resurrection Cemetery, St. Louis
2 SOUR @S1084083971@
3 _APID 1,60525::6467918
1 UID 1B04A48E764B4F499F582732EDD92DA69305
1 SOUR @S_2117281160@
1 SOUR @S_2128957019@
2 DATA
3 TEXT Birth date:  13 Nov 1911
4 CONT Birth place:  
4 CONT Marriage date:  15 Jun 1949
4 CONT Marriage place:  St Andrew, St Louis, Missouri</line><line />
3 NOTE http://search.ancestry.com/cgi-bin/sse.dll?db=momarriages&h=1988352&ti=0&indiv=try&gss=pt
2 _APID 1,1171::1988352
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
1 SOUR @S1092363470@
2 PAGE St. Louis Post-Dispatch; Publication Date: 26 Jul 1992; Publication Place: St. Louis, Missouri, USA; URL: https://www.newspapers.com/image/141546649/?article=7ebf27f4-fa77-4a2f-ab9e-79c85662f741&focus=0.11842568,0.88474286,0.22204706,0.9746598&xid=
3 CONC 3355
2 DATA
3 NOTE https://www.newspapers.com/image/141546649/?article=7ebf27f4-fa77-4a2f-ab9e-79c85662f741&focus=0.11842568,0.88474286,0.22204706,0.9746598&xid=3355
2 _APID 1,61843::622230098
1 NOTE Lucille and George divorced after 1942 and then remarried 15 June 1949. 
0 @I_1884986964@ INDI
1 NAME Elzona /Traxel/
2 GIVN Elzona
2 SURN Traxel
2 SOUR @S_2117281209@
3 PAGE Number: 500-32-7631; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  20 Apr 1934
5 CONT Birth place:  
5 CONT Death date:  13 Jan 2003
5 CONT Death place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::53218422
2 SOUR @S1084083263@
3 _APID 1,60901::34998543
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488762
1 SEX F
1 FAMC @F14@
1 FAMS @F8@
1 BIRT
2 DATE 20 APR 1934
2 PLAC St Louis, Missouri
2 SOUR @S_2117281209@
3 PAGE Number: 500-32-7631; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  20 Apr 1934
5 CONT Birth place:  
5 CONT Death date:  13 Jan 2003
5 CONT Death place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::53218422
2 SOUR @S1084083263@
3 _APID 1,60901::34998543
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488762
1 EVEN
2 TYPE Elzona Birth announcement
2 DATE 25 Apr 1934
2 PLAC St. Louis, Missouri
2 SOUR @S1098252997@
3 PAGE Elzona Birth announcement 25 
3 OBJE @O40@
2 OBJE @O40@
1 RESI
2 DATE 1935
2 PLAC St Louis, Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488762
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1940
2 PLAC Lemay, St Louis, Missouri, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Lemay, St Louis, Missouri; Roll: m-t0627-02151; Page: 4A; Enumeration District: 95-198
3 _APID 1,2442::91488762
1 DEAT
2 DATE 13 JAN 2003
2 PLAC St Louis, Missouri
2 SOUR @S_2117281170@
2 SOUR @S_2117281209@
3 PAGE Number: 500-32-7631; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  20 Apr 1934
5 CONT Birth place:  
5 CONT Death date:  13 Jan 2003
5 CONT Death place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::53218422
2 SOUR @S1084083263@
3 _APID 1,60901::34998543
1 UID AE6F07DC482BCB4798A9C0DF88FB165B5967
1 OBJE @O40@
0 @I_1884986963@ INDI
1 NAME Jakeb /BUJNAK/
2 GIVN Jakeb
2 SURN BUJNAK
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1875
5 CONT Birth place:  Hungary
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 8, Saint Louis City, Missouri
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,7884::14920656
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623_891; Page: 11B; Enumeration District: 107.
3 DATA
4 TEXT Birth date:  Jul 1873
5 CONT Birth place:  Bohemia
5 CONT Marriage date:  1898
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  City of St. Louis, St. Louis, Missouri
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,7602::53548449
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Belleville Ward 7, St. Clair, Illinois; Roll: T625_403; Page: 16A; Enumeration District: 126; Image: .
3 DATA
4 TEXT Birth date:  abt 1876
5 CONT Birth place:  Austria
5 CONT Residence date:  1920
5 CONT Residence place:  Belleville Ward 7, St. Clair, Illinois
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,6061::96361607
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Belleville, St Clair, Illinois; Roll: 555; Page: 9A; Enumeration District: 19; Image: 585.0.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Czechoslovakia
5 CONT Residence date:  1930
5 CONT Residence place:  Belleville, St Clair, Illinois
3 _APID 1,6224::87783691
2 SOUR @S_1795452860@
3 DATA
4 TEXT Birth date:  25 Jul 1876
5 CONT Birth place:  Austria Hungary
5 CONT Death date:  27 Feb 1944
5 CONT Death place:  Belleville, St Clair, Illinois
5 CONT Residence date:  
5 CONT Residence place:  Belleville, St. Clair, Illinois
3 _APID 1,2542::152362
2 SOUR @S1084083263@
3 _APID 1,60901::9037334
2 SOUR @S_2117281763@
3 PAGE Registration State: Illinois; Registration County: St Clair; Roll: 1614580; Draft Board: 2
3 _APID 1,6482::9466528
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::160870240
2 SOUR @S_1794955964@
3 _APID 1,2469::342267418
2 SOUR @S_1794955964@
3 _APID 1,2469::342835985
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420267
2 SOUR @S1090315102@
3 PAGE The National Archives in St. Louis, Missouri; St. Louis, Missouri; WWII Draft Registration Cards for Illinois, 10/16/1940-03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 222
3 _APID 1,2238::315425957
1 NAME Jacob or Jake //
2 GIVN Jacob or Jake
2 SOUR @S_2117281165@
2 SOUR @S_2117281154@
1 SEX M
1 FAMC @F59@
1 FAMS @F5@
1 FAMS @F6@
1 FAMS @F7@
1 BIRT
2 DATE 25 JUL 1876
2 PLAC Austria-Hungary (Slovak Region)
2 SOUR @S_2117281154@
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1875
5 CONT Birth place:  Hungary
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 8, Saint Louis City, Missouri
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,7884::14920656
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623_891; Page: 11B; Enumeration District: 107.
3 DATA
4 TEXT Birth date:  Jul 1873
5 CONT Birth place:  Bohemia
5 CONT Marriage date:  1898
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  City of St. Louis, St. Louis, Missouri
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,7602::53548449
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Belleville Ward 7, St. Clair, Illinois; Roll: T625_403; Page: 16A; Enumeration District: 126; Image: .
3 DATA
4 TEXT Birth date:  abt 1876
5 CONT Birth place:  Austria
5 CONT Residence date:  1920
5 CONT Residence place:  Belleville Ward 7, St. Clair, Illinois
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,6061::96361607
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Belleville, St Clair, Illinois; Roll: 555; Page: 9A; Enumeration District: 19; Image: 585.0.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Czechoslovakia
5 CONT Residence date:  1930
5 CONT Residence place:  Belleville, St Clair, Illinois
3 _APID 1,6224::87783691
2 SOUR @S_1795452860@
3 DATA
4 TEXT Birth date:  25 Jul 1876
5 CONT Birth place:  Austria Hungary
5 CONT Death date:  27 Feb 1944
5 CONT Death place:  Belleville, St Clair, Illinois
5 CONT Residence date:  
5 CONT Residence place:  Belleville, St. Clair, Illinois
3 _APID 1,2542::152362
2 SOUR @S1084083263@
3 _APID 1,60901::9037334
2 SOUR @S_2117281763@
3 PAGE Registration State: Illinois; Registration County: St Clair; Roll: 1614580; Draft Board: 2
3 _APID 1,6482::9466528
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::160870240
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420267
1 EVEN
2 TYPE Arrival
2 DATE 1890
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623_891; Page: 11B; Enumeration District: 107.
3 DATA
4 TEXT Birth date:  Jul 1873
5 CONT Birth place:  Bohemia
5 CONT Marriage date:  1898
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  City of St. Louis, St. Louis, Missouri
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,7602::53548449
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Belleville Ward 7, St. Clair, Illinois; Roll: T625_403; Page: 16A; Enumeration District: 126; Image: .
3 DATA
4 TEXT Birth date:  abt 1876
5 CONT Birth place:  Austria
5 CONT Residence date:  1920
5 CONT Residence place:  Belleville Ward 7, St. Clair, Illinois
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,6061::96361607
1 EMIG
2 DATE 1890
2 SOUR @S_2117281164@
1 CENS
2 DATE 1900
2 PLAC St. Louis Missouri
2 SOUR @S_2117281165@
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1900
2 PLAC City of St. Louis, St. Louis, Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623_891; Page: 11B; Enumeration District: 107.
3 DATA
4 TEXT Birth date:  Jul 1873
5 CONT Birth place:  Bohemia
5 CONT Marriage date:  1898
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  City of St. Louis, St. Louis, Missouri
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,7602::53548449
1 CENS
2 DATE 1910
2 PLAC St. Louis Missouri
2 SOUR @S_2117281154@
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 8, Saint Louis City, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1875
5 CONT Birth place:  Hungary
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 8, Saint Louis City, Missouri
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,7884::14920656
1 CENS
2 DATE 1920
2 PLAC Belleville, St Clair Co. Illinois
2 SOUR @S_2117281172@
1 RESI
2 DATE 1920
2 PLAC Belleville Ward 7, St. Clair, Illinois
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Belleville Ward 7, St. Clair, Illinois; Roll: T625_403; Page: 16A; Enumeration District: 126; Image: .
3 DATA
4 TEXT Birth date:  abt 1876
5 CONT Birth place:  Austria
5 CONT Residence date:  1920
5 CONT Residence place:  Belleville Ward 7, St. Clair, Illinois
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,6061::96361607
1 CENS
2 DATE 1930
2 PLAC Belleville, St Clair Co. Illinois
2 SOUR @S_2117281173@
1 RESI
2 DATE 1930
2 PLAC Belleville, St Clair, Illinois
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Belleville, St Clair, Illinois; Roll: 555; Page: 9A; Enumeration District: 19; Image: 585.0.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Czechoslovakia
5 CONT Residence date:  1930
5 CONT Residence place:  Belleville, St Clair, Illinois
3 _APID 1,6224::87783691
1 RESI
2 DATE 1935
2 PLAC Belleville, St Clair, Illinois
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420267
1 CENS ED 82-21
2 DATE 1940
2 PLAC Belleville City, St. Clair, Illinois
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1940
2 PLAC Belleville, St Clair, Illinois, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420267
1 RESI
2 DATE 1943
2 PLAC Belleville, Illinois, USA
2 SOUR @S_1794955964@
3 _APID 1,2469::342835985
1 RESI Relative Relation to Head: Wife
2 PLAC St Clair, Illinois, USA
2 SOUR @S_2117281763@
3 PAGE Registration State: Illinois; Registration County: St Clair; Roll: 1614580; Draft Board: 2
3 _APID 1,6482::9466528
1 DEAT
2 DATE 27 Feb 1944
2 PLAC Belleville, St Clair, Illinois
2 SOUR @S_2117281161@
2 SOUR @S_2117281159@
2 SOUR @S_1795452860@
3 DATA
4 TEXT Birth date:  25 Jul 1876
5 CONT Birth place:  Austria Hungary
5 CONT Death date:  27 Feb 1944
5 CONT Death place:  Belleville, St Clair, Illinois
5 CONT Residence date:  
5 CONT Residence place:  Belleville, St. Clair, Illinois
3 _APID 1,2542::152362
1 BURI
2 PLAC Green Mt Cemetary
1 UID F27B612EC664F64F95C70B340ECD87DF47DB
1 SOUR @S_2117281166@
1 SOUR @S_2117281160@
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
1 OBJE @O58@
2 _PRIM Y
2 _CROP
3 _LEFT 44
3 _TOP 147
3 _WDTH 142
3 _HGHT 142
3 _TYPE primary
1 OBJE @O21@
0 @I_1884986962@ INDI
1 NAME Filomena /BRUNAT/
2 GIVN Filomena
2 SURN BRUNAT
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 17A; Enumeration District: 124; Image: 74.
3 DATA
4 TEXT Name:  Minnie Bujnak
5 CONT Birth Date:  abt 1879
5 CONT Birth Place:  Austria
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1891
5 CONT Arrival Place:  
3 _APID 1,7884::176758980
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1883
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281740
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::310870240
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Page: 11; Enumeration District: 0107; FHL microfilm: 1240891
3 _APID 1,7602::53548450
2 SOUR @S1084083971@
3 _APID 1,60525::15293377
2 SOUR @S1098250942@
3 PAGE St Louis Public Library; St Louis, Missouri
3 _APID 1,9197::114619
1 NAME Mini //
2 GIVN Mini
1 SEX F
1 FAMC @F16@
1 FAMS @F5@
1 BIRT
2 DATE 6 JUN 1878
2 PLAC Austria-Hungary (Bohemian Region)
2 SOUR @S_2117281161@
2 SOUR @S_2117281175@
3 DATA
4 TEXT Philomena Bujnak
5 CONT roz. 6 June 1879
5 CONT zem. 23 Jan 1912
5 CONT    
5 CONT Helena Bujnak
5 CONT 27 Jan 1907
5 CONT 11 Nov 1907
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 17A; Enumeration District: 124; Image: 74.
3 DATA
4 TEXT Name:  Minnie Bujnak
5 CONT Birth Date:  abt 1879
5 CONT Birth Place:  Austria
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1891
5 CONT Arrival Place:  
3 _APID 1,7884::176758980
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1883
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281740
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::310870240
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Page: 11; Enumeration District: 0107; FHL microfilm: 1240891
3 _APID 1,7602::53548450
2 SOUR @S1084083971@
3 _APID 1,60525::15293377
1 EVEN
2 TYPE Arrival
2 DATE 1890
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Page: 11; Enumeration District: 0107; FHL microfilm: 1240891
3 _APID 1,7602::53548450
1 EVEN
2 TYPE Arrival
2 DATE 1891
2 PLAC Baltimore, Baltimore, Maryland, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 17A; Enumeration District: 124; Image: 74.
3 DATA
4 TEXT Name:  Minnie Bujnak
5 CONT Birth Date:  abt 1879
5 CONT Birth Place:  Austria
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1891
5 CONT Arrival Place:  
3 _APID 1,7884::176758980
1 EMIG
2 DATE 1891
1 EVEN
2 TYPE Arrival
2 DATE 27 Dec 1891
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1883
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281740
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1900
2 PLAC St Louis Ward 7, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Page: 11; Enumeration District: 0107; FHL microfilm: 1240891
3 _APID 1,7602::53548450
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 8, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 17A; Enumeration District: 124; Image: 74.
3 DATA
4 TEXT Name:  Minnie Bujnak
5 CONT Birth Date:  abt 1879
5 CONT Birth Place:  Austria
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1891
5 CONT Arrival Place:  
3 _APID 1,7884::176758980
1 EVEN
2 TYPE Departure
2 PLAC Bremen, Germany
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1883
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281740
1 DEAT
2 DATE 23 JAN 1912
2 PLAC St. Louis, Missouri
2 SOUR @S_2117281162@
2 SOUR @S_2117281177@
3 DATA
4 TEXT Philomina Bujnak
5 CONT DOB 6/5/1879 Bohemia
5 CONT DOD 1/23/1912 St Louis, Mo
5 CONT Father's name: Martin Brunat
5 CONT Father's birthplace: Bohemia
5 CONT Mother's name: Annie Burian
5 CONT Mother's birthplace: Bohemia
5 CONT Information given 
2 SOUR @S1084083971@
3 _APID 1,60525::15293377
2 SOUR @S1098250942@
3 PAGE St Louis Public Library; St Louis, Missouri
3 _APID 1,9197::114619
1 BURI
2 PLAC Sts. Peter and Paul Cemtery, St. Louis
2 SOUR @S_2117281174@
2 SOUR @S1084083971@
3 _APID 1,60525::15293377
1 UID F801FB119B33B047B9AD442EC1C3294594DF
1 SOUR @S_2117281160@
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
1 OBJE @O58@
2 _PRIM Y
2 _CROP
3 _LEFT 171
3 _TOP 64
3 _WDTH 200
3 _HGHT 200
3 _TYPE primary
1 OBJE @O73@
1 OBJE @O36@
0 @I_1884986961@ INDI
1 NAME Edward A. /Bujnak/
2 GIVN Edward A.
2 SURN Bujnak
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Lenzburg, St Clair, Illinois; Roll: 555; Page: 3B; Enumeration District: 82; Image: 1088.0.
3 DATA
4 TEXT Name:  Edward Buynak
5 CONT Birth Date:  abt 1899
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1930
5 CONT Residence Place:  Lenzburg, St Clair, Illinois
3 _APID 1,6224::87907155
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 17A; Enumeration District: 124; Image: 74.
3 DATA
4 TEXT Name:  Edward Bujnak
5 CONT Birth Date:  abt 1899
5 CONT Birth Place:  Austria
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758981
2 SOUR @S_2117281376@
1 NAME Eddie /Bujnak/
2 GIVN Eddie
2 SURN Bujnak
1 SEX M
1 FAMC @F5@
1 FAMS @F10@
1 BIRT
2 DATE 8 FEB 1899
2 PLAC St Louis, , Missouri, USA
2 SOUR @S_2117281156@
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Lenzburg, St Clair, Illinois; Roll: 555; Page: 3B; Enumeration District: 82; Image: 1088.0.
3 DATA
4 TEXT Name:  Edward Buynak
5 CONT Birth Date:  abt 1899
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1930
5 CONT Residence Place:  Lenzburg, St Clair, Illinois
3 _APID 1,6224::87907155
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 17A; Enumeration District: 124; Image: 74.
3 DATA
4 TEXT Name:  Edward Bujnak
5 CONT Birth Date:  abt 1899
5 CONT Birth Place:  Austria
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758981
2 SOUR @S_2117281376@
1 BIRT
2 DATE Feb 1898
2 PLAC Missouri
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC St Louis Ward 7, St Louis (Independent City), Missouri, USA
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 8, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 17A; Enumeration District: 124; Image: 74.
3 DATA
4 TEXT Name:  Edward Bujnak
5 CONT Birth Date:  abt 1899
5 CONT Birth Place:  Austria
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758981
1 RESI
2 DATE 1930
2 PLAC Lenzburg, St Clair, Illinois
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Lenzburg, St Clair, Illinois; Roll: 555; Page: 3B; Enumeration District: 82; Image: 1088.0.
3 DATA
4 TEXT Name:  Edward Buynak
5 CONT Birth Date:  abt 1899
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1930
5 CONT Residence Place:  Lenzburg, St Clair, Illinois
3 _APID 1,6224::87907155
1 DEAT
2 DATE 7 JUL 1963
2 PLAC Belleville City, St. Clair, Illinois
2 SOUR @S_2117281376@
1 UID 02072531D5F097429C765575B0D4014EAC7D
1 SOUR @S_2117281167@
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
1 SOUR @S_2117281560@
2 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Page: 11; Enumeration District: 0107; FHL microfilm: 1240891
2 _APID 1,7602::53548451
0 @I_1884986960@ INDI
1 NAME Irene /BUJNAK/
2 GIVN Irene
2 SURN BUJNAK
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::10870240
1 SEX F
1 FAMC @F5@
1 FAMS @F26@
1 BIRT
2 DATE 12 MAR 1905
2 PLAC St. Louis MO
2 SOUR @S_2117281156@
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::10870240
1 DEAT
2 DATE 3 APR 1984
2 PLAC Belleville City, St. Clair, Illinois
2 SOUR @S_2117281156@
1 UID 17FCEF996CF10E40A7982E52981E759FCF93
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
0 @I_1884986959@ INDI
1 NAME Helena /BUJNAK/
2 GIVN Helena
2 SURN BUJNAK
1 SEX F
1 FAMC @F5@
1 BIRT
2 DATE 27 JAN 1907
2 PLAC St. Louis Missouri
2 SOUR @S_2117281157@
2 SOUR @S_2117281161@
1 DEAT
2 DATE 1 NOV 1907
2 PLAC St. Louis Missouri
2 SOUR @S_2117281161@
1 UID 1E3E770F33371746B6DB2BDB26D2F494C064
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
0 @I_1884986958@ INDI
1 NAME Joseph /NOBLOT/
2 GIVN Joseph
2 SURN NOBLOT
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Name:  Joseph Noblot
5 CONT Birth Date:  abt 1858
5 CONT Birth Place:  Germany
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1882
5 CONT Arrival Place:  
3 _APID 1,7884::14963119
2 SOUR @S1084083971@
3 _APID 1,60525::133643339
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895628
1 SEX M
1 FAMS @F27@
1 BIRT
2 DATE 1 DEC 1858
2 PLAC France
2 SOUR @S_2117281163@
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Name:  Joseph Noblot
5 CONT Birth Date:  abt 1858
5 CONT Birth Place:  Germany
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1882
5 CONT Arrival Place:  
3 _APID 1,7884::14963119
2 SOUR @S1084083971@
3 _APID 1,60525::133643339
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895628
1 EVEN
2 TYPE Arrival
2 DATE 1881
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895628
1 EVEN
2 TYPE Arrival
2 DATE 1882
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Name:  Joseph Noblot
5 CONT Birth Date:  abt 1858
5 CONT Birth Place:  Germany
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1882
5 CONT Arrival Place:  
3 _APID 1,7884::14963119
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1900
2 PLAC St Louis Ward 24, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895628
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 13, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Name:  Joseph Noblot
5 CONT Birth Date:  abt 1858
5 CONT Birth Place:  Germany
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1882
5 CONT Arrival Place:  
3 _APID 1,7884::14963119
1 DEAT
2 DATE 30 DEC 1917
2 PLAC St. Louis, Missouri
2 SOUR @S_2117281169@
2 SOUR @S1084083971@
3 _APID 1,60525::133643339
1 BURI
2 PLAC Saint Louis, St. Louis City, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::133643339
1 UID 276B1EEF917DBC41AB0EF6D9EA853F87673F
0 @I_1884986957@ INDI
1 NAME Anna /BRUNAT/
2 GIVN Anna
2 SURN BRUNAT
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Name:  Anna Noblot
5 CONT Birth Date:  abt 1874
5 CONT Birth Place:  Germany
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1884
5 CONT Arrival Place:  
3 _APID 1,7884::178146494
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1853
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281739
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1873
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281382
2 SOUR @S1084083971@
3 _APID 1,60525::15397786
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895629
1 NAME Annie /Noblot/
2 GIVN Annie
2 SURN Noblot
2 SOUR @S1092364231@
3 _APID 1,60382::229226
1 SEX F
1 FAMC @F16@
1 FAMS @F27@
1 BIRT
2 DATE 12 SEP 1874
2 PLAC Austria-Hungary (Bohemian Region)
2 SOUR @S_2117281163@
2 SOUR @S_2117281169@
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Name:  Anna Noblot
5 CONT Birth Date:  abt 1874
5 CONT Birth Place:  Germany
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1884
5 CONT Arrival Place:  
3 _APID 1,7884::178146494
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1853
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281739
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1873
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281382
2 SOUR @S1084083971@
3 _APID 1,60525::15397786
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895629
1 EVEN
2 TYPE Arrival
2 DATE 27 Dec 1891
2 PLAC New York, New York
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1853
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281739
1 EVEN
2 TYPE Arrival
2 DATE 27 Dec 1891
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1873
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281382
1 EVEN
2 TYPE Arrival
2 DATE 1892
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895629
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1900
2 PLAC St Louis Ward 24, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895629
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 13, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Name:  Anna Noblot
5 CONT Birth Date:  abt 1874
5 CONT Birth Place:  Germany
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1884
5 CONT Arrival Place:  
3 _APID 1,7884::178146494
1 EVEN
2 TYPE Departure
2 PLAC Bremen, Germany
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1873
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281382
1 DEAT
2 DATE 31 DEC 1917
2 PLAC St. Louis, Missouri
2 SOUR @S1092364231@
3 _APID 1,60382::229226
2 SOUR @S1084083971@
3 _APID 1,60525::15397786
1 BURI
2 PLAC Saint Louis, St. Louis City, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15397786
1 UID FDEB8764F5E9D74A81BA1462A2B79E8D0780
0 @I_1884986956@ INDI
1 NAME Martin /BRUNAT/
2 GIVN Martin
2 SURN BRUNAT
1 SEX M
1 FAMS @F16@
1 BIRT
2 PLAC Austria (Bohemia)
2 SOUR @S_2117281177@
1 UID B4810CCA487F654EAA1DE3063CD3979570F5
1 SOUR @S_2117281177@
2 DATA
3 NOTE indexed under Brynak
0 @I_1884986955@ INDI
1 NAME Annie /Burian/
2 GIVN Annie
2 SURN Burian
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 17A; Enumeration District: 124; Image: 74.
3 DATA
4 TEXT Name:  Annie Cibon
5 CONT Birth Date:  abt 1840
5 CONT Birth Place:  Austria
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::14920651
1 SEX F
1 FAMC @F94@
1 FAMS @F16@
1 FAMS @F17@
1 BIRT
2 DATE 1840
2 PLAC Austria-Hungary (Bohemian Region)
2 SOUR @S_2117281158@
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 17A; Enumeration District: 124; Image: 74.
3 DATA
4 TEXT Name:  Annie Cibon
5 CONT Birth Date:  abt 1840
5 CONT Birth Place:  Austria
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::14920651
1 CENS
2 DATE 1910
2 PLAC St. Louis Missouri
2 SOUR @S_2117281154@
3 PAGE ED 124
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 8, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 17A; Enumeration District: 124; Image: 74.
3 DATA
4 TEXT Name:  Annie Cibon
5 CONT Birth Date:  abt 1840
5 CONT Birth Place:  Austria
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::14920651
1 DEAT
2 DATE 24 AUG 1910
2 PLAC St Louis , Missouri
2 SOUR @S_2117281178@
3 DATA
4 TEXT Annie Cibon
5 CONT DOB 1840 Bohemia
5 CONT DOD 8/24/1910 St Louis
5 CONT Father's name John Burian
5 CONT Mother unknown
5 CONT Information given by Coroner's office
1 BURI
2 DATE 26 AUG 1910
2 PLAC Sts. Peter and Paul Cemtery, St. Louis
2 SOUR @S_2117281178@
3 DATA
4 TEXT Annie Cibon
5 CONT 1865 S. 14th St, St Louis
5 CONT DOB 1840
5 CONT Place of Birth: Bohemia
5 CONT DOD 8/24/1910
5 CONT Cause: Chonic Intestinal nephritis
5 CONT Father: John Burian
5 CONT fathers birthplace Bohemia
1 UID 58322700C0F0A54EB78A35067D7B1AB59738
1 SOUR @S_2117281177@
0 @I_1884986954@ INDI
1 NAME Joseph /BRUNAT/
2 GIVN Joseph
2 SURN BRUNAT
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T625_949; Page: 9B; Enumeration District: 141; Image: 254.
3 DATA
4 TEXT Name:  Joseph Brunat
5 CONT Birth Date:  abt 1882
5 CONT Birth Place:  Bohemia
5 CONT Residence Date:  1920
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1870
5 CONT Arrival Place:  
3 _APID 1,6061::58223787
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1883
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281741
1 SEX M
1 FAMC @F16@
1 FAMS @F24@
1 BIRT
2 DATE 19 SEP 1879
2 PLAC Austria-Hungary (Bohemian Region)
2 SOUR @S_2117281169@
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T625_949; Page: 9B; Enumeration District: 141; Image: 254.
3 DATA
4 TEXT Name:  Joseph Brunat
5 CONT Birth Date:  abt 1882
5 CONT Birth Place:  Bohemia
5 CONT Residence Date:  1920
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1870
5 CONT Arrival Place:  
3 _APID 1,6061::58223787
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1883
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281741
1 EMIG
2 DATE 1890
1 EVEN
2 TYPE Arrival
2 DATE 27 Dec 1891
2 PLAC New York, New York
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1883
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281741
1 CENS
2 DATE 1920
2 PLAC St. Louis Missouri
1 RESI
2 DATE 1920
2 PLAC St Louis Ward 8, St Louis (Independent City), Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T625_949; Page: 9B; Enumeration District: 141; Image: 254.
3 DATA
4 TEXT Name:  Joseph Brunat
5 CONT Birth Date:  abt 1882
5 CONT Birth Place:  Bohemia
5 CONT Residence Date:  1920
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1870
5 CONT Arrival Place:  
3 _APID 1,6061::58223787
1 EVEN
2 TYPE Departure
2 PLAC Bremen, Germany
2 SOUR @S_2145792746@
3 DATA
4 TEXT Birth date:  abt 1883
5 CONT Birth place:  
5 CONT Arrival date:  27 Dec 1891
5 CONT Arrival place:  New York, New York
5 CONT Departure date:  
5 CONT Departure place:  Bremen, Germany
3 _APID 1,8679::1281741
1 DEAT
2 DATE 19 APR 1950
2 PLAC St Louis , Missouri
2 SOUR @S_2117281169@
1 UID DDFC8C308B268B4DB66E0268B6491515D5AD
1 SOUR @S_2117281176@
2 DATA
3 TEXT Joseph Brunat
4 CONT DOB 9/19/1879 Bohemia
4 CONT DOD 4/19/1950 St Louis
4 CONT Occupation: Beer Bottler at Busch Brewery
4 CONT Father's name: Michael Brunat
4 CONT Mother's name: uknown
4 CONT wife's name: Minnie
4 CONT Informatant name Minnie Brunat
0 @I_1884986953@ INDI
1 NAME Rose /BRUNAT/
2 GIVN Rose
2 SURN BRUNAT
1 SEX F
1 FAMC @F16@
1 FAMS @F21@
1 FAMS @F22@
1 BIRT
2 DATE MAR 1883
2 PLAC Austria-Hungary (Bohemian Region)
2 SOUR @S_2117281163@
1 EMIG
2 DATE 1890
1 DEAT
2 DATE ABT 1949
2 SOUR @S_2117281168@
1 UID E47548495393554995CF7F066B51E9D3CF85
0 @I_1884986952@ INDI
1 NAME Frank /MASEK/
2 GIVN Frank
2 SURN MASEK
1 SEX M
1 FAMS @F21@
1 UID 77475B79160D6440A004711E24820CB8F6B5
0 @I_1884986951@ INDI
1 NAME Louise /NOBLOT/
2 GIVN Louise
2 SURN NOBLOT
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895632
1 SEX F
1 FAMC @F27@
1 BIRT
2 DATE Mar 1899
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895632
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC St Louis Ward 24, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895632
1 UID 7F034576EDAD1E40B960DE636B54B7565BCF
0 @I_1884986950@ INDI
1 NAME Emil /NOBLOT/
2 GIVN Emil
2 SURN NOBLOT
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Name:  Emil Noblot
5 CONT Birth Date:  abt 1898
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,7884::178146496
2 SOUR @S_2128957767@
3 DATA
4 TEXT Birth date:  01/26/1898
5 CONT Birth place:  
5 CONT Death date:  05/14/1965
5 CONT Death place:  
3 _APID 1,8750::2258918
2 SOUR @S_2117281209@
3 PAGE Number: 498-03-6065; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  26 Jan 1898
5 CONT Birth place:  
5 CONT Death date:  May 1965
5 CONT Death place:  
3 _APID 1,3693::45581461
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683751; Draft Board: 13.
3 DATA
4 TEXT Birth date:  26 Jan 1898
5 CONT Birth place:  
5 CONT Residence date:  
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::30822704
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895631
1 SEX M
1 FAMC @F27@
1 BIRT
2 DATE 01/26/1898
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Name:  Emil Noblot
5 CONT Birth Date:  abt 1898
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,7884::178146496
2 SOUR @S_2128957767@
3 DATA
4 TEXT Birth date:  01/26/1898
5 CONT Birth place:  
5 CONT Death date:  05/14/1965
5 CONT Death place:  
3 _APID 1,8750::2258918
2 SOUR @S_2117281209@
3 PAGE Number: 498-03-6065; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  26 Jan 1898
5 CONT Birth place:  
5 CONT Death date:  May 1965
5 CONT Death place:  
3 _APID 1,3693::45581461
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683751; Draft Board: 13.
3 DATA
4 TEXT Birth date:  26 Jan 1898
5 CONT Birth place:  
5 CONT Residence date:  
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::30822704
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895631
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC St Louis Ward 24, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895631
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 13, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Name:  Emil Noblot
5 CONT Birth Date:  abt 1898
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,7884::178146496
1 RESI
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683751; Draft Board: 13.
3 DATA
4 TEXT Birth date:  26 Jan 1898
5 CONT Birth place:  
5 CONT Residence date:  
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::30822704
1 DEAT
2 DATE 05/14/1965
2 SOUR @S_2128957767@
3 DATA
4 TEXT Birth date:  01/26/1898
5 CONT Birth place:  
5 CONT Death date:  05/14/1965
5 CONT Death place:  
3 _APID 1,8750::2258918
2 SOUR @S_2117281209@
3 PAGE Number: 498-03-6065; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  26 Jan 1898
5 CONT Birth place:  
5 CONT Death date:  May 1965
5 CONT Death place:  
3 _APID 1,3693::45581461
1 UID 1565EB1E929D9D4F9FEA5732E70FEFCD62F1
0 @I_1884986949@ INDI
1 NAME Rose /NOBLOT/
2 GIVN Rose
2 SURN NOBLOT
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Birth date:  abt 1901
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,7884::178146498
2 SOUR @S1105247268@
3 _APID 1,2324::1200175727
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::500118413
2 SOUR @S1098169676@
3 _APID 1,60541::171507213
1 SEX F
1 FAMC @F27@
1 FAMS @F35@
1 FAMS @F34@
1 BIRT
2 DATE abt 1901
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Birth date:  abt 1901
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,7884::178146498
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::500118413
2 SOUR @S1098169676@
3 _APID 1,60541::171507213
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 13, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 13, St Louis (Independent City), Missouri; Roll: T624_817; Page: 8B; Enumeration District: 207; Image: 172.
3 DATA
4 TEXT Birth date:  abt 1901
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,7884::178146498
1 RESI
2 PLAC Missouri, USA
2 SOUR @S1105247268@
3 _APID 1,2324::1200175727
1 DEAT
2 DATE 1967
2 PLAC Missouri, United States of America
2 SOUR @S1098169676@
3 _APID 1,60541::171507213
1 UID FE289EFCF0895B4DA3AFCACB2C34D0DDD56B
1 SOUR @S_2117281168@
0 @I_1884986948@ INDI
1 NAME Mary /Krekel -Welky/
2 GIVN Mary
2 SURN Krekel -Welky
2 SOUR @S_1794955964@
3 _APID 1,2469::342267417
2 SOUR @S_1794955964@
3 _APID 1,2469::342835986
1 SEX F
1 FAMS @F6@
1 BIRT
2 DATE abt 1878
2 PLAC Austria
1 RESI
2 DATE 1943
2 PLAC Belleville, Illinois, USA
2 SOUR @S_1794955964@
3 _APID 1,2469::342835986
1 RESI
2 DATE 1946
2 PLAC Belleville, Illinois, USA
2 SOUR @S_1794955964@
3 _APID 1,2469::342267417
1 DEAT
2 DATE 14 MAR 1956
2 PLAC St. Louis Missouri
1 UID 0C52227A6207D748A3B0874F14D4B8ADF8F5
1 SOUR @S_2117281164@
1 SOUR @S_2117281161@
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
0 @I_1884986947@ INDI
1 NAME Helen /BUJNAK/
2 GIVN Helen
2 SURN BUJNAK
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420269
1 SEX F
1 FAMC @F6@
1 FAMS @F29@
1 BIRT
2 DATE 12 MAY 1913
2 PLAC Illinois
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420269
1 RESI
2 DATE 1935
2 PLAC Belleville, St Clair, Illinois
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420269
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1940
2 PLAC Belleville, St Clair, Illinois, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420269
1 UID DFA044E513F7C44398BCE285FBECA40706F5
0 @I_1884986946@ INDI
1 NAME Fred /BUJNAK/
2 GIVN Fred
2 SURN BUJNAK
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420270
2 SOUR @S1090315102@
3 PAGE The National Archives in St. Louis, Missouri; St. Louis, Missouri; WWII Draft Registration Cards for Illinois, 10/16/1940-03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 222
3 _APID 1,2238::300425957
1 SEX M
1 FAMC @F6@
1 FAMS @F31@
1 BIRT
2 DATE 7 JAN 1916
2 PLAC Illinois
2 SOUR @S_2117281161@
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420270
2 SOUR @S1090315102@
3 PAGE The National Archives in St. Louis, Missouri; St. Louis, Missouri; WWII Draft Registration Cards for Illinois, 10/16/1940-03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 222
3 _APID 1,2238::300425957
1 RESI
2 DATE 1935
2 PLAC Belleville, St Clair, Illinois
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420270
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1940
2 PLAC Belleville, St Clair, Illinois, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420270
1 DEAT
2 DATE JUN 1973
1 UID E6A74AC5218CFC4A9CC81F8BA2AB9169E415
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
0 @I_1884986945@ INDI
1 NAME John /HAMPTON/
2 GIVN John
2 SURN HAMPTON
1 SEX M
1 FAMS @F29@
1 UID 1449A2384C854E499FB2DE1C9D664C74AD67
0 @I_1884986944@ INDI
1 NAME Louise /FLICKENSTEIN/
2 GIVN Louise
2 SURN FLICKENSTEIN
1 SEX F
1 FAMS @F31@
1 UID 20B8187240F14C45B029C7B55937C7D0A0DB
0 @I_1884986943@ INDI
1 NAME Andrew /Bujnak/
2 GIVN Andrew
2 SURN Bujnak
2 SOUR @S1084083263@
3 _APID 1,60901::609037334
1 SEX M
1 FAMS @F59@
1 UID 22461412BB3B4D4F976D3AA7193B1C5ACF4B
1 SOUR @S_2117281164@
0 @I_1884986942@ INDI
1 NAME Mary /Slaphojan/
2 GIVN Mary
2 SURN Slaphojan
2 SOUR @S1084083263@
3 _APID 1,60901::759037334
1 SEX F
1 FAMS @F59@
1 UID E7D9077A5636C24CBCACF58162413DF089E1
0 @I_1884986941@ INDI
1 NAME Charles /BUJNAK/
2 GIVN Charles
2 SURN BUJNAK
1 SEX M
1 FAMC @F59@
1 RESI
2 DATE 1944
2 PLAC Cleveland, Ohio
2 SOUR @S_2117281164@
1 DEAT
2 DATE AFT 1944
1 UID 63C10EA28D3D8D4396B1D121E7A7CE2225F6
0 @I_1884986940@ INDI
1 NAME Andrew /BUJNAK/
2 GIVN Andrew
2 SURN BUJNAK
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623 891; Page: 9A; Enumeration District: 108.
3 DATA
4 TEXT Name:  Andrew Buynak
5 CONT Birth Date:  abt 1872
5 CONT Birth Place:  Hungary
5 CONT Residence Date:  1900
5 CONT Residence Place:  St Louis Ward 7, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1891
5 CONT Arrival Place:  
3 _APID 1,7602::53549640
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1230; Page: 1B; Enumeration District: 380; Image: 545.0.
3 DATA
4 TEXT Name:  Gudrun Buynak
5 CONT Birth Date:  abt 1870
5 CONT Birth Place:  Czechoslovakia
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::23260552
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Andrew Biynak
5 CONT Birth Date:  abt 1870
5 CONT Birth Place:  Hungary
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1889
5 CONT Arrival Place:  
3 _APID 1,7884::14920453
1 SEX M
1 FAMC @F59@
1 FAMS @F57@
1 BIRT
2 DATE JUN 1871
2 PLAC Austria-Hungary (Slovak Region)
2 SOUR @S_2117281154@
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623 891; Page: 9A; Enumeration District: 108.
3 DATA
4 TEXT Name:  Andrew Buynak
5 CONT Birth Date:  abt 1872
5 CONT Birth Place:  Hungary
5 CONT Residence Date:  1900
5 CONT Residence Place:  St Louis Ward 7, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1891
5 CONT Arrival Place:  
3 _APID 1,7602::53549640
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1230; Page: 1B; Enumeration District: 380; Image: 545.0.
3 DATA
4 TEXT Name:  Gudrun Buynak
5 CONT Birth Date:  abt 1870
5 CONT Birth Place:  Czechoslovakia
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::23260552
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Andrew Biynak
5 CONT Birth Date:  abt 1870
5 CONT Birth Place:  Hungary
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1889
5 CONT Arrival Place:  
3 _APID 1,7884::14920453
1 EVEN
2 TYPE Arrival
2 DATE 1891
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623 891; Page: 9A; Enumeration District: 108.
3 DATA
4 TEXT Name:  Andrew Buynak
5 CONT Birth Date:  abt 1872
5 CONT Birth Place:  Hungary
5 CONT Residence Date:  1900
5 CONT Residence Place:  St Louis Ward 7, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1891
5 CONT Arrival Place:  
3 _APID 1,7602::53549640
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Andrew Biynak
5 CONT Birth Date:  abt 1870
5 CONT Birth Place:  Hungary
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1889
5 CONT Arrival Place:  
3 _APID 1,7884::14920453
1 CENS
2 DATE 1900
2 PLAC St. Louis, Missouri
2 SOUR @S_2117281171@
1 RESI
2 DATE 1900
2 PLAC St Louis Ward 7, St Louis (Independent City), Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623 891; Page: 9A; Enumeration District: 108.
3 DATA
4 TEXT Name:  Andrew Buynak
5 CONT Birth Date:  abt 1872
5 CONT Birth Place:  Hungary
5 CONT Residence Date:  1900
5 CONT Residence Place:  St Louis Ward 7, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1891
5 CONT Arrival Place:  
3 _APID 1,7602::53549640
1 CENS
2 DATE 1910
2 PLAC St. Louis, Missouri
2 SOUR @S_2117281154@
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 8, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Andrew Biynak
5 CONT Birth Date:  abt 1870
5 CONT Birth Place:  Hungary
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
5 CONT Arrival Date:  1889
5 CONT Arrival Place:  
3 _APID 1,7884::14920453
1 RESI
2 DATE 1930
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1230; Page: 1B; Enumeration District: 380; Image: 545.0.
3 DATA
4 TEXT Name:  Gudrun Buynak
5 CONT Birth Date:  abt 1870
5 CONT Birth Place:  Czechoslovakia
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::23260552
1 EVEN
2 TYPE Obituary for ANDREW L. BUJNAK
2 DATE 26 Sep 1947
2 PLAC St. Louis, Missouri
2 SOUR @S1101182686@
3 PAGE Obituary for ANDREW L. BUJNAK 26 
3 OBJE @O55@
2 OBJE @O55@
1 DEAT
2 DATE SEP 1947
2 PLAC St. Louis, Missouri
2 SOUR @S_2117281174@
1 BURI
2 DATE 27 SEP 1947
2 PLAC Resurrection Cemetery, St. Louis
2 SOUR @S_2117281174@
1 UID 7BAFA8973FB6DC4EAFD9A9783AFF370FB0FF
1 OBJE @O6@
2 _PRIM Y
1 OBJE @O55@
1 OBJE @O18@
1 OBJE @O26@
0 @I_1884986939@ INDI
1 NAME Veronica /Kolar/
2 GIVN Veronica
2 SURN Kolar
1 SEX F
1 FAMS @F57@
1 BIRT
2 DATE NOV 1875
2 PLAC Hungary
2 SOUR @S_2117281155@
1 DEAT Y
1 BURI
2 DATE 21 NOV 1941
2 PLAC Resurrection Cemetery, St. Louis
2 SOUR @S_2117281174@
1 UID D64F4DA2FFF7B04F97CCDCF17A66843CD930
0 @I_1884986938@ INDI
1 NAME Steve Louis /BUJNAK/
2 GIVN Steve Louis
2 SURN BUJNAK
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683745; Draft Board: 8.
3 DATA
4 TEXT Name:  Steve Bujnak
5 CONT Birth Date:  18 Jul 1894
5 CONT Birth Place:  
5 CONT Residence Date:  
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::31255423
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623 891; Page: 9A; Enumeration District: 108.
3 DATA
4 TEXT Name:  Steve Buynak
5 CONT Birth Date:  abt 1895
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1900
5 CONT Residence Place:  St Louis Ward 7, St Louis (Independent City), Missouri
3 _APID 1,7602::53549642
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1230; Page: 1B; Enumeration District: 380; Image: 545.0.
3 DATA
4 TEXT Name:  Steve Bujnak
5 CONT Birth Date:  abt 1895
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::23260585
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Birth date:  abt 1894
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758281
1 SEX M
1 FAMC @F57@
1 FAMS @F58@
1 BIRT
2 DATE 18 JUL 1894
2 PLAC Missouri
2 SOUR @S_2117281171@
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683745; Draft Board: 8.
3 DATA
4 TEXT Name:  Steve Bujnak
5 CONT Birth Date:  18 Jul 1894
5 CONT Birth Place:  
5 CONT Residence Date:  
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::31255423
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623 891; Page: 9A; Enumeration District: 108.
3 DATA
4 TEXT Name:  Steve Buynak
5 CONT Birth Date:  abt 1895
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1900
5 CONT Residence Place:  St Louis Ward 7, St Louis (Independent City), Missouri
3 _APID 1,7602::53549642
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1230; Page: 1B; Enumeration District: 380; Image: 545.0.
3 DATA
4 TEXT Name:  Steve Bujnak
5 CONT Birth Date:  abt 1895
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::23260585
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Birth date:  abt 1894
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758281
1 RESI
2 DATE 1900
2 PLAC St Louis Ward 7, St Louis (Independent City), Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623 891; Page: 9A; Enumeration District: 108.
3 DATA
4 TEXT Name:  Steve Buynak
5 CONT Birth Date:  abt 1895
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1900
5 CONT Residence Place:  St Louis Ward 7, St Louis (Independent City), Missouri
3 _APID 1,7602::53549642
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 8, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Birth date:  abt 1894
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758281
1 RESI
2 DATE 1930
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1230; Page: 1B; Enumeration District: 380; Image: 545.0.
3 DATA
4 TEXT Name:  Steve Bujnak
5 CONT Birth Date:  abt 1895
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::23260585
1 RESI
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683745; Draft Board: 8.
3 DATA
4 TEXT Name:  Steve Bujnak
5 CONT Birth Date:  18 Jul 1894
5 CONT Birth Place:  
5 CONT Residence Date:  
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::31255423
1 DEAT Cerebral Hemorhage
2 DATE 4 FEB 1954
2 PLAC St Louis , Missouri
1 BURI
2 DATE 8 FEB 1954
2 PLAC Resurrection Cemetery, St. Louis
2 SOUR @S_2117281174@
1 UID F20037798E75CB4B8B3E6A5CD23690F3D5D6
0 @I_1884986937@ INDI
1 NAME Tony /BUJNAK/
2 GIVN Tony
2 SURN BUJNAK
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Anthony Biynak
5 CONT Birth Date:  abt 1905
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758284
1 SEX M
1 FAMC @F57@
1 BIRT
2 DATE 1906
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Anthony Biynak
5 CONT Birth Date:  abt 1905
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758284
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 8, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Anthony Biynak
5 CONT Birth Date:  abt 1905
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758284
1 UID 93934106802AA046A2754656326DF7EC32AB
0 @I_1884986936@ INDI
1 NAME Alois /BUJNAK/
2 GIVN Alois
2 SURN BUJNAK
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1230; Page: 1B; Enumeration District: 380; Image: 545.0.
3 DATA
4 TEXT Name:  Alois Buynak
5 CONT Birth Date:  abt 1910
5 CONT Birth Place:  
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::23260588
1 SEX M
1 FAMC @F57@
1 BIRT
2 DATE 1910
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1230; Page: 1B; Enumeration District: 380; Image: 545.0.
3 DATA
4 TEXT Name:  Alois Buynak
5 CONT Birth Date:  abt 1910
5 CONT Birth Place:  
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::23260588
1 RESI
2 DATE 1930
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1230; Page: 1B; Enumeration District: 380; Image: 545.0.
3 DATA
4 TEXT Name:  Alois Buynak
5 CONT Birth Date:  abt 1910
5 CONT Birth Place:  
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::23260588
1 UID 8119E34C9C1DC942AE00A23B33EF79CB7E41
0 @I_1884986935@ INDI
1 NAME Andrew /BUJNAK/
2 GIVN Andrew
2 SURN BUJNAK
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Andrew Biynak
5 CONT Birth Date:  abt 1900
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758283
2 SOUR @S_2117281209@
3 PAGE Number: 492-16-0624; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  13 Sep 1900
5 CONT Birth place:  
5 CONT Death date:  Nov 1974
5 CONT Death place:  Saint Louis, Saint Louis City, Missouri, United States of America
3 _APID 1,3693::7954126
1 SEX M
1 FAMC @F57@
1 BIRT
2 DATE 13 Sep 1900
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Andrew Biynak
5 CONT Birth Date:  abt 1900
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758283
2 SOUR @S_2117281209@
3 PAGE Number: 492-16-0624; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  13 Sep 1900
5 CONT Birth place:  
5 CONT Death date:  Nov 1974
5 CONT Death place:  Saint Louis, Saint Louis City, Missouri, United States of America
3 _APID 1,3693::7954126
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 8, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Andrew Biynak
5 CONT Birth Date:  abt 1900
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758283
1 DEAT
2 DATE Nov 1974
2 PLAC Saint Louis, Saint Louis City, Missouri, United States of America
2 SOUR @S_2117281209@
3 PAGE Number: 492-16-0624; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  13 Sep 1900
5 CONT Birth place:  
5 CONT Death date:  Nov 1974
5 CONT Death place:  Saint Louis, Saint Louis City, Missouri, United States of America
3 _APID 1,3693::7954126
1 UID FEE536F99C130445B1C59D925846D1AECC8F
0 @I_1884986934@ INDI
1 NAME Anna /MASEK/
2 GIVN Anna
2 SURN MASEK
1 SEX F
1 FAMC @F21@
1 FAMS @F70@
1 BIRT
2 DATE 4 JUL 1903
2 PLAC St Louis , Missouri
1 DEAT colon cancer
2 DATE 19 FEB 1951
2 SOUR @S_2117281168@
2 SOUR @S_2117281179@
1 UID C25BB1B822BA544D8A72DF5122FAD5254590
0 @I_1884986933@ INDI
1 NAME Flora C. /Maul/
2 GIVN Flora C.
2 SURN Maul
1 SEX F
1 FAMS @F10@
1 BIRT
2 DATE 8 FEB 1900
1 DEAT
2 DATE 14 OCT 1984
1 UID C6DE254744AAFF428E716E702E4D7CBFD26A
1 SOUR @S_2117281167@
0 @I_1884986932@ INDI
1 NAME Delores /Bujnak/
2 GIVN Delores
2 SURN Bujnak
1 SEX F
1 FAMC @F10@
1 FAMS @F63@
1 BIRT
2 DATE 7 DEC 1922
1 DEAT
2 DATE 27 MAY 1975
1 UID 8B352D55AEC1C84786FB8EDF122B73DC3A9B
1 SOUR @S_2117281167@
0 @I_1884986931@ INDI
1 NAME Edward W. /Bujnak/
2 GIVN Edward W.
2 SURN Bujnak
1 SEX M
1 FAMC @F10@
1 FAMS @F62@
1 BIRT
2 DATE 24 DEC 1923
1 DEAT
2 DATE 10 AUG 1990
1 UID 6E00B047CCF6B44BAC678367E9785051252B
1 SOUR @S_2117281167@
0 @I_1884986930@ INDI
1 NAME Delmar /Bujnak/
2 GIVN Delmar
2 SURN Bujnak
1 SEX M
1 FAMC @F10@
1 FAMS @F67@
1 BIRT
2 DATE 17 APR 1928
1 DEAT
2 DATE JUN 1966
1 UID 35B3A4F46EC956429953284DBBCB7A6B1BCC
0 @I_1884986929@ INDI
1 NAME Donald /Bujnak/
2 GIVN Donald
2 SURN Bujnak
1 SEX M
1 FAMC @F10@
1 FAMS @F65@
1 BIRT
2 DATE 25 JUN 1932
1 UID C711A1F4E98AC3488807203645483351E183
0 @I_1884986928@ INDI
1 NAME Charlotte /Bujnak/
2 GIVN Charlotte
2 SURN Bujnak
1 SEX F
1 FAMC @F10@
1 BIRT
2 DATE 21 DEC 1933
1 DEAT
2 DATE 28 NOV 1934
1 UID 4BD3CC97FD57FA4283440BD571198F81529C
0 @I_1884986927@ INDI
1 NAME Merlyn "Butch" /Bujnak/
2 GIVN Merlyn "Butch"
2 SURN Bujnak
1 SEX M
1 FAMC @F10@
1 FAMS @F42@
1 BIRT
2 DATE 29 NOV 1934
1 UID 413D320CD2AF734B93DAF45F92B202383934
0 @I_1884986926@ INDI
1 NAME Judith /Bujnak/
2 GIVN Judith
2 SURN Bujnak
1 SEX F
1 FAMC @F10@
1 FAMS @F56@
1 BIRT
2 DATE 11 JUN 1939
1 UID A33DD3A9250F5D4B883C0170B49BAA6ED405
0 @I_1884986925@ INDI
1 NAME Wayne /Sarver/
2 GIVN Wayne
2 SURN Sarver
1 SEX M
1 FAMS @F63@
1 UID 947239C5366C184A86D33A0400A522DC4237
0 @I_1884986924@ INDI
1 NAME Rose Mary /Macke/
2 GIVN Rose Mary
2 SURN Macke
1 SEX F
1 FAMS @F62@
1 BIRT
2 DATE 13 NOV 1922
1 UID 7B459C24A4D5FD4D8FC39AA2FB1FDB14DA2B
1 SOUR @S_2117281167@
0 @I_1884986923@ INDI
1 NAME David /Bujnak/
2 GIVN David
2 SURN Bujnak
1 SEX M
1 FAMC @F62@
1 FAMS @F44@
1 BIRT
2 DATE 26 JUL 1946
1 UID 51F517E0DCDF3449AA5FB90C28101215A20F
1 SOUR @S_2117281167@
0 @I_1884986922@ INDI
1 NAME Kenneth /Bujnak/
2 GIVN Kenneth
2 SURN Bujnak
1 SEX M
1 FAMC @F62@
1 BIRT
2 DATE 22 AUG 1947
1 DEAT
2 DATE 9 JAN 1976
1 UID 117A12A283228F42A4C6E82485DE74484A7A
0 @I_1884986921@ INDI
1 NAME Phyllis /Bujnak/
2 GIVN Phyllis
2 SURN Bujnak
1 SEX F
1 FAMC @F62@
1 BIRT
2 DATE 7 JUL 1949
1 UID B828514E1F978F46BD2FEED384FB7EBB6FD5
0 @I_1884986920@ INDI
1 NAME Pamela /Bujnak/
2 GIVN Pamela
2 SURN Bujnak
1 SEX F
1 FAMC @F62@
1 BIRT
2 DATE 28 OCT 1952
1 UID 093948A2CF4AA0499843623C6B0AD0BDA9F8
0 @I_1884986919@ INDI
1 NAME Cynthia /Bujnak/
2 GIVN Cynthia
2 SURN Bujnak
1 SEX F
1 FAMC @F62@
1 FAMS @F53@
1 BIRT
2 DATE 17 SEP 1954
1 UID DC81790A785BF84A89127A0F3B898F1F8BF3
0 @I_1884986918@ INDI
1 NAME Dennis /Bujnak/
2 GIVN Dennis
2 SURN Bujnak
1 SEX M
1 FAMC @F62@
1 FAMS @F50@
1 BIRT
2 DATE 6 NOV 1956
1 UID FFC22AF83480614BB75B38A00413BBD0CFC3
0 @I_1884986917@ INDI
1 NAME Gary /Bujnak/
2 GIVN Gary
2 SURN Bujnak
1 SEX M
1 FAMC @F62@
1 FAMS @F52@
1 BIRT
2 DATE 16 OCT 1958
1 UID FF9D5BC2C9A88545856B713CA4DA246396EA
0 @I_1884986916@ INDI
1 NAME Helen /Halbe/
2 GIVN Helen
2 SURN Halbe
1 SEX F
1 FAMS @F67@
1 UID 6318B9671F4A6A4D902FF8FB7176C11126A5
0 @I_1884986915@ INDI
1 NAME Doris /Eltrich/
2 GIVN Doris
2 SURN Eltrich
1 SEX F
1 FAMS @F65@
1 BIRT
2 DATE 12 AUG 1930
1 DEAT
2 DATE 17 MAR 1980
1 UID 7463B66F5B778142A6AAD6F72B5460810EF7
0 @I_1884986914@ INDI
1 NAME Beverly /Bujnak/
2 GIVN Beverly
2 SURN Bujnak
1 SEX F
1 FAMC @F65@
1 BIRT
2 DATE 23 FEB 1957
1 UID E1EF6971894C664F9223157B557E492DC2F6
0 @I_1884986913@ INDI
1 NAME Mark /Bujnak/
2 GIVN Mark
2 SURN Bujnak
1 SEX M
1 FAMC @F65@
1 FAMS @F49@
1 BIRT
2 DATE 19 AUG 1958
1 UID 537BA8324C635642AD638F30EA356FBA06E4
0 @I_1884986912@ INDI
1 NAME Kevin /Bujnak/
2 GIVN Kevin
2 SURN Bujnak
1 SEX M
1 FAMC @F65@
1 BIRT
2 DATE 8 FEB 1963
1 UID 25A6ADE2693C9644B0D2B294C44F149C64C9
0 @I_1884986911@ INDI
1 NAME Linda /Bujnak/
2 GIVN Linda
2 SURN Bujnak
1 SEX F
1 FAMC @F65@
1 BIRT
2 DATE 7 SEP 1964
1 UID 069DE2E7A8ECFD448D6D6D56B26112D9FC7B
0 @I_1884986910@ INDI
1 NAME Donna /Bujnak/
2 GIVN Donna
2 SURN Bujnak
1 SEX F
1 FAMC @F65@
1 BIRT
2 DATE 27 JAN 1967
1 UID FCF7AABC9BCAD4409A6BBE139C7CA464C8AB
0 @I_1884986909@ INDI
1 NAME Mary /Baumann/
2 GIVN Mary
2 SURN Baumann
1 SEX F
1 FAMS @F42@
1 BIRT
2 DATE 21 AUG 1940
1 UID DA1105AD8B2DE140A52F13D5F4B6DC47FF28
0 @I_1884986908@ INDI
1 NAME Scott /Bujnak/
2 GIVN Scott
2 SURN Bujnak
1 SEX M
1 FAMC @F42@
1 FAMS @F41@
1 BIRT
2 DATE 4 MAR 1958
1 UID A26CFC3FA5E88D4786A24C39AD311F23774F
0 @I_1884986907@ INDI
1 NAME Lisa /Bujnak/
2 GIVN Lisa
2 SURN Bujnak
1 SEX F
1 FAMC @F42@
1 BIRT
2 DATE 26 MAR 1966
1 UID D21DD8DED8288444B9F40D53155FE12DFC0E
0 @I_1884986906@ INDI
1 NAME Lori /Bujnak/
2 GIVN Lori
2 SURN Bujnak
1 SEX F
1 FAMC @F42@
1 BIRT
2 DATE 29 NOV 1967
1 UID E68B59E48770A64183B7DC2D472251F8811E
0 @I_1884986905@ INDI
1 NAME Kathleen /Barkman/
2 GIVN Kathleen
2 SURN Barkman
1 SEX F
1 FAMS @F41@
1 BIRT
2 DATE 14 MAR 1958
1 UID AE8FAC50730D7648A72EF0D730EB1CEE38C4
0 @I_1884986904@ INDI
1 NAME Amanda /Bujnak/
2 GIVN Amanda
2 SURN Bujnak
1 SEX F
1 FAMC @F41@
1 BIRT
2 DATE 16 OCT 1981
1 UID 5255D5326F610549AAE2DB783D20AA9648A3
0 @I_1884986903@ INDI
1 NAME Michelle /Bujnak/
2 GIVN Michelle
2 SURN Bujnak
1 SEX F
1 FAMC @F41@
1 BIRT
2 DATE 12 FEB 1988
1 UID B98053362781AA4AA4DACDE22AF9B1C82700
0 @I_1884986902@ INDI
1 NAME Kelly /Guckes/
2 GIVN Kelly
2 SURN Guckes
1 SEX F
1 FAMS @F49@
1 BIRT
2 DATE 25 SEP 1958
1 UID D1B46520EB449B4E859B1859584BCD2E5139
0 @I_1884986901@ INDI
1 NAME Michael /Bujnak/
2 GIVN Michael
2 SURN Bujnak
1 SEX M
1 FAMC @F49@
1 BIRT
2 DATE 16 JAN 1982
1 UID A1940879BF46B04087BFCB3BBF24AE5DE5E2
0 @I_1884986900@ INDI
1 NAME Kyle /Bujnak/
2 GIVN Kyle
2 SURN Bujnak
1 SEX M
1 FAMC @F49@
1 BIRT
2 DATE 8 JAN 1985
1 UID 1F5345D772080B41BDEDA7932D30087613DB
0 @I_1884986899@ INDI
1 NAME Jacklyn /Kellet/
2 GIVN Jacklyn
2 SURN Kellet
1 SEX F
1 FAMS @F44@
1 UID CDF08030F31C2F4EB1A7B79DD0D914DB3DBE
0 @I_1884986898@ INDI
1 NAME Misty /Bujnak/
2 GIVN Misty
2 SURN Bujnak
1 SEX F
1 FAMC @F44@
1 BIRT
2 DATE 3 MAR 1974
1 UID C17D51ED41894E4D80BC551EFA9B8EFDB014
0 @I_1884986897@ INDI
1 NAME Matthew /Bujnak/
2 GIVN Matthew
2 SURN Bujnak
1 SEX M
1 FAMC @F44@
1 BIRT
2 DATE 16 DEC 1980
1 UID 8D5C36B10EE23947B138FC104B25F5C761D0
0 @I_1884986896@ INDI
1 NAME Richard /Evans/
2 GIVN Richard
2 SURN Evans
1 SEX M
1 FAMS @F53@
1 BIRT
2 DATE 2 DEC 1954
1 UID DE16C82FB14FBE42BDF38237C1F1EBBDAE02
0 @I_1884986895@ INDI
1 NAME Eric /Evans/
2 GIVN Eric
2 SURN Evans
1 SEX M
1 FAMC @F53@
1 BIRT
2 DATE 28 JAN 1980
1 UID 4EC2F7E00116AA4EB288EE1B196347040002
0 @I_1884986894@ INDI
1 NAME Timothy /Evans/
2 GIVN Timothy
2 SURN Evans
1 SEX M
1 FAMC @F53@
1 BIRT
2 DATE 11 MAY 1982
1 UID B4A90D7799922A4AB7EB3423B746A7658205
0 @I_1884986893@ INDI
1 NAME Jill /Evans/
2 GIVN Jill
2 SURN Evans
1 SEX F
1 FAMC @F53@
1 BIRT
2 DATE 1 MAR 1985
1 UID 61B6D02F31A56F45AA58F4F5C801A4393180
0 @I_1884986892@ INDI
1 NAME Valerie /Schrand/
2 GIVN Valerie
2 SURN Schrand
1 SEX F
1 FAMS @F50@
1 UID 91EA88938AE46544989ED07DFB6F7A4F6326
0 @I_1884986891@ INDI
1 NAME Garard /Bujnak/
2 GIVN Garard
2 SURN Bujnak
1 SEX M
1 FAMC @F50@
1 BIRT
2 DATE 16 NOV 1985
1 UID C44BD4DE7AB3DB46BA85DDF637DF48A92811
0 @I_1884986890@ INDI
1 NAME Casey /Bujnak/
2 GIVN Casey
2 SURN Bujnak
1 FAMC @F50@
1 BIRT
2 DATE 13 SEP 1988
1 UID A8B670D3534ED644B433C585B948C111608A
0 @I_1884986889@ INDI
1 NAME Kathleen /Renth/
2 GIVN Kathleen
2 SURN Renth
1 SEX F
1 FAMS @F52@
1 UID DFE1A6BDB23C504FBCE7A33B965A2EA4F32F
0 @I_1884986888@ INDI
1 NAME Benjamin /Bujnak/
2 GIVN Benjamin
2 SURN Bujnak
1 SEX M
1 FAMC @F52@
1 BIRT
2 DATE 22 APR 1984
1 UID 52426EC2EE0E0940857B6F524A32201E840D
0 @I_1884986887@ INDI
1 NAME Brennen /Bujnak/
2 GIVN Brennen
2 SURN Bujnak
1 SEX M
1 FAMC @F52@
1 BIRT
2 DATE 28 MAY 1988
1 UID 81B8A8E610619449A49FC59FECB012DD47ED
0 @I_1884986886@ INDI
1 NAME Franklin /Kube/
2 GIVN Franklin
2 SURN Kube
1 SEX M
1 FAMS @F56@
1 BIRT
2 DATE 30 MAR 1934
1 UID B2837147E25297469593D3998BEE6D3AB2B6
0 @I_1884986885@ INDI
1 NAME Keith /Kube/
2 GIVN Keith
2 SURN Kube
1 SEX M
1 FAMC @F56@
1 BIRT
2 DATE 16 NOV 1971
1 UID 0B57A0A9077D744980A99CE0CDF4B8C7D1D8
0 @I_1884986884@ INDI
1 NAME Albert /Kitchen/
2 GIVN Albert
2 SURN Kitchen
1 SEX M
1 FAMS @F26@
1 UID 4F0D8E759E4A264D9E694629B537BCBD951D
0 @I_1884986883@ INDI
1 NAME Leatrice /Kitchen/
2 GIVN Leatrice
2 SURN Kitchen
1 SEX F
1 FAMC @F26@
1 UID 66327A0C530E684395F3C9C761D75A542876
0 @I_1884986882@ INDI
1 NAME Robert /Kitchen/
2 GIVN Robert
2 SURN Kitchen
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 12A; Enumeration District: 82-18
3 _APID 1,2442::143417444
1 SEX M
1 FAMC @F26@
1 BIRT
2 DATE abt 1931
2 PLAC Illinois
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 12A; Enumeration District: 82-18
3 _APID 1,2442::143417444
1 RESI
2 DATE 1935
2 PLAC Rural
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 12A; Enumeration District: 82-18
3 _APID 1,2442::143417444
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1940
2 PLAC Belleville, St Clair, Illinois, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 12A; Enumeration District: 82-18
3 _APID 1,2442::143417444
1 UID 8D48B79F7805F945A72D1C4E8D7535F14CAA
0 @I_1884986881@ INDI
1 NAME Irene /Kitchen/
2 GIVN Irene
2 SURN Kitchen
1 SEX F
1 FAMC @F26@
1 UID C757B508F6ED5048BE393F51A9FD0DFC8C75
0 @I_1884986880@ INDI
1 NAME Ilene /Kitchen/
2 GIVN Ilene
2 SURN Kitchen
1 SEX F
1 FAMC @F26@
1 UID D93375CADE65FA449A35C629097BD7967BA9
0 @I_1884986879@ INDI
1 NAME /Yates/
2 SURN Yates
1 SEX M
1 FAMS @F22@
1 UID B01CE27400E6FA4FAA92530C906B3D668A2E
1 SOUR @S_2117281168@
0 @I_1884986878@ INDI
1 NAME Charlie /Cinelli/
2 GIVN Charlie
2 SURN Cinelli
1 SEX M
1 FAMS @F70@
1 BIRT
2 DATE 9 FEB 1896
2 PLAC Italy
1 DEAT
2 DATE 17 AUG 1956
2 PLAC St. Louis, Missouri
2 SOUR @S_2117281169@
1 UID 7512E9E4EFE9124F8D44F948102F5DB4EF1F
1 SOUR @S_2117281168@
0 @I_1884986877@ INDI
1 NAME Genevive /Cinelli/
2 GIVN Genevive
2 SURN Cinelli
1 SEX F
1 FAMC @F70@
1 FAMS @F79@
1 UID F5FD9A6D9493564F80608D34D40E9FAA91D0
0 @I_1884986876@ INDI
1 NAME Mike /Metzger/
2 GIVN Mike
2 SURN Metzger
1 SEX M
1 FAMS @F79@
1 UID 479D389A83CC5546A1DB310B47BE3556E8AD
0 @I_1884986875@ INDI
1 NAME Donna Marie /Metzger/
2 GIVN Donna Marie
2 SURN Metzger
1 SEX F
1 FAMC @F79@
1 UID 2598A1CE7945EC4C9F108E81D6AB0C2895DD
0 @I_1884986874@ INDI
1 NAME /Williams/
2 SURN Williams
1 SEX M
1 FAMS @F34@
1 UID 530B7778F50D5A418769CA9A60C94520CCA1
1 SOUR @S_2117281168@
0 @I_1884986873@ INDI
1 NAME Keith Homer /Harrington/
2 GIVN Keith Homer
2 SURN Harrington
2 SOUR @S1105247268@
3 _APID 1,2324::175727
2 SOUR @S1105247297@
3 _APID 1,4283::61060
2 SOUR @S1084083971@
3 _APID 1,60525::23216418
1 NAME Keith /Williams/
2 GIVN Keith
2 SURN Williams
1 SEX M
1 FAMC @F35@
1 BIRT
2 DATE 24 December 1921
2 PLAC St. Louis City, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::23216418
1 _MILT
2 PLAC Missouri
2 SOUR @S1105247297@
3 _APID 1,4283::61060
1 RESI
2 PLAC Missouri, USA
2 SOUR @S1105247268@
3 _APID 1,2324::175727
1 DEAT
2 DATE 7 DEC 1941
2 PLAC Pearl Harbor, Hawaii
2 SOUR @S1105247297@
3 _APID 1,4283::61060
2 SOUR @S1084083971@
3 _APID 1,60525::23216418
1 BURI
2 PLAC Honolulu, Honolulu County, Hawaii, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::23216418
1 UID C15AC55944BA7744AA249745B19F11706D3B
0 @I_1884986872@ INDI
1 NAME /Cibon/
2 SURN Cibon
1 SEX M
1 FAMS @F17@
1 UID 140BF2D23A00E84CA2050A8613C76BEAB7AD
0 @I_1884986871@ INDI
1 NAME Minnie /[---?---]/
2 GIVN Minnie
2 SURN [---?---]
1 SEX F
1 FAMS @F24@
1 BIRT
2 DATE 1892
2 PLAC Bohemia
1 DEAT Y
1 UID 2AB12A56C99E054381F0E9F92B5E5F62A73D
0 @I_1884986870@ INDI
1 NAME Joseph /BRUNAT/
2 GIVN Joseph
2 SURN BRUNAT
1 SEX F
1 FAMC @F24@
1 BIRT
2 DATE 1910
2 PLAC St Louis, Missouri
1 UID 1770397E0B934A408A2F3E52E85ADB7642FE
0 @I_1884986869@ INDI
1 NAME John Carl /Rongey/
2 GIVN John Carl
2 SURN Rongey
1 NAME Jack //
2 GIVN Jack
1 SEX M
1 FAMS @F8@
1 BIRT
2 DATE 21 JUL 1933
1 DEAT
2 DATE 2 JAN 1996
2 PLAC St Louis , Missouri
1 UID 8EF1727C031BB345AA937A968C5882FA3094
0 @I_1884986868@ INDI
1 NAME Rudolf Joseph /BUJNAK/
2 GIVN Rudolf Joseph
2 SURN BUJNAK
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623 891; Page: 9A; Enumeration District: 108.
3 DATA
4 TEXT Name:  Rudolph Buynak
5 CONT Birth Date:  abt 1897
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1900
5 CONT Residence Place:  St Louis Ward 7, St Louis (Independent City), Missouri
3 _APID 1,7602::53549643
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Rudolph Biynak
5 CONT Birth Date:  abt 1896
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758282
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1235; Page: 21B; Enumeration District: 473; Image: 43.0.
3 DATA
4 TEXT Name:  Rudolph J Bujnak
5 CONT Birth Date:  abt 1897
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::1806715
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683745; Draft Board: 8.
3 DATA
4 TEXT Name:  Rudolph J Bujnak
5 CONT Birth Date:  19 Jul 1896
5 CONT Birth Place:  
5 CONT Residence Date:  
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::31255422
1 SEX M
1 FAMC @F57@
1 FAMS @F83@
1 BIRT
2 DATE 19 JUL 1896
2 PLAC St Louis , Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623 891; Page: 9A; Enumeration District: 108.
3 DATA
4 TEXT Name:  Rudolph Buynak
5 CONT Birth Date:  abt 1897
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1900
5 CONT Residence Place:  St Louis Ward 7, St Louis (Independent City), Missouri
3 _APID 1,7602::53549643
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Rudolph Biynak
5 CONT Birth Date:  abt 1896
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758282
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1235; Page: 21B; Enumeration District: 473; Image: 43.0.
3 DATA
4 TEXT Name:  Rudolph J Bujnak
5 CONT Birth Date:  abt 1897
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::1806715
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683745; Draft Board: 8.
3 DATA
4 TEXT Name:  Rudolph J Bujnak
5 CONT Birth Date:  19 Jul 1896
5 CONT Birth Place:  
5 CONT Residence Date:  
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::31255422
1 RESI
2 DATE 1900
2 PLAC St Louis Ward 7, St Louis (Independent City), Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623 891; Page: 9A; Enumeration District: 108.
3 DATA
4 TEXT Name:  Rudolph Buynak
5 CONT Birth Date:  abt 1897
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1900
5 CONT Residence Place:  St Louis Ward 7, St Louis (Independent City), Missouri
3 _APID 1,7602::53549643
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 8, St Louis (Independent City), Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 8, St Louis (Independent City), Missouri; Roll: T624_815; Page: 10A; Enumeration District: 124; Image: 60.
3 DATA
4 TEXT Name:  Rudolph Biynak
5 CONT Birth Date:  abt 1896
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1910
5 CONT Residence Place:  St Louis Ward 8, St Louis (Independent City), Missouri
3 _APID 1,7884::176758282
1 RESI
2 DATE 1930
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1235; Page: 21B; Enumeration District: 473; Image: 43.0.
3 DATA
4 TEXT Name:  Rudolph J Bujnak
5 CONT Birth Date:  abt 1897
5 CONT Birth Place:  Missouri
5 CONT Residence Date:  1930
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::1806715
1 RESI
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683745; Draft Board: 8.
3 DATA
4 TEXT Name:  Rudolph J Bujnak
5 CONT Birth Date:  19 Jul 1896
5 CONT Birth Place:  
5 CONT Residence Date:  
5 CONT Residence Place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::31255422
1 DEAT
2 DATE 29 JUL 1953
2 PLAC St Louis , Missouri
1 BURI
2 DATE 1 AUG 1953
2 PLAC Sts. Peter and Paul Cemtery, St. Louis
1 UID 52B7E0EF311771439112D14C7391BCC91D72
0 @I_1884986867@ INDI
1 NAME Mary /[---?---]/
2 GIVN Mary
2 SURN [---?---]
1 SEX F
1 FAMS @F83@
1 UID E65CE111B707D84E98D170596663B8EEB9F1
0 @I_1884986866@ INDI
1 NAME Dorothy /[---?---]/
2 GIVN Dorothy
2 SURN [---?---]
1 SEX F
1 FAMS @F58@
1 UID B31962F29858674EA8C70AAEF20058D60C9A
0 @I_1884986865@ INDI
1 NAME John /Burian/
2 GIVN John
2 SURN Burian
1 SEX M
1 FAMS @F94@
1 BIRT
2 PLAC Bohemia
2 SOUR @S_2117281178@
1 UID 6EEE4623E2915C4383FEADC37AE2138CC35A
0 @I6135340449@ INDI
1 NAME William Otto /Traxel/
2 GIVN William Otto
2 SURN Traxel
2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT birth date:  1892
5 CONT birth place:  Missouri
5 CONT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,6061::58309275
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  abt 1891
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::1642968
2 SOUR @S_2117281209@
3 PAGE Number: 500-50-6575; Issue State: Missouri; Issue Date: 1963.
3 DATA
4 TEXT Birth date:  26 Jan 1891
5 CONT Birth place:  
5 CONT Death date:  Jun 1982
5 CONT Death place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::63126245
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683857; Draft Board: 24.
3 DATA
4 TEXT Birth date:  26 Jan 1891
5 CONT Birth place:  Missouri;United States of America
5 CONT Residence date:  
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::31929633
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Jan 1891
5 CONT Birth place:  Illinois
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
3 _APID 1,7602::64905314
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1891
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
3 _APID 1,7884::176831872
2 SOUR @S_1793379691@
3 DATA
4 TEXT Birth date:  26 Nov 1891
5 CONT Birth place:  St Louis
3 _APID 1,1170::10773606
2 SOUR @S1098250959@
3 PAGE The National Archives at St. Louis; St. Louis, Missouri; World War II Draft Cards (Fourth Registration) for the State of Missouri; Record Group Title: Records of the Selective Service System; Record Group Number: 147; Box or Roll Number: 1127
3 _APID 1,1002::15988374
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 10/ Nov/ 1945; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/138429351/?article=516e2454-4394-4bb8-a1c9-e4a080075946&focus=0.25913516,0.071845286,0
4 CONC .3677261
3 _APID 1,61843::16926382
2 SOUR @S1084083971@
3 _APID 1,60525::150512260
2 SOUR @S_1794955964@
3 _APID 1,2469::624111488
1 SEX M
1 FAMC @F40@
1 FAMS @F18@
1 FAMS @F19@
1 BIRT
2 DATE 26 Jan 1891
2 PLAC Missouri
2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT birth date:  1892
5 CONT birth place:  Missouri
5 CONT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,6061::58309275
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  abt 1891
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::1642968
2 SOUR @S_2117281209@
3 PAGE Number: 500-50-6575; Issue State: Missouri; Issue Date: 1963.
3 DATA
4 TEXT Birth date:  26 Jan 1891
5 CONT Birth place:  
5 CONT Death date:  Jun 1982
5 CONT Death place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::63126245
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683857; Draft Board: 24.
3 DATA
4 TEXT Birth date:  26 Jan 1891
5 CONT Birth place:  Missouri;United States of America
5 CONT Residence date:  
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::31929633
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Jan 1891
5 CONT Birth place:  Illinois
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
3 _APID 1,7602::64905314
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1891
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
3 _APID 1,7884::176831872
2 SOUR @S_1793379691@
3 DATA
4 TEXT Birth date:  26 Nov 1891
5 CONT Birth place:  St Louis
3 _APID 1,1170::10773606
2 SOUR @S1098250959@
3 PAGE The National Archives at St. Louis; St. Louis, Missouri; World War II Draft Cards (Fourth Registration) for the State of Missouri; Record Group Title: Records of the Selective Service System; Record Group Number: 147; Box or Roll Number: 1127
3 _APID 1,1002::15988374
1 RESI
2 DATE 1900
2 PLAC St. Louis city, St. Louis, Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Jan 1891
5 CONT Birth place:  Illinois
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
3 _APID 1,7602::64905314
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 25, Saint Louis City, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1891
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
3 _APID 1,7884::176831872
2 SOUR @S_1794955964@
3 _APID 1,2469::624111488
1 EVEN
2 TYPE William Traxel and Louise Brown Marriage License
2 DATE 22 Jun 1911
2 PLAC St. Louis, Missouri
2 SOUR @S1098251295@
3 PAGE William Traxel and Louise Brown Marriage License 22 
3 OBJE @O37@
2 OBJE @O37@
1 RESI
2 DATE 1917
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281763@
3 PAGE Registration Location: St Louis (Independent City) County, Missouri; Roll: 1683857; Draft Board: 24.
3 DATA
4 TEXT Birth date:  26 Jan 1891
5 CONT Birth place:  Missouri;United States of America
5 CONT Residence date:  
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6482::31929633
1 RESI
2 DATE 1920
2 PLAC St Louis Ward 13, St Louis (Independent City), Missouri
2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT birth date:  1892
5 CONT birth place:  Missouri
5 CONT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,6061::58309275
1 EVEN
2 TYPE William and Louise Traxel Divorce

2 PLAC St. Louis, Missouri
2 SOUR @S1098
3 OBJE @O12@
2 OBJE @O12@
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1930
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  abt 1891
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::1642968
1 CENS ED 96-237 bk27
2 DATE 1940
2 PLAC St Louis , Missouri
1 RESI Relation to Head: Head
2 PLAC St Louis, Missouri, USA
2 SOUR @S1098250959@
3 PAGE The National Archives at St. Louis; St. Louis, Missouri; World War II Draft Cards (Fourth Registration) for the State of Missouri; Record Group Title: Records of the Selective Service System; Record Group Number: 147; Box or Roll Number: 1127
3 _APID 1,1002::15988374
1 DEAT
2 DATE 26 June 1982
2 PLAC Saint Louis, Saint Louis, Missouri, United States of America
2 SOUR @S_2117281209@
3 PAGE Number: 500-50-6575; Issue State: Missouri; Issue Date: 1963.
3 DATA
4 TEXT Birth date:  26 Jan 1891
5 CONT Birth place:  
5 CONT Death date:  Jun 1982
5 CONT Death place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::63126245
2 SOUR @S1084083971@
3 _APID 1,60525::150512260
1 BURI
2 PLAC Bel-Nor, St. Louis County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::150512260
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
1 OBJE @O12@
1 OBJE @O37@
1 _MTTAG @T24@
1 _MTTAG @T8@
0 @I6135340450@ INDI
1 NAME Louise /Brown/
2 GIVN Louise
2 SURN Brown
2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT birth date:  1894
5 CONT birth place:  Missouri
3 _APID 1,6061::58309276
2 SOUR @S_2128957019@
3 DATA
4 TEXT Birth date:  abt 1895
5 CONT Birth place:  
5 CONT Marriage date:  30 Jul 1931
5 CONT Marriage place:  St Louis, Missouri
3 _APID 1,1171::507696089
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1240; Page: 1A; Enumeration District: 140; Image: 155.0; FHL microfilm: 2340975.
3 DATA
4 TEXT Birth date:  abt 1894
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::3604443
2 SOUR @S_2128957019@
3 DATA
4 TEXT Marriage date:  21 May 1931
5 CONT Marriage place:  Festus, Jefferson, MO
3 _APID 1,1171::504673969
2 SOUR @S1084083971@
3 _APID 1,60525::61081258
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::502244813
2 SOUR @S1084083263@
3 _APID 1,60901::13739380
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 25, St Louis (Independent City), Missouri; Page: 12; Enumeration District: 0374; FHL microfilm: 1240899
3 _APID 1,7602::64919195
1 NAME Louisa /Brown/
2 GIVN Louisa
2 SURN Brown
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 23, Saint Louis City, Missouri; Roll: T624_821; Page: 8B; Enumeration District: 0355; FHL microfilm: 1374834
3 _APID 1,7884::190000660
1 NAME Louise /Moses/
2 GIVN Louise
2 SURN Moses
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 13/ Apr/ 1952; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140077736/?article=91926f04-42e0-498d-8ae1-bea6e7abdd75&focus=0.23261568,0.30236813,0.
4 CONC 3347283,
3 _APID 1,61843::512786003
1 SEX F
1 FAMC @F95@
1 FAMS @F18@
1 FAMS @F23@
1 BIRT
2 DATE 18 FEB 1894
2 PLAC St Louis, Missouri
2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT birth date:  1894
5 CONT birth place:  Missouri
3 _APID 1,6061::58309276
2 SOUR @S_2128957019@
3 DATA
4 TEXT Birth date:  abt 1895
5 CONT Birth place:  
5 CONT Marriage date:  30 Jul 1931
5 CONT Marriage place:  St Louis, Missouri
3 _APID 1,1171::507696089
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1240; Page: 1A; Enumeration District: 140; Image: 155.0; FHL microfilm: 2340975.
3 DATA
4 TEXT Birth date:  abt 1894
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::3604443
2 SOUR @S1084083971@
3 _APID 1,60525::61081258
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::502244813
2 SOUR @S1084083263@
3 _APID 1,60901::13739380
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 23, Saint Louis City, Missouri; Roll: T624_821; Page: 8B; Enumeration District: 0355; FHL microfilm: 1374834
3 _APID 1,7884::190000660
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 25, St Louis (Independent City), Missouri; Page: 12; Enumeration District: 0374; FHL microfilm: 1240899
3 _APID 1,7602::64919195
1 MARR
2 DATE 30 Jul 1931
2 PLAC St Louis, Missouri
2 SOUR @S_2128957019@
3 DATA
4 TEXT Birth date:  abt 1895
5 CONT Birth place:  
5 CONT Marriage date:  30 Jul 1931
5 CONT Marriage place:  St Louis, Missouri
3 _APID 1,1171::507696089
2 SOUR @S_2128957019@
3 DATA
4 TEXT Marriage date:  21 May 1931
5 CONT Marriage place:  Festus, Jefferson, MO
3 _APID 1,1171::504673969
1 RESI Marital Status: Single; Relation to Head: Adopted Daughter
2 DATE 1900
2 PLAC St Louis Ward 25, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 25, St Louis (Independent City), Missouri; Page: 12; Enumeration District: 0374; FHL microfilm: 1240899
3 _APID 1,7602::64919195
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC St Louis Ward 23, Saint Louis City, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 23, Saint Louis City, Missouri; Roll: T624_821; Page: 8B; Enumeration District: 0355; FHL microfilm: 1374834
3 _APID 1,7884::190000660
1 EVEN
2 TYPE William Traxel and Louise Brown Marriage License
2 DATE 22 Jun 1911
2 PLAC St. Louis, Missouri
2 SOUR @S1098251295@
3 PAGE William Traxel and Louise Brown Marriage
3 OBJE @O37@
2 OBJE @O37@
1 RESI
2 DATE 1920
2 PLAC St Louis Ward 13, St Louis (Independent City), Missouri
2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
5 CONT birth date:  1894
5 CONT birth place:  Missouri
3 _APID 1,6061::58309276
1 EVEN
2 TYPE William and Louise Traxel Divorce

2 PLAC St. Louis, Missouri
2 SOUR @S1098251884@
3 PAGE William and Louise Traxel
3 OBJE @O12@
2 OBJE @O12@
1 RESI
2 DATE 1930
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1240; Page: 1A; Enumeration District: 140; Image: 155.0; FHL microfilm: 2340975.
3 DATA
4 TEXT Birth date:  abt 1894
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::3604443
1 EVEN
2 TYPE Louise Moses nee Brown
2 DATE 13 Apr 1952
2 PLAC St. Louis, Missouri
2 SOUR @S1090315268@
3 PAGE Louise Moses nee Brown 13 
3 OBJE @O41@
2 OBJE @O41@
1 RESI
2 PLAC 2523 A Benton St.
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 13/ Apr/ 1952; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140077736/?article=91926f04-42e0-498d-8ae1-bea6e7abdd75&focus=0.23261568,0.30236813,0.
4 CONC 3347283,
3 _APID 1,61843::512786003
1 DEAT
2 DATE 12 APR 1952
2 PLAC St Louis, Missouri
2 SOUR @S1084083971@
3 _APID 1,60525::61081258
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 13/ Apr/ 1952; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140077736/?article=91926f04-42e0-498d-8ae1-bea6e7abdd75&focus=0.23261568,0.30236813,0.
4 CONC 3347283,
3 _APID 1,61843::512786003
1 BURI
2 DATE 15 Apr 1952
2 PLAC Saint Louis, St. Louis City, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::61081258
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 13/ Apr/ 1952; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140077736/?article=91926f04-42e0-498d-8ae1-bea6e7abdd75&focus=0.23261568,0.30236813,0.
4 CONC 3347283,
3 _APID 1,61843::512786003
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
1 OBJE @O12@
1 OBJE @O37@
1 OBJE @O41@
0 @I611 NAME Dorothea /Traxel/
2 GIVN Dorothea2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT birth date:  1917
5 CONT birth place:  Missouri
5 CONT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,6061::58309278
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St. Louis (Independent City), Missouri; Page: 27A; Enumeration District: 0437; FHL microfilm: 2340968
3 _APID 1,6224::1642985
2 SOUR @S1105247080@
3 PAGE New Jersey State Archives; Trenton, New Jersey; Marriage Indexes; Index Type: Bride; Year Range: 1943; Surname Range: A - Z
3 _APID 1,61253::901028315
2 SOUR @S1105247098@
3 PAGE Year Range: 1969; Surname Range: O-Z; Title: New Jersey, Death Indexes, 1904-2000
3 _APID 1,61260::2547703
2 SOUR @S1102909201@
3 PAGE Publication Date: 28/ Sep/ 1943; Publication Place: New Brunswick, New Jersey, USA; URL: https://www.newspapers.com/image/314728090/?article=1a0c815b-792c-4913-a6d7-4f24e24d6c92&focus=0.4889215,0.7131689,0.6132455,0.826565&xid=3398
3 _APID 1,62116::34754811
1 NAME Dor othv /Schiffo/
2 GIVN Dor othv
2 SURN Schiffo
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 13/ Apr/ 1952; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140077736/?article=91926f04-42e0-498d-8ae1-bea6e7abdd75&focus=0.23261568,0.30236813,0.
4 CONC 3347283,
3 _APID 1,61843::62323219
1 SEX F
1 FAMC @F18@
1 FAMS @F25@
1 BIRT
2 DATE 1917
2 PLAC St. Louis, Missouri
2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT birth date:  1917
5 CONT birth place:  Missouri
5 CONT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,6061::58309278
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St. Louis (Independent City), Missouri; Page: 27A; Enumeration District: 0437; FHL microfilm: 2340968
3 _APID 1,6224::1642985
1 RESI
2 DATE 1920
2 PLAC St Louis Ward 13, St Louis (Independent City), Missouri
2 SOUR @S_2117281409@
3 PAGE 1920 United States Federal Census
3 DATA
4 TEXT birth date:  1917
5 CONT birth place:  Missouri
5 CONT residence date:  1920
5 CONT residence place:  St Louis Ward 13, St Louis (Independent City), Missouri
3 _APID 1,6061::58309278
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1930
2 PLAC St Louis, St. Louis (Independent City), Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St. Louis (Independent City), Missouri; Page: 27A; Enumeration District: 0437; FHL microfilm: 2340968
3 _APID 1,6224::1642985
1 RESI
2 DATE Abt 1943
2 PLAC 91 Mercer Avenue , Plainfield
2 SOUR @S1102909201@
3 PAGE Publication Date: 28/ Sep/ 1943; Publication Place: New Brunswick, New Jersey, USA; URL: https://www.newspapers.com/image/314728090/?article=1a0c815b-792c-4913-a6d7-4f24e24d6c92&focus=0.4889215,0.7131689,0.6132455,0.826565&xid=3398
3 _APID 1,62116::34754811
1 EVEN
2 TYPE Marriage announcement
2 DATE 28 Sep 1943
2 PLAC New Brunswick, New Jersey
2 SOUR @S1105247148@
3 PAGE  28 
3 OBJE @O9@
2 OBJE @O9@
1 DEAT
2 DATE 24 Aug 1969
2 PLAC Pennsylvania, USA
2 SOUR @S1105247098@
3 PAGE Year Range: 1969; Surname Range: O-Z; Title: New Jersey, Death Indexes, 1904-2000
3 _APID 1,61260::2547703
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
1 OBJE @O9@
0 @I6146400102@ INDI
1 NAME Jacob /Traxel/
2 GIVN Jacob
2 SURN Traxel
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Nov 1862
5 CONT Birth place:  Germany
5 CONT Marriage date:  1887
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
5 CONT Arrival date:  1888
5 CONT Arrival place:  
3 _APID 1,7602::64905311
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1862
5 CONT Birth place:  Germany
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
5 CONT Arrival date:  1881
5 CONT Arrival place:  
3 _APID 1,7884::15081640
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  27 Nov 1861
5 CONT Birth place:  
5 CONT Death date:  1 Feb 1913
5 CONT Death place:  
3 _APID 1,70596::486703
2 SOUR @S1092363729@
3 _APID 1,9866::67768869
2 SOUR @S1092363802@
3 _APID 1,61370::1292119
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::160796908
2 SOUR @S1084083263@
3 _APID 1,60901::611519868
2 SOUR @S1092364231@
3 _APID 1,60382::1688799
2 SOUR @S_1794955984@
3 _APID 1,70465::471585
2 SOUR @S_1794955964@
3 _APID 1,2469::1100342859
2 SOUR @S_1794955964@
3 _APID 1,2469::624111487
1 SEX M
1 FAMC @F45@
1 FAMS @F40@
1 BIRT
2 DATE 27 Nov 1861
2 PLAC Germany
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Nov 1862
5 CONT Birth place:  Germany
5 CONT Marriage date:  1887
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
5 CONT Arrival date:  1888
5 CONT Arrival place:  
3 _APID 1,7602::64905311
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1862
5 CONT Birth place:  Germany
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
5 CONT Arrival date:  1881
5 CONT Arrival place:  
3 _APID 1,7884::15081640
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  27 Nov 1861
5 CONT Birth place:  
5 CONT Death date:  1 Feb 1913
5 CONT Death place:  
3 _APID 1,70596::486703
2 SOUR @S1092363802@
3 _APID 1,61370::1292119
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::160796908
1 BAPM
2 DATE 6 Dec 1861
2 PLAC Evangelisch,Essingen,Pfalz,Bavaria
2 SOUR @S1092363729@
3 _APID 1,9866::67768869
1 EVEN
2 TYPE Arrival
2 DATE 1888
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Nov 1862
5 CONT Birth place:  Germany
5 CONT Marriage date:  1887
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
5 CONT Arrival date:  1888
5 CONT Arrival place:  
3 _APID 1,7602::64905311
1 RESI
2 DATE 1900
2 PLAC St. Louis city, St. Louis, Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Nov 1862
5 CONT Birth place:  Germany
5 CONT Marriage date:  1887
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. L5 CONT Arrival date:  1888
5 CONT Arrival place:  
3 _APID 1,7602::64905311
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 25, Saint Louis City, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1862
5 CONT Birth place:  Germany
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
5 CONT Arrival date:  1881
5 CONT Arrival place:  
3 _APID 1,7884::15081640
2 SOUR @S_1794955964@
3 _APID 1,2469::624111487
1 DEAT
2 DATE 1 FEB 1913
2 PLAC St. Louis City, St. Louis City, Missouri, USA
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  27 Nov 1861
5 CONT Birth place:  
5 CONT Death date:  1 Feb 1913
5 CONT Death place:  
3 _APID 1,70596::486703
2 SOUR @S1092364231@
3 _APID 1,60382::1688799
2 SOUR @S_1794955984@
3 _APID 1,70465::471585
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
0 @I6146400104@ INDI
1 NAME Barbara /Kessler/
2 GIVN Barbara
2 SURN Kessler
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Jun 1863
5 CONT Birth place:  Germany
5 CONT Marriage date:  1887
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
5 CONT Arrival date:  1888
5 CONT Arrival place:  
3 _APID 1,7602::64905312
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1865
5 CONT Birth place:  Germany
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
5 CONT Arrival date:  1887
5 CONT Arrival place:  
3 _APID 1,7884::176831871
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  29 Jun 1864
5 CONT Birth place:  
5 CONT Death date:  5 Feb 1944
5 CONT Death place:  
3 _APID 1,70596::466404
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 25, St Louis (Independent City), Missouri; Roll: T625_960; Page: 6A; Enumeration District: 494; Image: .
3 DATA
4 TEXT Birth date:  abt 1865
5 CONT Birth place:  Germany
5 CONT Residence date:  1920
5 CONT Residence place:  St Louis Ward 25, St Louis (Independent City), Missouri
5 CONT Arrival date:  1887
5 CONT Arrival place:  
3 _APID 1,6061::103122392
2 SOUR @S_1794955964@
3 DATA
4 TEXT Residence date:  1914
5 CONT Residence place:  St Louis, Missouri, USA
3 _APID 1,2469::619597310
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  abt 1865
5 CONT Birth place:  Germany
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
5 CONT Arrival date:  1887
5 CONT Arrival place:  
3 _APID 1,6224::1825217
2 SOUR @S1092363802@
3 _APID 1,61370::901292119
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::310796908
2 SOUR @S1084083263@
3 _APID 1,60901::761519868
2 SOUR @S1092363470@
3 PAGE The St. Louis Star and Times; Publication Date: 21/ May/ 1937; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/204299112/?article=c07b9f71-7949-4a11-be17-d32f89dd0928&focus=0.3660771,0.5996844
4 CONC ,0.49055
3 _APID 1,61843::87575501
2 SOUR @S1092364231@
3 _APID 1,60382::1236283
2 SOUR @S_1794955964@
3 _APID 1,2469::624747193
1 SEX F
1 FAMC @F13@
1 FAMS @F40@
1 BIRT
2 DATE 29 Jun 1864
2 PLAC Rinefultz, Germany
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Jun 1863
5 CONT Birth place:  Germany
5 CONT Marriage date:  1887
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
5 CONT Arrival date:  1888
5 CONT Arrival place:  
3 _APID 1,7602::64905312
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1865
5 CONT Birth place:  Germany
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
5 CONT Arrival date:  1887
5 CONT Arrival place:  
3 _APID 1,7884::176831871
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  29 Jun 1864
5 CONT Birth place:  
5 CONT Death date:  5 Feb 1944
5 CONT Death place:  
3 _APID 1,70596::466404
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 25, St Louis (Independent City), Missouri; Roll: T625_960; Page: 6A; Enumeration District: 494; Image: .
3 DATA
4 TEXT Birth date:  abt 1865
5 CONT Birth place:  Germany
5 CONT Residence date:  1920
5 CONT Residence place:  St Louis Ward 25, St Louis (Independent City), Missouri
5 CONT Arrival date:  1887
5 CONT Arrival place:  
3 _APID 1,6061::103122392
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  abt 1865
5 CONT Birth place:  Germany
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
5 CONT Arrival date:  1887
5 CONT Arrival place:  
3 _APID 1,6224::1825217
2 SOUR @S1092363802@
3 _APID 1,61370::901292119
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::310796908
2 SOUR @S1092364231@
3 _APID 1,60382::1236283
1 EVEN
2 TYPE Arrival
2 DATE 1887
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  abt 1865
5 CONT Birth place:  Germany
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
5 CONT Arrival date:  1887
5 CONT Arrival place:  
3 _APID 1,6224::1825217
1 EVEN
2 TYPE Arrival
2 DATE 1888
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Jun 1863
5 CONT Birth place:  Germany
5 CONT Marriage date:  1887
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
5 CONT Arrival date:  1888
5 CONT Arrival place:  
3 _APID 1,7602::64905312
1 RESI
2 DATE 1900
2 PLAC St. Louis city, St. Louis, Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Jun 1863
5 CONT Birth place:  Germany
5 CONT Marriage date:  1887
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
5 CONT Arrival date:  1888
5 CONT Arrival place:  
3 _APID 1,7602::64905312
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 25, Saint Louis City, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1865
5 CONT Birth place:  Germany
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
5 CONT Arrival date:  1887
5 CONT Arrival place:  
3 _APID 1,7884::176831871
1 RESI
2 DATE 1913
2 PLAC St Louis, Missouri, USA
2 SOUR @S_1794955964@
3 _APID 1,2469::624747193
1 RESI
2 DATE 1914
2 PLAC St Louis, Missouri, USA
2 SOUR @S_1794955964@
3 DATA
4 TEXT Residence date:  1914
5 CONT Residence place:  St Louis, Missouri, USA
3 _APID 1,2469::619597310
1 RESI
2 DATE 1920
2 PLAC St Louis Ward 25, St Louis (Independent City), Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 25, St Louis (Independent City), Missouri; Roll: T625_960; Page: 6A; Enumeration District: 494; Image: .
3 DATA
4 TEXT Birth date:  abt 1865
5 CONT Birth place:  Germany
5 CONT Residence date:  1920
5 CONT Residence place:  St Louis Ward 25, St Louis (Independent City), Missouri
5 CONT Arrival date:  1887
5 CONT Arrival place:  
3 _APID 1,6061::103122392
1 RESI
2 DATE 1930
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  abt 1865
5 CONT Birth place:  Germany
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
5 CONT Arrival date:  1887
5 CONT Arrival place:  
3 _APID 1,6224::1825217
1 EVEN
2 TYPE Barbara Traxek nee Kessler Obit
2 DATE 6 Feb 1944
2 PLAC St. Louis, Missouri
2 SOUR @S1092364269@
3 PAGE Barbara Traxek nee Kessler Obit 6 
3 OBJE @O24@
2 OBJE @O24@
1 DEAT
2 DATE 2 Feb 1944
2 PLAC St Louis, Missouri
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  29 Jun 1864
5 CONT Birth place:  
5 CONT Death date:  5 Feb 1944
5 CONT Death place:  
3 _APID 1,70596::466404
2 SOUR @S1092364231@
3 _APID 1,60382::1236283
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
1 OBJE @O24@
0 @I6146400827@ INDI
1 NAME Pauline /Traxel/
2 GIVN Pauline
2 SURN Traxel
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Jul 1888
5 CONT Birth place:  Illinois
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
3 _APID 1,7602::64905313
2 SOUR @S1084083263@
3 _APID 1,60901::770875556
2 SOUR @S1098251497@
3 PAGE Virginia Department of Health; Richmond, Virginia; Virginia, Marriages, 1936-2014; Roll: 101168588
3 _APID 1,9279::1527934378
2 SOUR @S1092363470@
3 PAGE The St. Louis Star and Times; Publication Date: 21/ May/ 1937; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/204299112/?article=c07b9f71-7949-4a11-be17-d32f89dd0928&focus=0.3660771,0.5996844
4 CONC ,0.49055
3 _APID 1,61843::519811118
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T625_960; Page: 3B; Enumeration District: 489
3 _APID 1,6061::103113589
1 NAME Pauline E /Maloney/
2 GIVN Pauline E
2 SURN Maloney
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: T624_822; Page: 4B; Enumeration District: 0404; FHL microfilm: 1374835
3 _APID 1,7884::176828372
1 SEX F
1 FAMC @F40@
1 FAMS @F36@
1 BIRT
2 DATE Jul 1888
2 PLAC Illinois
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Jul 1888
5 CONT Birth place:  Illinois
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
3 _APID 1,7602::64905313
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: T624_822; Page: 4B; Enumeration District: 0404; FHL microfilm: 1374835
3 _APID 1,7884::176828372
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T625_960; Page: 3B; Enumeration District: 489
3 _APID 1,6061::103113589
1 RESI
2 DATE 1900
2 PLAC St. Louis city, St. Louis, Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Jul 1888
5 CONT Birth place:  Illinois
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
3 _APID 1,7602::64905313
1 RESI Marital Status: Married; Relation to Head of House: Wife
2 DATE 1910
2 PLAC St Louis Ward 25, Saint Louis City, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: T624_822; Page: 4B; Enumeration District: 0404; FHL microfilm: 1374835
3 _APID 1,7884::176828372
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1920
2 PLAC St Louis Ward 24, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T625_960; Page: 3B; Enumeration District: 489
3 _APID 1,6061::103113589
1 EVEN
2 TYPE Pauline Traxel Maloney Obituary
2 DATE 21 May 1937
2 PLAC St. Louis, Missouri
2 SOUR @S1098251452@
3 PAGE Pauline Traxel Maloney Obituary 21 
3 OBJE @O7@
2 OBJE @O7@
1 RESI
2 PLAC 4711 Minnesota avenue
2 SOUR @S1092363470@
3 PAGE The St. Louis Star and Times; Publication Date: 21/ May/ 1937; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/204299112/?article=c07b9f71-7949-4a11-be17-d32f89dd0928&focus=0.3660771,0.5996844
4 CONC ,0.49055
3 _APID 1,61843::519811118
1 DEAT
2 DATE May 1937
2 PLAC St Louis , Missouri
2 SOUR @S1092363470@
3 PAGE The St. Louis Star and Times; Publication Date: 21/ May/ 1937; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/204299112/?article=c07b9f71-7949-4a11-be17-d32f89dd0928&focus=0.3660771,0.5996844
4 CONC ,0.49055
3 _APID 1,61843::519811118
1 BURI
2 DATE 22 May
2 SOUR @S1092363470@
3 PAGE The St. Louis Star and Times; Publication Date: 21/ May/ 1937; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/204299112/?article=c07b9f71-7949-4a11-be17-d32f89dd0928&focus=0.3660771,0.5996844
4 CONC ,0.49055
3 _APID 1,61843::519811118
1 OBJE @O7@
0 @I6146400828@ INDI
1 NAME Augusta K /Traxel/
2 GIVN Augusta K
2 SURN Traxel
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Nov 1895
5 CONT Birth place:  Missouri
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
3 _APID 1,7602::64905316
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1895
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
3 _APID 1,7884::176831874
2 SOUR @S1084083263@
3 _APID 1,60901::11519868
1 SEX F
1 FAMC @F40@
1 BIRT
2 DATE Nov 1895
2 PLAC Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Nov 1895
5 CONT Birth place:  Missouri
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
3 _APID 1,7602::64905316
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1895
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
3 _APID 1,7884::176831874
2 SOUR @S1084083263@
3 _APID 1,60901::11519868
1 RESI
2 DATE 1900
2 PLAC St. Louis city, St. Louis, Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T623_899; Page: 3B; Enumeration District: 366.
3 DATA
4 TEXT Birth date:  Nov 1895
5 CONT Birth place:  Missouri
5 CONT Residence date:  1900
5 CONT Residence place:  St. Louis city, St. Louis, Missouri
3 _APID 1,7602::64905316
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 25, Saint Louis City, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1895
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
3 _APID 1,7884::176831874
1 EVEN
2 TYPE Augusta Traxel Feldmeier Obituary
2 DATE 3 Jun 1974
2 PLAC St. Louis, Missouri
2 SOUR @S1098253065@
3 PAGE Augusta Traxel Feldmeier Obituary 3 
3 OBJE @O59@
2 OBJE @O59@
1 DEAT
2 DATE 1974
2 PLAC St Louis , Missouri
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
1 OBJE @O59@
0 @I6146401696@ INDI
1 NAME Jacob C /Traxel/
2 GIVN Jacob C
2 SURN Traxel
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1892
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
3 _APID 1,7884::176831873
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::10796908
1 SEX M
1 FAMC @F40@
1 BIRT
2 DATE 1892
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1892
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
3 _APID 1,7884::176831873
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::10796908
1 RESI
2 DATE 1910
2 PLAC St Louis Ward 25, Saint Louis City, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: ; Page: ; Enumeration District: ; Image: .
3 DATA
4 TEXT Birth date:  1892
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  St Louis Ward 25, Saint Louis City, Missouri
3 _APID 1,7884::176831873
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
0 @I6146415679@ INDI
1 NAME Heinrich /Traxel/
2 GIVN Heinrich
2 SURN Traxel
2 SOUR @S1092363802@
3 _APID 1,61370::1051292119
2 SOUR @S1092363729@
3 _APID 1,9866::55798579
2 SOUR @S1092364469@
3 _APID 1,61229::486651
2 SOUR @S1092364486@
3 _APID 1,61112::1351147196
1 NAME Heinrich /Traxel/
2 GIVN Heinrich
2 SURN Traxel
2 SOUR @S1092363729@
3 _APID 1,9866::67768868
1 SEX M
1 FAMC @F71@
1 FAMS @F45@
1 BIRT
2 DATE 11 Okt 1837
2 PLAC Germany
2 SOUR @S1092363729@
3 _APID 1,9866::55798579
2 SOUR @S1092364469@
3 _APID 1,61229::486651
1 BAPM
2 DATE 15 Okt 1837
2 PLAC Evangelisch,Lemberg,Pfalz,Bavaria
2 SOUR @S1092363729@
3 _APID 1,9866::55798579
2 SOUR @S1092364469@
3 _APID 1,61229::486651
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Trees
0 @I6862845710@ INDI
1 NAME Erwin Henry /VON BEHREN/ Sr
2 GIVN Erwin Henry
2 SURN VON BEHREN
2 NSFX Sr
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332594
2 SOUR @S_1733211944@
3 DATA
4 TEXT Birth date:  22 Oct 1907
5 CONT Birth place:  
5 CONT Residence date:  1935-1993
5 CONT Residence place:  Beaufort, MO
3 _APID 1,1732::363134957
2 SOUR @S_1733211932@
3 DATA
4 TEXT Birth date:  Abt 1908
5 CONT Birth place:  
5 CONT Death date:  abt 2000
5 CONT Death place:  Washington MO
3 _APID 1,70050::22797325
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: St Louis, St Louis City, Missouri; Roll: T627_2195; Page: 3B; Enumeration District: 96-342.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  St Louis, St Louis City, Missouri, United States
3 _APID 1,2442::95702831
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2A; Enumeration District: 2; Image: 222.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773331
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376452
2 SOUR @S1090315102@
3 PAGE The National Archives in St. Louis, Missouri; St. Louis, Missouri; WWII Draft Registration Cards for Missouri, 10/16/1940 - 03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 336
3 _APID 1,2238::15679693
2 SOUR @S1090315114@
3 PAGE City: Beaufort; State: Missouri; Year(s): 1994-1995
3 _APID 1,7339::239348518
2 SOUR @S1084083971@
3 _APID 1,60525::72866534
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 16/ Mar/ 1950; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513219423/?article=164d9a1a-d2c2-433d-bcc3-8c4f3e127928&focus=0.30740273,0.6014139,0.4370
4 CONC 2918,0.8
3 _APID 1,61843::18876221
2 SOUR @S_1733212834@
3 _APID 1,1788::117259399
1 SEX M
1 FAMC @F91@
1 FAMS @F1@
1 BIRT
2 DATE 10/27/1907
2 PLAC Franklin Co. Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332594
2 SOUR @S_1733211944@
3 DATA
4 TEXT Birth date:  22 Oct 1907
5 CONT Birth place:  
5 CONT Residence date:  1935-1993
5 CONT Residence place:  Beaufort, MO
3 _APID 1,1732::363134957
2 SOUR @S_1733211932@
3 DATA
4 TEXT Birth date:  Abt 1908
5 CONT Birth place:  
5 CONT Death date:  abt 2000
5 CONT Death place:  Washington MO
3 _APID 1,70050::22797325
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: St Louis, St Louis City, Missouri; Roll: T627_2195; Page: 3B; Enumeration District: 96-342.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  St Louis, St Louis City, Missouri, United States
3 _APID 1,2442::95702831
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2A; Enumeration District: 2; Image: 222.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773331
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376452
2 SOUR @S1090315102@
3 PAGE The National Archives in St. Louis, Missouri; St. Louis, Missouri; WWII Draft Registration Cards for Missouri, 10/16/1940 - 03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 336
3 _APID 1,2238::15679693
2 SOUR @S1084083971@
3 _APID 1,60525::72866534
1 RESI
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332594
1 RESI
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376452
1 RESI
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2A; Enumeration District: 2; Image: 222.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773331
1 EVEN
2 TYPE Erwin Von Behren Sr Birthday
2 DATE 27 Oct 1932
2 PLAC New Haven, Missouri
2 SOUR @S1099090149@
3 PAGE Erwin Von Behren Sr Birthday 27 
3 OBJE @O71@
2 OBJE @O71@
1 RESI
2 DATE 1935-1993
2 PLAC Beaufort, MO
2 SOUR @S_1733211944@
3 DATA
4 TEXT Birth date:  22 Oct 1907
5 CONT Birth place:  
5 CONT Residence date:  1935-1993
5 CONT Residence place:  Beaufort, MO
3 _APID 1,1732::363134957
1 RESI Relation to Head: Self; Relative Relation to Head: Wife
2 DATE 1 Apr 1940
2 PLAC St Louis, St Louis City, Missouri, United States
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: St Louis, St Louis City, Missouri; Roll: T627_2195; Page: 3B; Enumeration District: 96-342.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  St Louis, St Louis City, Missouri, United States
3 _APID 1,2442::95702831
2 SOUR @S1090315102@
3 PAGE The National Archives in St. Louis, Missouri; St. Louis, Missouri; WWII Draft Registration Cards for Missouri, 10/16/1940 - 03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 336
3 _APID 1,2238::15679693
1 RESI
2 DATE 1989
2 PLAC Beaufort, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::117259399
1 RESI
2 DATE 1994-1995
2 PLAC Beaufort, Missouri, USA
2 SOUR @S1090315114@
3 PAGE City: Beaufort; State: Missouri; Year(s): 1994-1995
3 _APID 1,7339::239348518
1 _WLNK https://www.ancestry.com/imageviewer/collections/62308/images/43290879-Missouri-004605-0018
2 TITL 1950%20United%20States%20Federal%20Census%20for%20Erwin%20Henry%
1 DEAT
2 DATE 6/3/2000
2 PLAC Missouri
2 SOUR @S_1733211932@
3 DATA
4 TEXT Birth date:  Abt 1908
5 CONT Birth place:  
5 CONT Death date:  abt 2000
5 CONT Death place:  Washington MO
3 _APID 1,70050::22797325
2 SOUR @S1084083971@
3 _APID 1,60525::72866534
1 BURI
2 PLAC Berger, Franklin County, Missouri, USA
2 SOUR @S1084083971@
3 _APID 1,60525::72866534
1 SOUR @S1099090053@
2 PAGE Christmas 1953 Von Behrens 24 Dec 1953
2 DATA
3 NOTE https://www.newspapers.com/clip/57839879/christmas-1953-von-behrens/?xid=637
2 OBJE @O45@
1 OBJE @O44@
2 _PRIM Y
1 OBJE @O71@
1 OBJE @O63@
1 OBJE @O1@
0 @I6862847335@ INDI
1 NAME Lottie /Pehle/
2 GIVN Lottie
2 SURN Pehle
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: St Louis, St Louis City, Missouri; Roll: T627_2195; Page: 3B; Enumeration District: 96-342.
3 DATA
4 TEXT Birth date:  abt 1913
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  St Louis, St Louis City, Missouri, United States
3 _APID 1,2442::95702835
2 SOUR @S_2117281209@
3 PAGE Number: ; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  5 Feb 1913
5 CONT Birth place:  
5 CONT Death date:  12 Oct 2003
5 CONT Death place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::71754986
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1913
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773371
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1914
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376000
2 SOUR @S_1733211944@
3 DATA
4 TEXT Birth date:  5 Feb 1913
5 CONT Birth place:  
5 CONT Residence date:  1935-1993
5 CONT Residence place:  Beaufort, MO
3 _APID 1,1732::363134956
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  1913
5 CONT Birth place:  
3 _APID 1,70596::763875
2 SOUR @S1090315102@
3 PAGE The National Archives in St. Louis, Missouri; St. Louis, Missouri; WWII Draft Registration Cards for Missouri, 10/16/1940 - 03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 336
3 _APID 1,2238::105679693
2 SOUR @S1084083263@
3 _APID 1,60901::811154202
2 SOUR @S_1733212834@
3 _APID 1,1788::143371546
2 SOUR @S1084083971@
3 _APID 1,60525::15350939
1 SEX F
1 FAMC @F90@
1 FAMS @F1@
1 BIRT
2 DATE 5 Feb 1913
2 PLAC Franklin Co., Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: St Louis, St Louis City, Missouri; Roll: T627_2195; Page: 3B; Enumeration District: 96-342.
3 DATA
4 TEXT Birth date:  abt 1913
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  St Louis, St Louis City, Missouri, United States
3 _APID 1,2442::95702835
2 SOUR @S_2117281209@
3 PAGE Number: ; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  5 Feb 1913
5 CONT Birth place:  
5 CONT Death date:  12 Oct 2003
5 CONT Death place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::71754986
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1913
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773371
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1914
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376000
2 SOUR @S_1733211944@
3 DATA
4 TEXT Birth date:  5 Feb 1913
5 CONT Birth place:  
5 CONT Residence date:  1935-1993
5 CONT Residence place:  Beaufort, MO
3 _APID 1,1732::363134956
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  1913
5 CONT Birth place:  
3 _APID 1,70596::763875
2 SOUR @S1084083263@
3 _APID 1,60901::811154202
2 SOUR @S1084083971@
3 _APID 1,60525::15350939
1 RESI
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1914
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376000
1 RESI
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1913
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773371
1 RESI
2 DATE 1935-1993
2 PLAC Beaufort, MO
2 SOUR @S_1733211944@
3 DATA
4 TEXT Birth date:  5 Feb 1913
5 CONT Birth place:  
5 CONT Residence date:  1935-1993
5 CONT Residence place:  Beaufort, MO
3 _APID 1,1732::363134956
1 RESI
2 DATE 1 Apr 1940
2 PLAC St Louis, St Louis City, Missouri, United States
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: St Louis, St Louis City, Missouri; Roll: T627_2195; Page: 3B; Enumeration District: 96-342.
3 DATA
4 TEXT Birth date:  abt 1913
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  St Louis, St Louis City, Missouri, United States
3 _APID 1,2442::95702835
1 RESI
2 DATE 1989
2 PLAC Beaufort, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::143371546
1 DEAT
2 DATE 12 Oct 2003
2 PLAC St. Louis city, St. Louis, Missouri
2 SOUR @S_2117281209@
3 PAGE Number: ; Issue State: Missouri; Issue Date: Before 1951.
3 DATA
4 TEXT Birth date:  5 Feb 1913
5 CONT Birth place:  
5 CONT Death date:  12 Oct 2003
5 CONT Death place:  Saint Louis, Saint Louis, Missouri, United States of America
3 _APID 1,3693::71754986
2 SOUR @S1084083263@
3 _APID 1,60901::811154202
2 SOUR @S1084083971@
3 _APID 1,60525::15350939
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350939
1 OBJE @O14@
2 _PRIM Y
2 _CROP
3 _LEFT 18
3 _TOP -1
3 _WDTH 1872
3 _HGHT 1872
3 _TYPE primary
1 OBJE @O63@
1 OBJE @O1@
1 OBJE @O50@
0 @I6862850024@ INDI
1 NAME Henry C /Von Behren/
2 GIVN Henry C
2 SURN Von Behren
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1867
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::14325950
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2A; Enumeration District: 2; Image: 222.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1865
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773298
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1866
5 CONT Birth place:  Kentucky
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376448
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  1864
5 CONT Birth place:  
5 CONT Death date:  1957
5 CONT Death place:  
3 _APID 1,70596::755932
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Roll: T623_31077_4118776; Page: 10A; Enumeration District: 0023; FHL microfilm: 1240854.
3 DATA
4 TEXT Birth date:  Dec 1864
5 CONT Birth place:  Kentucky
5 CONT Marriage date:  1893
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7602::76174305
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 16/ Mar/ 1950; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513219423/?article=164d9a1a-d2c2-433d-bcc3-8c4f3e127928&focus=0.30740273,0.6014139,0.4370
4 CONC 2918,0.8
3 _APID 1,61843::18466153
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7465659
2 SOUR @S1098169676@
3 _APID 1,60541::4923902
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816287
2 SOUR @S1092364231@
3 _APID 1,60382::1939993
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::6443122
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552975
1 SEX M
1 FAMC @F69@
1 FAMS @F91@
1 BIRT
2 DATE 15 December 1864
2 PLAC Kentucky
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1867
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::14325950
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2A; Enumeration District: 2; Image: 222.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1865
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773298
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1866
5 CONT Birth place:  Kentucky
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376448
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  1864
5 CONT Birth place:  
5 CONT Death date:  1957
5 CONT Death place:  
3 _APID 1,70596::755932
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Roll: T623_31077_4118776; Page: 10A; Enumeration District: 0023; FHL microfilm: 1240854.
3 DATA
4 TEXT Birth date:  Dec 1864
5 CONT Birth place:  Kentucky
5 CONT Marriage date:  1893
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7602::76174305
2 SOUR @S1098169676@
3 _APID 1,60541::4923902
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816287
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552975
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552975
1 RESI
2 DATE 1898
2 PLAC Union, Franklin, Missouri
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7465659
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Roll: T623_31077_4118776; Page: 10A; Enumeration District: 0023; FHL microfilm: 1240854.
3 DATA
4 TEXT Birth date:  Dec 1864
5 CONT Birth place:  Kentucky
5 CONT Marriage date:  1893
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7602::76174305
1 RESI
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1867
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::14325950
1 RESI
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1866
5 CONT Birth place:  Kentucky
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376448
1 RESI
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2A; Enumeration District: 2; Image: 222.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1865
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773298
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1940
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816287
1 EVEN
2 TYPE Henry and Mathilda Von Behren 50th anniversary
2 DATE 27 Nov 1941
2 PLAC New Haven, Missouri
2 SOUR @S1099276538@
3 PAGE Henry and Mathilda Von Behren 50th anniversary 27 
3 OBJE @O23@
2 OBJE @O23@
1 EVEN
2 TYPE obituary Henry Von Behren

2 PLAC New Haven, Missouri
2 SOUR @S1099
3 OBJE @O35@
2 OBJE @O35@
1 RESI
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816287
1 DEAT
2 DATE 10 Nov 1957
2 PLAC Franklin, Missouri, USA
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  1864
5 CONT Birth place:  
5 CONT Death date:  1957
5 CONT Death place:  
3 _APID 1,70596::755932
2 SOUR @S1098169676@
3 _APID 1,60541::4923902
2 SOUR @S1092364231@
3 _APID 1,60382::1939993
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1098169676@
3 _APID 1,60541::4923902
1 OBJE @O27@
2 _PRIM Y
2 _CROP
3 _LEFT 653
3 _TOP 44
3 _WDTH 993
3 _HGHT 993
3 _TYPE primary
1 OBJE @O23@
1 OBJE @O35@
0 @I6862850025@ INDI
1 NAME Matilda Christine /Rohlfing/
2 GIVN Matilda Christine
2 SURN Rohlfing
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332590
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2A; Enumeration District: 2; Image: 222.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773296
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376449
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816290
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::506443122
2 SOUR @S1084083971@
3 _APID 1,60525::15862555
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33568714
2 SOUR @S1092364231@
3 _APID 1,60382::1220353
1 NAME Mathilda /Rolfing/
2 GIVN Mathilda
2 SURN Rolfing
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::5195534
1 NAME Tillie /Von Behren/
2 GIVN Tillie
2 SURN Von Behren
2 SOUR @S_2117281560@
3 _APID 1,7602::76174306
1 NAME Mathilda Christine /VonBehren/
2 GIVN Mathilda Christine
2 SURN VonBehren
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 16/ Mar/ 1950; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513219423/?article=164d9a1a-d2c2-433d-bcc3-8c4f3e127928&focus=0.30740273,0.6014139,0.4370
4 CONC 2918,0.8
3 _APID 1,61843::498039197
1 SEX F
1 FAMC @F73@
1 FAMS @F91@
1 BIRT
2 DATE 29 Jan 1869
2 PLAC Berger, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332590
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2A; Enumeration District: 2; Image: 222.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773296
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376449
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 16/ Mar/ 1950; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513219423/?article=164d9a1a-d2c2-433d-bcc3-8c4f3e127928&focus=0.30740273,0.6014139,0.4370
4 CONC 2918,0.8
3 _APID 1,61843::498039197
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816290
2 SOUR @S1084083971@
3 _APID 1,60525::15862555
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33568714
2 SOUR @S_2117281560@
3 _APID 1,7602::76174306
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::5195534
1 RESI Residence Post Office: Hermann
2 DATE 1870
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::5195534
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33568714
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 _APID 1,7602::76174306
1 RESI
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332590
1 RESI
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376449
1 RESI
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2A; Enumeration District: 2; Image: 222.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773296
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1940
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816290
1 EVEN
2 TYPE Obituary for Mathilda Christine VonBehren
2 DATE 16 Mar 1950
2 PLAC New Haven, Missouri
2 SOUR @S1099089824@
3 PAGE Obituary for Mathilda Christine VonBehren (Aged 112) 16 
3 OBJE @O28@
2 OBJE @O28@
1 RESI
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816290
1 DEAT
2 DATE 11 Mar 1950
2 PLAC New Haven, Franklin, Missouri, USA
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 16/ Mar/ 1950; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513219423/?article=164d9a1a-d2c2-433d-bcc3-8c4f3e127928&focus=0.30740273,0.6014139,0.4370
4 CONC 2918,0.8
3 _APID 1,61843::498039197
2 SOUR @S1084083971@
3 _APID 1,60525::15862555
2 SOUR @S1092364231@
3 _APID 1,60382::1220353
1 BURI
2 DATE 1950
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 16/ Mar/ 1950; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513219423/?article=164d9a1a-d2c2-433d-bcc3-8c4f3e127928&focus=0.30740273,0.6014139,0.4370
4 CONC 2918,0.8
3 _APID 1,61843::498039197
2 SOUR @S1084083971@
3 _APID 1,60525::15862555
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O27@
2 _PRIM Y
2 _CROP
3 _LEFT 1591
3 _TOP 78
3 _WDTH 1296
3 _HGHT 1296
3 _TYPE primary
1 OBJE @O28@
0 @I6862850028@ INDI
1 NAME Louis H P /Von Behren/
2 GIVN Louis H P
2 SURN Von Behren
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1893
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332591
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1893
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376450
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 16/ Mar/ 1950; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513219423/?article=164d9a1a-d2c2-433d-bcc3-8c4f3e127928&focus=0.30740273,0.6014139,0.4370
4 CONC 2918,0.8
3 _APID 1,61843::18721538
2 SOUR @S_2117281560@
3 _APID 1,7602::76174307
1 SEX M
1 FAMC @F91@
1 FAMS @F80@
1 BIRT
2 DATE 30 Oct 1892
2 PLAC New Haven, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1893
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332591
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1893
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376450
2 SOUR @S_2117281560@
3 _APID 1,7602::76174307
2 SOUR @S_1733211725@
3 _APID 1,2442::91816616
2 SOUR @S1110169540@
3 PAGE The National Archives at St. Louis; St. Louis, Missouri; World War II Draft Cards (Fourth Registration) for the State of Missouri; Record Group Title: Records of the Selective Service System; Record Group Number: 147; Box or Roll Number: 1136
3 _APID 1,1002::16076819
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 _APID 1,7602::76174307
1 RESI
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1893
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332591
1 RESI
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1893
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376450
1 RESI
2 DATE 1930
2 PLAC Boeuf, Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 4A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6053011
1 RESI
2 DATE 1935
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 _APID 1,2442::91816616
1 RESI
2 DATE 1940
2 PLAC Bouef T, Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 _APID 1,2442::91816616
1 RESI
2 PLAC New Haven, Missouri, USA
2 SOUR @S1110169540@
3 PAGE The National Archives at St. Louis; St. Louis, Missouri; World War II Draft Cards (Fourth Registration) for the State of Missouri; Record Group Title: Records of the Selective Service System; Record Group Number: 147; Box or Roll Number: 1136
3 _APID 1,1002::16076819
1 DEAT
2 DATE Aug 1971
2 PLAC New Haven, Franklin, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350893
2 SOUR @S_2117281209@
3 PAGE Social Security Administration; Washington D.C., USA; Social Security Death Index, Master File
3 _APID 1,3693::64727064
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350893
1 SOUR @S1110168776@
2 PAGE Publication Place: Hermann, MO, USA; URL: http://www.legacy.com/obituaries/hermannadvertisercourier/obituary.aspx?n=mildred-brandt&pid=187647431
2 DATA
3 NOTE http://www.legacy.com/obituaries/hermannadvertisercourier/obituary.aspx?n=mildred-brandt&pid=187647431
2 _APID 1,7545::157689047
1 SOUR @S1084083263@
2 _APID 1,601 SOUR @S1090315102@
2 _APID 1,2238::120679697
1 SOUR 2 PAGE Ancestry Family Tree
1 SOUR @S_2128957019@
2 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
2 _APID 1,1171::8026846
1 SOUR @S1110169670@
2 PAGE Publication Date: 19/ Sep/ 2019; Publication Place: Hermann, MO, USA; URL: https://www.toedtmanngrosse.com/notices/Selma-Holtgrewe
2 DATA
3 NOTE https://www.toedtmanngrosse.com/notices/Selma-Holtgrewe
2 _APID 1,2190::139150128
0 @I6862850032@ INDI
1 NAME Ida C M /Von Behren/
2 GIVN Ida C M
2 SURN Von Behren
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1896
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332592
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 16/ Mar/ 1950; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513219423/?article=164d9a1a-d2c2-433d-bcc3-8c4f3e127928&focus=0.30740273,0.6014139,0.4370
4 CONC 2918,0.8
3 _APID 1,61843::18983952
2 SOUR @S_2117281560@
3 _APID 1,7602::76174308
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::508013160
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 2A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6773341
2 SOUR @S1084083971@
3 _APID 1,60525::15862553
1 SEX F
1 FAMC @F91@
1 FAMS @F28@
1 BIRT
2 DATE Jan 1896
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1896
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332592
2 SOUR @S_2117281560@
3 _APID 1,7602::76174308
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 2A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6773341
2 SOUR @S1084083971@
3 _APID 1,60525::15862553
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 _APID 1,7602::76174308
1 RESI
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1896
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332592
1 RESI
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281409@
3 _APID 1,6061::78376094
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 2A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6773341
1 RESI
2 DATE 1935
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 _APID 1,2442::91816559
1 RESI
2 DATE 1940
2 PLAC Bouef T, Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 _APID 1,2442::91816559
1 DEAT
2 DATE 13 January 1986
2 SOUR @S1084083971@
3 _APID 1,60525::15862553
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15862553
1 SOUR @S1102909201@
2 _APID 1,62116::293725027
0 @I6862850035@ INDI
1 NAME Luella M /Von Behren/
2 GIVN Luella M
2 SURN Von Behren
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1903
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332593
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1903
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376451
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 16/ Mar/ 1950; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513219423/?article=164d9a1a-d2c2-433d-bcc3-8c4f3e127928&focus=0.30740273,0.6014139,0.4370
4 CONC 2918,0.8
3 _APID 1,61843::19055813
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816292
1 NAME Luella /Vonbehren/
2 GIVN Luella
2 SURN Vonbehren
1 SEX F
1 FAMC @F91@
1 BIRT
2 DATE 1903
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1903
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332593
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1903
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376451
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816292
1 BIRT
2 DATE abt 1905
2 PLAC Missouri
1 RESI
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 1A; Enumeration District: 0043; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1903
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177332593
1 RESI
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 6A; Enumeration District: 51; Image: 16.
3 DATA
4 TEXT Birth date:  abt 1903
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78376451
1 RESI
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1940
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816292
1 RESI
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 3B; Enumeration District: 36-2
3 _APID 1,2442::91816292
1 SOUR @S_2117281312@
2 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2A; Enumeration District: 2; Image: 222.0; FHL microfilm: 2340922.
2 DATA
3 TEXT Birth date:  abt 1905
4 CONT Birth place:  Missouri
4 CONT Residence date:  1930
4 CONT Residence place:  Boeuf, Franklin, Missouri</line><line />
3 NOTE http://search.ancestry.com/cgi-bin/sse.dll?db=1930usfedcen&h=6773325&ti=0&indiv=try&gss=pt
2 _APID 1,6224::6773325
0 @I6862851708@ INDI
1 NAME Priscilla /Von Behren/
2 GIVN Priscilla
2 SURN Von Behren
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: St Louis, St Louis City, Missouri; Roll: T627_2195; Page: 3B; Enumeration District: 96-342.
3 DATA
4 TEXT Birth date:  abt 1935
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  St Louis, St Louis City, Missouri, United States
3 _APID 1,2442::95702838
1 SEX F
1 FAMC @F1@
1 BIRT
2 DATE abt 1935
2 PLAC Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: St Louis, St Louis City, Missouri; Roll: T627_2195; Page: 3B; Enumeration District: 96-342.
3 DATA
4 TEXT Birth date:  abt 1935
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  St Louis, St Louis City, Missouri, United States
3 _APID 1,2442::95702838
1 RESI
2 DATE 1 Apr 1940
2 PLAC St Louis, St Louis City, Missouri, United States
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: St Louis, St Louis City, Missouri; Roll: T627_2195; Page: 3B; Enumeration District: 96-342.
3 DATA
4 TEXT Birth date:  abt 1935
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  St Louis, St Louis City, Missouri, United States
3 _APID 1,2442::95702838
0 @I6862854348@ INDI
1 NAME Henry P /Pehle/
2 GIVN Henry P
2 SURN Pehle
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1874
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773389
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1874
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375996
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401710
2 SOUR @S_2117281209@
3 PAGE Number: 494-42-6329; Issue State: Missouri; Issue Date: 1955-1956.
3 DATA
4 TEXT Birth date:  13 Oct 1873
5 CONT Birth place:  
5 CONT Death date:  Jul 1967
5 CONT Death place:  Berger, Franklin, Missouri, United States of America
3 _APID 1,3693::48000895
2 SOUR @S_2117281763@
3 PAGE Registration Location: Franklin County, Missouri; Roll: ; Draft Board: .
3 DATA
4 TEXT Birth date:  13 Oct 1873
5 CONT Birth place:  
5 CONT Residence date:  
5 CONT Residence place:  Franklin, Missouri
3 _APID 1,6482::33446258
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1877
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::14326374
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: T627_2105; Page: 5A; Enumeration District: 36-2.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,2442::91816602
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Roll: T623_31077_4118776; Page: 7A; Enumeration District: 0023; FHL microfilm: 1240854.
3 DATA
4 TEXT Birth date:  Nov 1875
5 CONT Birth place:  Missouri
5 CONT Marriage date:  1895
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7602::76174024
2 SOUR @S1084083971@
3 _APID 1,60525::15350783
1 NAME Henry /Pehle/
2 GIVN Henry
2 SURN Pehle
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::8022628
1 SEX M
1 FAMC @F77@
1 FAMS @F90@
1 BIRT
2 DATE 13 October 1873
2 PLAC Franklin County, Missouri, United States of America
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1874
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773389
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1874
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375996
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401710
2 SOUR @S_2117281209@
3 PAGE Number: 494-42-6329; Issue State: Missouri; Issue Date: 1955-1956.
3 DATA
4 TEXT Birth date:  13 Oct 1873
5 CONT Birth place:  
5 CONT Death date:  Jul 1967
5 CONT Death place:  Berger, Franklin, Missouri, United States of America
3 _APID 1,3693::48000895
2 SOUR @S_2117281763@
3 PAGE Registration Location: Franklin County, Missouri; Roll: ; Draft Board: .
3 DATA
4 TEXT Birth date:  13 Oct 1873
5 CONT Birth place:  
5 CONT Residence date:  
5 CONT Residence place:  Franklin, Missouri
3 _APID 1,6482::33446258
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1877
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::14326374
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: T627_2105; Page: 5A; Enumeration District: 36-2.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,2442::91816602
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Roll: T623_31077_4118776; Page: 7A; Enumeration District: 0023; FHL microfilm: 1240854.
3 DATA
4 TEXT Birth date:  Nov 1875
5 CONT Birth place:  Missouri
5 CONT Marriage date:  1895
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7602::76174024
2 SOUR @S1084083971@
3 _APID 1,60525::15350783
1 RESI
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401710
1 RESI
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Roll: T623_31077_4118776; Page: 7A; Enumeration District: 0023; FHL microfilm: 1240854.
3 DATA
4 TEXT Birth date:  Nov 1875
5 CONT Birth place:  Missouri
5 CONT Marriage date:  1895
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7602::76174024
1 RESI
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1877
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::14326374
1 RESI
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1874
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375996
1 RESI
2 DATE Abt 1923
2 PLAC Sen-Ale Grove
2 SOUR @S1117807408@
3 PAGE The New Haven Leader; Publication Date: 22/ Feb/ 1923; Publication Place: New Haven, Missouri, USA; URL: https://www.newspapers.com/image/513181712/?article=23aadd1f-1b2e-4e39-b802-1176bbb0b7bb&focus=0.49545136,0.31487793,0.6499681,0.5251763&xid=33
4
3 _APID 1,62116::239659505
1 RESI
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1874
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773389
1 RESI
2 DATE Abt 1934
2 PLAC Berger
2 SOUR @S1117807305@
3 PAGE The New Haven Leader; Publication Date: 12/ Apr/ 1934; Publication Place: New Haven, Missouri, USA; URL: https://www.newspapers.com/image/513505235/?article=97a92fd8-3164-4c56-923d-3c38e2c18f8e&focus=0.35031086,0.4640386,0.50518024,0.7734182&xid=33
4
3 _APID 1,62116::283559178
1 RESI
2 DATE 1 Apr 1940
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: T627_2105; Page: 5A; Enumeration District: 36-2.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,2442::91816602
1 RESI
2 PLAC Franklin, Missouri
2 SOUR @S_2117281763@
3 PAGE Registration Location: Franklin County, Missouri; Roll: ; Draft Board: .
3 DATA
4 TEXT Birth date:  13 Oct 1873
5 CONT Birth place:  
5 CONT Residence date:  
5 CONT Residence place:  Franklin, Missouri
3 _APID 1,6482::33446258
1 DEAT
2 DATE 11 July 1967
2 PLAC Berger, Franklin, Missouri, United States of America
2 SOUR @S_2117281209@
3 PAGE Number: 494-42-6329; Issue State: Missouri; Issue Date: 1955-1956.
3 DATA
4 TEXT Birth date:  13 Oct 1873
5 CONT Birth place:  
5 CONT Death date:  Jul 1967
5 CONT Death place:  Berger, Franklin, Missouri, United States of America
3 _APID 1,3693::48000895
2 SOUR @S1084083971@
3 _APID 1,60525::15350783
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350783
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O8@
2 _PRIM Y
1 _MTTAG @T24@
1 _MTTAG @T8@
0 @I6862854349@ INDI
1 NAME Louise Mathilda Tillie /Witthaus/
2 GIVN Louise Mathilda Tillie
2 SURN Witthaus
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1878
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773392
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1878
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375997
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1882
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177334104
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: T627_2105; Page: 5A; Enumeration District: 36-2.
3 DATA
4 TEXT Birth date:  abt 1879
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,2442::91816603
2 SOUR @S1084083971@
3 _APID 1,60525::15350744
1 NAME Louise M. /Pehle/
2 GIVN Louise M.
2 SURN Pehle
2 SOUR @S1084083971@
3 _APID 1,60525::15350744
1 NAME Tillie /Witthaus/
2 GIVN Tillie
2 SURN Witthaus
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::508022628
1 SEX F
1 FAMC @F76@
1 FAMS @F90@
1 BIRT
2 DATE 19 April 1881
2 PLAC Warren County, Missouri, United States of America
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1878
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773392
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1878
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375997
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1882
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177334104
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: T627_2105; Page: 5A; Enumeration District: 36-2.
3 DATA
4 TEXT Birth date:  abt 1879
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,2442::91816603
2 SOUR @S1084083971@
3 _APID 1,60525::15350744
1 RESI
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1882
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177334104
1 RESI
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1878
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375997
1 RESI
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1878
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773392
1 RESI
2 DATE 1 Apr 1940
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: T627_2105; Page: 5A; Enumeration District: 36-2.
3 DATA
4 TEXT Birth date:  abt 1879
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,2442::91816603
1 EVEN
2 TYPE Henry and Mathilda Von Behren 50th anniversary
2 DATE 27 Nov 1941
2 PLAC New Haven, Missouri
2 SOUR @S1099276538@
3 PAGE Henry and Mathilda Von Behren 50th ann
3 OBJE @O23@
2 OBJE @O23@
1 DEAT
2 DATE 26 April 1966
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350744
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350744
1 OBJE @O23@
0 @I6862854350@ INDI
1 NAME Virgil A H /Pehle/
2 GIVN Virgil A H
2 SURN Pehle
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1923
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773377
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: T627_2105; Page: 5A; Enumeration District: 36-2.
3 DATA
4 TEXT Birth date:  abt 1923
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,2442::91816605
2 SOUR @S1084083971@
3 _APID 1,60525::15350776
1 SEX M
1 FAMC @F90@
1 BIRT
2 DATE abt 1923
2 PLAC Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1923
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773377
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: T627_2105; Page: 5A; Enumeration District: 36-2.
3 DATA
4 TEXT Birth date:  abt 1923
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,2442::91816605
2 SOUR @S1084083971@
3 _APID 1,60525::15350776
1 RESI
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Roll: 1187; Page: 2B; Enumeration District: 2; Image: 223.0; FHL microfilm: 2340922.
3 DATA
4 TEXT Birth date:  abt 1923
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6224::6773377
1 RESI
2 DATE 1 Apr 1940
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: T627_2105; Page: 5A; Enumeration District: 36-2.
3 DATA
4 TEXT Birth date:  abt 1923
5 CONT Birth place:  Missouri
5 CONT Residence date:  1 Apr 1940
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,2442::91816605
1 DEAT
2 DATE 1987
2 SOUR @S1084083971@
3 _APID 1,60525::15350776
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350776
0 @I6862855692@ INDI
1 NAME Arthur /Pehle/
2 GIVN Arthur
2 SURN Pehle
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1900
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375998
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1899
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177334105
2 SOUR @S1084083971@
3 _APID 1,60525::15350876
2 SOUR @S1117807408@
3 _APID 1,62116::24957238
1 SEX M
1 FAMC @F90@
1 BIRT
2 DATE abt 1900
2 PLAC Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1900
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375998
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1899
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177334105
2 SOUR @S1084083971@
3 _APID 1,60525::15350876
1 RESI
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1899
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177334105
1 RESI
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1900
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375998
1 RESI
2 DATE Abt 1923
2 PLAC Senate Grove 's
2 SOUR @S1117807408@
3 _APID 1,62116::24957238
1 DEAT
2 DATE November 1970
2 PLAC Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350876
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350876
0 @I6862855693@ INDI
1 NAME Ruby /Pehle/
2 GIVN Ruby
2 SURN Pehle
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375999
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177334106
1 SEX U
1 FAMC @F90@
1 BIRT
2 DATE abt 1908
2 PLAC Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375999
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177334106
1 RESI
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 3B; Enumeration District: 0044; Image: ; FHL microfilm: 1374793.
3 DATA
4 TEXT Birth date:  1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1910
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,7884::177334106
1 RESI
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 1B; Enumeration District: 51; Image: 7.
3 DATA
4 TEXT Birth date:  abt 1908
5 CONT Birth place:  Missouri
5 CONT Residence date:  1920
5 CONT Residence place:  Boeuf, Franklin, Missouri
3 _APID 1,6061::78375999
1 RESI
2 DATE Abt 1934
2 PLAC New Haven
2 SOUR @S1117807305@
3 _APID 1,62116::118225007
0 @I6862860697@ INDI
1 NAME Charles /Pehle/
2 GIVN Charles
2 SURN Pehle
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 30D; Enumeration District: 067; Image: 0063.
3 DATA
4 TEXT Birth date:  abt 1835
5 CONT Birth place:  Prussia
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::33552997
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_; Page: ; Image: .
3 DATA
4 TEXT Birth date:  abt 1836
5 CONT Birth place:  Lippe-Detmold
5 CONT Residence date:  1870
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,7163::550110
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  1836
5 CONT Birth place:  
5 CONT Death date:  1884
5 CONT Death place:  
3 _APID 1,70596::295013
2 SOUR @S1084083971@
3 _APID 1,60525::15350693
2 SOUR @S1092363470@
3 PAGE Franklin County Tribune; Publication Date: 25/ Dec/ 1953; Publication Place: Union, Missouri, USA; URL: https://www.newspapers.com/image/83827074/?article=132ec6f0-149f-4ac5-8af0-b5ad03d0724a&focus=0.37191933,0.060441494,0.49099043,0.34261736&xid=2
4 CONC 378
3 _APID 1,61843::65226390
2 SOUR @S1099278513@
3 PAGE Year: 1910; Census Place: Franklin, Missouri; Roll: MOSC_7661
3 _APID 1,1024::149944
2 SOUR @S1099278513@
3 PAGE Year: 1910; Census Place: Franklin, Missouri; Roll: MOSC_7661
3 _APID 1,1024::149941
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::4439941
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::2519984
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::4962630
1 SEX M
1 FAMC @F30@
1 FAMS @F77@
1 BIRT
2 DATE February 1836
2 PLAC Prussia
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 30D; Enumeration District: 067; Image: 0063.
3 DATA
4 TEXT Birth date:  abt 1835
5 CONT Birth place:  Prussia
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::33552997
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_; Page: ; Image: .
3 DATA
4 TEXT Birth date:  abt 1836
5 CONT Birth place:  Lippe-Detmold
5 CONT Residence date:  1870
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,7163::550110
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  1836
5 CONT Birth place:  
5 CONT Death date:  1884
5 CONT Death place:  
3 _APID 1,70596::295013
2 SOUR @S1084083971@
3 _APID 1,60525::15350693
1 RESI Residence Post Office: New Haven
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_; Page: ; Image: .
3 DATA
4 TEXT Birth date:  abt 1836
5 CONT Birth place:  Lippe-Detmold
5 CONT Residence date:  1870
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,7163::550110
1 RESI
2 DATE 1876
2 PLAC Township 45, Franklin, Missouri
2 SOUR @S1099278513@
3 PAGE Year: 1910; Census Place: Franklin, Missouri; Roll: MOSC_7661
3 _APID 1,1024::149944
2 SOUR @S1099278513@
3 PAGE Year: 1910; Census Place: Franklin, Missouri; Roll: MOSC_7661
3 _APID 1,1024::149941
1 RESI
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 30D; Enumeration District: 067; Image: 0063.
3 DATA
4 TEXT Birth date:  abt 1835
5 CONT Birth place:  Prussia
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::33552997
1 EVEN
2 TYPE Obituary Adolph Henry Pehle
2 DATE 25 Dec 1953
2 PLAC Union, Missouri
2 SOUR @S1099091374@
3 PAGE Obituary Adolph Hen
3 OBJE @O2@
2 OBJE @O2@
1 DEAT
2 DATE 8 February 1884
2 PLAC Sullivan, Franklin County, Missouri, United States of America
2 SOUR @S_1793379259@
3 DATA
4 TEXT Birth date:  1836
5 CONT Birth place:  
5 CONT Death date:  1884
5 CONT Death place:  
3 _APID 1,70596::295013
2 SOUR @S1084083971@
3 _APID 1,60525::15350693
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::4439941
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::2519984
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::4962630
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350693
1 PROB
2 DATE 5 Feb 1886
2 PLAC Franklin, Missouri, USA
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::4962630
1 PROB
2 DATE 10 Mar 1886
2 PLAC Franklin, Missouri, USA
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::2519984
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O80@
2 _PRIM Y
1 OBJE @O2@
1 NOTE No documentation evidence for is link to these parents but there is a DNA connection to them. 
1 _MTTAG @T24@
1 _MTTAG @T8@
1 _MTTAG @T5@
0 @I6862860700@ INDI
1 NAME Louisa /Kappleman/
2 GIVN Louisa
2 SURN Kappleman
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 30D; Enumeration District: 067; Image: 0063.
3 DATA
4 TEXT Birth date:  abt 1845
5 CONT Birth place:  Prussia
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401678
2 SOUR @S1084083971@
3 _APID 1,60525::15350702
2 SOUR @S1092364231@
3 _APID 1,60382::1562360
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::5135326
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::14325991
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7465823
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::511138903
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Boeuf, Franklin, Missouri; Page: 74; Family History Library Film: 803619
3 _APID 1,7667::40194618
1 NAME Louisa /Obermeyer/
2 GIVN Louisa
2 SURN Obermeyer
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::6492602
1 SEX F
1 FAMC @F66@
1 FAMS @F48@
1 FAMS @F77@
1 FAMS @F55@
1 BIRT
2 DATE 2 Feb 1846
2 PLAC Prussia
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 30D; Enumeration District: 067; Image: 0063.
3 DATA
4 TEXT Birth date:  abt 1845
5 CONT Birth place:  Prussia
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401678
2 SOUR @S1084083971@
3 _APID 1,60525::15350702
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::5135326
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::14325991
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Boeuf, Franklin, Missouri; Page: 74; Family History Library Film: 803619
3 _APID 1,7667::40194618
1 MARR
2 PLAC Franklin, Missouri, USA
1 EVEN
2 TYPE Arrival
2 DATE 1859
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::14325991
1 RESI Residence Post Office: Boeuf Creek
2 DATE 1860
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Boeuf, Franklin, Missouri; Page: 74; Family History Library Film: 803619
3 _APID 1,7667::40194618
1 RESI Residence Post Office: New Haven
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::5135326
1 RESI
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 30D; Enumeration District: 067; Image: 0063.
3 DATA
4 TEXT Birth date:  abt 1845
5 CONT Birth place:  Prussia
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401678
1 RESI
2 DATE 1898
2 PLAC Union, Franklin, Missouri
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7465823
1 RESI Marital Status: Widowed; Relation to Head of House: Mother
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::14325991
1 EVEN
2 TYPE Obituary Adolph Henry Pehle
2 DATE 25 Dec 1953
2 PLAC Union, Missouri
2 SOUR @S1099091374@
3 PAGE Obituary Adolph Hen
3 OBJE @O2@
2 OBJE @O2@
1 DEAT
2 DATE 18 Mar 1913
2 PLAC Franklin, Missouri, USA
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::6492602
2 SOUR @S1084083971@
3 _APID 1,60525::15350702
2 SOUR @S1092364231@
3 _APID 1,60382::1562360
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350702
1 PROB
2 DATE 21 Oct 1912
2 PLAC Franklin, Missouri, USA
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::6492602
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O34@
2 _PRIM Y
1 OBJE @O2@
1 _MTTAG @T24@
1 _MTTAG @T5@
1 _MTTAG @T8@
1 _MTTAG @T14@
0 @I6862860702@ INDI
1 NAME August /Pehle/
2 GIVN August
2 SURN Pehle
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1864
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::25068917
2 SOUR @S1084083971@
3 _APID 1,60525::15350722
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::550109
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 4/ Nov/ 1937; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513458897/?article=0371ebe3-2aef-49a9-9492-42befd5b1847&focus=0.19745898,0.052322052,0.350
4 CONC 56293,0.
3 _APID 1,61843::504097181
2 SOUR @S1092364231@
3 _APID 1,60382::1000767
1 SEX M
1 FAMC @F77@
1 FAMS @F46@
1 BIRT
2 DATE 27 November 1864
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1864
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::25068917
2 SOUR @S1084083971@
3 _APID 1,60525::15350722
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::550109
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 4/ Nov/ 1937; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513458897/?article=0371ebe3-2aef-49a9-9492-42befd5b1847&focus=0.19745898,0.052322052,0.350
4 CONC 56293,0.
3 _APID 1,61843::504097181
1 RESI Residence Post Office: New Haven
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::550109
1 RESI
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1864
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::25068917
1 RESI
2 PLAC Lorn
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 4/ Nov/ 1937; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513458897/?article=0371ebe3-2aef-49a9-9492-42befd5b1847&focus=0.19745898,0.052322052,0.350
4 CONC 56293,0.
3 _APID 1,61843::504097181
1 DEAT
2 DATE 27 October 1937
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350722
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 4/ Nov/ 1937; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513458897/?article=0371ebe3-2aef-49a9-9492-42befd5b1847&focus=0.19745898,0.052322052,0.350
4 CONC 56293,0.
3 _APID 1,61843::504097181
2 SOUR @S1092364231@
3 _APID 1,60382::1000767
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350722
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I6862860704@ INDI
1 NAME Adolf /Pehle/
2 GIVN Adolf
2 SURN Pehle
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1866
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::33883770
2 SOUR @S1092363470@
3 PAGE Franklin County Tribune; Publication Date: 25/ Dec/ 1953; Publication Place: Union, Missouri, USA; URL: https://www.newspapers.com/image/83827074/?article=132ec6f0-149f-4ac5-8af0-b5ad03d0724a&focus=0.37191933,0.060441494,0.49099043,0.34261736&xid=2
4 CONC 378
3 _APID 1,61843::5226390
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::2094598
1 SEX M
1 FAMC @F77@
1 BIRT
2 DATE 24 May 1866
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1866
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::33883770
2 SOUR @S1092363470@
3 PAGE Franklin County Tribune; Publication Date: 25/ Dec/ 1953; Publication Place: Union, Missouri, USA; URL: https://www.newspapers.com/image/83827074/?article=132ec6f0-149f-4ac5-8af0-b5ad03d0724a&focus=0.37191933,0.060441494,0.49099043,0.34261736&xid=2
4 CONC 378
3 _APID 1,61843::5226390
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::2094598
1 RESI Residence Post Office: New Haven
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::2094598
1 RESI
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1866
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::33883770
1 EVEN
2 TYPE Obituary Adolph Henry Pehle
2 DATE 25 Dec 1953
2 PLAC Union, Missouri
2 SOUR @S1099091374@
3 PAGE Obituary Adolph Henry Pehle 25 
3 OBJE @O2@
2 OBJE @O2@
1 EVEN
2 TYPE Obituary Adolph Pehle
2 DATE 25 Dec 1953
2 PLAC Washington, Missouri
2 SOUR @S1099091062@
3 PAGE Obituary Adolph Pehle 25 
3 OBJE @O29@
2 OBJE @O29@
1 RESI
2 PLAC New Haven
2 SOUR @S1092363470@
3 PAGE Franklin County Tribune; Publication Date: 25/ Dec/ 1953; Publication Place: Union, Missouri, USA; URL: https://www.newspapers.com/image/83827074/?article=132ec6f0-149f-4ac5-8af0-b5ad03d0724a&focus=0.37191933,0.060441494,0.49099043,0.34261736&xid=2
4 CONC 378
3 _APID 1,61843::5226390
1 DEAT
2 DATE 15 December 1953
2 PLAC Warrenton, Warren, Missouri, USA
2 SOUR @S1092363470@
3 PAGE Franklin County Tribune; Publication Date: 25/ Dec/ 1953; Publication Place: Union, Missouri, USA; URL: https://www.newspapers.com/image/83827074/?article=132ec6f0-149f-4ac5-8af0-b5ad03d0724a&focus=0.37191933,0.060441494,0.49099043,0.34261736&xid=2
4 CONC 378
3 _APID 1,61843::5226390
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O2@
1 OBJE @O29@
0 @I6862860708@ INDI
1 NAME Frederick Fritz /Pehle/
2 GIVN Frederick Fritz
2 SURN Pehle
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1871
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401890
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::8226292
1 NAME Fritz /Pehle/
2 GIVN Fritz
2 SURN Pehle
2 SOUR @S1084083971@
3 _APID 1,60525::15350731
1 SEX M
1 FAMC @F77@
1 BIRT
2 DATE 1 May 1870
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1871
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401890
2 SOUR @S1084083971@
3 _APID 1,60525::15350731
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::8226292
1 RESI Residence Post Office: New Haven
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::8226292
1 RESI
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1871
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401890
1 DEAT
2 DATE 15 March 1941
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350731
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350731
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I6862860711@ INDI
1 NAME Mina /Pehle/
2 GIVN Mina
2 SURN Pehle
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1873
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401853
1 SEX F
1 FAMC @F77@
1 BIRT
2 DATE abt 1873
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1873
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401853
1 RESI
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1873
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401853
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I6862860712@ INDI
1 NAME Lena /Pehle/
2 GIVN Lena
2 SURN Pehle
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1876
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::25068858
1 NAME Caroline /Willer/
2 GIVN Caroline
2 SURN Willer
2 SOUR @S1084083971@
3 _APID 1,60525::39133832
1 SEX F
1 FAMC @F77@
1 BIRT
2 DATE 23 October 1876
2 PLAC New Haven, Franklin County, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1876
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::25068858
2 SOUR @S1084083971@
3 _APID 1,60525::39133832
1 RESI
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1876
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::25068858
1 DEAT
2 DATE 23 October 1949
2 PLAC New Haven, Franklin Co., Missouri
2 SOUR @S1084083971@
3 _APID 1,60525::39133832
1 BURI
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::39133832
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I6862860716@ INDI
1 NAME Amelia /Pehle/
2 GIVN Amelia
2 SURN Pehle
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1879
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401756
1 SEX F
1 FAMC @F77@
1 BIRT
2 DATE abt 1879
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1879
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401756
1 RESI
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Family History Film: 1254686; Page: 31A; Enumeration District: 067; Image: 0064.
3 DATA
4 TEXT Birth date:  abt 1879
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Boeuf, Franklin, Missouri, United States
3 _APID 1,6742::48401756
1 DEAT
2 DATE 20 Nov 1890
2 PLAC Berger, Franklin, Missouri, United States
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I6862879105@ INDI
1 NAME Henry /Witthaus/
2 GIVN Henry
2 SURN Witthaus
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1845
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::48872011
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057896
2 SOUR @S1084083971@
3 _APID 1,60525::87874402
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::158370302
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Pinckney, Warren, Missouri; Roll: T625_966; Page: 4B; Enumeration District: 194
3 _APID 1,6061::71851163
2 SOUR @S1092364231@
3 _APID 1,60382::1941477
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 16/ Mar/ 1928; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/83554296/?article=b1c22055-868b-4aaf-9b4d-cba68997f623&focus=0.42597467,0.4345989,0.5581541,0
4 CONC .6618261
3 _APID 1,61843::570319154
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Charrette, Warren, Missouri; Page: 313; Family History Library Film: 803659
3 _APID 1,7667::40949388
1 SEX M
1 FAMC @F12@
1 FAMS @F76@
1 BIRT
2 DATE 12 April 1844
2 PLAC Warren Co., Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1845
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::48872011
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057896
2 SOUR @S1084083971@
3 _APID 1,60525::87874402
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::158370302
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Pinckney, Warren, Missouri; Roll: T625_966; Page: 4B; Enumeration District: 194
3 _APID 1,6061::71851163
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 16/ Mar/ 1928; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/83554296/?article=b1c22055-868b-4aaf-9b4d-cba68997f623&focus=0.42597467,0.4345989,0.5581541,0
4 CONC .6618261
3 _APID 1,61843::570319154
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Charrette, Warren, Missouri; Page: 313; Family History Library Film: 803659
3 _APID 1,7667::40949388
1 RESI Residence Post Office: Holstine
2 DATE 1860
2 PLAC Charrette, Warren, Missouri, USA
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Charrette, Warren, Missouri; Page: 313; Family History Library Film: 803659
3 _APID 1,7667::40949388
1 RESI
2 DATE 1880
2 PLAC Pinckney, Warren, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1845
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::48872011
1 RESI
2 DATE abt 1884
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::158370302
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1900
2 PLAC Pinckney, Warren, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057896
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1920
2 PLAC Pinckney, Warren, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Pinckney, Warren, Missouri; Roll: T625_966; Page: 4B; Enumeration District: 194
3 _APID 1,6061::71851163
1 DEAT
2 DATE 8 Mar 1928
2 PLAC Warren Co. Missouri
2 SOUR @S1084083971@
3 _APID 1,60525::87874402
2 SOUR @S1092364231@
3 _APID 1,60382::1941477
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 16/ Mar/ 1928; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/83554296/?article=b1c22055-868b-4aaf-9b4d-cba68997f623&focus=0.42597467,0.4345989,0.5581541,0
4 CONC .6618261
3 _APID 1,61843::570319154
1 BURI
2 PLAC Warrenton, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::87874402
1 OBJE @O48@
2 _PRIM Y
1 OBJE @O42@
1 OBJE @O61@
1 OBJE @O72@
1 _MTTAG @T24@
1 _MTTAG @T8@
1 _MTTAG @T5@
0 @I6862879938@ INDI
1 NAME Charlotte /Taake/
2 GIVN Charlotte
2 SURN Taake
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1850
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34816037
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057897
2 SOUR @S1084083971@
3 _APID 1,60525::87874427
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::308370302
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Pinckney, Warren, Missouri; Roll: T625_966; Page: 4B; Enumeration District: 194
3 _APID 1,6061::71851164
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 16/ Mar/ 1928; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/83554296/?article=b1c22055-868b-4aaf-9b4d-cba68997f623&focus=0.42597467,0.4345989,0.5581541,0
4 CONC .6618261
3 _APID 1,61843::255118854
1 SEX F
1 FAMS @F76@
1 BIRT
2 DATE May 1855
2 PLAC Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1850
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34816037
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057897
2 SOUR @S1084083971@
3 _APID 1,60525::87874427
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::308370302
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Pinckney, Warren, Missouri; Roll: T625_966; Page: 4B; Enumeration District: 194
3 _APID 1,6061::71851164
1 RESI
2 DATE 1880
2 PLAC Pinckney, Warren, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1850
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34816037
1 RESI
2 DATE abt 1884
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::308370302
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1900
2 PLAC Pinckney, Warren, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057897
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1920
2 PLAC Pinckney, Warren, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Pinckney, Warren, Missouri; Roll: T625_966; Page: 4B; Enumeration District: 194
3 _APID 1,6061::71851164
1 DEAT
2 DATE 21 May 1921
2 PLAC Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::87874427
1 BURI
2 PLAC Warrenton, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::87874427
1 OBJE @O66@
2 _PRIM Y
1 _MTTAG @T24@
1 _MTTAG @T8@
1 _MTTAG @T5@
0 @I6862879939@ INDI
1 NAME August /Witthaus/
2 GIVN August
2 SURN Witthaus
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34506110
2 SOUR @S1084083971@
3 _APID 1,60525::87874448
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 16/ Mar/ 1928; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/83554296/?article=b1c22055-868b-4aaf-9b4d-cba68997f623&focus=0.42597467,0.4345989,0.5581541,0
4 CONC .6618261
3 _APID 1,61843::255343080
1 SEX M
1 FAMC @F76@
1 BIRT
2 DATE 13 Aug 1869
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34506110
2 SOUR @S1084083971@
3 _APID 1,60525::87874448
1 RESI
2 DATE 1880
2 PLAC Pinckney, Warren, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1870
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34506110
1 DEAT
2 DATE 19 April 1928
2 PLAC Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::87874448
1 BURI
2 PLAC Warrenton, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::87874448
0 @I6862879940@ INDI
1 NAME Mina /Witthaus/
2 GIVN Mina
2 SURN Witthaus
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1874
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34506111
1 SEX F
1 FAMC @F76@
1 BIRT
2 DATE abt 1874
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1874
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34506111
1 RESI
2 DATE 1880
2 PLAC Pinckney, Warren, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1874
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34506111
0 @I6862879941@ INDI
1 NAME Julius /Witthaus/
2 GIVN Julius
2 SURN Witthaus
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34816192
2 SOUR @S1084083971@
3 _APID 1,60525::9244650
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 16/ Mar/ 1928; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/83554296/?article=b1c22055-868b-4aaf-9b4d-cba68997f623&focus=0.42597467,0.4345989,0.5581541,0
4 CONC .6618261
3 _APID 1,61843::255604177
1 SEX M
1 FAMC @F76@
1 BIRT
2 DATE abt 1875
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34816192
2 SOUR @S1084083971@
3 _APID 1,60525::9244650
1 RESI
2 DATE 1880
2 PLAC Pinckney, Warren, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1875
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::34816192
1 DEAT
2 DATE 7 January 1955
2 PLAC Mehlville, St. Louis County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::9244650
1 BURI
2 PLAC Augusta, St. Charles County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::9244650
0 @I6862879942@ INDI
1 NAME Ernst /Witthaus/
2 GIVN Ernst
2 SURN Witthaus
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1876
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::26177354
2 SOUR @S1084083971@
3 _APID 1,60525::87874459
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 16/ Mar/ 1928; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/83554296/?article=b1c22055-868b-4aaf-9b4d-cba68997f623&focus=0.42597467,0.4345989,0.5581541,0
4 CONC .6618261
3 _APID 1,61843::255467510
2 SOUR @S_2117281763@
3 PAGE Registration State: Missouri; Registration County: Warren; Roll: 1683935
3 _APID 1,6482::33129601
1 SEX M
1 FAMC @F76@
1 BIRT
2 DATE abt 1876
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1876
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::26177354
2 SOUR @S1084083971@
3 _APID 1,60525::87874459
2 SOUR @S_2117281763@
3 PAGE Registration State: Missouri; Registration County: Warren; Roll: 1683935
3 _APID 1,6482::33129601
1 RESI
2 DATE 1880
2 PLAC Pinckney, Warren, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1876
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::26177354
1 EVEN
2 TYPE Ernst Witthaus Obituary
2 DATE 7 Jan 1943
2 PLAC Warrenton, Missouri
2 SOUR @S1099740650@
3 PAGE Ernst Witthaus Obituary 7 
3 OBJE @O78@
2 OBJE @O78@
1 RESI
2 PLAC Warren, Missouri, USA
2 SOUR @S_2117281763@
3 PAGE Registration State: Missouri; Registration County: Warren; Roll: 1683935
3 _APID 1,6482::33129601
1 DEAT
2 DATE 1942
2 PLAC Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::87874459
1 BURI
2 PLAC Warrenton, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::87874459
1 OBJE @O74@
1 OBJE @O78@
0 @I6862879944@ INDI
1 NAME Martin /Witthaus/
2 GIVN Martin
2 SURN Witthaus
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1878
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::48872192
1 SEX M
1 FAMC @F76@
1 BIRT
2 DATE abt 1878
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1878
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::48872192
1 RESI
2 DATE 1880
2 PLAC Pinckney, Warren, Missouri, United States
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Pinckney, Warren, Missouri; Roll: 740; Family History Film: 1254740; Page: 736D; Enumeration District: 157; Image: 0174.
3 DATA
4 TEXT Birth date:  abt 1878
5 CONT Birth place:  Missouri
5 CONT Residence date:  1880
5 CONT Residence place:  Pinckney, Warren, Missouri, United States
3 _APID 1,6742::48872192
0 @I6864750401@ INDI
1 NAME John /Moses/
2 GIVN John
2 SURN Moses
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1240; Page: 1A; Enumeration District: 140; Image: 155.0; FHL microfilm: 2340975.
3 DATA
4 TEXT Birth date:  abt 1888
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::3604487
1 NAME John F /Moses/
2 GIVN John F
2 SURN Moses
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::2244813
1 NAME John F. /Moses/
2 GIVN John F.
2 SURN Moses
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 13/ Apr/ 1952; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140077736/?article=91926f04-42e0-498d-8ae1-bea6e7abdd75&focus=0.23261568,0.30236813,0.
4 CONC 3347283,
3 _APID 1,61843::61864960
1 SEX M
1 FAMS @F23@
1 BIRT
2 DATE abt 1888
2 PLAC Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1240; Page: 1A; Enumeration District: 140; Image: 155.0; FHL microfilm: 2340975.
3 DATA
4 TEXT Birth date:  abt 1888
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::3604487
1 BIRT
2 DATE abt 1891
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::2244813
1 RESI
2 DATE 1930
2 PLAC St Louis, St Louis (Independent City), Missouri
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: St Louis, St Louis (Independent City), Missouri; Roll: 1240; Page: 1A; Enumeration District: 140; Image: 155.0; FHL microfilm: 2340975.
3 DATA
4 TEXT Birth date:  abt 1888
5 CONT Birth place:  Missouri
5 CONT Residence date:  1930
5 CONT Residence place:  St Louis, St Louis (Independent City), Missouri
3 _APID 1,6224::3604487
0 @I312154505433@ INDI
1 NAME Barbara /Koenig/
2 GIVN Barbara
2 SURN Koenig
2 SOUR @S1092363729@
3 _APID 1,9866::67768867
2 SOUR @S1092363802@
3 _APID 1,61370::1201292119
2 SOUR @S1092364486@
3 _APID 1,61112::1501147196
1 SEX F
1 FAMS @F45@
0 @I312154507491@ INDI
1 NAME Heinrich /Traxel/
2 GIVN Heinrich
2 SURN Traxel
2 SOUR @S1092363729@
3 _APID 1,9866::55798581
2 SOUR @S1092364469@
3 _APID 1,61229::150486651
1 SEX M
1 FAMS @F71@
0 @I312154507493@ INDI
1 NAME Christina /Mittnacht/
2 GIVN Christina
2 SURN Mittnacht
2 SOUR @S1092363729@
3 _APID 1,9866::55798580
2 SOUR @S1092364469@
3 _APID 1,61229::300486651
1 SEX F
1 FAMS @F71@
0 @I312154507747@ INDI
1 NAME Anna Barbara /Traxel/
2 GIVN Anna Barbara
2 SURN Traxel
2 SOUR @S1092364486@
3 _APID 1,61112::901147196
1 SEX F
1 FAMC @F45@
1 BIRT
2 DATE abt 1848
2 SOUR @S1092364486@
3 _APID 1,61112::901147196
0 @I312206999334@ INDI
1 NAME Cord Heinrich /Von Behren/
2 GIVN Cord Heinrich
2 SURN Von Behren
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552902
1 NAME Kort /Von Behren/
2 GIVN Kort
2 SURN Von Behren
2 SOUR @S1092363802@
3 _APID 1,61370::1351539492
1 SEX M
1 FAMS @F69@
1 BIRT
2 DATE 1823-11-21
2 PLAC Bauerschaft,Nordhemmern,Westfalen,Germany
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552902
1 RESI Marital Status: Married; Relation to Head: Self
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552902
1 _MTTAG @T5@
1 _MTTAG @T14@
1 _MTTAG @T24@
0 @I312206999513@ INDI
1 NAME Christina /Telljohann/
2 GIVN Christina
2 SURN Telljohann
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::48401753
2 SOUR @S_1795452860@
3 _APID 1,2542::1063730
2 SOUR @S1092363802@
3 _APID 1,61370::1501539492
1 SEX F
1 FAMS @F69@
1 BIRT
2 DATE 23 Apr 1830
2 PLAC Prussia, Germany
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::48401753
2 SOUR @S_1795452860@
3 _APID 1,2542::1063730
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::48401753
1 DEAT
2 DATE 24 Aug 1917
2 PLAC Ellis Grove, Randolph, Illinois
2 SOUR @S_1795452860@
3 _APID 1,2542::1063730
1 BURI
2 DATE 26 Aug 1917
2 PLAC Ellis Grove
2 SOUR @S_1795452860@
3 _APID 1,2542::1063730
0 @I312206999515@ INDI
1 NAME Elizabeth /Von Behren/
2 GIVN Elizabeth
2 SURN Von Behren
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::48401809
1 SEX F
1 FAMC @F69@
1 BIRT
2 DATE Abt 1861
2 PLAC Kentucky
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::48401809
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::48401809
0 @I312206999517@ INDI
1 NAME Louisa /Von Behren/
2 GIVN Louisa
2 SURN Von Behren
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552834
1 SEX F
1 FAMC @F69@
1 BIRT
2 DATE Abt 1867
2 PLAC Kentucky
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552834
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552834
0 @I312206999518@ INDI
1 NAME Louis /Von Behren/
2 GIVN Louis
2 SURN Von Behren
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552878
1 SEX M
1 FAMC @F69@
1 BIRT
2 DATE Abt 1871
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552878
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::33552878
0 @I312206999519@ INDI
1 NAME Lena /Von Behren/
2 GIVN Lena
2 SURN Von Behren
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::48401810
1 SEX F
1 FAMC @F69@
1 BIRT
2 DATE Abt 1873
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::48401810
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29B; Enumeration District: 067
3 _APID 1,6742::48401810
0 @I312207000296@ INDI
1 NAME Friederke /Von Behren/
2 GIVN Friederke
2 SURN Von Behren
2 SOUR @S1092363802@
3 _APID 1,61370::901539492
1 SEX F
1 FAMC @F69@
1 BIRT
2 DATE abt 1860
2 SOUR @S1092363802@
3 _APID 1,61370::901539492
0 @I312207713637@ INDI
1 NAME Suzanne /Traxel Corbett/
2 GIVN Suzanne
2 SURN Traxel Corbett
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 30/ Sep/ 1984; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140849250/?article=184c3853-2c19-452d-b643-a23785db073c&focus=0.87308854,0.2579865,0.9
4 CONC 766887,0
3 _APID 1,61843::274878950
2 SOUR @S_1733212834@
3 _APID 1,1788::351474860
1 SEX F
1 FAMC @F15@
1 BIRT
2 DATE 23 Jan 1953
2 SOUR @S_1733212834@
3 _APID 1,1788::351474860
1 RESI
2 DATE 1993
2 PLAC Saint Louis, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::351474860
1 RESI
2 DATE 1996
2 PLAC Saint Louis, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::351474860
0 @I312207713638@ INDI
1 NAME Jay /Traxel/
2 GIVN Jay
2 SURN Traxel
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 30/ Sep/ 1984; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/140849250/?article=184c3853-2c19-452d-b643-a23785db073c&focus=0.87308854,0.2579865,0.9
4 CONC 766887,0
3 _APID 1,61843::275048957
2 SOUR @S_1733212834@
3 _APID 1,1788::300049981
1 SEX M
1 FAMC @F15@
1 BIRT
2 DATE 4 May 1954
2 SOUR @S_1733212834@
3 _APID 1,1788::300049981
1 RESI
2 DATE 1996
2 PLAC Saint Louis, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::300049981
1 RESI
2 PLAC Saint Louis, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::300049981
0 @I312207713844@ INDI
1 NAME Opal Laverne /Duncan/
2 GIVN Opal Laverne
2 SURN Duncan
2 SOUR @S_2117281209@
3 PAGE Social Security Administration; Washington D.C., USA; Social Security Death Index, Master File
3 _APID 1,3693::63126231
2 SOUR @S1084083971@
3 _APID 1,60525::108087960
2 SOUR @S1098250262@
3 _APID 1,2275::241048
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472176
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376823
2 SOUR @S1098250291@
3 _APID 1,8781::1408313
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Wheeler, Wheeler, Texas; Roll: m-t0627-04162; Page: 8B; Enumeration District: 242-1
3 _APID 1,2442::157353858
1 SEX F
1 FAMC @F38@
1 FAMS @F15@
1 BIRT
2 DATE 28 Aug 1914
2 PLAC Shamrock, Wheeler County, Texas, United States of America
2 SOUR @S_2117281209@
3 PAGE Social Security Administration; Washington D.C., USA; Social Security Death Index, Master File
3 _APID 1,3693::63126231
2 SOUR @S1084083971@
3 _APID 1,60525::108087960
2 SOUR @S1098250262@
3 _APID 1,2275::241048
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472176
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376823
2 SOUR @S1098250291@
3 _APID 1,8781::1408313
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Wheeler, Wheeler, Texas; Roll: m-t0627-04162; Page: 8B; Enumeration District: 242-1
3 _APID 1,2442::157353858
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1920
2 PLAC Justice Precinct 4, Wheeler, Texas, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472176
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1930
2 PLAC Shamrock, Wheeler, Texas, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376823
1 RESI
2 DATE 1935
2 PLAC Shamrock, Wheeler, Texas
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Wheeler, Wheeler, Texas; Roll: m-t0627-04162; Page: 8B; Enumeration District: 242-1
3 _APID 1,2442::157353858
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1940
2 PLAC Wheeler, Wheeler, Texas, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Wheeler, Wheeler, Texas; Roll: m-t0627-04162; Page: 8B; Enumeration District: 242-1
3 _APID 1,2442::157353858
1 RESI
2 DATE Before 1951
2 PLAC Texas
2 SOUR @S_2117281209@
3 PAGE Social Security Administration; Washington D.C., USA; Social Security Death Index, Master File
3 _APID 1,3693::63126231
1 DEAT
2 DATE 21 June 1983
2 SOUR @S_2117281209@
3 PAGE Social Security Administration; Washington D.C., USA; Social Security Death Index, Master File
3 _APID 1,3693::63126231
2 SOUR @S1084083971@
3 _APID 1,60525::108087960
1 BURI
2 PLAC Affton, St. Louis County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::108087960
0 @I312207715169@ INDI
1 NAME William J /Duncan/
2 GIVN William J
2 SURN Duncan
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472172
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376842
1 SEX M
1 FAMS @F38@
1 BIRT
2 DATE abt 1881
2 PLAC Arkansas
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472172
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376842
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1920
2 PLAC Justice Precinct 4, Wheeler, Texas, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472172
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1930
2 PLAC Shamrock, Wheeler, Texas, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376842
0 @I312207715170@ INDI
1 NAME Mittie /Duncan/
2 GIVN Mittie
2 SURN Duncan
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472173
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376831
1 SEX F
1 FAMS @F38@
1 BIRT
2 DATE abt 1888
2 PLAC Texas
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472173
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376831
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1920
2 PLAC Justice Precinct 4, Wheeler, Texas, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472173
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1930
2 PLAC Shamrock, Wheeler, Texas, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376831
0 @I312207715171@ INDI
1 NAME George L /Duncan/
2 GIVN George L
2 SURN Duncan
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472174
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376824
1 SEX M
1 FAMC @F38@
1 BIRT
2 DATE abt 1907
2 PLAC Texas
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472174
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376824
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1920
2 PLAC Justice Precinct 4, Wheeler, Texas, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472174
1 RESI Marital Status: Married; Relation to Head: Son
2 DATE 1930
2 PLAC Shamrock, Wheeler, Texas, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376824
0 @I312207715173@ INDI
1 NAME Frank W /Duncan/
2 GIVN Frank W
2 SURN Duncan
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472175
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376816
1 SEX M
1 FAMC @F38@
1 BIRT
2 DATE abt 1913
2 PLAC Texas
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472175
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376816
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1920
2 PLAC Justice Precinct 4, Wheeler, Texas, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Justice Precinct 4, Wheeler, Texas; Roll: T625_1857; Page: 3A; Enumeration District: 243
3 _APID 1,6061::80472175
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1930
2 PLAC Shamrock, Wheeler, Texas, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Shamrock, Wheeler, Texas; Page: 7B; Enumeration District: 0006; FHL microfilm: 2342135
3 _APID 1,6224::60376816
0 @I312207720868@ INDI
1 NAME ELLA N /Bresnahan/
2 GIVN ELLA N
2 SURN Bresnahan
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 10/ Nov/ 1945; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/138429351/?article=516e2454-4394-4bb8-a1c9-e4a080075946&focus=0.25913516,0.071845286,0
4 CONC .3677261
3 _APID 1,61843::496471836
2 SOUR @S1092364231@
3 _APID 1,60382::1237872
2 SOUR @S1098251594@
3 _APID 1,70379::218277
1 SEX F
1 FAMS @F19@
1 BIRT
2 DATE 7/3/1885
2 SOUR @S1098251594@
3 _APID 1,70379::218277
1 RESI
2 PLAC 4527 A Minnesota
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 10/ Nov/ 1945; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/138429351/?article=516e2454-4394-4bb8-a1c9-e4a080075946&focus=0.25913516,0.071845286,0
4 CONC .3677261
3 _APID 1,61843::496471836
1 DEAT
2 DATE Nov 1945
2 PLAC St. Louis City, St. Louis City, Missouri, USA
2 SOUR @S1092363470@
3 PAGE St. Louis Post-Dispatch; Publication Date: 10/ Nov/ 1945; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/138429351/?article=516e2454-4394-4bb8-a1c9-e4a080075946&focus=0.25913516,0.071845286,0
4 CONC .3677261
3 _APID 1,61843::496471836
2 SOUR @S1092364231@
3 _APID 1,60382::1237872
2 SOUR @S1098251594@
3 _APID 1,70379::218277
1 BURI
2 DATE 12 November 1945
2 PLAC St. Louis, Missouri, United States
2 SOUR @S1098251594@
3 _APID 1,70379::218277
0 @I312207724625@ INDI
1 NAME Michael Francis /Maloney/
2 GIVN Michael Francis
2 SURN Maloney
2 SOUR @S1084083263@
3 _APID 1,60901::620875556
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: T624_822; Page: 4B; Enumeration District: 0404; FHL microfilm: 1374835
3 _APID 1,7884::15080516
2 SOUR @S1098251497@
3 PAGE Virginia Department of Health; Richmond, Virginia; Virginia, Marriages, 1936-2014; Roll: 101168588
3 _APID 1,9279::162934378
2 SOUR @S1092363470@
3 PAGE The St. Louis Star and Times; Publication Date: 21/ May/ 1937; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/204299112/?article=c07b9f71-7949-4a11-be17-d32f89dd0928&focus=0.3660771,0.5996844
4 CONC ,0.49055
3 _APID 1,61843::87356294
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T625_960; Page: 3B; Enumeration District: 489
3 _APID 1,6061::103113588
1 SEX M
1 FAMS @F36@
1 BIRT
2 DATE abt 1880
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: T624_822; Page: 4B; Enumeration District: 0404; FHL microfilm: 1374835
3 _APID 1,7884::15080516
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T625_960; Page: 3B; Enumeration District: 489
3 _APID 1,6061::103113588
1 RESI Marital Status: Married; Relation to Head of House: Head
2 DATE 1910
2 PLAC St Louis Ward 25, Saint Louis City, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: T624_822; Page: 4B; Enumeration District: 0404; FHL microfilm: 1374835
3 _APID 1,7884::15080516
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1920
2 PLAC St Louis Ward 24, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T625_960; Page: 3B; Enumeration District: 489
3 _APID 1,6061::103113588
0 @I312207724626@ INDI
1 NAME Barbara Frances /Maloney/
2 GIVN Barbara Frances
2 SURN Maloney
2 SOUR @S1084083263@
3 _APID 1,60901::20875556
2 SOUR @S1092363470@
3 PAGE The St. Louis Star and Times; Publication Date: 21/ May/ 1937; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/204299112/?article=c07b9f71-7949-4a11-be17-d32f89dd0928&focus=0.3660771,0.5996844
4 CONC ,0.49055
3 _APID 1,61843::87835317
1 SEX F
1 FAMC @F36@
1 BIRT
2 DATE 23 Jun 1927
2 PLAC St Louis, Missouri
2 SOUR @S1084083263@
3 _APID 1,60901::20875556
1 DEAT
2 DATE 29 Jul 2000
2 SOUR @S1084083263@
3 _APID 1,60901::20875556
0 @I312207724705@ INDI
1 NAME Elizabeth /Maloney/
2 GIVN Elizabeth
2 SURN Maloney
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: T624_822; Page: 4B; Enumeration District: 0404; FHL microfilm: 1374835
3 _APID 1,7884::176828373
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T625_960; Page: 3B; Enumeration District: 489
3 _APID 1,6061::103113590
1 SEX F
1 FAMC @F36@
1 BIRT
2 DATE abt 1910
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: T624_822; Page: 4B; Enumeration District: 0404; FHL microfilm: 1374835
3 _APID 1,7884::176828373
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T625_960; Page: 3B; Enumeration District: 489
3 _APID 1,6061::103113590
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC St Louis Ward 25, Saint Louis City, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 25, Saint Louis City, Missouri; Roll: T624_822; Page: 4B; Enumeration District: 0404; FHL microfilm: 1374835
3 _APID 1,7884::176828373
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1920
2 PLAC St Louis Ward 24, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Roll: T625_960; Page: 3B; Enumeration District: 489
3 _APID 1,6061::103113590
0 @I312207724945@ INDI
1 NAME Elizabeth /Maloney/
2 GIVN Elizabeth
2 SURN Maloney
2 SOUR @S1092363470@
3 PAGE The St. Louis Star and Times; Publication Date: 21/ May/ 1937; Publication Place: St. Louis, Missouri, United States of America; URL: https://www.newspapers.com/image/204299112/?article=c07b9f71-7949-4a11-be17-d32f89dd0928&focus=0.3660771,0.5996844
4 CONC ,0.49055
3 _APID 1,61843::87639210
1 FAMC @F36@
0 @I312215561902@ INDI
1 NAME Friedrich Wilhelm /Rohlfing/
2 GIVN Friedrich Wilhelm
2 SURN Rohlfing
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33899753
2 SOUR @S1098169676@
3 _APID 1,60541::4437527
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::11149606
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Roark, Gasconade, Missouri; Page: 494; Family History Library Film: 803619
3 _APID 1,7667::40226160
2 SOUR @S1099063392@
3 _APID 1,9870::16715126
2 SOUR @S1092363729@
3 _APID 1,9866::102277675
2 SOUR @S1092363729@
3 _APID 1,9866::102277879
2 SOUR @S1092363729@
3 _APID 1,9866::87526505
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::116150423
2 SOUR @S1099198910@
3 PAGE extract from church records in Nordhemmern, Minden, Germany
1 NAME F W /Rohlfing/
2 GIVN F W
2 SURN Rohlfing
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7467863
1 NAME Fred /Rolfing/
2 GIVN Fred
2 SURN Rolfing
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::8344123
1 SEX M
2 SOUR @S1099198910@
3 PAGE extract from church records in Nordhemmern, Minden, Germany
1 FAMC @F33@
1 FAMS @F20@
1 FAMS @F73@
1 BIRT
2 DATE 12 May 1818
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33899753
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::8344123
2 SOUR @S1098169676@
3 _APID 1,60541::4437527
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Roark, Gasconade, Missouri; Page: 494; Family History Library Film: 803619
3 _APID 1,7667::40226160
2 SOUR @S1099063392@
3 _APID 1,9870::16715126
2 SOUR @S1099198910@
3 PAGE extract from church records in Nordhemmern, Minden, Germany
1 RESI Residence Post Office: Hermann
2 DATE 1860
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Roark, Gasconade, Missouri; Page: 494; Family History Library Film: 803619
3 _APID 1,7667::40226160
1 RESI Residence Post Office: Hermann
2 DATE 1870
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::8344123
1 RESI Marital Status: Married; Relation to Head: Self
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33899753
1 RESI
2 DATE 1913
2 PLAC Canaan;  Gasconade;  Morrison, Gasconade, Missouri
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7467863
1 DEAT
2 DATE 27 December 1893
2 PLAC Gasconade County, Missouri, United States of America
2 SOUR @S1098169676@
3 _APID 1,60541::4437527
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O65@
2 _PRIM Y
1 OBJE @O22@
1 OBJE @O76@
1 OBJE @O69@
1 OBJE @O60@
1 _MTTAG @T24@
1 _MTTAG @T8@
1 _MTTAG @T17@
1 _MTTAG @T14@
1 _MTTAG @T5@
0 @I312215561907@ INDI
1 NAME  Christina Maria /Meier/
2 GIVN  Christina Maria
2 SURN Meier
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::511149606
2 SOUR @S1092364231@
3 _APID 1,60382::66109
1 NAME Christina /Meyer/
2 GIVN Christina
2 SURN Meyer
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::48409740
1 NAME Christian /Rolfing/
2 GIVN Christian
2 SURN Rolfing
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::590794
1 SEX F
1 FAMS @F73@
1 BIRT
2 DATE 5 July 1829
2 PLAC Nordrhein-Westfalen, Germany
1 BIRT
2 DATE Abt 1829
2 PLAC Prussia
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::48409740
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::590794
1 RESI Residence Post Office: Hermann
2 DATE 1870
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::590794
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::48409740
1 DEAT
2 DATE 6 December 1912
2 PLAC Gasconade County, Missouri, United States of America
2 SOUR @S1092364231@
3 _APID 1,60382::66109
1 SOUR @S1098169676@
2 _APID 1,60541::4437532
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O22@
2 _PRIM Y
2 _CROP
3 _LEFT 1109
3 _TOP 9
3 _WDTH 740
3 _HGHT 740
3 _TYPE primary
1 OBJE @O38@
0 @I312215561908@ INDI
1 NAME Christian Fredrick "Chris" /Rohlfing/
2 GIVN Christian Fredrick "Chris"
2 SURN Rohlfing
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33899728
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::590795
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::6442839
2 SOUR @S1084083971@
3 _APID 1,60525::12122635
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419923
2 SOUR @S1084083263@
3 _APID 1,60901::626147804
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7467667
2 SOUR @S1098250942@
3 PAGE St Louis Public Library; St Louis, Missouri
3 _APID 1,9197::1038672
2 SOUR @S1092364231@
3 _APID 1,60382::86838
1 NAME Christ /Rohlfing/
2 GIVN Christ
2 SURN Rohlfing
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::14342071
1 SEX M
1 FAMC @F73@
1 FAMS @F68@
1 BIRT
2 DATE 17 June 1863
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33899728
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::590795
2 SOUR @S1084083971@
3 _APID 1,60525::12122635
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419923
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::14342071
1 RESI Residence Post Office: Hermann
2 DATE 1870
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::590795
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33899728
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1900
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419923
1 RESI Marital Status: Married; Relation to Head of House: Head
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::14342071
1 RESI
2 DATE 1913
2 PLAC Canaan;  Gasconade;  Morrison, Gasconade, Missouri
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7467667
1 DEAT
2 DATE 2 Oct 1912
2 PLAC Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::12122635
2 SOUR @S1098250942@
3 PAGE St Louis Public Library; St Louis, Missouri
3 _APID 1,9197::1038672
2 SOUR @S1092364231@
3 _APID 1,60382::86838
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::12122635
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O19@
2 _PRIM Y
2 _CROP
3 _LEFT 0
3 _TOP 63
3 _WDTH 200
3 _HGHT 200
3 _TYPE primary
1 OBJE @O15@
1 OBJE @O16@
0 @I312215561909@ INDI
1 NAME August /Rohlfing/
2 GIVN August
2 SURN Rohlfing
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33568559
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::8344122
1 SEX M
1 FAMC @F73@
1 BIRT
2 DATE 1 Dec1864
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33568559
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::8344122
1 RESI Residence Post Office: Hermann
2 DATE 1870
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::8344122
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33568559
1 DEAT
2 DATE 30 May1940
2 PLAC Hermann, Gasconade County, Missouri, USA
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312215561910@ INDI
1 NAME Louis W /Rohlfing/
2 GIVN Louis W
2 SURN Rohlfing
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33899627
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::5195533
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::6442972
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174353
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434531
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Hermann, Gasconade, Missouri; Page: 15B; Enumeration District: 0014; FHL microfilm: 2340922
3 _APID 1,6224::6854547
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::14326159
2 SOUR @S1084083971@
3 _APID 1,60525::14215860
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7465640
1 SEX M
1 FAMC @F73@
1 FAMS @F72@
1 BIRT
2 DATE 6 November 1866
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33899627
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::5195533
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174353
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434531
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Hermann, Gasconade, Missouri; Page: 15B; Enumeration District: 0014; FHL microfilm: 2340922
3 _APID 1,6224::6854547
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::14326159
2 SOUR @S1084083971@
3 _APID 1,60525::14215860
1 RESI Residence Post Office: Hermann
2 DATE 1870
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::5195533
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361B; Enumeration District: 084
3 _APID 1,6742::33899627
1 RESI
2 DATE 1898
2 PLAC Union, Franklin, Missouri
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7465640
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174353
1 RESI Marital Status: Married; Relation to Head of House: Head
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::14326159
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1920
2 PLAC Hermann, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434531
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1930
2 PLAC Hermann, Gasconade, Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Hermann, Gasconade, Missouri; Page: 15B; Enumeration District: 0014; FHL microfilm: 2340922
3 _APID 1,6224::6854547
1 DEAT
2 DATE 9 Nov 1944
2 PLAC Hermann, Gasconade County, Missouri, USA
2 SOUR @S1084083971@
3 _APID 1,60525::14215860
1 BURI
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::14215860
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O70@
2 _PRIM Y
2 _CROP
3 _LEFT 194
3 _TOP 214
3 _WDTH 601
3 _HGHT 601
3 _TYPE primary
1 OBJE @O54@
0 @I312215562507@ INDI
1 NAME Maria " Mary" S /Rohlfing/
2 GIVN Maria " Mary" S
2 SURN Rohlfing
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::590796
1 SEX F
1 FAMC @F20@
1 BIRT
2 DATE 22 November 1857
2 PLAC Missouri
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::590796
1 RESI Residence Post Office: Hermann
2 DATE 1870
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::590796
1 DEAT
2 DATE 1 September 1925
2 PLAC Gasconade, Missouri, USA
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312215562508@ INDI
1 NAME Frederick "Fritz" /Rohlfing/
2 GIVN Frederick "Fritz"
2 SURN Rohlfing
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::5195532
1 SEX M
1 FAMC @F20@
1 BIRT
2 DATE abt 1859
2 PLAC Missouri
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::5195532
1 RESI Residence Post Office: Hermann
2 DATE 1870
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::5195532
1 DEAT
2 DATE 24 May 1953
2 PLAC New Franklin, Howard, Missouri, USA
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312215805654@ INDI
1 NAME Johann Christian /Rohlfing/
2 GIVN Johann Christian
2 SURN Rohlfing
2 SOUR @S1099063392@
3 _APID 1,9870::16715125
2 SOUR @S1092363729@
3 _APID 1,9866::52854901
2 SOUR @S1092363729@
3 _APID 1,9866::96689000
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
3 DATA
4 DATE 1984
2 SOUR @S1099063392@
3 _APID 1,9870::21642960
1 SEX M
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
3 DATA
4 DATE 1984
1 FAMC @F61@
1 FAMS @F33@
1 BIRT
2 DATE 17 Nov 1776
2 PLAC Nordhemmern, Minden-Lübbecke, NRW, Deutschland
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
3 DATA
4 DATE 1984
1 DEAT
2 DATE 18 Jan 1831
2 PLAC Nordhemmern, Minden-Lübbecke, NRW, Deutschland
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
3 DATA
4 DATE 1984
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 _MTTAG @T24@
1 _MTTAG @T8@
1 _MTTAG @T5@
0 @I312215805658@ INDI
1 NAME Anna Maria Ilsabein /Loewe/
2 GIVN Anna Maria Ilsabein
2 SURN Loewe
2 SOUR @S1099063392@
3 _APID 1,9870::16715128
2 SOUR @S1092363729@
3 _APID 1,9866::102277673
2 SOUR @S1092363729@
3 _APID 1,9866::102277880
2 SOUR @S1092363729@
3 _APID 1,9866::87526506
1 SEX F
1 FAMS @F20@
1 BIRT
2 DATE 11 Jun 1813
2 PLAC Südhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1099063392@
3 _APID 1,9870::16715128
1 DEAT
2 DATE Oct. 1859
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312215806584@ INDI
1 NAME Maria Caroline Sophie "Louisa" /Rohlfing/
2 GIVN Maria Caroline Sophie "Louisa"
2 SURN Rohlfing
2 SOUR @S1092363729@
3 _APID 1,9866::102277877
1 NAME Maria Caroline Christine /Rohlfing/
2 GIVN Maria Caroline Christine
2 SURN Rohlfing
1 SEX F
1 FAMC @F20@
1 BIRT
2 DATE 8 Jun 1840
2 PLAC Germany
2 SOUR @S1092363729@
3 _APID 1,9866::102277877
1 BIRT
2 DATE 9 Jul
1 BAPM
2 DATE 14 Jun 1840
2 PLAC Evangelisch,Nordhemmern,Westfalen,Prussia
2 SOUR @S1092363729@
3 _APID 1,9866::102277877
1 DEAT
2 DATE 16 Feb 1924
2 PLAC Dallas County, Texas, USA
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312216250003@ INDI
1 NAME Anne Marie Elisabeth /Boesche/
2 GIVN Anne Marie Elisabeth
2 SURN Boesche
2 SOUR @S1092363729@
3 _APID 1,9866::52854903
2 SOUR @S1092363729@
3 _APID 1,9866::96689001
1 SEX F
1 FAMS @F33@
1 BIRT
2 DATE 9 Nov 1777
1 DEAT
2 DATE 7 Dec 1835
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 SOUR @S1099198910@
2 PAGE Extract from church records in Nordhemmern, Minden, Germany
0 @I312216250004@ INDI
1 NAME Johann Heinrich /Rohlfing/
2 GIVN Johann Heinrich
2 SURN Rohlfing
2 SOUR @S1092363729@
3 _APID 1,9866::102277815
2 SOUR @S1099063392@
3 _APID 1,9870::18218295
2 SOUR @S1099063392@
3 _APID 1,9870::21642962
1 SEX M
1 FAMC @F33@
1 FAMS @F9@
1 BIRT
2 DATE 31 Dec 1802
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1099063392@
3 _APID 1,9870::21642962
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312216250007@ INDI
1 NAME Anne Marie Christine Elisabeth /Rohlfing/
2 GIVN Anne Marie Christine Elisabeth
2 SURN Rohlfing
1 SEX F
1 FAMC @F33@
1 BIRT
2 DATE 23 Jan 1805
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 10 Aug 1805
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312216250009@ INDI
1 NAME Anne Marie Christine Elisabeth /Rohlfing/
2 GIVN Anne Marie Christine Elisabeth
2 SURN Rohlfing
2 SOUR @S1092363729@
3 _APID 1,9866::52854905
1 SEX F
1 FAMC @F33@
1 BIRT
2 DATE 23 Jan 1805
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::52854905
1 BAPM
2 DATE 27 Jan 1805
2 PLAC Evangelisch,Hartum,Westfalen,Prussia
2 SOUR @S1092363729@
3 _APID 1,9866::52854905
1 DEAT
2 DATE 22 Dec 1817
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312216250010@ INDI
1 NAME Johann Friedrich Wilhelm /Rohlfing/
2 GIVN Johann Friedrich Wilhelm
2 SURN Rohlfing
1 SEX M
1 FAMC @F33@
1 BIRT
2 DATE 2 Oct 1808
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 24 Aug 1813
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312216250012@ INDI
1 NAME Johann Cord Heinrich Christian /Rohlfing/
2 GIVN Johann Cord Heinrich Christian
2 SURN Rohlfing
1 SEX M
1 FAMC @F33@
1 BIRT
2 DATE 2 Nov 1811
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 21 Dec 1817
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312216250015@ INDI
1 NAME Anne Christine Margarethe Elisabeth /Rohlfing/
2 GIVN Anne Christine Margarethe Elisabeth
2 SURN Rohlfing
1 SEX M
1 FAMC @F33@
1 BIRT
2 DATE 31 Dec 1813
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 17 Dec 1817
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312216250017@ INDI
1 NAME Johann Heinrich Christian /Rohlfing/
2 GIVN Johann Heinrich Christian
2 SURN Rohlfing
2 SOUR @S1092363729@
3 _APID 1,9866::96688999
1 SEX M
1 FAMC @F33@
1 BIRT
2 DATE 30 Jul 1821
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::96688999
1 BAPM
2 DATE 5 Aug 1821
2 PLAC Evangelisch, Nordhemmern, Westfalen, Prussia
2 SOUR @S1092363729@
3 _APID 1,9866::96688999
1 RESI
2 PLAC Nordhemmern, Westfalen, Preußen, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::96688999
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312216250023@ INDI
1 NAME Christian Friedrich Heinrich "Henry" /Rohlfing Sr./
2 GIVN Christian Friedrich Heinrich "Henry"
2 SURN Rohlfing Sr.
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411887
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::8344124
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7467585
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::242121967
1 NAME Henry /Rohlfing/
2 GIVN Henry
2 SURN Rohlfing
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::11150423
1 SEX M
1 FAMC @F20@
1 FAMS @F54@
1 BIRT
2 DATE 23 Feb 1849
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411887
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::8344124
1 EVEN
2 TYPE Arrival
2 DATE 1851
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411887
1 RESI Residence Post Office: Hermann
2 DATE 1870
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::8344124
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1900
2 PLAC Boeuf, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411887
1 RESI
2 DATE 1913
2 PLAC Canaan;  Gasconade;  Morrison, Gasconade, Missouri
2 SOUR @S1098169669@
3 PAGE Collection Number: G&M_90; Roll Number: 90
3 _APID 1,1127::7467585
1 DEAT
2 DATE 9 Jan 1919
2 PLAC Gasconade County, Missouri
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O67@
2 _PRIM Y
2 _CROP
3 _LEFT 325
3 _TOP 294
3 _WDTH 456
3 _HGHT 456
3 _TYPE primary
1 OBJE @O17@
1 OBJE @O68@
0 @I312216250024@ INDI
1 NAME Anna Maria "Caroline" /Rohlfing/
2 GIVN Anna Maria "Caroline"
2 SURN Rohlfing
2 SOUR @S1092363729@
3 _APID 1,9866::87526504
2 SOUR @S1099136143@
3 PAGE Michigan Department of Community Health, Division of Vital Records and Health Statistics; Lansing, MI, USA; Michigan, Marriage Records, 1867-1952; Film: 96; Film Description: 1908 Lapeer-1908 Schoolcraft
3 _APID 1,9093::1200807931
2 SOUR @S1092364231@
3 _APID 1,60382::44585
1 SEX F
1 FAMC @F20@
1 FAMS @F64@
1 BIRT
2 DATE 16 Oct 1844
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::87526504
1 BAPM
2 DATE 20 Oct 1844
2 PLAC Evangelisch,Nordhemmern,Westfalen,Prussia
2 SOUR @S1092363729@
3 _APID 1,9866::87526504
1 DEAT
2 DATE 24 Jan 1911
2 PLAC Tea, Gasconade County (Warren Cemetery)
2 SOUR @S1092364231@
3 _APID 1,60382::44585
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O32@
2 _PRIM Y
2 _CROP
3 _LEFT 130
3 _TOP 777
3 _WDTH 702
3 _HGHT 702
3 _TYPE primary
0 @I312216250027@ INDI
1 NAME Marie Caroline "Christine" /Rohlfing/
2 GIVN Marie Caroline "Christine"
2 SURN Rohlfing
1 SEX F
1 FAMC @F20@
1 BIRT
2 DATE 9 Jul 1842
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 14 Feb 1901
2 PLAC Franklin County, Missouri, USA
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312216271598@ INDI
1 NAME Heinrich W.C. /Pehle/
2 GIVN Heinrich W.C.
2 SURN Pehle
2 SOUR @S1084083971@
3 _APID 1,60525::43182052
1 FAMC @F90@
1 BIRT
2 DATE 7 February 1896
2 SOUR @S1084083971@
3 _APID 1,60525::43182052
1 DEAT
2 DATE 2 July 1898
2 SOUR @S1084083971@
3 _APID 1,60525::43182052
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::43182052
0 @I312216271600@ INDI
1 NAME John Edward A. /Pehle/
2 GIVN John Edward A.
2 SURN Pehle
2 SOUR @S1084083971@
3 _APID 1,60525::49715436
1 FAMC @F90@
1 BIRT
2 DATE 29 July 1902
2 PLAC Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::49715436
1 DEAT
2 DATE 10 September 1902
2 PLAC Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::49715436
1 BURI
2 PLAC Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::49715436
0 @I312216784468@ INDI
1 NAME Fredericka /Rohlfing/
2 GIVN Fredericka
2 SURN Rohlfing
1 SEX F
1 FAMC @F73@
1 BIRT
2 DATE 1862
2 PLAC Big Berger, Gasconade, Missouri, USA
1 DEAT
2 DATE 1870
2 PLAC Big Berger, Gasconade, Missouri, USA
0 @I312216784561@ INDI
1 NAME Sabina Anna /Humberg/
2 GIVN Sabina Anna
2 SURN Humberg
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::506442839
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419924
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516032
2 SOUR @S1084083263@
3 _APID 1,60901::776147804
2 SOUR @S1092363470@
3 PAGE Gasconade County Republican; Publication Date: 14/ Sep/ 1939; Publication Place: Owensville, Missouri, United States of America; URL: https://www.newspapers.com/image/82970365/?article=397eca14-931a-4645-9afa-aa1d897b8f40&focus=0.18558161,0.0915581
4 CONC 9,0.3421
3 _APID 1,61843::519654617
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::25092543
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864560
2 SOUR @S1092364231@
3 _APID 1,60382::847821
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::63684985
1 NAME Sabina A /Rohlfing/
2 GIVN Sabina A
2 SURN Rohlfing
1 NAME Sabina Anna /Rohlfing/
2 GIVN Sabina Anna
2 SURN Rohlfing
2 SOUR @S1084083971@
3 _APID 1,60525::12122726
1 SEX F
1 FAMC @F89@
1 FAMS @F68@
1 BIRT
2 DATE 9 September 1868
2 PLAC Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::12122726
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419924
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516032
2 SOUR @S1092363470@
3 PAGE Gasconade County Republican; Publication Date: 14/ Sep/ 1939; Publication Place: Owensville, Missouri, United States of America; URL: https://www.newspapers.com/image/82970365/?article=397eca14-931a-4645-9afa-aa1d897b8f40&focus=0.18558161,0.0915581
4 CONC 9,0.3421
3 _APID 1,61843::519654617
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::25092543
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864560
1 BIRT
2 DATE abt 1869
2 PLAC Missouri
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::25092543
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1900
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419924
1 RESI Marital Status: Married; Relation to Head of House: Wife
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516032
1 RESI Marital Status: Widowed; Relation to Head: Head
2 DATE 1920
2 PLAC Roark, Gasconade, Missouri, USA
1 RESI Marital Status: Widowed; Relation to Head: Head
2 DATE 1930
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864560
1 DEAT
2 DATE 31 August 1939
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::12122726
2 SOUR @S1092363470@
3 PAGE Gasconade County Republican; Publication Date: 14/ Sep/ 1939; Publication Place: Owensville, Missouri, United States of America; URL: https://www.newspapers.com/image/82970365/?article=397eca14-931a-4645-9afa-aa1d897b8f40&focus=0.18558161,0.0915581
4 CONC 9,0.3421
3 _APID 1,61843::519654617
2 SOUR @S1092364231@
3 _APID 1,60382::847821
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::12122726
1 SOUR @S_2117281409@
2 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
2 _APID 1,6061::51433865
1 OBJE @O19@
2 _PRIM Y
2 _CROP
3 _LEFT 202
3 _TOP 0
3 _WDTH 200
3 _HGHT 200
3 _TYPE primary
1 OBJE @O54@
1 OBJE @O57@
1 OBJE @O62@
0 @I312216784888@ INDI
1 NAME Fredericka /Rohlfing/
2 GIVN Fredericka
2 SURN Rohlfing
1 SEX F
1 FAMC @F73@
1 BIRT
2 DATE 1871
2 PLAC Big Berger, Franklin, Missouri, USA
1 DEAT
2 DATE 1875
2 PLAC Big Berger, Franklin, Missouri, USA
0 @I312216785247@ INDI
1 NAME John Andreas Christoph /Rohlfing/
2 GIVN John Andreas Christoph
2 SURN Rohlfing
2 SOUR @S1084083971@
3 _APID 1,60525::45918732
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419929
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433869
1 NAME Johnnie /Rohlfing/
2 GIVN Johnnie
2 SURN Rohlfing
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516037
1 SEX M
1 FAMC @F68@
1 BIRT
2 DATE 5 March 1898
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::45918732
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419929
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516037
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433869
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419929
1 RESI Marital Status: Single; Relation to Head of House: Son
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516037
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1920
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433869
1 DEAT
2 DATE 27 December 1972
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::45918732
1 BURI
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::45918732
0 @I312216785248@ INDI
1 NAME Christian H. /Rohlfing/
2 GIVN Christian H.
2 SURN Rohlfing
2 SOUR @S1084083971@
3 _APID 1,60525::51913251
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516040
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433870
1 SEX M
1 FAMC @F68@
1 BIRT
2 DATE 17 September 1903
2 PLAC Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::51913251
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516040
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433870
1 RESI Marital Status: Single; Relation to Head of House: Son
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516040
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1920
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433870
1 DEAT
2 DATE 16 June 1989
2 PLAC Milwaukee, Milwaukee County, Wisconsin, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::51913251
1 BURI
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::51913251
0 @I312216785250@ INDI
1 NAME William Christian Friederich /Rohlfing/
2 GIVN William Christian Friederich
2 SURN Rohlfing
2 SOUR @S1084083971@
3 _APID 1,60525::62713201
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516041
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433871
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864587
1 SEX M
1 FAMC @F68@
1 BIRT
2 DATE 10 June 1906
2 PLAC Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::62713201
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516041
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433871
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864587
1 RESI Marital Status: Single; Relation to Head of House: Son
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516041
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1920
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433871
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1930
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864587
1 DEAT
2 DATE 8 November 1986
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::62713201
1 BURI
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::62713201
0 @I312216785251@ INDI
1 NAME Lydia D /Rohlfing Hoerstkamp/
2 GIVN Lydia D
2 SURN Rohlfing Hoerstkamp
2 SOUR @S1084083971@
3 _APID 1,60525::71783979
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516042
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433872
1 SEX F
1 FAMC @F68@
1 BIRT
2 DATE 5 May 1908
2 PLAC Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::71783979
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516042
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433872
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516042
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1920
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433872
1 DEAT
2 DATE 24 June 1986
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::71783979
1 BURI
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::71783979
0 @I312216785253@ INDI
1 NAME Verana M /Rohlfing Wehmueller/
2 GIVN Verana M
2 SURN Rohlfing Wehmueller
2 SOUR @S1084083971@
3 _APID 1,60525::96341789
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419928
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516036
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::508026417
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 4A; Enumeration District: 36-2
3 _APID 1,2442::91816343
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 5A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6053100
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 60B; Enumeration District: 51
3 _APID 1,6061::78376486
2 SOUR @S1092363470@
3 PAGE Gasconade County Republican; Publication Date: 14/ Sep/ 1939; Publication Place: Owensville, Missouri, United States of America; URL: https://www.newspapers.com/image/82970365/?article=397eca14-931a-4645-9afa-aa1d897b8f40&focus=0.18558161,0.0915581
4 CONC 9,0.3421
3 _APID 1,61843::82508725
1 SEX F
1 FAMC @F68@
1 FAMS @F51@
1 BIRT
2 DATE 5 March 1896
2 PLAC Missouri, USA
2 SOUR @S1084083971@
3 _APID 1,60525::96341789
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419928
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516036
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 4A; Enumeration District: 36-2
3 _APID 1,2442::91816343
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 5A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6053100
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 60B; Enumeration District: 51
3 _APID 1,6061::78376486
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419928
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516036
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 60B; Enumeration District: 51
3 _APID 1,6061::78376486
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 5A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6053100
1 RESI
2 DATE 1935
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 4A; Enumeration District: 36-2
3 _APID 1,2442::91816343
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1940
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 4A; Enumeration District: 36-2
3 _APID 1,2442::91816343
1 DEAT
2 DATE 11 February 1972
2 PLAC Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96341789
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96341789
1 OBJE @O20@
2 _PRIM Y
2 _CROP
3 _LEFT 414
3 _TOP 111
3 _WDTH 454
3 _HGHT 454
3 _TYPE primary
1 OBJE @O30@
1 OBJE @O10@
0 @I312216785255@ INDI
1 NAME Mathilde /Rohlfing Schultz/
2 GIVN Mathilde
2 SURN Rohlfing Schultz
2 SOUR @S1084083971@
3 _APID 1,60525::96914998
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419930
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516038
1 SEX F
1 FAMC @F68@
1 BIRT
2 DATE 7 November 1899
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96914998
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419930
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516038
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419930
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516038
1 DEAT
2 DATE 18 December 1932
2 PLAC Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96914998
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96914998
0 @I312216785256@ INDI
1 NAME Martha Sabina /Rohlfing Bensing/
2 GIVN Martha Sabina
2 SURN Rohlfing Bensing
2 SOUR @S1084083971@
3 _APID 1,60525::96915101
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419925
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516033
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433866
2 SOUR @S1092364231@
3 _APID 1,60382::400683
1 SEX F
1 FAMC @F68@
1 FAMS @F88@
1 BIRT
2 DATE 11 September 1890
2 PLAC Missouri, USA
2 SOUR @S1084083971@
3 _APID 1,60525::96915101
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419925
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516033
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433866
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419925
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516033
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1920
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433866
1 DEAT
2 DATE 13 December 1926
2 PLAC Gasconade, Missouri, USA
2 SOUR @S1084083971@
3 _APID 1,60525::96915101
2 SOUR @S1092364231@
3 _APID 1,60382::400683
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96915101
1 OBJE @O10@
2 _PRIM Y
2 _CROP
3 _LEFT 203
3 _TOP 320
3 _WDTH 458
3 _HGHT 458
3 _TYPE primary
1 OBJE @O39@
1 OBJE @O33@
0 @I312216785257@ INDI
1 NAME Theodore F L /Rohlfing/
2 GIVN Theodore F L
2 SURN Rohlfing
2 SOUR @S1084083971@
3 _APID 1,60525::96916425
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419927
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516035
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433868
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864543
1 SEX M
1 FAMC @F68@
1 BIRT
2 DATE 8 May 1894
2 PLAC Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96916425
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419927
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516035
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433868
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864543
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419927
1 RESI Marital Status: Single; Relation to Head of House: Son
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516035
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1920
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433868
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1930
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864543
1 DEAT
2 DATE 10 November 1969
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96916425
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96916425
0 @I312216785259@ INDI
1 NAME Sophia M "Christina" /Rohlfing/
2 GIVN Sophia M "Christina"
2 SURN Rohlfing
2 SOUR @S1084083971@
3 _APID 1,60525::96916431
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419926
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516034
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433867
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864551
1 SEX F
1 FAMC @F68@
1 BIRT
2 DATE 1 March 1893
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96916431
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419926
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516034
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433867
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864551
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419926
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516034
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1920
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Roark, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 91
3 _APID 1,6061::51433867
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1930
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Roark, Gasconade, Missouri; Page: 3B; Enumeration District: 0016; FHL microfilm: 2340922
3 _APID 1,6224::6864551
1 DEAT
2 DATE 6 June 1979
2 PLAC Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96916431
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::96916431
1 OBJE @O10@
2 _PRIM Y
2 _CROP
3 _LEFT 603
3 _TOP 666
3 _WDTH 458
3 _HGHT 458
3 _TYPE primary
0 @I312216790637@ INDI
1 NAME Sabina /Rohlfing/
2 GIVN Sabina
2 SURN Rohlfing
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516039
2 SOUR @S1084083263@
3 _APID 1,60901::26147804
1 SEX F
1 FAMC @F68@
1 BIRT
2 DATE 8 Dec 1901
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516039
2 SOUR @S1084083263@
3 _APID 1,60901::26147804
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Roark, Gasconade, Missouri; Roll: T624_781; Page: 5B; Enumeration District: 0078; FHL microfilm: 1374794
3 _APID 1,7884::189516039
1 DEAT
2 DATE 27 Sep 1989
2 SOUR @S1084083263@
3 _APID 1,60901::26147804
0 @I312216802314@ INDI
1 NAME Emil /Bensing/
2 GIVN Emil
2 SURN Bensing
1 SEX M
1 FAMS @F88@
0 @I312216803979@ INDI
1 NAME Alphonse /Wehmuller/
2 GIVN Alphonse
2 SURN Wehmuller
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::8026417
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 4A; Enumeration District: 36-2
3 _APID 1,2442::91816341
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 5A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6053108
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 60B; Enumeration District: 51
3 _APID 1,6061::78376485
1 SEX M
1 FAMS @F51@
1 BIRT
2 DATE abt 1887
2 PLAC Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 4A; Enumeration District: 36-2
3 _APID 1,2442::91816341
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 5A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6053108
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 60B; Enumeration District: 51
3 _APID 1,6061::78376485
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1920
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 60B; Enumeration District: 51
3 _APID 1,6061::78376485
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 5A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6053108
1 RESI
2 DATE 1935
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 4A; Enumeration District: 36-2
3 _APID 1,2442::91816341
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1940
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 4A; Enumeration District: 36-2
3 _APID 1,2442::91816341
1 OBJE @O20@
2 _PRIM Y
2 _CROP
3 _LEFT 977
3 _TOP 495
3 _WDTH 454
3 _HGHT 454
3 _TYPE primary
0 @I312216806496@ INDI
1 NAME Christoph /Humburg/
2 GIVN Christoph
2 SURN Humburg
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33568433
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::11150124
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::514113254
2 SOUR @S1084083971@
3 _APID 1,60525::109206032
1 SEX M
1 FAMS @F89@
1 BIRT
2 DATE 22 October 1843
2 PLAC Germany
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33568433
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::514113254
2 SOUR @S1084083971@
3 _APID 1,60525::109206032
1 RESI Marital Status: Married; Relation to Head: Self
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33568433
1 RESI
2 PLAC Berger
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::514113254
1 DEAT

2 PLAC Gasconade County, Missouri, United States of America
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::514113254
2 SOUR @S1084083971@
3 _APID 1,60525::109206032
1 BURI
2 DATE 27 Nov
2 PLAC Little Berger, Gasconade County, Missouri, United States of America
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::514113254
2 SOUR @S1084083971@
3 _APID 1,60525::109206032
0 @I312216806497@ INDI
1 NAME Martha Appolonia /Hellberg/
2 GIVN Martha Appolonia
2 SURN Hellberg
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33568576
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::511150124
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::63289116
2 SOUR @S1084083971@
3 _APID 1,60525::109249469
1 SEX F
1 FAMS @F89@
1 BIRT
2 DATE 1 September 1848
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33568576
2 SOUR @S1084083971@
3 _APID 1,60525::109249469
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33568576
1 DEAT
2 DATE 20 October 1920
2 PLAC Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::109249469
1 BURI
2 PLAC Little Berger, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::109249469
0 @I312216806498@ INDI
1 NAME Anna Katherine /Humburg/
2 GIVN Anna Katherine
2 SURN Humburg
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33899907
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::506442972
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434532
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Hermann, Gasconade, Missouri; Page: 15B; Enumeration District: 0014; FHL microfilm: 2340922
3 _APID 1,6224::6854560
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333356
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::63782919
2 SOUR @S1084083971@
3 _APID 1,60525::14215839
1 NAME Annie /Rohlfing/
2 GIVN Annie
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174354
1 SEX F
1 FAMC @F89@
1 FAMS @F72@
1 BIRT
2 DATE 23 March 1870
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33899907
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174354
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434532
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Hermann, Gasconade, Missouri; Page: 15B; Enumeration District: 0014; FHL microfilm: 2340922
3 _APID 1,6224::6854560
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333356
2 SOUR @S1084083971@
3 _APID 1,60525::14215839
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33899907
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174354
1 RESI Marital Status: Married; Relation to Head of House: Wife
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333356
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1920
2 PLAC Hermann, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434532
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1930
2 PLAC Hermann, Gasconade, Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Hermann, Gasconade, Missouri; Page: 15B; Enumeration District: 0014; FHL microfilm: 2340922
3 _APID 1,6224::6854560
1 DEAT
2 DATE 23 October 1936
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::14215839
1 BURI
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::14215839
1 OBJE @O70@
2 _PRIM Y
2 _CROP
3 _LEFT 831
3 _TOP 0
3 _WDTH 452
3 _HGHT 452
3 _TYPE primary
1 OBJE @O77@
0 @I312216806500@ INDI
1 NAME Jacob /Humburg/
2 GIVN Jacob
2 SURN Humburg
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33899792
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::63851843
1 SEX M
1 FAMC @F89@
1 BIRT
2 DATE Abt 1871
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33899792
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33899792
0 @I312216806501@ INDI
1 NAME Paulina /Humburg/
2 GIVN Paulina
2 SURN Humburg
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::25092761
1 SEX F
1 FAMC @F89@
1 BIRT
2 DATE Abt 1873
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::25092761
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::25092761
0 @I312216806502@ INDI
1 NAME Christina /Humburg/
2 GIVN Christina
2 SURN Humburg
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::25092640
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::63897284
1 SEX F
1 FAMC @F89@
1 BIRT
2 DATE Abt 1875
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::25092640
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::25092640
0 @I312216806504@ INDI
1 NAME Henry /Humburg/
2 GIVN Henry
2 SURN Humburg
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33899835
1 SEX M
1 FAMC @F89@
1 BIRT
2 DATE Abt 1877
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33899835
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33899835
0 @I312216806505@ INDI
1 NAME Amalia /Humburg Westermann/
2 GIVN Amalia
2 SURN Humburg Westermann
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33568696
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::63928482
1 SEX F
1 FAMC @F89@
1 BIRT
2 DATE Abt 1879
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33568696
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Roark, Gasconade, Missouri; Roll: 687; Page: 361A; Enumeration District: 084
3 _APID 1,6742::33568696
0 @I312216813644@ INDI
1 NAME Pauline "Lena" /Rohlfing/
2 GIVN Pauline "Lena"
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174355
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333357
2 SOUR @S1084083971@
3 _APID 1,60525::25782936
1 NAME Lena /Bretthorst/
2 GIVN Lena
2 SURN Bretthorst
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434537
1 SEX F
1 FAMC @F72@
1 BIRT
2 DATE 13 November 1891
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174355
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434537
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333357
2 SOUR @S1084083971@
3 _APID 1,60525::25782936
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174355
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333357
1 RESI Marital Status: Married; Relation to Head: Daughter
2 DATE 1920
2 PLAC Hermann, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434537
1 DEAT
2 DATE 27 February 1951
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::25782936
1 BURI
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::25782936
1 OBJE @O54@
2 _PRIM Y
2 _CROP
3 _LEFT 715
3 _TOP 145
3 _WDTH 262
3 _HGHT 262
3 _TYPE primary
0 @I312216813645@ INDI
1 NAME Ida /Rohlfing/
2 GIVN Ida
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174356
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333358
2 SOUR @S1084083971@
3 _APID 1,60525::54984991
1 SEX F
1 FAMC @F72@
1 BIRT
2 DATE 25 February 1895
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174356
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333358
2 SOUR @S1084083971@
3 _APID 1,60525::54984991
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174356
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333358
1 DEAT
2 DATE 1 July 1976
2 SOUR @S1084083971@
3 _APID 1,60525::54984991
1 BURI
2 PLAC Gasconade, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::54984991
1 OBJE @O54@
2 _PRIM Y
2 _CROP
3 _LEFT 1113
3 _TOP 70
3 _WDTH 274
3 _HGHT 274
3 _TYPE primary
0 @I312216813646@ INDI
1 NAME Herman C. /Rohlfing/
2 GIVN Herman C.
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174357
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333359
2 SOUR @S1084083971@
3 _APID 1,60525::22360238
1 SEX M
1 FAMC @F72@
1 BIRT
2 DATE 25 October 1896
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174357
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333359
2 SOUR @S1084083971@
3 _APID 1,60525::22360238
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174357
1 RESI Marital Status: Single; Relation to Head of House: Son
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333359
1 DEAT
2 DATE 8 September 1957
2 PLAC Clayton, St. Louis County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::22360238
1 BURI
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::22360238
1 OBJE @O54@
2 _PRIM Y
2 _CROP
3 _LEFT 926
3 _TOP 0
3 _WDTH 263
3 _HGHT 263
3 _TYPE primary
0 @I312216813647@ INDI
1 NAME Albert August /Rohlfing/
2 GIVN Albert August
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174358
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434533
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333360
2 SOUR @S1084083971@
3 _APID 1,60525::138111016
1 SEX M
1 FAMC @F72@
1 BIRT
2 DATE 25 November 1898
2 PLAC Missouri, United States of America
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174358
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434533
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333360
2 SOUR @S1084083971@
3 _APID 1,60525::138111016
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174358
1 RESI Marital Status: Single; Relation to Head of House: Son
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333360
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1920
2 PLAC Hermann, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434533
1 DEAT
2 DATE 9 May 1993
2 PLAC Morrison, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::138111016
1 BURI
2 PLAC Morrison, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::138111016
1 OBJE @O54@
2 _PRIM Y
2 _CRO3 _TOP 8
3 _WDTH 235
3 _HGHT 235
3 _TYPE primary
0 @I312216813989@ INDI
1 NAME Louis /Rohlfing/
2 GIVN Louis
2 SURN Rohlfing
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434534
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333361
2 SOUR @S1084083971@
3 _APID 1,60525::93807275
1 SEX M
1 FAMC @F72@
1 BIRT
2 DATE 19 December 1900
2 PLAC Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434534
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333361
2 SOUR @S1084083971@
3 _APID 1,60525::93807275
1 RESI Marital Status: Single; Relation to Head of House: Son
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333361
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1920
2 PLAC Hermann, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434534
1 DEAT
2 DATE December 1967
2 PLAC Morning Sun, Louisa County, Iowa, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::93807275
1 BURI
2 PLAC Morning Sun, Louisa County, Iowa, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::93807275
1 OBJE @O54@
2 _PRIM Y
2 _CROP
3 _LEFT 579
3 _TOP 27
3 _WDTH 244
3 _HGHT 244
3 _TYPE primary
0 @I312216813991@ INDI
1 NAME Anna Martha /Rohlfing Dilthey/
2 GIVN Anna Martha
2 SURN Rohlfing Dilthey
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434535
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333363
2 SOUR @S1084083971@
3 _APID 1,60525::35665878
1 SEX F
1 FAMC @F72@
1 BIRT
2 DATE 26 August 1904
2 PLAC Saint Louis, St. Louis City, Missouri, United States of America
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434535
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333363
2 SOUR @S1084083971@
3 _APID 1,60525::35665878
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333363
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1920
2 PLAC Hermann, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434535
1 DEAT
2 DATE 27 January 1996
2 PLAC O'Fallon, St. Charles County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::35665878
1 BURI
2 PLAC Kirkwood, St. Louis County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::35665878
1 OBJE @O54@
2 _PRIM Y
2 _CROP
3 _LEFT 1804
3 _TOP 99
3 _WDTH 292
3 _HGHT 292
3 _TYPE primary
0 @I312216813993@ INDI
1 NAME Carolina /Rohlfing/
2 GIVN Carolina
2 SURN Rohlfing
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434536
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 9A; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333364
1 SEX F
1 FAMC @F72@
1 BIRT
2 DATE abt 1909
2 PLAC Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434536
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 9A; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333364
1 RESI Marital Status: Single; Relation to Head of House: Daughter
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 9A; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333364
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1920
2 PLAC Hermann, Gasconade, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Hermann, Gasconade, Missouri; Roll: T625_904; Page: 3A; Enumeration District: 92
3 _APID 1,6061::51434536
1 OBJE @O54@
2 _PRIM Y
2 _CROP
3 _LEFT 343
3 _TOP 147
3 _WDTH 233
3 _HGHT 233
3 _TYPE primary
0 @I312216814729@ INDI
1 NAME Henry /Rohlfing/
2 GIVN Henry
2 SURN Rohlfing
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333362
2 SOUR @S1084083971@
3 _APID 1,60525::58958503
1 SEX M
1 FAMC @F72@
1 BIRT
2 DATE 1902
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333362
2 SOUR @S1084083971@
3 _APID 1,60525::58958503
1 RESI Marital Status: Single; Relation to Head of House: Son
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 8B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::177333362
1 DEAT
2 DATE 1995
2 SOUR @S1084083971@
3 _APID 1,60525::58958503
1 BURI
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::58958503
1 OBJE @O54@
2 _PRIM Y
2 _CROP
3 _LEFT 1555
3 _TOP 36
3 _WDTH 262
3 _HGHT 262
3 _TYPE primary
0 @I312216818245@ INDI
1 NAME Casper /Sherman/
2 GIVN Casper
2 SURN Sherman
2 SOUR @S1099136143@
3 PAGE Michigan Department of Community Health, Division of Vital Records and Health Statistics; Lansing, MI, USA; Michigan, Marriage Records, 1867-1952; Film: 96; Film Description: 1908 Lapeer-1908 Schoolcraft
3 _APID 1,9093::1050807931
1 SEX M
1 FAMS @F64@
0 @I312216818248@ INDI
1 NAME August /Sherman/
2 GIVN August
2 SURN Sherman
2 SOUR @S1099136143@
3 PAGE Michigan Department of Community Health, Division of Vital Records and Health Statistics; Lansing, MI, USA; Michigan, Marriage Records, 1867-1952; Film: 96; Film Description: 1908 Lapeer-1908 Schoolcraft
3 _APID 1,9093::807931
1 SEX M
1 FAMC @F64@
1 BIRT
2 DATE abt 1879
2 PLAC Missouri
2 SOUR @S1099136143@
3 PAGE Michigan Department of Community Health, Division of Vital Records and Health Statistics; Lansing, MI, USA; Michigan, Marriage Records, 1867-1952; Film: 96; Film Description: 1908 Lapeer-1908 Schoolcraft
3 _APID 1,9093::807931
1 RESI
2 PLAC Boone ??
2 SOUR @S1099136143@
3 PAGE Michigan Department of Community Health, Division of Vital Records and Health Statistics; Lansing, MI, USA; Michigan, Marriage Records, 1867-1952; Film: 96; Film Description: 1908 Lapeer-1908 Schoolcraft
3 _APID 1,9093::807931
0 @I312216820365@ INDI
1 NAME Louise /Berger/
2 GIVN Louise
2 SURN Berger
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411888
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::2128094
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::511150423
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::567058059
1 SEX F
1 FAMS @F54@
1 BIRT
2 DATE 5 Jun 1849
2 PLAC Hemebur P'raumindau, Germany
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411888
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::2128094
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::567058059
1 EVEN
2 TYPE Arrival
2 DATE 1857
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411888
1 RESI Residence Post Office: Hermann
2 DATE 1870
2 PLAC Roark, Gasconade, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Roark, Gasconade, Missouri; Roll: M593_776; Page: 505A; Family History Library Film: 552275
3 _APID 1,7163::2128094
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1900
2 PLAC Boeuf, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411888
1 RESI
2 PLAC America
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::567058059
1 DEAT
2 DATE 9 May 1927
2 PLAC Beemont
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::567058059
1 BURI
2 DATE 12 May
2 PLAC Beemont, MO.
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::567058059
1 OBJE @O67@
2 _PRIM Y
2 _CROP
3 _LEFT 1042
3 _TOP 324
3 _WDTH 456
3 _HGHT 456
3 _TYPE primary
0 @I312216820366@ INDI
1 NAME Mary /Rohlfing/
2 GIVN Mary
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411889
1 SEX F
1 FAMC @F54@
1 BIRT
2 DATE Feb 1873
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411889
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Boeuf, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411889
1 OBJE @O67@
0 @I312216820367@ INDI
1 NAME Fritz /Rohlfing/
2 GIVN Fritz
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411890
1 SEX M
1 FAMC @F54@
1 BIRT
2 DATE Sep 1875
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411890
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Boeuf, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411890
1 OBJE @O67@
0 @I312216820368@ INDI
1 NAME Louisa /Rohlfing/
2 GIVN Louisa
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411891
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::242647826
1 SEX F
1 FAMC @F54@
1 BIRT
2 DATE Mar 1877
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411891
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Boeuf, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411891
1 OBJE @O67@
0 @I312216820371@ INDI
1 NAME Henry /Rohlfing/
2 GIVN Henry
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411892
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::242349688
1 SEX M
1 FAMC @F54@
1 BIRT
2 DATE Mar 1879
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411892
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Boeuf, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411892
1 OBJE @O67@
0 @I312216820373@ INDI
1 NAME Edwin /Rohlfing/
2 GIVN Edwin
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411893
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::242550395
1 SEX M
1 FAMC @F54@
1 BIRT
2 DATE Mar 1881
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411893
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Boeuf, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411893
0 @I312216820374@ INDI
1 NAME Louis /Rohlfing/
2 GIVN Louis
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411894
1 SEX M
1 FAMC @F54@
1 BIRT
2 DATE Jan 1883
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411894
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Boeuf, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411894
0 @I312216820375@ INDI
1 NAME Bertha /Rohlfing/
2 GIVN Bertha
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411895
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::242673572
1 SEX F
1 FAMC @F54@
1 BIRT
2 DATE Aug 1887
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411895
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Boeuf, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411895
0 @I312216820376@ INDI
1 NAME August /Rohlfing/
2 GIVN August
2 SURN Rohlfing
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411896
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::242608104
1 SEX M
1 FAMC @F54@
1 BIRT
2 DATE Oct 1889
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411896
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Boeuf, Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411896
0 @I312217331986@ INDI
1 NAME Christian /Humburg/
2 GIVN Christian
2 SURN Humburg
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::63546888
1 SEX M
1 FAMC @F89@
0 @I312217331987@ INDI
1 NAME Marie /Humburg Bieremann/
2 GIVN Marie
2 SURN Humburg Bieremann
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::63948178
1 SEX F
1 FAMC @F89@
0 @I312217331989@ INDI
1 NAME Christ /Humburg/
2 GIVN Christ
2 SURN Humburg
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::63959886
1 FAMC @F89@
0 @I312217331990@ INDI
1 NAME Sophia /Humburg Vogel/
2 GIVN Sophia
2 SURN Humburg Vogel
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::63966820
1 SEX F
1 FAMC @F89@
0 @I312217331991@ INDI
1 NAME Martha /Humburg Rau/
2 GIVN Martha
2 SURN Humburg Rau
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::63970636
1 SEX F
1 FAMC @F89@
0 @I312217332550@ INDI
1 NAME Clara Christine /Rohlfing/
2 GIVN Clara Christine
2 SURN Rohlfing
2 SOUR @S1084083971@
3 _APID 1,60525::108440309
1 FAMC @F72@
1 BIRT
2 DATE 22 June 1893
2 SOUR @S1084083971@
3 _APID 1,60525::108440309
1 DEAT
2 DATE 28 July 1895
2 PLAC Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::108440309
1 BURI
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::108440309
0 @I312217343707@ INDI
1 NAME Anne Marie Ilsebein /Schriefer/
2 GIVN Anne Marie Ilsebein
2 SURN Schriefer
2 SOUR @S1092363729@
3 _APID 1,9866::102277814
2 SOUR @S1099063392@
3 _APID 1,9870::18218294
2 SOUR @S1099063392@
3 _APID 1,9870::21642959
1 SEX F
1 FAMS @F9@
1 BIRT
2 DATE 27 Oct 1802
2 SOUR @S1099063392@
3 _APID 1,9870::21642959
0 @I312217343708@ INDI
1 NAME Marie Caroline /Rohlfing/
2 GIVN Marie Caroline
2 SURN Rohlfing
2 SOUR @S1092363729@
3 _APID 1,9866::102277816
1 SEX F
1 FAMC @F9@
1 BIRT
2 DATE 14 Feb 1832
2 SOUR @S1092363729@
3 _APID 1,9866::102277816
1 BAPM
2 DATE 19 Feb 1832
2 PLAC Evangelisch,Nordhemmern,Westfalen,Prussia
2 SOUR @S1092363729@
3 _APID 1,9866::102277816
0 @I312217343781@ INDI
1 NAME Cord Heinrich Ludwig /Rohlfing/
2 GIVN Cord Heinrich Ludwig
2 SURN Rohlfing
2 SOUR @S1099063392@
3 _APID 1,9870::18218293
1 SEX M
1 FAMC @F9@
1 BIRT
2 DATE 01 Jun 1838
2 SOUR @S1099063392@
3 _APID 1,9870::18218293
0 @I312217344951@ INDI
1 NAME Johann Christian"Osterkrüger" /Rohlfing/
2 GIVN Johann Christian"Osterkrüger"
2 SURN Rohlfing
2 SOUR
2 SOUR @S1092363729@
3 _APID 1,9866::67826207
2 SOUR @S1092363729@
3 _APID 1,9866::79591698
2 SOUR @S1099063392@
3 _APID 1,9870::26636924
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 SEX M
2 SOUR
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 FAMC @F2@
1 FAMS @F61@
1 BIRT
2 DATE Sept 1737
2 PLAC Nordhemmern, Nordrhein-Westfalen, Germany
2 SOUR
1 BAPM
2 DATE 19 Sep 1737
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 DEAT
2 DATE 26 Mar 1807
2 PLAC Nordhemmern, Nordrhein-Westfalen, Germany
2 SOUR
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 _MTTAG @T24@
1 _MTTAG @T8@
1 _MTTAG @T5@
0 @I312217345302@ INDI
1 NAME Marie Ilsabein /Moeller/
2 GIVN Marie Ilsabein
2 SURN Moeller
2 SOUR @S1092363729@
3 _APID 1,9866::67826208
2 SOUR @S1092363729@
3 _APID 1,9866::79591536
2 SOUR @S1099063392@
3 _APID 1,9870::26636922
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 SEX F
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 FAMS @F61@
1 BIRT
2 DATE Mar 1750
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 BAPM
2 DATE 15 Mar 1750
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 DEAT
2 DATE 22 Nov 1814
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
0 @I312217345304@ INDI
1 NAME Anne Marie Ilsabein /Rohlfing/
2 GIVN Anne Marie Ilsabein
2 SURN Rohlfing
2 SOUR @S1092363729@
3 _APID 1,9866::67826206
1 SEX F
1 FAMC @F61@
1 BIRT
2 DATE Sep 1781
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 BAPM
2 DATE 30 Sep 1781
2 PLAC Evangelisch,Hartum,Westfalen,Prussia
2 SOUR @S1092363729@
3 _APID 1,9866::67826206
1 DEAT
2 DATE 8 Dec 1826
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217345577@ INDI
1 NAME Johann Henrich /Rohlfing/
2 GIVN Johann Henrich
2 SURN Rohlfing
2 SOUR @S1092363729@
3 _APID 1,9866::79591535
1 SEX M
1 FAMC @F61@
1 BIRT
2 DATE 22 Sep 1769
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::79591535
1 BAPM
2 DATE 23 Sep 1769
2 PLAC Nordhemmern, Minden-Lübbecke, North Rhine-Westphalia, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::79591535
1 DEAT
2 DATE 2 Dec 1842
2 PLAC Nordhemmern, Minden-Lübbecke, North Rhine-Westphalia, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::79591535
0 @I312217345950@ INDI
1 NAME Cordt Henrich /Rohlfing/
2 GIVN Cordt Henrich
2 SURN Rohlfing
2 SOUR @S1099063392@
3 _APID 1,9870::26636923
1 SEX M
1 FAMC @F61@
1 BIRT
2 DATE 12 Jan 1772
2 PLAC Nordhemmern, Minden-Lübbecke, North Rhine-Westphalia, Germany
2 SOUR @S1099063392@
3 _APID 1,9870::26636923
1 DEAT
2 DATE 4 Mar 1843
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217346593@ INDI
1 NAME Anne Marie Elisabeth /Rohlfing/
2 GIVN Anne Marie Elisabeth
2 SURN Rohlfing
1 SEX F
1 FAMC @F61@
1 BIRT
2 DATE 24 Aug 1774
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 25 Nov 1858
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217347154@ INDI
1 NAME Christopher /Rohlfing/
2 GIVN Christopher
2 SURN Rohlfing
1 SEX M
1 FAMC @F61@
1 BIRT
2 DATE 13 Oct 1780
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 15 Oct 1780
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217347813@ INDI
1 NAME Anne Marie Catherine Elisabeth /Rohlfing/
2 GIVN Anne Marie Catherine Elisabeth
2 SURN Rohlfing
1 SEX F
1 FAMC @F61@
1 BIRT
2 DATE 4 Apr 1784
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 26 Nov 1785
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217348045@ INDI
1 NAME Johann Christoph /Rohlfing/
2 GIVN Johann Christoph
2 SURN Rohlfing
1 SEX M
1 FAMC @F61@
1 BIRT
2 DATE 16 Jan 1787
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 17 Jul 1788
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217348262@ INDI
1 NAME Johann Christoph /Rohlfing/
2 GIVN Johann Christoph
2 SURN Rohlfing
1 SEX M
1 FAMC @F61@
1 BIRT
2 DATE 16 Jan 1791
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 1 Apr 1792
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217348521@ INDI
1 NAME Johan Christoph /Rohlfing/
2 GIVN Johan Christoph
2 SURN Rohlfing
1 SEX M
1 FAMC @F61@
1 BIRT
2 DATE 17 Mar 1793
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 27 Feb 1795
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217348709@ INDI
1 NAME Cort Heinrich Christoph /Rohlfing/
2 GIVN Cort Heinrich Christoph
2 SURN Rohlfing
1 SEX M
1 FAMC @F61@
1 BIRT
2 DATE 12 Jan 1796
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 28 Mar 1798
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217510610@ INDI
1 NAME Herman /Rohlfing/
2 GIVN Herman
2 SURN Rohlfing
2 SOUR
2 SOUR @S1099063392@
3 _APID 1,9870::18247824
2 SOUR @S1092363729@
3 _APID 1,9866::25154850
2 SOUR @S1092363729@
3 _APID 1,9866::48423788
1 SEX M
2 SOUR
1 FAMC @F96@
1 FAMS @F3@
1 FAMS @F2@
1 BIRT
2 DATE 1697
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR
1 BAPM
2 DATE 27 Dec 1697
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 6 May 1770
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR
1 _MTTAG @T24@
1 _MTTAG @T8@
0 @I312217511205@ INDI
1 NAME Ilsche /Von Beeren/
2 GIVN Ilsche
2 SURN Von Beeren
2 SOUR @S1099063392@
3 _APID 1,9870::18247826
2 SOUR @S1092363729@
3 _APID 1,9866::4423832
1 SEX F
1 FAMC @F97@
1 FAMS @F2@
1 BIRT
2 DATE 1699
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 BAPM
2 DATE 29 Nov 1699
2 PLAC Hartum (Kr. Minden), Westfalen, Preußen, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::4423832
1 RESI
2 PLAC Westfalen, Preußen, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::4423832
0 @I312217512155@ INDI
1 NAME Cord /Von Beeren/
2 GIVN Cord
2 SURN Von Beeren
2 SOUR @S1092363729@
3 _APID 1,9866::4423835
1 SEX M
1 FAMS @F97@
0 @I312217512448@ INDI
1 NAME Dorthea /Südmeier/
2 GIVN Dorthea
2 SURN Südmeier
2 SOUR @S1092363729@
3 _APID 1,9866::7170979
2 SOUR @S1099198910@
3 PAGE extract from church records in Nordhemmern, Minden, Germany
1 SEX F
2 SOUR @S1099198910@
3 PAGE extract from church records in Nordhemmern, Minden, Germany
1 FAMC @F99@
1 FAMS @F3@
1 BIRT
2 DATE 1693
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 BAPM
2 DATE 23 Aug 1693
2 PLAC Evangelisch,Hartum,Westfalen,Prussia
2 SOUR @S1092363729@
3 _APID 1,9866::7170979
2 SOUR @S1099198910@
3 PAGE extract from church records in Nordhemmern, Minden, Germany
1 DEAT
2 DATE 29 Jan 1731
2 SOUR @S1099198910@
3 PAGE extract from church records in Nordhemmern, Minden, Germany
0 @I312217512537@ INDI
1 NAME Cord /Suttmeyer/
2 GIVN Cord
2 SURN Suttmeyer
2 SOUR @S1092363729@
3 _APID 1,9866::7170980
1 SEX M
1 FAMS @F99@
0 @I312217512867@ INDI
1 NAME Ann Lisabeth /Rohlfing/
2 GIVN Ann Lisabeth
2 SURN Rohlfing
2 SOUR @S1092363729@
3 _APID 1,9866::25154849
1 SEX F
1 FAMC @F3@
1 BIRT
2 DATE 1728
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 BAPM
2 DATE 26 Sep 1728
2 PLAC Hartum (Kr. Minden), Westfalen, Preußen, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::25154849
1 RESI
2 PLAC Westfalen, Preußen, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::25154849
0 @I312217512986@ INDI
1 NAME Anna Maria Isaben /Rohlfing/
2 GIVN Anna Maria Isaben
2 SURN Rohlfing
1 SEX F
1 FAMC @F2@
1 BIRT
2 DATE 1733
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 BAPM
2 DATE 26 Jul 1733
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217513331@ INDI
1 NAME Cord Heinrich /Rohlfing/
2 GIVN Cord Heinrich
2 SURN Rohlfing
2 SOUR @S1092363729@
3 _APID 1,9866::48423787
1 SEX M
1 FAMC @F2@
1 BIRT
2 DATE 1735
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 BAPM
2 DATE 3 Jul 1735
2 PLAC Hartum (Kr. Minden), Westfalen, Preußen, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::48423787
0 @I312217513525@ INDI
1 NAME Ilse Margreth /Rohlfing/
2 GIVN Ilse Margreth
2 SURN Rohlfing
1 SEX F
1 FAMC @F2@
1 BIRT
2 DATE 1739
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 1 Aug 1815
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217513932@ INDI
1 NAME Lüdeke "auf Scheven Stätte" /Rohlfink/
2 GIVN Lüdeke "auf Scheven Stätte"
2 SURN Rohlfink
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 SEX M
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 FAMS @F96@
1 _MTTAG @T24@
1 _MTTAG @T8@
0 @I312217515919@ INDI
1 NAME unnamed /Rohlfing/
2 GIVN unnamed
2 SURN Rohlfing
1 SEX U
1 FAMC @F96@
1 BIRT
2 DATE 30 May 1673
2 PLAC Nordhemmern, Minden-Lübbecke, North Rhine-Westphalia, Germany
1 DEAT
2 DATE 31 May 1673
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217516131@ INDI
1 NAME Anne Elisabeth Ilsche /Rohlfing/
2 GIVN Anne Elisabeth Ilsche
2 SURN Rohlfing
1 SEX F
1 FAMC @F96@
1 BIRT
2 DATE 1679
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 BAPM
2 DATE 3 Mar 1679
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 23 Jan 1745
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217516450@ INDI
1 NAME Anneke /Rohlfing/
2 GIVN Anneke
2 SURN Rohlfing
1 SEX F
1 FAMC @F96@
1 BIRT
2 DATE 1677
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217516568@ INDI
1 NAME Anna Cathrina /Rohlfing/
2 GIVN Anna Cathrina
2 SURN Rohlfing
1 SEX F
1 FAMC @F96@
1 BIRT
2 DATE 1681
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 BAPM
2 DATE 6 May 1681
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217517059@ INDI
1 NAME Anna Maria /Rohlfing/
2 GIVN Anna Maria
2 SURN Rohlfing
1 SEX F
1 FAMC @F96@
1 BIRT
2 DATE 1683
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 5 Jul 1683
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @I312217517203@ INDI
1 NAME Cordt "auf Scheven Stätte" /Rohlfing/
2 GIVN Cordt "auf Scheven Stätte"
2 SURN Rohlfing
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 SEX M
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 FAMC @F96@
1 BIRT
2 DATE 1684
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 BAPM
2 DATE 30 Apr 1684
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 DEAT
2 DATE 19 Jan 1746
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
0 @I312217517324@ INDI
1 NAME Anna Ilsche /Rohlfing/
2 GIVN Anna Ilsche
2 SURN Rohlfing
2 SOUR @S1099063392@
3 _APID 1,9870::25289835
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 SEX F
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 FAMC @F96@
1 FAMS @F84@
1 BIRT
2 DATE 1687
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
1 BAPM
2 DATE 23 Feb  1687
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
1 DEAT
2 DATE 19 Jan 1746
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
0 @I312217517437@ INDI
1 NAME Cord /Grandeman/
2 GIVN Cord
2 SURN Grandeman
2 SOUR @S1099063392@
3 _APID 1,9870::25289834
1 SEX M
1 FAMS @F84@
0 @I312217734309@ INDI
1 NAME Frederick A /Pehle/
2 GIVN Frederick A
2 SURN Pehle
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14544
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::6432471
2 SOUR @S1099063392@
3 _APID 1,9870::11912456
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Boeuf, Franklin, Missouri; Page: 76; Family History Library Film: 803619
3 _APID 1,7667::40194820
2 SOUR @S1099248508@
3 PAGE Year: 1840; Census Place: Gasconade, Missouri; Roll: 223; Page: 275; Family History Library Film: 0014855
3 _APID 1,8057::3253252
2 SOUR @S1092363729@
3 _APID 1,9866::84491304
2 SOUR @S1092363729@
3 _APID 1,9866::109672213
2 SOUR @S1084083971@
3 _APID 1,60525::39299201
2 SOUR @S1092363729@
3 _APID 1,9866::84493766
2 SOUR @S1099278044@
3 PAGE Year: 1850; Census Place: District 31, Franklin, Missouri; Roll: 399; Page: 97B
3 _APID 1,8054::3769516
2 SOUR @S1099366511@
3 PAGE Bureau of Land Management, General Land Office Records; Washington D.C., USA; Federal Land Patents, State Volumes
3 _APID 1,1246::1155663
2 SOUR @S1092363729@
3 _APID 1,9866::17490329
2 SOUR @S1099605930@
3 _APID 1,1264::6837257
1 NAME Johann Friedrich Karl /Pehle/
2 GIVN Johann Friedrich Karl
2 SURN Pehle
2 SOUR @S1092363729@
3 _APID 1,9866::84493766
1 SEX M
1 FAMC @F4@
1 FAMS @F30@
1 BIRT
2 DATE 22 Jul 1799
2 PLAC Oerlinghausen, Lippe, Nordrhein-Westfalen, Germany
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14544
2 SOUR @S1099063392@
3 _APID 1,9870::11912456
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Boeuf, Franklin, Missouri; Page: 76; Family History Library Film: 803619
3 _APID 1,7667::40194820
2 SOUR @S1092363729@
3 _APID 1,9866::109672213
2 SOUR @S1084083971@
3 _APID 1,60525::39299201
2 SOUR @S1099278044@
3 PAGE Year: 1850; Census Place: District 31, Franklin, Missouri; Roll: 399; Page: 97B
3 _APID 1,8054::3769516
1 BAPM
2 DATE 28 Jul 1799
2 PLAC Evangelisch,Schoetmar,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::109672213
1 EVEN
2 TYPE Arrival
2 DATE 23 Nov 1839
2 PLAC United States
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14544
1 RESI
2 DATE 1840
2 PLAC Gasconade, Missouri, USA
2 SOUR @S1099248508@
3 PAGE Year: 1840; Census Place: Gasconade, Missouri; Roll: 223; Page: 275; Family History Library Film: 0014855
3 _APID 1,8057::3253252
1 RESI
2 DATE 1850
2 PLAC District 31, Franklin, Missouri, USA
2 SOUR @S1099278044@
3 PAGE Year: 1850; Census Place: District 31, Franklin, Missouri; Roll: 399; Page: 97B
3 _APID 1,8054::3769516
1 RESI Residence Post Office: Boeuf Creek
2 DATE 1860
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Boeuf, Franklin, Missouri; Page: 76; Family History Library Film: 803619
3 _APID 1,7667::40194820
1 RESI
2 DATE 1863
2 PLAC Missouri, USA
2 SOUR @S1099605930@
3 _APID 1,1264::6837257
1 EVEN
2 TYPE Departure
2 PLAC Bremen, Germany
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14544
1 DEAT
2 DATE 10/17/1869
2 PLAC Franklin, Missouri, USA
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::6432471
2 SOUR @S1084083971@
3 _APID 1,60525::39299201
1 BURI
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::39299201
1 PROB
2 DATE 1 Aug 1869
2 PLAC Franklin, Missouri, USA
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::6432471
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 _MTTAG @T23@
1 _MTTAG @T5@
1 _MTTAG @T13@
1 _MTTAG @T14@
0 @I312217735663@ INDI
1 NAME Friederich Arnold /Pehle/
2 GIVN Friederich Arnold
2 SURN Pehle
2 SOUR @S1099063392@
3 _APID 1,9870::11912460
2 SOUR @S1092363729@
3 _APID 1,9866::109672212
2 SOUR @S1092363729@
3 _APID 1,9866::104427643
2 SOUR @S1092363729@
3 _APID 1,9866::44268913
2 SOUR @S1092363729@
3 _APID 1,9866::44285554
2 SOUR @S1092363729@
3 _APID 1,9866::13204146
2 SOUR @S1092363729@
3 _APID 1,9866::13740540
2 SOUR @S1092363729@
3 _APID 1,9866::13735789
2 SOUR @S1092363729@
3 _APID 1,9866::106892687
2 SOUR @S1099063392@
3 _APID 1,9870::22342925
2 SOUR @S1092363729@
3 _APID 1,9866::22564304
2 SOUR @S1092363729@
3 _APID 1,9866::1436654
1 SEX M
1 FAMC @F92@
1 FAMS @F4@
1 BIRT
2 DATE 1780
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 _MTTAG @T23@
1 _MTTAG @T9@
0 @I312217735664@ INDI
1 NAME Hanne Friedrike Wilhelmine /Kerker/
2 GIVN Hanne Friedrike Wilhelmine
2 SURN Kerker
2 SOUR @S1099063392@
3 _APID 1,9870::11912455
2 SOUR @S1092363729@
3 _APID 1,9866::84491303
2 SOUR @S1084083971@
3 _APID 1,60525::15350682
2 SOUR @S1092363729@
3 _APID 1,9866::84494000
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14545
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::6433320
2 SOUR @S1099278513@
3 PAGE Year: 1910; Census Place: Franklin, Missouri; Roll: MOSC_7661
3 _APID 1,1024::150511
2 SOUR @S1092363729@
3 _APID 1,9866::17490330
1 NAME Wilhelmine /Pehle/
2 GIVN Wilhelmine
2 SURN Pehle
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::547574
1 SEX F
1 FAMS @F30@
1 BIRT
2 DATE 29 Sep 1805
2 PLAC Germany
2 SOUR @S1099063392@
3 _APID 1,9870::11912455
2 SOUR @S1084083971@
3 _APID 1,60525::15350682
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14545
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::547574
1 EVEN
2 TYPE Arrival
2 DATE 23 Nov 1839
2 PLAC United States
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14545
1 RESI Residence Post Office: Berger
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::547574
1 RESI
2 DATE 1876
2 PLAC Township 44, Franklin, Missouri
2 SOUR @S1099278513@
3 PAGE Year: 1910; Census Place: Franklin, Missouri; Roll: MOSC_7661
3 _APID 1,1024::150511
1 EVEN
2 TYPE Departure
2 PLAC Bremen, Germany
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14545
1 DEAT
2 DATE 21 August 1885
2 PLAC Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350682
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::6433320
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350682
1 PROB
2 DATE 21 Sep 1885
2 PLAC Franklin, Missouri, USA
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (Franklin County); Probate Place: Franklin, Missouri
3 _APID 1,9071::6433320
0 @I312217737198@ INDI
1 NAME Wilhelmine Amalie /Pehle/
2 GIVN Wilhelmine Amalie
2 SURN Pehle
2 SOUR @S1092363729@
3 _APID 1,9866::84491305
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14548
1 SEX F
1 FAMC @F30@
1 BIRT
2 DATE 4 Aug 1835
2 PLAC Oerlinghausen,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::84491305
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14548
1 BAPM
2 DATE 9 Aug 1835
2 PLAC Evangelisch,Oerlinghausen,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::84491305
1 EVEN
2 TYPE Arrival
2 DATE 23 Nov 1839
2 PLAC United States
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14548
1 EVEN
2 TYPE Departure
2 PLAC Bremen, Germany
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14548
0 @I312217737305@ INDI
1 NAME Friederike Luise /Brokmann/
2 GIVN Friederike Luise
2 SURN Brokmann
2 SOUR @S1092363729@
3 _APID 1,9866::109672211
2 SOUR @S1092363729@
3 _APID 1,9866::104427644
2 SOUR @S1092363729@
3 _APID 1,9866::44268914
2 SOUR @S1092363729@
3 _APID 1,9866::44285549
2 SOUR @S1092363729@
3 _APID 1,9866::13204144
2 SOUR @S1092363729@
3 _APID 1,9866::13740545
2 SOUR @S1092363729@
3 _APID 1,9866::13735792
2 SOUR @S1092363729@
3 _APID 1,9866::106892689
2 SOUR @S1099063392@
3 _APID 1,9870::22342927
2 SOUR @S1092363729@
3 _APID 1,9866::22564306
2 SOUR @S1092363729@
3 _APID 1,9866::1436207
1 SEX F
1 FAMS @F4@
0 @I312217739117@ INDI
1 NAME Friedrich Wilhelm Adolph /Pehle/
2 GIVN Friedrich Wilhelm Adolph
2 SURN Pehle
2 SOUR @S1092363470@
3 PAGE New Haven Leader; Publication Date: 23/ Sep/ 1920; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/126688267/?article=33f18f27-fb11-4e7b-bc59-e428c5527ef7&focus=0.374926,0.13156939,0.5264904,0
4 CONC .4390107
3 _APID 1,61843::562224768
2 SOUR @S1099277348@
3 _APID 1,8526::1037
2 SOUR @S1092363729@
3 _APID 1,9866::84493765
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::11138622
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092659
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199112
2 SOUR @S1084083971@
3 _APID 1,60525::56420026
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401707
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0044; FHL microfilm: 1374793
3 _APID 1,7884::14326334
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: New Haven, Franklin, Missouri; Roll: T625_918; Page: 2B; Enumeration District: 68
3 _APID 1,6061::78394146
2 SOUR @S1092364231@
3 _APID 1,60382::392431
1 SEX M
1 FAMC @F30@
1 FAMS @F74@
1 FAMS @F75@
1 BIRT
2 DATE 25 JAN 1839
2 PLAC Germany
2 SOUR @S1092363470@
3 PAGE New Haven Leader; Publication Date: 23/ Sep/ 1920; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/126688267/?article=33f18f27-fb11-4e7b-bc59-e428c5527ef7&focus=0.374926,0.13156939,0.5264904,0
4 CONC .4390107
3 _APID 1,61843::562224768
2 SOUR @S1092363729@
3 _APID 1,9866::84493765
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092659
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199112
2 SOUR @S1084083971@
3 _APID 1,60525::56420026
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401707
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0044; FHL microfilm: 1374793
3 _APID 1,7884::14326334
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: New Haven, Franklin, Missouri; Roll: T625_918; Page: 2B; Enumeration District: 68
3 _APID 1,6061::78394146
1 BAPM
2 DATE 3 Feb 1839
2 PLAC Evangelisch,Oerlinghausen,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::84493765
1 EVEN
2 TYPE Arrival
2 DATE 1840
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199112
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0044; FHL microfilm: 1374793
3 _APID 1,7884::14326334
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: New Haven, Franklin, Missouri; Roll: T625_918; Page: 2B; Enumeration District: 68
3 _APID 1,6061::78394146
1 RESI Residence Post Office: Berger
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092659
1 RESI Marital Status: Married; Relation to Head: Self
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401707
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1900
2 PLAC Union, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199112
1 RESI Marital Status: Married; Relation to Head of House: Head
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0044; FHL microfilm: 1374793
3 _APID 1,7884::14326334
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1920
2 PLAC New Haven, Franklin, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: New Haven, Franklin, Missouri; Roll: T625_918; Page: 2B; Enumeration District: 68
3 _APID 1,6061::78394146
1 RESI
2 PLAC Franklin county
2 SOUR @S1092363470@
3 PAGE New Haven Leader; Publication Date: 23/ Sep/ 1920; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/126688267/?article=33f18f27-fb11-4e7b-bc59-e428c5527ef7&focus=0.374926,0.13156939,0.5264904,0
4 CONC .4390107
3 _APID 1,61843::562224768
1 RESI
2 PLAC Missouri
2 SOUR @S1099277348@
3 _APID 1,8526::1037
1 DEAT
2 DATE 20 SEP 1920
2 PLAC New Haven, Franklin, Missouri
2 SOUR @S1092363470@
3 PAGE New Haven Leader; Publication Date: 23/ Sep/ 1920; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/126688267/?article=33f18f27-fb11-4e7b-bc59-e428c5527ef7&focus=0.374926,0.13156939,0.5264904,0
4 CONC .4390107
3 _APID 1,61843::562224768
2 SOUR @S1084083971@
3 _APID 1,60525::56420026
2 SOUR @S1092364231@
3 _APID 1,60382::392431
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::56420026
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O56@
0 @I312217739118@ INDI
1 NAME Caroline /Pehle/
2 GIVN Caroline
2 SURN Pehle
1 SEX F
1 FAMC @F30@
1 BIRT
2 DATE ABT 1850
2 PLAC Franklin County, Missouri
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312217739119@ INDI
1 NAME Emilie /Pehle/
2 GIVN Emilie
2 SURN Pehle
1 SEX F
1 FAMC @F30@
1 BIRT
2 DATE ABT 1852
2 PLAC Franklin County, Missouri
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312217739120@ INDI
1 NAME Louise Anna /Pehle/
2 GIVN Louise Anna
2 SURN Pehle
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::547573
1 SEX F
1 FAMC @F30@
1 BIRT
2 DATE 30 APR 1852
2 PLAC Senate Grove, Franklin, Missouri
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::547573
1 RESI Residence Post Office: Berger
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::547573
1 DEAT
2 DATE 22 FEB 1956
2 PLAC New Haven, Franklin, Missouri
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312217979745@ INDI
1 NAME Hannah /Altheide/
2 GIVN Hannah
2 SURN Altheide
2 SOUR @S1092363470@
3 PAGE New Haven Leader; Publication Date: 23/ Sep/ 1920; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/126688267/?article=33f18f27-fb11-4e7b-bc59-e428c5527ef7&focus=0.374926,0.13156939,0.5264904,0
4 CONC .4390107
3 _APID 1,61843::227691488
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::511138622
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092661
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199113
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401848
1 SEX F
1 FAMS @F74@
1 BIRT
2 DATE abt 1839
2 PLAC Prussia
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092661
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199113
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401848
1 EVEN
2 TYPE Arrival
2 DATE 1850
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199113
1 RESI Residence Post Office: Berger
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092661
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401848
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1900
2 PLAC Union, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199113
0 @I312219269817@ INDI
1 NAME Wilhelmine Frederike /Pehle/
2 GIVN Wilhelmine Frederike
2 SURN Pehle
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14548
1 NAME Friedericke /Weber/
2 GIVN Friedericke
2 SURN Weber
2 SOUR @S1099278513@
3 PAGE Year: 1910; Census Place: Franklin, Missouri; Roll: MOSC_7661
3 _APID 1,1024::151330
1 SEX F
1 FAMC @F30@
1 FAMS @F43@
1 BIRT
2 DATE 1832
2 PLAC Germany
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14548
1 EVEN
2 TYPE Arrival
2 DATE 23 Nov 1839
2 PLAC United States
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14548
1 RESI
2 DATE 1876
2 PLAC Township 45, Franklin, Missouri
2 SOUR @S1099278513@
3 PAGE Year: 1910; Census Place: Franklin, Missouri; Roll: MOSC_7661
3 _APID 1,1024::151330
1 EVEN
2 TYPE Departure
2 PLAC Bremen, Germany
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::14548
0 @I312219270705@ INDI
1 NAME Sadina /Pehle/
2 GIVN Sadina
2 SURN Pehle
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092662
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33883854
1 NAME Sadina A. /Nollner/
2 GIVN Sadina A.
2 SURN Nollner
2 SOUR @S1084083971@
3 _APID 1,60525::47941934
1 SEX F
1 FAMC @F74@
1 BIRT
2 DATE abt 1862
2 PLAC Missouri
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092662
2 SOUR @S1084083971@
3 _APID 1,60525::47941934
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33883854
1 RESI Residence Post Office: Berger
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092662
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33883854
1 DEAT
2 DATE 1939
2 SOUR @S1084083971@
3 _APID 1,60525::47941934
1 BURI
2 PLAC Columbia, Boone County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::47941934
0 @I312219270706@ INDI
1 NAME Anna /Pehle/
2 GIVN Anna
2 SURN Pehle
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::547571
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401652
1 SEX F
1 FAMC @F74@
1 BIRT
2 DATE abt 1864
2 PLAC Missouri
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::547571
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401652
1 RESI Residence Post Office: Berger
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::547571
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401652
0 @I312219270707@ INDI
1 NAME Henry /Pehle/
2 GIVN Henry
2 SURN Pehle
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::5132531
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33883895
1 SEX M
1 FAMC @F74@
1 BIRT
2 DATE abt 1866
2 PLAC Missouri
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::5132531
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33883895
1 RESI Residence Post Office: Berger
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::5132531
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33883895
0 @I312219270708@ INDI
1 NAME Gustave /Pehle/
2 GIVN Gustave
2 SURN Pehle
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092660
2 SOUR @S1084083971@
3 _APID 1,60525::15350901
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::25068833
1 SEX M
1 FAMC @F74@
1 BIRT
2 DATE abt 1868
2 PLAC Missouri
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092660
2 SOUR @S1084083971@
3 _APID 1,60525::15350901
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::25068833
1 RESI Residence Post Office: Berger
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 22B; Family History Library Film: 552274
3 _APID 1,7163::2092660
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::25068833
1 DEAT
2 DATE 1959
2 SOUR @S1084083971@
3 _APID 1,60525::15350901
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350901
0 @I312219270813@ INDI
1 NAME William E /Pehle/
2 GIVN William E
2 SURN Pehle
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199114
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401828
1 SEX M
1 FAMC @F74@
1 BIRT
2 DATE Feb 1873
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199114
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401828
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::48401828
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Union, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199114
0 @I312219270817@ INDI
1 NAME Amanda /Pehle/
2 GIVN Amanda
2 SURN Pehle
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199115
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33884031
1 NAME Amanda L /Kruse/
2 GIVN Amanda L
2 SURN Kruse
2 SOUR @S1084083971@
3 _APID 1,60525::15350921
1 SEX F
1 FAMC @F74@
1 BIRT
2 DATE Apr 1877
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199115
2 SOUR @S1084083971@
3 _APID 1,60525::15350921
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33884031
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33884031
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Union, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199115
1 DEAT
2 DATE 1964
2 SOUR @S1084083971@
3 _APID 1,60525::15350921
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350921
0 @I312219270819@ INDI
1 NAME Alice /Pehle/
2 GIVN Alice
2 SURN Pehle
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199116
1 NAME Ella /Pehle/
2 GIVN Ella
2 SURN Pehle
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33883896
1 SEX F
1 FAMC @F74@
1 BIRT
2 DATE May 1880
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199116
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33883896
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Boeuf, Franklin, Missouri; Roll: 686; Page: 29A; Enumeration District: 067
3 _APID 1,6742::33883896
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Union, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199116
0 @I312219271183@ INDI
1 NAME Mary D /Pehle/
2 GIVN Mary D
2 SURN Pehle
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0044; FHL microfilm: 1374793
3 _APID 1,7884::177334066
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: New Haven, Franklin, Missouri; Roll: T625_918; Page: 2B; Enumeration District: 68
3 _APID 1,6061::78394147
1 SEX F
1 FAMS @F75@
1 BIRT
2 DATE abt 1855
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0044; FHL microfilm: 1374793
3 _APID 1,7884::177334066
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: New Haven, Franklin, Missouri; Roll: T625_918; Page: 2B; Enumeration District: 68
3 _APID 1,6061::78394147
1 RESI Marital Status: Married; Relation to Head of House: Wife
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0044; FHL microfilm: 1374793
3 _APID 1,7884::177334066
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1920
2 PLAC New Haven, Franklin, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: New Haven, Franklin, Missouri; Roll: T625_918; Page: 2B; Enumeration District: 68
3 _APID 1,6061::78394147
0 @I312219272934@ INDI
1 NAME William /Weber/
2 GIVN William
2 SURN Weber
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::8013160
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 2A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6773306
2 SOUR @S1084083263@
3 _APID 1,60901::13897336
2 SOUR @S_2117281763@
3 PAGE Registration State: Missouri; Registration County: Franklin County
3 _APID 1,6482::33108460
2 SOUR @S1102909201@
3 PAGE Publication Date: 23/ Jan/ 1919; Publication Place: New Haven, Missouri, USA; URL: https://www.newspapers.com/image/513189976/?article=b26840dc-8d9d-46b1-9f76-63f0a9d12f92/c217f277-fa98-4e65-aee7-52e9a0cdaf9f&focus=0.36258695,0.6405949,0.5168968,0.
4 CONC 
3 _APID 1,62116::313388170
1 SEX M
1 FAMC @F82@
1 FAMS @F28@
1 BIRT
2 DATE Oct 1888
2 PLAC Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 2A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6773306
2 SOUR @S1084083263@
3 _APID 1,60901::13897336
2 SOUR @S_2117281763@
3 PAGE Registration State: Missouri; Registration County: Franklin County
3 _APID 1,6482::33108460
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174312
1 RESI
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174312
1 RESI Marital Status: Single
2 DATE 1917-1918
2 PLAC Franklin County, Missouri, USA
2 SOUR @S_2117281763@
3 PAGE Registration State: Missouri; Registration County: Franklin County
3 _APID 1,6482::33108460
1 RESI
2 DATE 1920
2 PLAC Boeuf ED51, Franklin, Missouri
2 SOUR @S1110171582@
3 _APID 1,4372::166
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1930
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281312@
3 PAGE Year: 1930; Census Place: Boeuf, Franklin, Missouri; Page: 2A; Enumeration District: 0002; FHL microfilm: 2340922
3 _APID 1,6224::6773306
1 RESI
2 DATE 1935
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 5A; Enumeration District: 36-2
3 _APID 1,2442::91816555
1 RESI
2 DATE 1940
2 PLAC Bouef T, Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 5A; Enumeration District: 36-2
3 _APID 1,2442::91816555
1 RESI
2 DATE 1965
2 PLAC Missouri
2 SOUR @S_2117281209@
3 PAGE Social Security Administration; Washington D.C., USA; Social Security Death Index, Master File
3 _APID 1,3693::66039393
1 RESI
2 PLAC New Haven, Missouri, USA
2 SOUR @S1110171451@
3 PAGE The National Archives at St. Louis; St. Louis, Missouri; World War II Draft Cards (Fourth Registration) for the State of Missouri; Record Group Title: Records of the Selective Service System; Record Group Number: 147; Box or Roll Number: 1145
3 _APID 1,1002::16130953
1 DEAT
2 DATE 1969
2 SOUR @S108
3 _APID 1,60525::15350754
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S108
3 _APID 1,60525::15350754
1 SOUR @S_2117281409@
2 PAGE Year: 1920; Census Place: Boeuf, Franklin, Missouri; Roll: T625_918; Page: 2B; Enumeration District: 51
2 _APID 1,6061::78376093
0 @I312219273556@ INDI
1 NAME Christ /Weber/
2 GIVN Christ
2 SURN Weber
2 SOUR @S1084083263@
3 _APID 1,60901::613897336
1 SEX M
1 FAMS @F82@
0 @I312219273558@ INDI
1 NAME Fredericka /Weber/
2 GIVN Fredericka
2 SURN Weber
2 SOUR @S1084083263@
3 _APID 1,60901::763897336
2 SOUR @S_2117281560@
3 _APID 1,7602::76174309
1 SEX F
1 FAMS @F82@
1 FAMS @F93@
1 BIRT
2 DATE Jul 1842
2 PLAC Germany
2 SOUR @S_2117281560@
3 _APID 1,7602::76174309
1 EVEN
2 TYPE Arrival
2 DATE 1868
2 SOUR @S_2117281560@
3 _APID 1,7602::76174309
1 RESI
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 _APID 1,7602::76174309
0 @I312219275292@ INDI
1 NAME Luise Wilhelmine Amalie /Pehle/
2 GIVN Luise Wilhelmine Amalie
2 SURN Pehle
2 SOUR @S1092363729@
3 _APID 1,9866::104427642
1 SEX F
1 FAMC @F4@
1 BIRT
2 DATE 12 Nov 1801
2 SOUR @S1092363729@
3 _APID 1,9866::104427642
1 BAPM
2 DATE 15 Nov 1801
2 PLAC Evangelisch,Schoetmar,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::104427642
1 DEAT
2 DATE 20 May 1876
2 SOUR @S1092363729@
3 _APID 1,9866::104427642
0 @I312219275487@ INDI
1 NAME Sophie Amalia /Pehle/
2 GIVN Sophie Amalia
2 SURN Pehle
2 SOUR @S1092363729@
3 _APID 1,9866::44268916
1 SEX F
1 FAMC @F4@
1 BIRT
2 PLAC Evangelisch,Oerlinghausen,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::44268916
0 @I312219275649@ INDI
1 NAME Hanne Friederike /Pehle/
2 GIVN Hanne Friederike
2 SURN Pehle
2 SOUR @S1092363729@
3 _APID 1,9866::44285557
1 SEX F
1 FAMC @F4@
1 BIRT
2 DATE 22 Jan 1813
2 SOUR @S1092363729@
3 _APID 1,9866::44285557
1 BAPM
2 DATE 31 Jan 1813
2 PLAC Evangelisch,Oerlinghausen,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::44285557
0 @I312219275736@ INDI
1 NAME Ernst Henrich Jacob /Pehle/
2 GIVN Ernst Henrich Jacob
2 SURN Pehle
2 SOUR @S1092363729@
3 _APID 1,9866::13204142
1 SEX M
1 FAMC @F4@
1 BIRT
2 DATE 22 Feb 1811
2 SOUR @S1092363729@
3 _APID 1,9866::13204142
1 BAPM
2 DATE 24 Feb 1811
2 PLAC Evangelisch,Oerlinghausen,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::13204142
0 @I312219275843@ INDI
1 NAME Johann Friederich Adolph /Paehle/
2 GIVN Johann Friederich Adolph
2 SURN Paehle
2 SOUR @S1092363729@
3 _APID 1,9866::13740543
1 SEX M
1 FAMC @F4@
1 BIRT
2 DATE 29 Feb 1804
2 SOUR @S1092363729@
3 _APID 1,9866::13740543
1 BAPM
2 DATE 4 Mar 1804
2 PLAC Evangelisch,Schoetmar,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::13740543
0 @I312219275934@ INDI
1 NAME Johann Henrich Adolph /Pehle/
2 GIVN Johann Henrich Adolph
2 SURN Pehle
2 SOUR @S1092363729@
3 _APID 1,9866::13735794
1 SEX M
1 FAMC @F4@
1 BIRT
2 DATE 20 Jun 1815
2 SOUR @S1092363729@
3 _APID 1,9866::13735794
1 BAPM
2 DATE 25 Jun 1815
2 PLAC Evangelisch,Oerlinghausen,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::13735794
1 DEAT
2 DATE 12 Aug 1879
2 SOUR @S1092363729@
3 _APID 1,9866::13735794
0 @I312219295461@ INDI
1 NAME Henriette Wilhelmine Florentine /Paehle/
2 GIVN Henriette Wilhelmine Florentine
2 SURN Paehle
2 SOUR @S1092363729@
3 _APID 1,9866::106892688
1 SEX F
1 FAMC @F4@
1 BIRT
2 DATE 21 Jan 1806
2 SOUR @S1092363729@
3 _APID 1,9866::106892688
1 BAPM
2 DATE 26 Jan 1806
2 PLAC Evangelisch,Schoetmar,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::106892688
0 @I312219295547@ INDI
1 NAME Adolph /Pehl/
2 GIVN Adolph
2 SURN Pehl
2 SOUR @S1099063392@
3 _APID 1,9870::22342926
1 SEX M
1 FAMS @F92@
0 @I312219295635@ INDI
1 NAME Phillipp Henrich /Pehl/
2 GIVN Phillipp Henrich
2 SURN Pehl
2 SOUR @S1092363729@
3 _APID 1,9866::22564305
2 SOUR @S1092363729@
3 _APID 1,9866::1436653
1 SEX M
1 FAMC @F4@
1 BIRT
2 DATE 22 Jul 1818
2 SOUR @S1092363729@
3 _APID 1,9866::22564305
1 BAPM
2 DATE 26 Jul 1818
2 PLAC Evangelisch, Schoetmar, Lippe, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::22564305
2 SOUR @S1092363729@
3 _APID 1,9866::1436653
1 RESI
2 PLAC Schötmar, Lippe, Germany
2 SOUR @S1092363729@
3 _APID 1,9866::22564305
0 @I312219303993@ INDI
1 NAME Christian /Weber/
2 GIVN Christian
2 SURN Weber
2 SOUR @S1099278513@
3 PAGE Year: 1910; Census Place: Franklin, Missouri; Roll: MOSC_7661
3 _APID 1,1024::151329
1 SEX M
1 FAMS @F43@
1 RESI
2 DATE 1876
2 PLAC Township 45, Franklin, Missouri
2 SOUR @S1099278513@
3 PAGE Year: 1910; Census Place: Franklin, Missouri; Roll: MOSC_7661
3 _APID 1,1024::151329
0 @I312219304413@ INDI
1 NAME Freidrick Adolph /Pehle/
2 GIVN Freidrick Adolph
2 SURN Pehle
2 SOUR @S1092363729@
3 _APID 1,9866::17490328
1 SEX M
1 FAMC @F30@
1 BIRT
2 DATE 2 Dec 1828
2 PLAC Germany
2 SOUR @S1092363729@
3 _APID 1,9866::17490328
1 BAPM
2 DATE 7 Dec 1828
2 PLAC Evangelisch,Oerlinghausen,Lippe,Germany
2 SOUR @S1092363729@
3 _APID 1,9866::17490328
1 NOTE This may be Charles Pehle
1 _MTTAG @T23@
0 @I312219392793@ INDI
1 NAME Caroline /Pehle/
2 GIVN Caroline
2 SURN Pehle
2 SOUR @S1084083971@
3 _APID 1,60525::15350743
1 FAMC @F77@
1 BIRT
2 DATE 1881
2 SOUR @S1084083971@
3 _APID 1,60525::15350743
1 DEAT
2 DATE 1881
2 SOUR @S1084083971@
3 _APID 1,60525::15350743
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350743
0 @I312219392794@ INDI
1 NAME George Charles /Pehle/
2 GIVN George Charles
2 SURN Pehle
2 SOUR @S1084083971@
3 _APID 1,60525::15350820
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::14325976
1 SEX M
1 FAMC @F77@
1 BIRT
2 DATE Dec 15 1882
2 PLAC Missouri
2 SOUR @S1084083971@
3 _APID 1,60525::15350820
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::14325976
1 RESI Marital Status: Married; Relation to Head of House: Head
2 DATE 1910
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: Boeuf, Franklin, Missouri; Roll: T624_780; Page: 2B; Enumeration District: 0043; FHL microfilm: 1374793
3 _APID 1,7884::14325976
1 DEAT
2 DATE Jul 20 1966
2 PLAC St.FrancisHos(now Mercy Doctors Bldg.), Wash., Franklin, MO; on SS and findagrave.com
2 SOUR @S1084083971@
3 _APID 1,60525::15350820
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350820
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312219392797@ INDI
1 NAME C Emilie /Pehle/
2 GIVN C Emilie
2 SURN Pehle
2 SOUR @S1084083971@
3 _APID 1,60525::15350841
1 SEX F
1 FAMC @F77@
1 BIRT
2 DATE 8 SEP 1879
2 PLAC Franklin County, Missouri
2 SOUR @S1084083971@
3 _APID 1,60525::15350841
1 DEAT
2 DATE 20 NOV 1890
2 PLAC Berger, Franklin, Missouri
2 SOUR @S1084083971@
3 _APID 1,60525::15350841
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350841
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312219392799@ INDI
1 NAME William Herman /Pehle/
2 GIVN William Herman
2 SURN Pehle
2 SOUR @S1084083971@
3 _APID 1,60525::90606619
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::8226293
1 SEX M
1 FAMC @F77@
1 BIRT
2 DATE 22 May 1868
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::90606619
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::8226293
1 RESI Residence Post Office: New Haven
2 DATE 1870
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733210232@
3 PAGE Year: 1870; Census Place: Boeuf, Franklin, Missouri; Roll: M593_775; Page: 30B; Family History Library Film: 552274
3 _APID 1,7163::8226293
1 DEAT
2 DATE 6 April 1929
2 PLAC Washington, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::90606619
1 BURI
2 PLAC Washington, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::90606619
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312219397306@ INDI
1 NAME Fred /Kleinebeker/
2 GIVN Fred
2 SURN Kleinebeker
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::11138903
2 SOUR @S1099371773@
3 PAGE National Archives and Records Administration (NARA); Washington, D.C.; Consolidated Lists of Civil War Draft Registration Records (Provost Marshal General's Bureau; Consolidated Enrollment Lists, 1863-1865); Record Group: 110, Records of the Provos
4 CONC t Marsha
3 _APID 1,1666::830934
1 NAME John F /Kleinebecker/
2 GIVN John F
2 SURN Kleinebecker
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Boeuf, Franklin, Missouri; Page: 36; Family History Library Film: 803619
3 _APID 1,7667::40191929
1 SEX M
1 FAMS @F48@
1 BIRT
2 DATE abt 1843
2 PLAC Prussia
2 SOUR @S1099371773@
3 PAGE National Archives and Records Administration (NARA); Washington, D.C.; Consolidated Lists of Civil War Draft Registration Records (Provost Marshal General's Bureau; Consolidated Enrollment Lists, 1863-1865); Record Group: 110, Records of the Provos
4 CONC t Marsha
3 _APID 1,1666::830934
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Boeuf, Franklin, Missouri; Page: 36; Family History Library Film: 803619
3 _APID 1,7667::40191929
1 RESI Residence Post Office: Beaufort
2 DATE 1860
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Boeuf, Franklin, Missouri; Page: 36; Family History Library Film: 803619
3 _APID 1,7667::40191929
1 RESI Marital Status: Unmarried
2 DATE 1 July 1863
2 PLAC Boeuff, Missouri, United States
2 SOUR @S1099371773@
3 PAGE National Archives and Records Administration (NARA); Washington, D.C.; Consolidated Lists of Civil War Draft Registration Records (Provost Marshal General's Bureau; Consolidated Enrollment Lists, 1863-1865); Record Group: 110, Records of the Provos
4 CONC t Marsha
3 _APID 1,1666::830934
0 @I312219399611@ INDI
1 NAME Caroline /Baedecker/
2 GIVN Caroline
2 SURN Baedecker
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 4/ Nov/ 1937; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513458897/?article=0371ebe3-2aef-49a9-9492-42befd5b1847&focus=0.19745898,0.052322052,0.350
4 CONC 56293,0.
3 _APID 1,61843::48227874
1 SEX F
1 FAMS @F46@
0 @I312219399612@ INDI
1 NAME Edward /Pehle/
2 GIVN Edward
2 SURN Pehle
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 4/ Nov/ 1937; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513458897/?article=0371ebe3-2aef-49a9-9492-42befd5b1847&focus=0.19745898,0.052322052,0.350
4 CONC 56293,0.
3 _APID 1,61843::48471430
1 SEX M
1 FAMC @F46@
0 @I312219399614@ INDI
1 NAME John /Pehle/
2 GIVN John
2 SURN Pehle
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 4/ Nov/ 1937; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513458897/?article=0371ebe3-2aef-49a9-9492-42befd5b1847&focus=0.19745898,0.052322052,0.350
4 CONC 56293,0.
3 _APID 1,61843::48613864
1 SEX M
1 FAMC @F46@
0 @I312219399615@ INDI
1 NAME Fred /Pehle/
2 GIVN Fred
2 SURN Pehle
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 4/ Nov/ 1937; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513458897/?article=0371ebe3-2aef-49a9-9492-42befd5b1847&focus=0.19745898,0.052322052,0.350
4 CONC 56293,0.
3 _APID 1,61843::48712178
1 SEX M
1 FAMC @F46@
0 @I312219399616@ INDI
1 NAME Arthur /Pehle/
2 GIVN Arthur
2 SURN Pehle
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 4/ Nov/ 1937; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513458897/?article=0371ebe3-2aef-49a9-9492-42befd5b1847&focus=0.19745898,0.052322052,0.350
4 CONC 56293,0.
3 _APID 1,61843::48776672
1 SEX M
1 FAMC @F46@
0 @I312219399617@ INDI
1 NAME Lena /Pehle Gerlemann/
2 GIVN Lena
2 SURN Pehle Gerlemann
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 4/ Nov/ 1937; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513458897/?article=0371ebe3-2aef-49a9-9492-42befd5b1847&focus=0.19745898,0.052322052,0.350
4 CONC 56293,0.
3 _APID 1,61843::48818156
1 SEX F
1 FAMC @F46@
0 @I312219406744@ INDI
1 NAME William /Kappelmann/
2 GIVN William
2 SURN Kappelmann
1 SEX M
1 FAMS @F66@
1 BIRT
2 DATE 07 Jun 1804
2 PLAC Borgholzhausen, Westphalia, Prussia, Germany
1 DEAT
2 DATE 20 DEC 1891
2 PLAC Franklin County, Missouri
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 OBJE @O51@
2 _PRIM Y
0 @I312219406745@ INDI
1 NAME Anna Maria Catharine Wilhelmine /Lippold/
2 GIVN Anna Maria Catharine Wilhelmine
2 SURN Lippold
1 SEX F
1 FAMS @F66@
1 BIRT
2 DATE 1 March 1808
2 PLAC Germany
1 DEAT
2 DATE 02 Jul 1879
2 PLAC New Haven, Franklin, Missouri, USA
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312219406746@ INDI
1 NAME Franz Wilhelm /Kappelmann/
2 GIVN Franz Wilhelm
2 SURN Kappelmann
1 SEX M
1 FAMC @F66@
1 BIRT
2 DATE 13 JAN 1840
2 PLAC Barthausen, Westphalia, Germany
1 DEAT
2 DATE 17 JUL 1894
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312219406749@ INDI
1 NAME Johann Heinrich Wilhelm /Kappelmann/
2 GIVN Johann Heinrich Wilhelm
2 SURN Kappelmann
1 SEX M
1 FAMC @F66@
1 BIRT
2 DATE 17 Jan 1839
2 PLAC Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 25 Feb 1879
2 PLAC New Haven, Franklin, Missouri, USA
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312219406751@ INDI
1 NAME Wilhelmine Charlotte /Kappelmann/
2 GIVN Wilhelmine Charlotte
2 SURN Kappelmann
1 SEX F
1 FAMC @F66@
1 BIRT
2 DATE 21 NOV 1849
2 PLAC Ostbarthausen, Westphalia, Germany
1 DEAT
2 DATE 21 FEB 1929
2 PLAC Wellsville, Montgomery Co., Missouri
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312219406752@ INDI
1 NAME Johann Heinrich /Kappelman/
2 GIVN Johann Heinrich
2 SURN Kappelman
1 SEX M
1 FAMC @F66@
1 BIRT
2 DATE 28 Nov 1837
2 PLAC Gütersloher Landkreis, Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 28 Jul 1891
2 PLAC Freedom, Lafayette County, Missouri
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312219406753@ INDI
1 NAME Friederich Wilhelm /Kappelmann/
2 GIVN Friederich Wilhelm
2 SURN Kappelmann
1 SEX M
1 FAMC @F66@
1 BIRT
2 DATE 12 Sep 1833
2 PLAC Nordrhein-Westfalen, Germany
1 DEAT
2 DATE 11 Jun 1922
2 PLAC Franklin County, Missouri, USA
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312219406757@ INDI
1 NAME Oscar Carl /Pehle/
2 GIVN Oscar Carl
2 SURN Pehle
1 SEX M
1 FAMC @F77@
1 BIRT
2 DATE 25 November 1885
2 PLAC New Haven, Franklin County, Missouri, United States of America
1 DEAT
2 DATE 12 August 1966
2 PLAC Mexico, Audrain County, Missouri, United States of America
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312219406760@ INDI
1 NAME William /Obermeyer/
2 GIVN William
2 SURN Obermeyer
1 SEX M
1 FAMS @F55@
1 BIRT
2 DATE 1843
1 DEAT
2 DATE 1897
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312223006713@ INDI
1 NAME Dena /Witthaus/
2 GIVN Dena
2 SURN Witthaus
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057898
1 SEX F
1 FAMC @F76@
1 BIRT
2 DATE Jan 1883
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057898
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Pinckney, Warren, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057898
0 @I312223006714@ INDI
1 NAME Edward Henry /Witthaus/
2 GIVN Edward Henry
2 SURN Witthaus
1 NAME Edward /Witthaus/
2 GIVN Edward
2 SURN Witthaus
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057899
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::8370302
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 16/ Mar/ 1928; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/83554296/?article=b1c22055-868b-4aaf-9b4d-cba68997f623&focus=0.42597467,0.4345989,0.5581541,0
4 CONC .6618261
3 _APID 1,61843::255670065
1 SEX M
1 FAMC @F76@
1 BIRT
2 DATE 15 October 1884
1 BIRT
2 DATE Nov 1884
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057899
2 SOUR @S_1793379691@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Birth Records [Microfilm]
3 _APID 1,1170::8370302
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC Pinckney, Warren, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057899
1 DEAT
2 DATE 6 March 1970
1 BURI
2 PLAC Saint Charles, St. Charles County, Missouri, United States of America
1 SOUR @S1084083971@
2 _APID 1,60525::88313094
0 @I312223006715@ INDI
1 NAME Lizzie /Witthaus/
2 GIVN Lizzie
2 SURN Witthaus
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057900
1 SEX F
1 FAMC @F76@
1 BIRT
2 DATE Dec 1890
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057900
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Pinckney, Warren, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057900
0 @I312223006717@ INDI
1 NAME Malinda /Witthaus/
2 GIVN Malinda
2 SURN Witthaus
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057901
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Pinckney, Warren, Missouri; Roll: T625_966; Page: 4B; Enumeration District: 194
3 _APID 1,6061::71851165
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 16/ Mar/ 1928; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/83554296/?article=b1c22055-868b-4aaf-9b4d-cba68997f623&focus=0.42597467,0.4345989,0.5581541,0
4 CONC .6618261
3 _APID 1,61843::255550897
1 SEX F
1 FAMC @F76@
1 BIRT
2 DATE Feb 1894
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057901
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Pinckney, Warren, Missouri; Roll: T625_966; Page: 4B; Enumeration District: 194
3 _APID 1,6061::71851165
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1900
2 PLAC Pinckney, Warren, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057901
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1920
2 PLAC Pinckney, Warren, Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: Pinckney, Warren, Missouri; Roll: T625_966; Page: 4B; Enumeration District: 194
3 _APID 1,6061::71851165
0 @I312223006900@ INDI
1 NAME Gottlieb Ludwig /Witthaus/
2 GIVN Gottlieb Ludwig
2 SURN Witthaus
2 SOUR @S1084083971@
3 _APID 1,60525::37848167
2 SOUR @S1099366511@
3 PAGE Bureau of Land Management, General Land Office Records; Washington D.C., USA; Federal Land Patents, State Volumes
3 _APID 1,1246::1158051
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 5/ Nov/ 1942; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/84313142/?article=5ac82e71-fe62-43b6-9f3e-7db6004d21ee&focus=0.83892757,0.6628667,0.982577,0.9
4 CONC 093924&x
3 _APID 1,61843::24435454
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::47095
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Charrette, Warren, Missouri; Page: 313; Family History Library Film: 803659
3 _APID 1,7667::40949386
1 SEX M
1 FAMC @F78@
1 FAMS @F12@
1 BIRT
2 DATE 13 January 1818
2 PLAC Nordrhein-Westfalen, Germany
2 SOUR @S1084083971@
3 _APID 1,60525::37848167
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::47095
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Charrette, Warren, Missouri; Page: 313; Family History Library Film: 803659
3 _APID 1,7667::40949386
1 EVEN
2 TYPE Arrival
2 DATE 20 Dec 1843
2 PLAC United States
2 SOUR @S1099248217@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Passenger Lists of Vessels Arriving at New Orleans, Louisiana, 1820-1902; NAI Number: 2824927; Record Group Title: Records of the Immigration and Naturalization Service; Record Group Numb
4 CONC er: 85
3 _APID 1,7484::47095
1 RESI Residence Post Office: Holstine
2 DATE 1860
2 PLAC Charrette, Warren, Missouri, USA
2 SOUR @S1099063318@
3 PAGE Year: 1860; Census Place: Charrette, Warren, Missouri; Page: 313; Family History Library Film: 803659
3 _APID 1,7667::40949386
1 DEAT
2 DATE 1886
2 PLAC Hopewell, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::37848167
1 BURI
2 PLAC Hopewell, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::37848167
1 OBJE @O25@
2 _PRIM Y
1 OBJE @O52@
1 _MTTAG @T24@
1 _MTTAG @T8@
1 _MTTAG @T5@
0 @I312223006901@ INDI
1 NAME Carolina Charlotte Lottie /Niemeyer/
2 GIVN Carolina Charlotte Lottie
2 SURN Niemeyer
2 SOUR @S1084083971@
3 _APID 1,60525::44833400
1 FAMS @F12@
1 BIRT
2 DATE 4 March 1820
2 PLAC Germany
2 SOUR @S1084083971@
3 _APID 1,60525::44833400
1 DEAT
2 DATE 3 November 1906
2 PLAC Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::44833400
1 BURI
2 PLAC Wright City, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::44833400
1 OBJE @O13@
2 _PRIM Y
1 _MTTAG @T24@
1 _MTTAG @T8@
1 _MTTAG @T5@
0 @I312223009663@ INDI
1 NAME Simon Henry /Witthaus/
2 GIVN Simon Henry
2 SURN Witthaus
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 5/ Nov/ 1942; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/84313142/?article=5ac82e71-fe62-43b6-9f3e-7db6004d21ee&focus=0.83892757,0.6628667,0.982577,0.9
4 CONC 093924&x
3 _APID 1,61843::495919454
1 SEX M
1 FAMC @F12@
1 BIRT
2 DATE 19 Mar 1858
2 PLAC Warren County, MO.
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 5/ Nov/ 1942; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/84313142/?article=5ac82e71-fe62-43b6-9f3e-7db6004d21ee&focus=0.83892757,0.6628667,0.982577,0.9
4 CONC 093924&x
3 _APID 1,61843::495919454
1 DEAT
2 DATE Abt 1942
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 5/ Nov/ 1942; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/84313142/?article=5ac82e71-fe62-43b6-9f3e-7db6004d21ee&focus=0.83892757,0.6628667,0.982577,0.9
4 CONC 093924&x
3 _APID 1,61843::495919454
1 BURI
2 DATE 1 Nov
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 5/ Nov/ 1942; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/84313142/?article=5ac82e71-fe62-43b6-9f3e-7db6004d21ee&focus=0.83892757,0.6628667,0.982577,0.9
4 CONC 093924&x
3 _APID 1,61843::495919454
0 @I312223012718@ INDI
1 NAME Hannah Charlotte /Witthaus/
2 GIVN Hannah Charlotte
2 SURN Witthaus
1 SEX F
1 FAMC @F12@
1 BIRT
2 DATE 1 Nov 1854
0 @I312223012821@ INDI
1 NAME Gottlieb Ludwig /Witthaus/
2 GIVN Gottlieb Ludwig
2 SURN Witthaus
1 SEX M
1 FAMC @F12@
1 BIRT
2 DATE 1856
1 DEAT
2 DATE 1856
0 @I312223012876@ INDI
1 NAME Louis G /Witthaus/
2 GIVN Louis G
2 SURN Witthaus
1 SEX M
1 FAMC @F12@
1 BIRT
2 DATE 1857
0 @I312223012911@ INDI
1 NAME Fritz /Witthaus/
2 GIVN Fritz
2 SURN Witthaus
1 SEX M
1 FAMC @F12@
1 BIRT
2 DATE 1861
0 @I312223012950@ INDI
1 NAME August /Witthaus/
2 GIVN August
2 SURN Witthaus
1 SEX M
1 FAMC @F12@
1 BIRT
2 DATE 1869
0 @I312223019026@ INDI
1 NAME Jobst Heinrich /Witthaus/
2 GIVN Jobst Heinrich
2 SURN Witthaus
2 SOUR @S1084083971@
3 _APID 1,60525::37844435
2 SOUR @S1092363729@
3 _APID 1,9866::24339365
2 SOUR @S1099063392@
3 _APID 1,9870::21723881
1 SEX M
1 FAMC @F32@
1 FAMS @F78@
1 FAMS @F85@
1 BIRT
2 DATE 19 Jan 1789
2 PLAC Valdorf, Vlotho, Westphalla, Germany
2 SOUR @S1084083971@
3 _APID 1,60525::37844435
2 SOUR @S1099063392@
3 _APID 1,9870::21723881
1 DEAT
2 DATE 1854
2 PLAC Hopewell, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::37844435
1 BURI
2 PLAC Hopewell, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::37844435
1 OBJE @O46@
2 _PRIM Y
1 OBJE @O4@
0 @I312223020070@ INDI
1 NAME Johanna Catharine Elizabeth /Witthaus/
2 GIVN Johanna Catharine Elizabeth
2 SURN Witthaus
2 SOUR @S1084083971@
3 _APID 1,60525::37853698
1 FAMS @F78@
1 BIRT
2 DATE 15 January 1793
2 PLAC Nordrhein-Westfalen, Germany
2 SOUR @S1084083971@
3 _APID 1,60525::37853698
1 DEAT
2 DATE 1850
2 PLAC Hopewell, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::37853698
1 BURI
2 PLAC Hopewell, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::37853698
1 OBJE @O53@
2 _PRIM Y
1 OBJE @O75@
0 @I312223020074@ INDI
1 NAME Johnann Friederick (Fritz) /Witthaus/
2 GIVN Johnann Friederick (Fritz)
2 SURN Witthaus
2 SOUR @S1084083971@
3 _APID 1,60525::9300613
1 FAMC @F78@
1 BIRT
2 DATE 15 November 1815
2 PLAC Nordrhein-Westfalen, Germany
2 SOUR @S1084083971@
3 _APID 1,60525::9300613
1 DEAT
2 DATE 18 September 1907
2 PLAC Marthasville, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::9300613
1 BURI
2 PLAC Marthasville, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::9300613
0 @I312223020075@ INDI
1 NAME Heinrich /Witthaus/
2 GIVN Heinrich
2 SURN Witthaus
2 SOUR @S1084083971@
3 _APID 1,60525::13165869
1 FAMC @F78@
1 BIRT
2 DATE 1820
2 PLAC Nordrhein-Westfalen, Germany
2 SOUR @S1084083971@
3 _APID 1,60525::13165869
1 DEAT
2 DATE 1877
2 PLAC Morrison, Osage County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::13165869
1 BURI
2 PLAC Osage County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::13165869
0 @I312223020076@ INDI
1 NAME Ferdinand /Witthaus/
2 GIVN Ferdinand
2 SURN Witthaus
2 SOUR @S1084083971@
3 _APID 1,60525::27078231
1 FAMC @F85@
1 BIRT
2 DATE 10 June 1833
2 PLAC Germany
2 SOUR @S1084083971@
3 _APID 1,60525::27078231
1 DEAT
2 DATE 18 January 1893
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::27078231
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::27078231
0 @I312223020077@ INDI
1 NAME Herman Heinrich /Witthaus/
2 GIVN Herman Heinrich
2 SURN Witthaus
2 SOUR @S1084083971@
3 _APID 1,60525::28141598
2 SOUR @S1092363729@
3 _APID 1,9866::24339368
1 SEX M
1 FAMC @F85@
1 BIRT
2 DATE 28 February 1828
2 SOUR @S1084083971@
3 _APID 1,60525::28141598
2 SOUR @S1092363729@
3 _APID 1,9866::24339368
1 BAPM
2 DATE 8 Mar 1829
2 PLAC Sankt Stephani Evangelisch, Vlotho, Westfalen, Prussia
2 SOUR @S1092363729@
3 _APID 1,9866::24339368
1 RESI
2 PLAC Vlotho, Westfalen, Preussen
2 SOUR @S1092363729@
3 _APID 1,9866::24339368
1 DEAT
2 DATE 23 January 1892
2 PLAC Mount Vernon, Lawrence County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::28141598
1 BURI
2 PLAC Mount Vernon, Lawrence County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::28141598
0 @I312223020303@ INDI
1 NAME Hanne Catharine Elisabeth /Wehmeyer/
2 GIVN Hanne Catharine Elisabeth
2 SURN Wehmeyer
2 SOUR @S1092363729@
3 _APID 1,9866::24339366
2 SOUR @S1099063392@
3 _APID 1,9870::21723884
1 SEX F
1 FAMS @F85@
1 BIRT
2 DATE 15 Jun 1793
2 SOUR @S1099063392@
3 _APID 1,9870::21723884
1 OBJE @O53@
2 _PRIM Y
0 @I312223020452@ INDI
1 NAME Joh. Herm. /Witthaus/
2 GIVN Joh. Herm.
2 SURN Witthaus
2 SOUR @S1099063392@
3 _APID 1,9870::21723880
1 SEX M
1 FAMS @F32@
0 @I312223020453@ INDI
1 NAME Christine Charlotte /Nacken/
2 GIVN Christine Charlotte
2 SURN Nacken
2 SOUR @S1099063392@
3 _APID 1,9870::21723879
1 SEX F
1 FAMS @F32@
0 @I312236098074@ INDI
1 NAME Mary /Buynak/
2 GIVN Mary
2 SURN Buynak
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420268
1 SEX F
1 FAMS @F7@
1 BIRT
2 DATE abt 1898
2 PLAC Czechoslovakia
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420268
1 RESI
2 DATE 1935
2 PLAC Belleville, St Clair, Illinois
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420268
1 RESI Marital Status: Married; Relation to Head: Wife
2 DATE 1940
2 PLAC Belleville, St Clair, Illinois, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Belleville, St Clair, Illinois; Roll: m-t0627-00878; Page: 8A; Enumeration District: 82-21
3 _APID 1,2442::143420268
0 @I312236125885@ INDI
1 NAME William /Kessler/
2 GIVN William
2 SURN Kessler
2 SOUR @S1092363802@
3 _APID 1,61370::1351292119
1 SEX M
1 FAMS @F13@
0 @I312236126204@ INDI
1 NAME Elizabeth /Flocken/
2 GIVN Elizabeth
2 SURN Flocken
2 SOUR @S1092363802@
3 _APID 1,61370::1501292119
1 SEX F
1 FAMS @F13@
0 @I312252876692@ INDI
1 NAME Michele /Emerson/
2 GIVN Michele
2 SURN Emerson
2 SOUR @S1102909201@
3 PAGE Publication Date: 3/ Oct/ 1986; Publication Place: Woodstock, Illinois, USA; URL: https://www.newspapers.com/image/191725961/?article=df94286f-f1c8-4aa1-9e23-5fb35d364917/56b11cd6-5813-42d4-990b-08356955aac2&focus=0.034732178,0.07127388,0.59806776,
4 CONC 0.257477
3 _APID 1,62116::125281878
1 SEX F
1 FAMS @F60@
1 RESI
2 PLAC Ingleside, Lake, Illinois, USA
2 SOUR @S1102909201@
3 PAGE Publication Date: 3/ Oct/ 1986; Publication Place: Woodstock, Illinois, USA; URL: https://www.newspapers.com/image/191725961/?article=df94286f-f1c8-4aa1-9e23-5fb35d364917/56b11cd6-5813-42d4-990b-08356955aac2&focus=0.034732178,0.07127388,0.59806776,
4 CONC 0.257477
3 _APID 1,62116::125281878
0 @I312268602928@ INDI
1 NAME Charles H /Timmerberg/
2 GIVN Charles H
2 SURN Timmerberg
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 23, St Louis (Independent City), Missouri; Roll: T625_959; Page: 3B; Enumeration District: 444
3 _APID 1,6061::45439963
2 SOUR @S1105040053@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Special Schedules of the Eleventh Census (1890) Enumerating Union Veterans and Widows of Union Veterans of the Civil War; Series Number: M123; Record Group Title: Records of the Departmen
4 CONC t of Vet
3 _APID 1,8667::269321
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445A; Enumeration District: 435
3 _APID 1,6742::26115644
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (St. Louis City); Probate Place: St Louis, Missouri
3 _APID 1,9071::742721
1 SEX M
1 FAMS @F95@
1 BIRT
2 DATE 1827
2 PLAC Germany
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 23, St Louis (Independent City), Missouri; Roll: T625_959; Page: 3B; Enumeration District: 444
3 _APID 1,6061::45439963
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445A; Enumeration District: 435
3 _APID 1,6742::26115644
1 EVEN
2 TYPE Arrival
2 DATE 1847
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 23, St Louis (Independent City), Missouri; Roll: T625_959; Page: 3B; Enumeration District: 444
3 _APID 1,6061::45439963
1 RESI Marital Status: Widower; Relation to Head: Self
2 DATE 1880
2 PLAC Saint Louis, St Louis (Independent City), Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445A; Enumeration District: 435
3 _APID 1,6742::26115644
1 RESI
2 DATE Jun 1890
2 PLAC Pinckney, Warren, Missouri, USA
2 SOUR @S1105040053@
3 PAGE The National Archives at Washington, D.C.; Washington, D.C.; Special Schedules of the Eleventh Census (1890) Enumerating Union Veterans and Widows of Union Veterans of the Civil War; Series Number: M123; Record Group Title: Records of the Departmen
4 CONC t of Vet
3 _APID 1,8667::269321
1 RESI Marital Status: Married; Relation to Head: Head
2 DATE 1920
2 PLAC St Louis Ward 23, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 23, St Louis (Independent City), Missouri; Roll: T625_959; Page: 3B; Enumeration District: 444
3 _APID 1,6061::45439963
1 DEAT
2 DATE Abt 1920
2 PLAC Missouri, USA
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (St. Louis City); Probate Place: St Louis, Missouri
3 _APID 1,9071::742721
1 PROB
2 DATE 5 Jul 1920
2 PLAC St Louis, Missouri, USA
2 SOUR @S1099248275@
3 PAGE Author: Missouri. Probate Court (St. Louis City); Probate Place: St Louis, Missouri
3 _APID 1,9071::742721
0 @I312268750220@ INDI
1 NAME Christina /Timmerberg/
2 GIVN Christina
2 SURN Timmerberg
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 23, St Louis (Independent City), Missouri; Roll: T625_959; Page: 3B; Enumeration District: 444
3 _APID 1,6061::45439964
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445B; Enumeration District: 435
3 _APID 1,6742::26115423
1 SEX F
1 FAMC @F95@
1 BIRT
2 DATE abt 1855
2 PLAC Missouri
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 23, St Louis (Independent City), Missouri; Roll: T625_959; Page: 3B; Enumeration District: 444
3 _APID 1,6061::45439964
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445B; Enumeration District: 435
3 _APID 1,6742::26115423
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1880
2 PLAC Saint Louis, St Louis (Independent City), Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445B; Enumeration District: 435
3 _APID 1,6742::26115423
1 RESI Marital Status: Single; Relation to Head: Daughter
2 DATE 1920
2 PLAC St Louis Ward 23, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281409@
3 PAGE Year: 1920; Census Place: St Louis Ward 23, St Louis (Independent City), Missouri; Roll: T625_959; Page: 3B; Enumeration District: 444
3 _APID 1,6061::45439964
0 @I312268751301@ INDI
1 NAME John C. /Timmerberg/
2 GIVN John C.
2 SURN Timmerberg
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445B; Enumeration District: 435
3 _APID 1,6742::34768248
1 SEX M
1 FAMC @F95@
1 BIRT
2 DATE Abt 1859
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445B; Enumeration District: 435
3 _APID 1,6742::34768248
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Saint Louis, St Louis (Independent City), Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445B; Enumeration District: 435
3 _APID 1,6742::34768248
0 @I312268751303@ INDI
1 NAME Charles H. /Timmerberg/
2 GIVN Charles H.
2 SURN Timmerberg
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445B; Enumeration District: 435
3 _APID 1,6742::34767967
1 SEX M
1 FAMC @F95@
1 BIRT
2 DATE Abt 1861
2 PLAC Missouri
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445B; Enumeration District: 435
3 _APID 1,6742::34767967
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1880
2 PLAC Saint Louis, St Louis (Independent City), Missouri, USA
2 SOUR @S_1733210894@
3 PAGE Year: 1880; Census Place: Saint Louis, St Louis (Independent City), Missouri; Roll: 736; Page: 445B; Enumeration District: 435
3 _APID 1,6742::34767967
0 @I312270706511@ INDI
1 NAME Dominick /Schiaffo/
2 GIVN Dominick
2 SURN Schiaffo
2 SOUR @S1105247080@
3 PAGE New Jersey State Archives; Trenton, New Jersey; Marriage Indexes; Index Type: Bride; Year Range: 1943; Surname Range: A - Z
3 _APID 1,61253::991028315
2 SOUR @S1102909201@
3 PAGE Publication Date: 28/ Sep/ 1943; Publication Place: New Brunswick, New Jersey, USA; URL: https://www.newspapers.com/image/314728090/?article=1a0c815b-792c-4913-a6d7-4f24e24d6c92&focus=0.4889215,0.7131689,0.6132455,0.826565&xid=3398
3 _APID 1,62116::97052923
1 SEX M
1 FAMS @F25@
1 RESI
2 DATE Abt 1943
2 PLAC 91 Mercer Avenue , Plainfield
2 SOUR @S1102909201@
3 PAGE Publication Date: 28/ Sep/ 1943; Publication Place: New Brunswick, New Jersey, USA; URL: https://www.newspapers.com/image/314728090/?article=1a0c815b-792c-4913-a6d7-4f24e24d6c92&focus=0.4889215,0.7131689,0.6132455,0.826565&xid=3398
3 _APID 1,62116::97052923
1 RESI
2 PLAC 198 Burnet Street
2 SOUR @S1102909201@
3 PAGE Publication Date: 28/ Sep/ 1943; Publication Place: New Brunswick, New Jersey, USA; URL: https://www.newspapers.com/image/314728090/?article=1a0c815b-792c-4913-a6d7-4f24e24d6c92&focus=0.4889215,0.7131689,0.6132455,0.826565&xid=3398
3 _APID 1,62116::97052923
0 @I312270708735@ INDI
1 NAME Keith Homer /Harrington/
2 GIVN Keith Homer
2 SURN Harrington
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::118413
2 SOUR @S1098169676@
3 _APID 1,60541::171506636
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::178095714
1 SEX M
1 FAMC @F47@
1 FAMS @F35@
1 BIRT
2 DATE abt 1901
2 PLAC Missouri, United States of America
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::118413
2 SOUR @S1098169676@
3 _APID 1,60541::171506636
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::178095714
1 RESI Marital Status: Single; Relation to Head of House: Son
2 DATE 1910
2 PLAC St Louis Ward 11, Saint Louis City, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::178095714
1 DEAT
2 DATE 1920
2 PLAC St. Louis City, Missouri, United States of America
2 SOUR @S1098169676@
3 _APID 1,60541::171506636
0 @I312270708938@ INDI
1 NAME Lillie /Harrington/
2 GIVN Lillie
2 SURN Harrington
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::120118413
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::178095713
1 SEX F
1 FAMS @F47@
1 BIRT
2 DATE abt 1876
2 PLAC Illinois
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::178095713
1 RESI Marital Status: Married; Relation to Head of House: Wife
2 DATE 1910
2 PLAC St Louis Ward 11, Saint Louis City, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::178095713
0 @I312270709599@ INDI
1 NAME Homer /Harrington/
2 GIVN Homer
2 SURN Harrington
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::14946901
1 SEX M
1 FAMS @F47@
1 BIRT
2 DATE abt 1876
2 PLAC Illinois
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::14946901
1 RESI Marital Status: Married; Relation to Head of House: Head
2 DATE 1910
2 PLAC St Louis Ward 11, Saint Louis City, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::14946901
0 @I312270709603@ INDI
1 NAME Kenneth C /Harrington/
2 GIVN Kenneth C
2 SURN Harrington
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::178095715
1 SEX M
1 FAMC @F47@
1 BIRT
2 DATE abt 1903
2 PLAC Missouri
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::178095715
1 RESI Marital Status: Single; Relation to Head of House: Son
2 DATE 1910
2 PLAC St Louis Ward 11, Saint Louis City, Missouri, USA
2 SOUR @S_2117281231@
3 PAGE Year: 1910; Census Place: St Louis Ward 11, Saint Louis City, Missouri; Roll: T624_816; Page: 5A; Enumeration District: 0173; FHL microfilm: 1374829
3 _APID 1,7884::178095715
0 @I312272281710@ INDI
1 NAME George Claudius /Noblot/
2 GIVN George Claudius
2 SURN Noblot
2 SOUR @S1084083971@
3 _APID 1,60525::10470811
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895630
1 SEX M
1 FAMC @F27@
1 BIRT
2 DATE 31 August 1896
2 PLAC St. Louis City, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::10470811
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895630
1 RESI Marital Status: Single; Relation to Head: Son
2 DATE 1900
2 PLAC St Louis Ward 24, St Louis (Independent City), Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895630
1 DEAT
2 DATE 16 April 1963
2 PLAC St. Louis County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::10470811
1 BURI
2 PLAC Affton, St. Louis County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::10470811
0 @I312295430566@ INDI
1 NAME Selma Edna /Holtgrewe/
2 GIVN Selma Edna
2 SURN Holtgrewe
2 SOUR @S_2117281312@
3 _APID 1,6224::6053026
2 SOUR @S1110169670@
3 _APID 1,2190::139138473
1 SEX F
1 FAMC @F80@
1 FAMS @F86@
1 BIRT
2 DATE 3 Oct 1922
2 PLAC Senate Grove, Missouri
2 SOUR @S_2117281312@
3 _APID 1,6224::6053026
2 SOUR @S1110169670@
3 _APID 1,2190::139138473
1 RESI
2 DATE 1930
2 PLAC Boeuf, Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281312@
3 _APID 1,6224::6053026
1 RESI
2 DATE 1935
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 _APID 1,2442::91816622
1 RESI
2 DATE 1940
2 PLAC Bouef T, Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 _APID 1,2442::91816622
1 RESI
2 PLAC New Haven
2 SOUR @S1102909201@
3 PAGE Publication Date: 21/ Nov/ 1946; Publication Place: St. Clair, Missouri, USA; URL: https://www.newspapers.com/image/126328035/?article=88f1f605-b609-4286-ac1d-ce75fd9ac20d/c2530d68-c839-41fd-a5e2-1bc5c2298803&focus=0.70316595,0.29008135,0.83545816,
4 CONC 
3 _APID 1,62116::127715838
1 RESI
2 PLAC New Haven, Missouri
2 SOUR @S1110169670@
3 _APID 1,2190::139138473
1 DEAT
2 DATE 16 September 2019
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S1110169670@
3 _APID 1,2190::139138473
2 SOUR @S108
3 _APID 1,60525::167792645
1 BURI
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S108
3 _APID 1,60525::167792645
1 SOUR @S1110170263@
2 PAGE Publication Date: 11/ Dec/ 2014; Publication Place: Missouri, USA
2 _APID 1,7545::97589799
0 @I312295430567@ INDI
1 NAME Harvey Louis /Vonbehren/
2 GIVN Harvey Louis
2 SURN Vonbehren
2 SOUR @S_2117281312@
3 _APID 1,6224::6053004
2 SOUR @S108
3 _APID 1,60525::36510481
2 SOUR @S1084083263@
3 _APID 1,60901::42013267
1 SEX M
1 FAMC @F80@
1 FAMS @F87@
1 BIRT
2 DATE 21 Nov 1925
2 PLAC New Haven,  Missouri
2 SOUR @S_2117281312@
3 _APID 1,6224::6053004
2 SOUR @S108
3 _APID 1,60525::36510481
2 SOUR @S1084083263@
3 _APID 1,60901::42013267
1 RESI
2 DATE 1930
2 PLAC Boeuf, Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281312@
3 _APID 1,6224::6053004
1 RESI
2 DATE 1935
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 5B; Enumeration District: 36-2
3 _APID 1,2442::91816624
1 RESI
2 DATE 1940
2 PLAC Bouef, Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 PAGE Year: 1940; Census Place: Boeuf, Franklin, Missouri; Roll: m-t0627-02105; Page: 5B; Enumeration District: 36-2
3 _APID 1,2442::91816624
1 RESI
2 DATE 1943
2 PLAC New Haven, Franklin, Missouri, USA
2 SOUR @S1090315102@
3 PAGE National Archives at St. Louis; St. Louis, Missouri; WWII Draft Registration Cards for Missouri, 10/16/1940-03/31/1947; Record Group: Records of the Selective Service System, 147; Box: 336
3 _APID 1,2238::15679697
1 RESI
2 DATE 1997-2001
2 PLAC New Haven, Missouri, USA
2 SOUR @S1090315114@
3 PAGE City: New Haven; State: Missouri; Year(s): 1997-2001
3 _APID 1,7339::26920138
1 RESI
2 PLAC Franklin, Missouri
2 SOUR @S1110169745@
3 PAGE National Archives at College Park; College Park, Maryland, USA; Electronic Army Serial Number Merged File, 1938-1946; NAID: 1263923; Record Group Title: Records of the National Archives and Records Administration, 1789-ca. 2007; Record Group: 64; B
4 CONC ox Numbe
3 _APID 1,8939::2082844
1 DEAT
2 DATE 16 October 2002
2 PLAC New Haven, Franklin, Missouri, United States of America
2 SOUR @S108
3 _APID 1,60525::36510481
2 SOUR @S1084083263@
3 _APID 1,60901::42013267
1 BURI
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S108
3 _APID 1,60525::36510481
1 SOUR @S1098250046@
2 _APID 1,2441::11457451
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312295430568@ INDI
1 NAME Edna Caroline /Von Behren/
2 GIVN Edna Caroline
2 SURN Von Behren
2 SOUR @S_2117281312@
3 _APID 1,6224::6053018
2 SOUR @S1084083971@
3 _APID 1,60525::15350840
1 SEX F
1 FAMS @F80@
1 BIRT
2 DATE 13 March 1896
2 PLAC Missouri
2 SOUR @S_2117281312@
3 _APID 1,6224::6053018
2 SOUR @S1084083971@
3 _APID 1,60525::15350840
1 RESI
2 DATE 1930
2 PLAC Boeuf, Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281312@
3 _APID 1,6224::6053018
1 RESI
2 DATE 1935
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 _APID 1,2442::91816620
1 RESI
2 DATE 1940
2 PLAC Bouef T, Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 _APID 1,2442::91816620
1 DEAT
2 DATE April 1986
2 PLAC New Haven, Franklin, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350840
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::15350840
1 SOUR @S1110168776@
2 _APID 1,7545::52943282
1 SOUR @S1084083263@
2 _APID 1,60901::792013267
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 SOUR @S_2128957019@
2 _APID 1,1171::508026846
0 @I312295431203@ INDI
1 NAME Mildred E. /Brandt/
2 GIVN Mildred E.
2 SURN Brandt
2 SOUR @S1110168776@
3 _APID 1,7545::1306519420
1 NAME Mildred /Von Behren/
2 GIVN Mildred
2 SURN Von Behren
2 SOUR @S_1733211725@
3 _APID 1,2442::91816629
1 SEX F
1 FAMC @F80@
1 FAMS @F37@
1 BIRT
2 DATE 12 May 1934
2 PLAC Senate Grove, Missouri
2 SOUR @S1110168776@
3 _APID 1,7545::1306519420
1 RESI
2 DATE 1935
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 _APID 1,2442::91816629
1 RESI
2 DATE 1940
2 PLAC Bouef, Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 _APID 1,2442::91816629
1 RESI
2 DATE Abt 1955
2 PLAC of Hermann
2 SOUR @S1102909201@
3 PAGE Publication Date: 29/ Sep/ 1955; Publication Place: New Haven, Missouri, USA; URL: https://www.newspapers.com/image/513466262/?article=4ff986b4-c102-4a9e-9991-e22580da03cc&focus=0.006516632,0.051911414,0.30878425,0.46476272&
3 _APID 1,62116::28472757
1 EVEN
2 TYPE Mildred Von Behren and Ralph Brandt Wedding
2 DATE 29 Sep 1955
2 PLAC New Haven, Missouri
2 SOUR @S1110170045@
3 PAGE Mildred Von Behren and Ralph Brandt Wedding 29 
3 OBJE @O31@
2 OBJE @O31@
1 RESI
2 DATE 1983-1996
2 PLAC Hermann, Missouri, USA
2 SOUR @S1102909320@
3 _APID 1,62209::157745675
1 RESI
2 DATE 1995
2 PLAC Hermann, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::325284529
1 RESI
2 DATE 1996
2 PLAC Hermann, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::325284529
1 RESI
2 DATE 2016
2 PLAC Hermann, Missouri, USA
2 SOUR @S1102909320@
3 _APID 1,62209::157745675
1 RESI
2 PLAC Hermann, MO
2 SOUR @S_1733212834@
3 _APID 1,1788::325284529
1 RESI
2 PLAC Hermann, Missouri
2 SOUR @S1110168776@
3 _APID 1,7545::1306519420
1 DEAT
2 DATE 22 December 2017
2 PLAC Hermann, Gasconade County, Missouri, United States of America
2 SOUR @S1110168776@
3 _APID 1,7545::1306519420
2 SOUR @S108
3 _APID 1,60525::150108818
1 BURI
2 DATE 28 Dec 2017
2 PLAC Bridgeport, Warren County, Missouri, United States of America
2 SOUR @S1110168776@
3 _APID 1,7545::1306519420
2 SOUR @S108
3 _APID 1,60525::150108818
1 OBJE @O31@
0 @I312295432360@ INDI
1 NAME Lorene Edna /Von Behren/
2 GIVN Lorene Edna
2 SURN Von Behren
1 NAME Lorene /Von Behren/
2 GIVN Lorene
2 SURN Von Behren
2 SOUR @S_1733211725@
3 _APID 1,2442::91816626
1 SEX F
1 FAMC @F80@
1 FAMS @F81@
1 BIRT
2 DATE 15 May 1930
2 PLAC Franklin County, Missouri, USA
1 BIRT
2 DATE abt 1931
2 PLAC Missouri
2 SOUR @S_1733211725@
3 _APID 1,2442::91816626
1 MARR
2 DATE 23 Sep 1961
2 PLAC Senate Grove
2 SOUR @S1110170510@
3 PAGE Washington Missourian; Publication Date: 16/ Aug/ 2007; Publication Place: Washington, Missouri, USA; URL: http://www.zwire.com/site/news.cfm?newsid=18704312&amp;BRD=1409&amp;PAG=461&amp;dept_id=33075&a
3 _APID 1,7545::15567718
1 RESI
2 DATE 1935
2 PLAC Boeuf, Franklin, Missouri
2 SOUR @S_1733211725@
3 _APID 1,2442::91816626
1 RESI
2 DATE 1940
2 PLAC Bouef, Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 _APID 1,2442::91816626
1 RESI
2 DATE Before 1951
2 PLAC Missouri
2 SOUR @S_2117281209@
3 PAGE Social Security Administration; Washington D.C., USA; Social Security Death Index, Master File
3 _APID 1,3693::80405675
1 RESI
2 PLAC New Haven, Missouri, USA
2 SOUR @S_1733211944@
3 _APID 1,1732::363216903
1 RESI
2 PLAC Senate Grove
2 SOUR @S1110170510@
3 PAGE Washington Missourian; Publication Date: 16/ Aug/ 2007; Publication Place: Washington, Missouri, USA; URL: http://www.zwire.com/site/news.cfm?newsid=18704312&amp;BRD=1409&amp;PAG=461&amp;dept_id=33075&a
3 _APID 1,7545::15567718
1 DEAT
2 DATE 4 August 2007
2 PLAC Creve Coeur, St. Louis County, Missouri, United States of America
2 SOUR @S108
3 _APID 1,60525::5725413
1 BURI
2 DATE 9 Aug
2 PLAC Senate Grove
2 SOUR @S108
3 _APID 1,60525::5725413
2 SOUR @S1110170510@
3 PAGE Washington Missourian; Publication Date: 16/ Aug/ 2007; Publication Place: Washington, Missouri, USA; URL: http://www.zwire.com/site/news.cfm?newsid=18704312&amp;BRD=1409&amp;PAG=461&amp;dept_id=33075&a
3 _APID 1,7545::15567718
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
1 SOUR @S1110170578@
2 _APID 1,60901::15567523
1 SOUR @S_1733211944@
2 _APID 1,1732::62117240
0 @I312295432363@ INDI
1 NAME Louis /Von Behren/
2 GIVN Louis
2 SURN Von Behren
2 SOUR @S_1733211725@
3 _APID 1,2442::91816631
1 SEX M
1 FAMC @F80@
1 FAMS @F39@
1 FAMS @F98@
1 BIRT
2 DATE 26 February 1938
2 PLAC Missouri
2 SOUR @S_1733211725@
3 _APID 1,2442::91816631
2 SOUR @S108
3 _APID 1,60525::148490145
1 RESI
2 DATE 1940
2 PLAC Bouef, Boeuf, Franklin, Missouri, USA
2 SOUR @S_1733211725@
3 _APID 1,2442::91816631
1 RESI
2 DATE Abt 1959
2 PLAC 1050 West Third Street in Washington
2 SOUR @S1102909201@
3 PAGE Publication Date: 10/ Dec/ 1959; Publication Place: Washington, Missouri, USA; URL: https://www.newspapers.com/image/126867317/?article=d06f70a1-cf62-4bcd-99c8-8e0a621eed50&focus=0.1410862,0.07457934,0.26374462,0.42274368&
3 _APID 1,62116::79722189
1 RESI
2 PLAC Lee 's Summit, MO
2 SOUR @S1110169670@
3 PAGE http://www.toedtmanngrosse.com; Publication Place: New Haven, MO, USA; URL: http://www.toedtmanngrosse.com/notices/Louis-V
3 _APID 1,2190::1202528111
1 DEAT
2 DATE 17 October 2017
2 SOUR @S108
3 _APID 1,60525::148490145
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S108
3 _APID 1,60525::148490145
0 @I312295432929@ INDI
1 NAME Evelyn I /Von Behren/
2 GIVN Evelyn I
2 SURN Von Behren
1 SEX F
1 FAMS @F87@
1 BIRT
2 DATE 28 Apr 1931
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312295432931@ INDI
1 NAME Lawrence /Von Behren/
2 GIVN Lawrence
2 SURN Von Behren
1 SEX M
1 FAMC @F87@
1 BIRT
2 DATE 21 Sep 1957
2 PLAC Washington MO
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312295432932@ INDI
1 NAME Douglas Lewis /Von Behren/
2 GIVN Douglas Lewis
2 SURN Von Behren
1 SEX M
1 FAMC @F87@
1 BIRT
2 DATE 26 Jan 1962
1 DEAT
2 DATE 1 Feb 1962
1 SOUR @S_1795283584@
2 PAGE Ancestry Family Tree
0 @I312295434568@ INDI
1 NAME Ralph E /Brandt/
2 GIVN Ralph E
2 SURN Brandt
2 SOUR @S1084083971@
3 _APID 1,60525::62922375
1 FAMS @F37@
1 BIRT
2 DATE 2 April 1933
2 PLAC Detmold, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::62922375
1 RESI
2 DATE Abt 1955
2 PLAC New Haven
2 SOUR @S1102909201@
3 _APID 1,62116::89930385
1 RESI
2 PLAC St.
2 SOUR @S1102909201@
3 _APID 1,62116::89930385
1 RESI
2 PLAC of Hermann
2 SOUR @S1102909201@
3 _APID 1,62116::89930385
1 DEAT
2 DATE 5 March 2006
2 PLAC Columbia, Boone County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::62922375
1 BURI
2 PLAC Bridgeport, Warren County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::62922375
0 @I312295435493@ INDI
1 NAME Melvin Edward /Holtgrewe/
2 GIVN Melvin Edward
2 SURN Holtgrewe
2 SOUR @S1084083971@
3 _APID 1,60525::111852775
1 FAMS @F86@
1 BIRT
2 DATE 21 September 1925
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::111852775
1 RESI
2 PLAC New Haven
2 SOUR @S1102909201@
3 _APID 1,62116::332913291
1 RESI
2 PLAC New Haven, Missouri
2 SOUR @S1110170263@
3 _APID 1,7545::351088519
1 DEAT
2 DATE 16 Sep 2014
2 PLAC New Haven, Missouri
2 SOUR @S1084083971@
3 _APID 1,60525::111852775
2 SOUR @S1110170263@
3 _APID 1,7545::351088519
1 BURI
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::111852775
0 @I312295436251@ INDI
1 NAME Harold Benjamin /Brandt/
2 GIVN Harold Benjamin
2 SURN Brandt
2 SOUR @S1084083971@
3 _APID 1,60525::5725464
1 FAMS @F81@
1 BIRT
2 DATE 1 March 1928
2 PLAC Detmold, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::5725464
1 DEAT
2 DATE 19 December 2007
2 PLAC New Haven, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::5725464
1 BURI
2 PLAC Berger, Franklin County, Missouri, United States of America
2 SOUR @S1084083971@
3 _APID 1,60525::5725464
1 SOUR @S1110170510@
2 _APID 1,7545::247001269
0 @I312295437588@ INDI
1 NAME Julie /Neal/
2 GIVN Julie
2 SURN Neal
2 SOUR @S1110169670@
3 _APID 1,2190::162988939
1 SEX F
1 FAMC @F98@
0 @I312295437589@ INDI
1 NAME Nina Von /Behren/
2 GIVN Nina Von
2 SURN Behren
2 SOUR @S1110169670@
3 _APID 1,2190::218362353
1 SEX F
1 FAMC @F98@
0 @I312295437624@ INDI
1 NAME Jeanelle /Logan/
2 GIVN Jeanelle
2 SURN Logan
2 SOUR @S1102909201@
3 _APID 1,62116::19291894
1 SEX F
1 FAMS @F39@
1 RESI
2 DATE Abt 1959
2 PLAC 1050 West Third Street in Washington
2 SOUR @S1102909201@
3 _APID 1,62116::19291894
0 @I312295439877@ INDI
1 NAME Louis /Weber/
2 GIVN Louis
2 SURN Weber
2 SOUR @S_2117281560@
3 _APID 1,7602::76174310
1 SEX M
1 FAMC @F93@
1 BIRT
2 DATE Mar 1877
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 _APID 1,7602::76174310
1 RESI
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 _APID 1,7602::76174310
0 @I312295439878@ INDI
1 NAME Emila /Weber/
2 GIVN Emila
2 SURN Weber
2 SOUR @S_2117281560@
3 _APID 1,7602::76174311
1 SEX F
1 FAMC @F93@
1 BIRT
2 DATE Dec 1878
2 PLAC Missouri, USA
2 SOUR @S_2117281560@
3 _APID 1,7602::76174311
1 RESI
2 DATE 1900
2 PLAC Boeuf, Franklin, Missouri, USA
2 SOUR @S_2117281560@
3 _APID 1,7602::76174311
0 @F1@ FAM
1 HUSB @I6862845710@
1 WIFE @I6862847335@
1 CHIL @I6862851708@
1 CHIL @I_1884986968@
0 @F2@ FAM
1 HUSB @I312217510610@
1 WIFE @I312217511205@
1 CHIL @I312217512986@
1 CHIL @I312217513331@
1 CHIL @I312217344951@
1 CHIL @I312217513525@
1 MARR
2 DATE 28 Dec 1732
2 PLAC Hartum (Kr. Minden), Westfalen, Preußen, Germany
2 SOUR @S1099063392@
3 _APID 1,9870::18247824
0 @F3@ FAM
1 HUSB @I312217510610@
1 WIFE @I312217512448@
1 CHIL @I312217512867@
1 MARR
2 DATE 23 Jan 1728
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
0 @F4@ FAM
1 HUSB @I312217735663@
1 WIFE @I312217737305@
1 CHIL @I312217734309@
1 CHIL @I312219275292@
1 CHIL @I312219275843@
1 CHIL @I312219295461@
1 CHIL @I312219275736@
1 CHIL @I312219275649@
1 CHIL @I312219275934@
1 CHIL @I312219295635@
1 CHIL @I312219275487@
1 MARR
2 DATE 21 Oct 1798
2 PLAC Evangelisch, Schoetmar, Lippe, Germany
2 SOUR @S1099063392@
3 _APID 1,9870::22342925
0 @F5@ FAM
1 HUSB @I_1884986963@
1 WIFE @I_1884986962@
1 CHIL @I_1884986961@
1 CHIL @I_1884986960@
1 CHIL @I_1884986959@
1 CHIL @I_1884986965@
1 MARR
2 DATE 8 JAN 1898
2 PLAC St. John of Nepomuk Church, St. Louis, MO.
2 SOUR @S_2117281160@
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 7, St Louis (Independent City), Missouri; Roll: T623_891; Page: 11B; Enumeration District: 107.
3 DATA
4 TEXT Birth date:  Jul 1873
5 CONT Birth place:  Bohemia
5 CONT Marriage date:  1898
5 CONT Marriage place:  
5 CONT Residence date:  1900
5 CONT Residence place:  City of St. Louis, St. Louis, Missouri
5 CONT Arrival date:  1890
5 CONT Arrival place:  
3 _APID 1,7602::53548449
0 @F6@ FAM
1 HUSB @I_1884986963@
1 WIFE @I_1884986948@
1 CHIL @I_1884986947@
1 CHIL @I_1884986946@
1 MARR
2 DATE 22 OCT 1912
2 SOUR @S_2117281161@
0 @F7@ FAM
1 HUSB @I_1884986963@
1 WIFE @I312236098074@
0 @F8@ FAM
1 HUSB @I_1884986869@
1 WIFE @I_1884986964@
1 MARR
0 @F9@ FAM
1 HUSB @I312216250004@
1 WIFE @I312217343707@
1 CHIL @I312217343708@
1 CHIL @I312217343781@
1 MARR
2 DATE 05 Aug 1827
2 PLAC Evangelisch, Nordhemmern, Westfalen, Prussia
2 SOUR @S1099063392@
3 _APID 1,9870::21642959
0 @F10@ FAM
1 HUSB @I_1884986961@
1 WIFE @I_1884986933@
1 CHIL @I_1884986932@
1 CHIL @I_1884986931@
1 CHIL @I_1884986930@
1 CHIL @I_1884986929@
1 CHIL @I_1884986928@
1 CHIL @I_1884986927@
1 CHIL @I_1884986926@
1 MARR
2 DATE 17 MAY 1922
0 @F11@ FAM
1 HUSB @I_1884986968@
1 WIFE @I_1884986967@
1 CHIL @I6862819516@
1 MARR
2 DATE 1 OCT 1958
2 PLAC St. Louis, Missouri
0 @F12@ FAM
1 HUSB @I312223006900@
1 WIFE @I312223006901@
1 CHIL @I6862879105@
1 CHIL @I312223012718@
1 CHIL @I312223012821@
1 CHIL @I312223012876@
1 CHIL @I312223009663@
1 CHIL @I312223012911@
1 CHIL @I312223012950@
0 @F13@ FAM
1 HUSB @I312236125885@
1 WIFE @I312236126204@
1 CHIL @I6146400104@
0 @F14@ FAM
1 HUSB @I_1884986966@
1 WIFE @I_1884986965@
1 CHIL @I_1884986964@
1 CHIL @I_1884986967@
1 MARR
2 DATE 14 JUN 1932
2 PLAC Belleville, St Clair Co. Illinois
2 SOUR @S_2117281160@
2 SOUR @S_2128957019@
3 DATA
4 TEXT Birth date:  9 Sep 1911
5 CONT Birth place:  St Andrew, St Louis, Missouri
5 CONT Marriage date:  15 Jun 1949
5 CONT Marriage place:  St Louis
3 _APID 1,1171::501988352
2 SOUR @S_2128957019@
3 DATA
4 TEXT Birth date:  13 Nov 1911
5 CONT Birth place:  
5 CONT Marriage date:  15 Jun 1949
5 CONT Marriage place:  St Andrew, St Louis, Missouri
3 _APID 1,1171::1988352
2 SOUR @S_1792293045@
3 DATA
4 TEXT Marriage date:  22 Apr 1950
5 CONT Marriage place:  Arkansas, United States
5 CONT Residence date:  
5 CONT Residence place:  Lemay, Missouri
3 _APID 1,2548::3960082
0 @F15@ FAM
1 HUSB @I_1884986966@
1 WIFE @I312207713844@
1 CHIL @I312207713637@
1 CHIL @I312207713638@
0 @F16@ FAM
1 HUSB @I_1884986956@
1 WIFE @I_1884986955@
1 CHIL @I_1884986957@
1 CHIL @I_1884986962@
1 CHIL @I_1884986954@
1 CHIL @I_1884986953@
1 MARR
2 SOUR @S_2117281177@
0 @F17@ FAM
1 HUSB @I_1884986872@
1 WIFE @I_1884986955@
1 MARR
0 @F18@ FAM
1 HUSB @I6135340449@
1 WIFE @I6135340450@
1 CHIL @I_1884986966@
1 CHIL @I6135340451@
1 MARR
2 DATE bef 1911
1 DIV
2 DATE 1922
2 PLAC St Louis , Missouri
0 @F19@ FAM
1 HUSB @I6135340449@
1 WIFE @I312207720868@
1 MARR
2 DATE Bef. 1930
0 @F20@ FAM
1 HUSB @I312215561902@
1 WIFE @I312215805658@
1 CHIL @I312215806584@
1 CHIL @I312216250027@
1 CHIL @I312216250024@
1 CHIL @I312216250023@
1 CHIL @I312215562507@
1 CHIL @I312215562508@
1 MARR
2 DATE 05 Sep 1839
2 PLAC Evangelisch, Nordhemmern, Westfalen, Prussia
2 SOUR @S1099063392@
3 _APID 1,9870::16715128
0 @F21@ FAM
1 HUSB @I_1884986952@
1 WIFE @I_1884986953@
1 CHIL @I_1884986934@
0 @F22@ FAM
1 HUSB @I_1884986879@
1 WIFE @I_1884986953@
1 MARR
0 @F23@ FAM
1 HUSB @I6864750401@
1 WIFE @I6135340450@
1 MARR
2 DATE 21 May 1931
2 PLAC Festus, Jefferson, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::502244813
0 @F24@ FAM
1 HUSB @I_1884986954@
1 WIFE @I_1884986871@
1 CHIL @I_1884986870@
1 MARR
0 @F25@ FAM
1 HUSB @I312270706511@
1 WIFE @I6135340451@
1 MARR
2 DATE 1943
2 PLAC New Jersey, USA
2 SOUR @S1105247080@
3 PAGE New Jersey State Archives; Trenton, New Jersey; Marriage Indexes; Index Type: Bride; Year Range: 1943; Surname Range: A - Z
3 _APID 1,61253::901028315
2 SOUR @S1102909201@
3 PAGE Publication Date: 28/ Sep/ 1943; Publication Place: New Brunswick, New Jersey, USA; URL: https://www.newspapers.com/image/314728090/?article=1a0c815b-792c-4913-a6d7-4f24e24d6c92&focus=0.4889215,0.7131689,0.6132455,0.826565&xid=3398
3 _APID 1,62116::34754811
0 @F26@ FAM
1 HUSB @I_1884986884@
1 WIFE @I_1884986960@
1 CHIL @I_1884986882@
1 CHIL @I_1884986883@
1 CHIL @I_1884986881@
1 CHIL @I_1884986880@
0 @F27@ FAM
1 HUSB @I_1884986958@
1 WIFE @I_1884986957@
1 CHIL @I312272281710@
1 CHIL @I_1884986950@
1 CHIL @I_1884986951@
1 CHIL @I_1884986949@
1 MARR
2 DATE 1895
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: St Louis Ward 24, St Louis (Independent City), Missouri; Page: 15; Enumeration District: 0359; FHL microfilm: 1240899
3 _APID 1,7602::64895629
0 @F28@ FAM
1 HUSB @I312219272934@
1 WIFE @I6862850032@
1 MARR
2 DATE Abt 1919
2 PLAC Senate Grove, Franklin, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::8013160
2 SOUR @S1102909201@
3 PAGE Publication Date: 23/ Jan/ 1919; Publication Place: New Haven, Missouri, USA; URL: https://www.newspapers.com/image/513189976/?article=b26840dc-8d9d-46b1-9f76-63f0a9d12f92/c217f277-fa98-4e65-aee7-52e9a0cdaf9f&focus=0.36258695,0.6405949,0.5168968,0.
4 CONC 
3 _APID 1,62116::313388170
0 @F29@ FAM
1 HUSB @I_1884986945@
1 WIFE @I_1884986947@
0 @F30@ FAM
1 HUSB @I312217734309@
1 WIFE @I312217735664@
1 CHIL @I312219304413@
1 CHIL @I312219269817@
1 CHIL @I312217737198@
1 CHIL @I6862860697@
1 CHIL @I312217739117@
1 CHIL @I312217739118@
1 CHIL @I312217739119@
1 CHIL @I312217739120@
1 MARR
2 DATE 19 Mar 1828
2 PLAC Evangelisch, Oerlinghausen, Lippe, Germany
2 SOUR @S1099063392@
3 _APID 1,9870::11912455
0 @F31@ FAM
1 HUSB @I_1884986946@
1 WIFE @I_1884986944@
0 @F32@ FAM
1 HUSB @I312223020452@
1 WIFE @I312223020453@
1 CHIL @I312223019026@
0 @F33@ FAM
1 HUSB @I312215805654@
1 WIFE @I312216250003@
1 CHIL @I312216250004@
1 CHIL @I312216250007@
1 CHIL @I312216250009@
1 CHIL @I312216250010@
1 CHIL @I312216250012@
1 CHIL @I312216250015@
1 CHIL @I312215561902@
1 CHIL @I312216250017@
1 MARR
2 DATE 29 Aug 1802
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
3 DATA
4 DATE 1984
0 @F34@ FAM
1 HUSB @I_1884986874@
1 WIFE @I_1884986949@
1 MARR
2 SOUR @S_2117281168@
0 @F35@ FAM
1 HUSB @I312270708735@
1 WIFE @I_1884986949@
1 CHIL @I_1884986873@
1 MARR
2 DATE 28 Jul 1920
2 PLAC Clayton, St Louis, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::500118413
0 @F36@ FAM
1 HUSB @I312207724625@
1 WIFE @I6146400827@
1 CHIL @I312207724705@
1 CHIL @I312207724626@
1 CHIL @I312207724945@
0 @F37@ FAM
1 HUSB @I312295434568@
1 WIFE @I312295431203@
1 MARR
2 DATE 24 Sep 1955
2 PLAC Senate Grove , MO .
2 SOUR @S1102909201@
3 PAGE Publication Date: 29/ Sep/ 1955; Publication Place: New Haven, Missouri, USA; URL: https://www.newspapers.com/image/513466262/?article=4ff986b4-c102-4a9e-9991-e22580da03cc&focus=0.006516632,0.051911414,0.30878425,0.46476272&
3 _APID 1,62116::28472757
0 @F38@ FAM
1 HUSB @I312207715169@
1 WIFE @I312207715170@
1 CHIL @I312207715171@
1 CHIL @I312207715173@
1 CHIL @I312207713844@
0 @F39@ FAM
1 HUSB @I312295432363@
1 WIFE @I312295437624@
1 MARR
2 DATE 5 Dec 1959
2 PLAC Union
2 SOUR @S1102909201@
3 _APID 1,62116::19291894
0 @F40@ FAM
1 HUSB @I6146400102@
1 WIFE @I6146400104@
1 CHIL @I6146400827@
1 CHIL @I6135340449@
1 CHIL @I6146401696@
1 CHIL @I6146400828@
1 MARR
2 DATE 1888
2 PLAC Monroe, Illinois, USA
2 SOUR @S1092363802@
3 _APID 1,61370::901292119
0 @F41@ FAM
1 HUSB @I_1884986908@
1 WIFE @I_1884986905@
1 CHIL @I_1884986904@
1 CHIL @I_1884986903@
1 MARR
2 DATE 2 MAY 1981
0 @F42@ FAM
1 HUSB @I_1884986927@
1 WIFE @I_1884986909@
1 CHIL @I_1884986908@
1 CHIL @I_1884986907@
1 CHIL @I_1884986906@
1 MARR
2 DATE 2 MAY 1956
0 @F43@ FAM
1 HUSB @I312219303993@
1 WIFE @I312219269817@
0 @F44@ FAM
1 HUSB @I_1884986923@
1 WIFE @I_1884986899@
1 CHIL @I_1884986898@
1 CHIL @I_1884986897@
1 MARR
2 DATE 9 JUN 1972
0 @F45@ FAM
1 HUSB @I6146415679@
1 WIFE @I312154505433@
1 CHIL @I312154507747@
1 CHIL @I6146400102@
0 @F46@ FAM
1 HUSB @I6862860702@
1 WIFE @I312219399611@
1 CHIL @I312219399612@
1 CHIL @I312219399614@
1 CHIL @I312219399615@
1 CHIL @I312219399616@
1 CHIL @I312219399617@
0 @F47@ FAM
1 HUSB @I312270709599@
1 WIFE @I312270708938@
1 CHIL @I312270708735@
1 CHIL @I312270709603@
0 @F48@ FAM
1 HUSB @I312219397306@
1 WIFE @I6862860700@
1 MARR
2 DATE 11 Aug 1863
2 PLAC Franklin, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::11138903
0 @F49@ FAM
1 HUSB @I_1884986913@
1 WIFE @I_1884986902@
1 CHIL @I_1884986901@
1 CHIL @I_1884986900@
1 MARR
2 DATE 22 APR 1978
0 @F50@ FAM
1 HUSB @I_1884986918@
1 WIFE @I_1884986892@
1 CHIL @I_1884986891@
1 CHIL @I_1884986890@
0 @F51@ FAM
1 HUSB @I312216803979@
1 WIFE @I312216785253@
1 MARR
2 DATE 15 Oct 1916
2 PLAC Hermann, Gasconade, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::8026417
0 @F52@ FAM
1 HUSB @I_1884986917@
1 WIFE @I_1884986889@
1 CHIL @I_1884986888@
1 CHIL @I_1884986887@
1 MARR
2 DATE 22 JUL 1978
0 @F53@ FAM
1 HUSB @I_1884986896@
1 WIFE @I_1884986919@
1 CHIL @I_1884986895@
1 CHIL @I_1884986894@
1 CHIL @I_1884986893@
1 MARR
2 DATE 16 OCT 1976
0 @F54@ FAM
1 HUSB @I312216250023@
1 WIFE @I312216820365@
1 CHIL @I312216820366@
1 CHIL @I312216820367@
1 CHIL @I312216820368@
1 CHIL @I312216820371@
1 CHIL @I312216820373@
1 CHIL @I312216820374@
1 CHIL @I312216820375@
1 CHIL @I312216820376@
1 MARR
2 DATE 27 Oct 1870
2 PLAC Gasconade, Missouri, USA
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Gasconade, Missouri; Page: 10; Enumeration District: 0036; FHL microfilm: 1240855
3 _APID 1,7602::29411888
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::511150423
2 SOUR @S1092363470@
3 PAGE The Gerald Journal; Publication Date: 20/ May/ 1927; Publication Place: Gerald, Missouri, United States of America; URL: https://www.newspapers.com/image/513134565/?article=c526316d-dac4-40ba-bb5f-dbe863204576&focus=0.7663033,0.49470887,0.9549049,0
4 CONC .8549593
3 _APID 1,61843::567058059
0 @F55@ FAM
1 HUSB @I312219406760@
1 WIFE @I6862860700@
0 @F56@ FAM
1 HUSB @I_1884986886@
1 WIFE @I_1884986926@
1 CHIL @I_1884986885@
1 MARR
2 DATE 22 AUG 1964
0 @F57@ FAM
1 HUSB @I_1884986940@
1 WIFE @I_1884986939@
1 CHIL @I_1884986938@
1 CHIL @I_1884986868@
1 CHIL @I_1884986935@
1 CHIL @I_1884986937@
1 CHIL @I_1884986936@
0 @F58@ FAM
1 HUSB @I_1884986938@
1 WIFE @I_1884986866@
1 MARR
0 @F59@ FAM
1 HUSB @I_1884986943@
1 WIFE @I_1884986942@
1 CHIL @I_1884986940@
1 CHIL @I_1884986963@
1 CHIL @I_1884986941@
0 @F60@ FAM
1 HUSB @I6862819516@
1 WIFE @I312252876692@
1 MARR
2 DATE 8/30/1986
2 SOUR @S1102909201@
3 PAGE Publication Date: 3/ Oct/ 1986; Publication Place: Woodstock, Illinois, USA; URL: https://www.newspapers.com/image/191725961/?article=df94286f-f1c8-4aa1-9e23-5fb35d364917/56b11cd6-5813-42d4-990b-08356955aac2&focus=0.034732178,0.07127388,0.59806776,
4 CONC 0.257477
3 _APID 1,62116::125281878
0 @F61@ FAM
1 HUSB @I312217344951@
1 WIFE @I312217345302@
1 CHIL @I312217345577@
1 CHIL @I312217345950@
1 CHIL @I312217346593@
1 CHIL @I312215805654@
1 CHIL @I312217347154@
1 CHIL @I312217345304@
1 CHIL @I312217347813@
1 CHIL @I312217348045@
1 CHIL @I312217348262@
1 CHIL @I312217348521@
1 CHIL @I312217348709@
1 MARR
2 DATE 24 May 1768
2 PLAC Nordhemmern, Minden-Lubbecke, Nordrhein-Westfalen, Germany
2 SOUR @S1099198910@
3 PAGE Extract from church records in Nordhemmern, Minden, Germany
0 @F62@ FAM
1 HUSB @I_1884986931@
1 WIFE @I_1884986924@
1 CHIL @I_1884986923@
1 CHIL @I_1884986922@
1 CHIL @I_1884986921@
1 CHIL @I_1884986920@
1 CHIL @I_1884986919@
1 CHIL @I_1884986918@
1 CHIL @I_1884986917@
1 MARR
2 DATE 5 MAY 1945
0 @F63@ FAM
1 HUSB @I_1884986925@
1 WIFE @I_1884986932@
1 MARR
2 DATE 13 DEC 1952
0 @F64@ FAM
1 HUSB @I312216818245@
1 WIFE @I312216250024@
1 CHIL @I312216818248@
0 @F65@ FAM
1 HUSB @I_1884986929@
1 WIFE @I_1884986915@
1 CHIL @I_1884986914@
1 CHIL @I_1884986913@
1 CHIL @I_1884986912@
1 CHIL @I_1884986911@
1 CHIL @I_1884986910@
1 MARR
2 DATE 7 JUL 1951
0 @F66@ FAM
1 HUSB @I312219406744@
1 WIFE @I312219406745@
1 CHIL @I312219406753@
1 CHIL @I312219406752@
1 CHIL @I312219406749@
1 CHIL @I312219406746@
1 CHIL @I6862860700@
1 CHIL @I312219406751@
1 MARR
2 DATE 30 Nov 1828
2 PLAC Dissen, Osnabruck, Niedersachsen, Germany
1 MARR
2 DATE 03 May 1834
2 PLAC Borgholzhausen, Gutersloh, Nordrhein-Westfalen, Germany
0 @F67@ FAM
1 HUSB @I_1884986930@
1 WIFE @I_1884986916@
1 MARR
2 DATE 28 MAY 1966
0 @F68@ FAM
1 HUSB @I312215561908@
1 WIFE @I312216784561@
1 CHIL @I312216785256@
1 CHIL @I312216785259@
1 CHIL @I312216785257@
1 CHIL @I312216785253@
1 CHIL @I312216785247@
1 CHIL @I312216785255@
1 CHIL @I312216790637@
1 CHIL @I312216785248@
1 CHIL @I312216785250@
1 CHIL @I312216785251@
1 MARR
2 DATE 22 Sep 1889
2 PLAC Big Berger, Franklin, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::506442839
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Roark, Gasconade, Missouri; Page: 11; Enumeration District: 0042; FHL microfilm: 1240855
3 _APID 1,7602::29419924
0 @F69@ FAM
1 HUSB @I312206999334@
1 WIFE @I312206999513@
1 CHIL @I312207000296@
1 CHIL @I312206999515@
1 CHIL @I6862850024@
1 CHIL @I312206999517@
1 CHIL @I312206999518@
1 CHIL @I312206999519@
0 @F70@ FAM
1 HUSB @I_1884986878@
1 WIFE @I_1884986934@
1 CHIL @I_1884986877@
1 MARR
2 SOUR @S_2117281168@
0 @F71@ FAM
1 HUSB @I312154507491@
1 WIFE @I312154507493@
1 CHIL @I6146415679@
0 @F72@ FAM
1 HUSB @I312215561910@
1 WIFE @I312216806498@
1 CHIL @I312216813644@
1 CHIL @I312217332550@
1 CHIL @I312216813645@
1 CHIL @I312216813646@
1 CHIL @I312216813647@
1 CHIL @I312216813989@
1 CHIL @I312216814729@
1 CHIL @I312216813991@
1 CHIL @I312216813993@
1 MARR
2 DATE 23 Oct 1890
2 PLAC Big Berger, Gasconade, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::6442972
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Boeuf, Franklin, Missouri; Page: 10; Enumeration District: 0023; FHL microfilm: 1240854
3 _APID 1,7602::76174353
0 @F73@ FAM
1 HUSB @I312215561902@
1 WIFE @I312215561907@
1 CHIL @I312216784468@
1 CHIL @I312215561908@
1 CHIL @I312215561909@
1 CHIL @I312215561910@
1 CHIL @I6862850025@
1 CHIL @I312216784888@
1 MARR
2 DATE 7 Feb 1861
2 PLAC Gasconade, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::511149606
0 @F74@ FAM
1 HUSB @I312217739117@
1 WIFE @I312217979745@
1 CHIL @I312219270705@
1 CHIL @I312219270706@
1 CHIL @I312219270707@
1 CHIL @I312219270708@
1 CHIL @I312219270813@
1 CHIL @I312219270817@
1 CHIL @I312219270819@
1 MARR
2 DATE 12 Apr 1861
2 PLAC Franklin, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::11138622
1 MARR
2 DATE 1866
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Union, Franklin, Missouri; Page: 8; Enumeration District: 0039; FHL microfilm: 1240854
3 _APID 1,7602::76199112
0 @F75@ FAM
1 HUSB @I312217739117@
1 WIFE @I312219271183@
0 @F76@ FAM
1 HUSB @I6862879105@
1 WIFE @I6862879938@
1 CHIL @I6862879939@
1 CHIL @I6862879940@
1 CHIL @I6862879941@
1 CHIL @I6862879942@
1 CHIL @I6862879944@
1 CHIL @I6862854349@
1 CHIL @I312223006713@
1 CHIL @I312223006714@
1 CHIL @I312223006715@
1 CHIL @I312223006717@
1 MARR
2 DATE 1868
2 SOUR @S_2117281560@
3 PAGE Year: 1900; Census Place: Pinckney, Warren, Missouri; Page: 2; Enumeration District: 0128; FHL microfilm: 1240907
3 _APID 1,7602::65057896
2 SOUR @S1092363470@
3 PAGE Warrenton Banner; Publication Date: 16/ Mar/ 1928; Publication Place: Warrenton, Missouri, United States of America; URL: https://www.newspapers.com/image/83554296/?article=b1c22055-868b-4aaf-9b4d-cba68997f623&focus=0.42597467,0.4345989,0.5581541,0
4 CONC .6618261
3 _APID 1,61843::570319154
0 @F77@ FAM
1 HUSB @I6862860697@
1 WIFE @I6862860700@
1 CHIL @I6862860702@
1 CHIL @I6862860704@
1 CHIL @I312219392799@
1 CHIL @I6862860708@
1 CHIL @I6862860711@
1 CHIL @I6862854348@
1 CHIL @I6862860712@
1 CHIL @I6862860716@
1 CHIL @I312219392797@
1 CHIL @I312219392793@
1 CHIL @I312219392794@
1 CHIL @I312219406757@
0 @F78@ FAM
1 HUSB @I312223019026@
1 WIFE @I312223020070@
1 CHIL @I312223020074@
1 CHIL @I312223006900@
1 CHIL @I312223020075@
1 MARC
2 DATE Bef. 1815
0 @F79@ FAM
1 HUSB @I_1884986876@
1 WIFE @I_1884986877@
1 CHIL @I_1884986875@
1 MARR
0 @F80@ FAM
1 HUSB @I6862850028@
1 WIFE @I312295430568@
1 CHIL @I312295430566@
1 CHIL @I312295430567@
1 CHIL @I312295432360@
1 CHIL @I312295431203@
1 CHIL @I312295432363@
1 MARR
2 DATE 15 Apr 1920
2 PLAC Berger, Franklin, Missouri, USA
2 SOUR @S_2128957019@
3 _APID 1,1171::508026846
0 @F81@ FAM
1 HUSB @I312295436251@
1 WIFE @I312295432360@
0 @F82@ FAM
1 HUSB @I312219273556@
1 WIFE @I312219273558@
1 CHIL @I312219272934@
0 @F83@ FAM
1 HUSB @I_1884986868@
1 WIFE @I_1884986867@
1 MARR
0 @F84@ FAM
1 HUSB @I312217517437@
1 WIFE @I312217517324@
1 MARR
2 DATE 23 May 1716
2 PLAC Hartum (Kr. Minden), Westfalen, Preußen, Germany
2 SOUR @S1099063392@
3 _APID 1,9870::25289834
0 @F85@ FAM
1 HUSB @I312223019026@
1 WIFE @I312223020303@
1 CHIL @I312223020077@
1 CHIL @I312223020076@
1 MARR
2 DATE 26 Jun 1825
2 PLAC Sankt Stephani Evangelisch, Vlotho, Westfalen, Prussia
2 SOUR @S1099063392@
3 _APID 1,9870::21723881
0 @F86@ FAM
1 HUSB @I312295435493@
1 WIFE @I312295430566@
1 MARR
2 DATE Abt 1946
2 SOUR @S1102909201@
3 PAGE Publication Date: 21/ Nov/ 1946; Publication Place: St. Clair, Missouri, USA; URL: https://www.newspapers.com/image/126328035/?article=88f1f605-b609-4286-ac1d-ce75fd9ac20d/c2530d68-c839-41fd-a5e2-1bc5c2298803&focus=0.70316595,0.29008135,0.83545816,
4 CONC 
3 _APID 1,62116::127715838
0 @F87@ FAM
1 HUSB @I312295430567@
1 WIFE @I312295432929@
1 CHIL @I312295432931@
1 CHIL @I312295432932@
0 @F88@ FAM
1 HUSB @I312216802314@
1 WIFE @I312216785256@
0 @F89@ FAM
1 HUSB @I312216806496@
1 WIFE @I312216806497@
1 CHIL @I312216784561@
1 CHIL @I312216806498@
1 CHIL @I312216806500@
1 CHIL @I312216806501@
1 CHIL @I312216806502@
1 CHIL @I312216806504@
1 CHIL @I312216806505@
1 CHIL @I312217331986@
1 CHIL @I312217331987@
1 CHIL @I312217331989@
1 CHIL @I312217331990@
1 CHIL @I312217331991@
1 MARR
2 DATE 5 Sep 1867
2 PLAC Gasconade County, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::11150124
2 SOUR @S1092363470@
3 PAGE The New Haven Leader; Publication Date: 3/ Dec/ 1931; Publication Place: New Haven, Missouri, United States of America; URL: https://www.newspapers.com/image/513498368/?article=d7e1de3b-869c-41e7-8c13-413a56a81964&focus=0.5151326,0.4558876,0.668116
4 CONC 4,0.9250
3 _APID 1,61843::514113254
0 @F90@ FAM
1 HUSB @I6862854348@
1 WIFE @I6862854349@
1 CHIL @I312216271598@
1 CHIL @I6862855692@
1 CHIL @I312216271600@
1 CHIL @I6862855693@
1 CHIL @I6862847335@
1 CHIL @I6862854350@
1 MARR
2 DATE 28 Aug 1903
2 PLAC Hermann, Franklin, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::508022628
0 @F91@ FAM
1 HUSB @I6862850024@
1 WIFE @I6862850025@
1 CHIL @I6862850028@
1 CHIL @I6862850032@
1 CHIL @I6862850035@
1 CHIL @I6862845710@
1 MARR
2 DATE 19 Nov 1891
2 PLAC Big Berger, Gasconade, Missouri, USA
2 SOUR @S_2128957019@
3 PAGE Missouri State Archives; Jefferson City, MO, USA; Missouri Marriage Records [Microfilm]
3 _APID 1,1171::506443122
2 SOUR @S_2117281560@
3 _APID 1,7602::76174306
0 @F92@ FAM
1 HUSB @I312219295547@
1 CHIL @I312217735663@
0 @F93@ FAM
1 WIFE @I312219273558@
1 CHIL @I312295439877@
1 CHIL @I312295439878@
0 @F94@ FAM
1 HUSB @I_1884986865@
1 CHIL @I_1884986955@
0 @F95@ FAM
1 HUSB @I312268602928@
1 CHIL @I312268750220@
1 CHIL @I312268751301@
1 CHIL @I312268751303@
1 CHIL @I6135340450@
2 _FREL adopted
0 @F96@ FAM
1 HUSB @I312217513932@
1 CHIL @I312217515919@
1 CHIL @I312217516450@
1 CHIL @I312217516131@
1 CHIL @I312217516568@
1 CHIL @I312217517059@
1 CHIL @I312217517203@
1 CHIL @I312217517324@
1 CHIL @I312217510610@
0 @F97@ FAM
1 HUSB @I312217512155@
1 CHIL @I312217511205@
0 @F98@ FAM
1 HUSB @I312295432363@
1 CHIL @I312295437588@
1 CHIL @I312295437589@
0 @F99@ FAM
1 HUSB @I312217512537@
1 CHIL @I312217512448@
0 @O1@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 691393
3 _WDTH 2159
3 _HGHT 2873
2 TITL Von Behren, Erwin Lottie wedding
1 RIN 001dbf07-8394-41c6-a4fa-c54d240bfb83
1 _CREA 2020-08-22 19:39:55.000
1 _ORIG u
0 @O2@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 53341
3 _WDTH 400
3 _HGHT 400
2 TITL Obituary Adolph Henry Pehle
1 RIN 016bf764-b799-40c3-b6bb-862fe2e761da
1 DATE 25 Dec 1953
1 PLAC Union, Missouri
1 _CREA 2020-08-22 21:33:17.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/57845724/obituary-adolph-henry-pehle/?xid=865
0 @O3@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE other
3 _STYPE gif
3 _SIZE 3200
3 _WDTH 324
3 _HGHT 216
2 TITL de-w807a
1 RIN 04d80305-1512-4d43-a0a7-b86ad4408894
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2020-08-28 13:58:36.000
1 _CLON
2 _TID 20825822
2 _PID 28052021646
2 _OID 7857b5b0-e9db-4081-950d-9499f7a985e6
2 _DATE 2013-11-25 11:07:58.000
1 _ORIG u
0 @O4@ OBJE
1 FILE
2 FORM
3 TYPE story
3 _MTYPE story
3 _STYPE x-inline
3 _SIZE 5254
2 TITL Information
1 RIN 071a52b9-f8a7-43cd-b034-730ce4110590
1 DATE 1843-1854
1 _DSCR Information From Find-a-Grave
2 CONT Credit to Edward Johnson
1 _META <metadataxml><content><line /><line>&lt;tbody&gt;</line><line>&lt;tr&gt;</line><line>&lt;td style="font-size: 13px;" valign="top"&gt;Birth:&amp;nbsp;&lt;/td&gt;</line><line>&lt;td style="font-size: 13px;" align="left" valign="top"&gt;Jan. 19, 1789&
2 CONC lt;br&gt;Nordrhein-Westfalen, Germany&lt;/td&gt;</line><line>&lt;/tr&gt;</line><line>&lt;tr&gt;</line><line>&lt;td style="font-size: 13px;" valign="top"&gt;Death:&amp;nbsp;&lt;/td&gt;</line><line>&lt;td style="font-size: 13px;" align="left" valign=
2 CONC "top"&gt;Feb., 1854&lt;br&gt;Hopewell (Warren County)&lt;br&gt;Warren County&lt;br&gt;Missouri, USA&lt;/td&gt;</line><line>&lt;/tr&gt;</line><line>&lt;tr&gt;</line><line>&lt;td style="font-size: 13px;" colspan="2" valign="top"&gt;&lt;br&gt;Buried o
2 CONC n a private farm located approximately Latitude 38.41797 N. Longitude 91.7075 W&lt;br&gt;12-20-1843 Immigrated to the Port of New Orleans,Louisianna aboard the sailship Albert and traveled up the Mississippi River by paddle boat to St. Louis.&lt;br
2 CONC &gt;1-19-1844 Recived 40 Acre homestead in Hopewell. US Land Grant # N-14622. Land discription the SE 1/4. SE 1/4,Sec. 3,Township 45, Range 2W (recorded in Deed Book E pg.21, F-562).The property is at the end of Krone road off Hyy 47.&lt;br&gt;4-20
2 CONC -1846 Took first oath of naturalization, Book B pg. 431 Warren County, Missouri&lt;br&gt;His first wife was Anna Marie Catherine Elisabeth (nee Schroeder)Witthaus. B. 1796 in Harkemissen, Lippe, Nordrhein-Westfalen, Germany. D. 2-20-1819 in Germany
2 CONC .&lt;br&gt;Married 11-20-1814 in Vlotho, Herford, Nordrhein-Westfalen, Germany.&lt;br&gt;Children:&lt;br&gt;1. Anna Christina Witthaus&lt;br&gt;2. Johann Friederick (Fritz) Witthaus&lt;br&gt;3. Gottlieb Ludwig Witthaus&lt;br&gt;4. Johann Gustav Wit
2 CONC thaus&amp;nbsp;&lt;br&gt;&amp;nbsp;&lt;br&gt;Family links:&amp;nbsp;&lt;br&gt;&amp;nbsp;Spouse:&lt;br&gt;&amp;nbsp;&amp;nbsp;&lt;a class="NoUnderline12point" style="text-decoration: none; font-size: 12px; color: #552255;" href="http://www.findagrav
2 CONC e.com/cgi-bin/fg.cgi?page=gr&amp;amp;GRid=85437151"&gt;Johanna Catharine Elizabeth&amp;nbsp;&lt;em&gt;Wehmeyer&lt;/em&gt;&amp;nbsp;Witthaus (1793 - 1850)&lt;/a&gt;&lt;br&gt;&amp;nbsp;&lt;br&gt;&amp;nbsp;Children:&lt;br&gt;&amp;nbsp;&amp;nbsp;&lt;
2 CONC a class="NoUnderline12point" style="text-decoration: none; font-size: 12px; color: #552255;" href="http://www.findagrave.com/cgi-bin/fg.cgi?page=gr&amp;amp;GRid=37838472"&gt;Johnann Friederick (Fritz) Witthaus (1815 - 1907)&lt;/a&gt;*&lt;br&gt;&amp
2 CONC ;nbsp;&amp;nbsp;&lt;a class="NoUnderline12point" style="text-decoration: none; font-size: 12px; color: #552255;" href="http://www.findagrave.com/cgi-bin/fg.cgi?page=gr&amp;amp;GRid=85431567"&gt;Gottlieb Ludwig Witthaus (1818 - 1886)&lt;/a&gt;*&lt;b
2 CONC r&gt;&amp;nbsp;&amp;nbsp;&lt;a class="NoUnderline12point" style="text-decoration: none; font-size: 12px; color: #552255;" href="http://www.findagrave.com/cgi-bin/fg.cgi?page=gr&amp;amp;GRid=55532211"&gt;Heinrich Witthaus (1820 - 1877)&lt;/a&gt;*&lt
2 CONC ;br&gt;&amp;nbsp;&amp;nbsp;&lt;a class="NoUnderline12point" style="text-decoration: none; font-size: 12px; color: #552255;" href="http://www.findagrave.com/cgi-bin/fg.cgi?page=gr&amp;amp;GRid=37440434"&gt;Herman Heinrich Witthaus (1828 - 1892)&lt;/
2 CONC a&gt;*&lt;br&gt;&amp;nbsp;&amp;nbsp;&lt;a class="NoUnderline12point" style="text-decoration: none; font-size: 12px; color: #552255;" href="http://www.findagrave.com/cgi-bin/fg.cgi?page=gr&amp;amp;GRid=63082800"&gt;Ferdinand William Witthaus (183
2 CONC 3 - 1893)&lt;/a&gt;*&lt;br&gt;&amp;nbsp;&lt;br&gt;&lt;span class="minus1" style="font-size: 11px;"&gt;*&lt;span class="fakeLink" style="color: #000088; text-decoration: underline;" title="header=[&amp;lt;img src='/icons2/info.gif' style='vertical-a
2 CONC lign:middle'&amp;gt;&amp;nbsp;&amp;nbsp;Reverse Relationships:] body=[This relationship was not directly added to this memorial. Rather, it is calculated based on information added to the related person's memorial. For example: if Joe Public is lin
2 CONC ked to Jane Public as a spouse, a reciprocal link will automatically be added to Jane Public's memorial.</line><line>	] fade=[on] fadespeed=[.09]"&gt;Calculated relationship&lt;/span&gt;&lt;/span&gt;&lt;/td&gt;</line><line>&lt;/tr&gt;</line><line>&
2 CONC lt;tr&gt;</line><line>&lt;td style="font-size: 13px;" colspan="2"&gt;&amp;nbsp;&lt;/td&gt;</line><line>&lt;/tr&gt;</line><line>&lt;tr&gt;</line><line>&lt;td style="font-size: 13px;" colspan="2" valign="top"&gt;Burial:&lt;br&gt;&lt;a style="color: #
2 CONC 552255;" href="http://www.findagrave.com/cgi-bin/fg.cgi?page=cr&amp;amp;GRid=85427801&amp;amp;CRid=2438591&amp;amp;"&gt;Witthaus Family Cemetery&lt;/a&gt;&amp;nbsp;&lt;br&gt;Hopewell (Warren County)&lt;br&gt;Warren County&lt;br&gt;Missouri, USA&lt;
2 CONC br&gt;Plot: Latitude 38.41797 N. Longitude 91.7075 W&lt;/td&gt;</line><line>&lt;/tr&gt;</line><line>&lt;tr&gt;</line><line>&lt;td style="font-size: 13px;" colspan="2" align="left"&gt;&amp;nbsp;&lt;br&gt;Created by:&amp;nbsp;&lt;a style="color: #552
2 CONC 255;" href="http://www.findagrave.com/cgi-bin/fg.cgi?page=mr&amp;amp;MRid=47694690"&gt;Edward Johnson&lt;/a&gt;&lt;br&gt;Record added: Feb 22, 2012&amp;nbsp;&lt;br&gt;Find A Grave Memorial# 85427801&lt;/td&gt;</line><line>&lt;/tr&gt;</line><line>&l
2 CONC t;/tbody&gt;</line><line /></content></metadataxml>
1 _CREA 2020-09-19 18:49:34.000
1 _CLON
2 _TID 28259026
2 _PID 26054983712
2 _OID 5cd884ec-60e1-4cd9-ba5e-458c82b9c73d
2 _DATE 2013-11-22 15:51:06.000
1 _ORIG u
0 @O5@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 590768
3 _WDTH 2127
3 _HGHT 1345
2 TITL Erwin Von Behren
1 RIN 0779aaba-4944-4273-8d9f-c9a7c64a7a8c
1 _META <metadataxml><record_source_gid>802790707:1265</record_source_gid></metadataxml>
1 _CREA 2021-03-27 20:16:13.000
1 _ORIG u
0 @O6@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 590266
3 _WDTH 1671
3 _HGHT 1474
2 TITL Andrew Bujnak Sr Death Certificate
1 RIN 0c6a7d6c-f0ec-420e-95e1-51682add8bce
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2019-03-16 20:52:59.961
1 _CLON
2 _TID 15336856
2 _PID 20258624205
2 _OID 1f20b8cc-ea2f-4d6c-9659-a8421a5ad89e
2 _DATE 2014-08-22 17:10:42.000
1 _ORIG u
0 @O7@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 38479
3 _WDTH 400
3 _HGHT 400
2 TITL Pauline Traxel Maloney Obituary
1 RIN 0d37c122-cbfd-4e50-8fed-7f87da2ef183
1 DATE 21 May 1937
1 PLAC St. Louis, Missouri
1 _CREA 2020-07-20 16:55:37.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/55724156/pauline-traxel-maloney-obituary/?xid=865
0 @O8@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 2903564
3 _WDTH 1229
3 _HGHT 922
1 RIN 0dcc4f46-f704-40db-87a7-07fbe914e551
1 DATE 5/2/2010 11:46:12 PM
1 _CREA 2020-08-22 21:29:19.000
1 _CLON
2 _TID 62769392
2 _PID 34092124738
2 _OID addf78a0-b956-4ec1-a9fd-d055a2a09fec
2 _DATE 2013-10-29 17:22:32.000
1 _ORIG u
0 @O9@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 30908
3 _WDTH 400
3 _HGHT 400
2 TITL Marriage announcement
1 RIN 0ef7c2d7-845c-4895-a475-496431c56bae
1 DATE 28 Sep 1943
1 PLAC New Brunswick, New Jersey
1 _CREA 2021-03-20 18:21:23.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/73947015/the-central-new-jersey-home-news/?xid=865
0 @O10@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 449667
3 _WDTH 1536
3 _HGHT 2151
2 TITL Rohlfing, Martha, Christina & Verena
1 RIN 1343aac7-8747-4bc5-a3a1-741ec638d0e7
1 DATE 1910
1 PLAC Gasconade Co Missouri
1 _CREA 2020-08-24 16:38:01.000
1 _ORIG u
0 @O11@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 62631
3 _WDTH 400
3 _HGHT 400
2 TITL Marriage announcement
1 RIN 16df184a-4846-43c2-97b9-d85faa4fe096
1 DATE 3 Oct 1986
1 PLAC Woodstock, Illinois
1 _CREA 2021-01-17 21:10:29.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/67867426/northwest-herald/?xid=865
0 @O12@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 35179
3 _WDTH 400
3 _HGHT 400
2 TITL William and Louise Traxel Divorce
1 RIN 1d1c9d36-b6d8-4a35-8ce5-d14e5391db56

1 PLAC St. Louis, Missouri
1 _CREA 2020-07-20 17:23:38.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/55725993/william-and-louise-traxel-divorce/?xid=865
0 @O13@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 14231
3 _WDTH 250
3 _HGHT 143
2 TITL  Carolina Charlotte Lottie Niemeyer Witthaus
1 RIN 1d4ba3c3-2e2d-4327-8aaf-ba71e4a0fa8d
1 DATE 3 Nov 1906
1 PLAC Wright City, Warren County, Missouri, USA
1 _CREA 2020-09-19 17:17:02.000
1 _CLON
2 _TID 8831504
2 _PID 140027517649
2 _OID 5bf4914e-3caa-49de-91ed-1ee8cf410588
2 _DATE 2018-05-08 15:20:56.000
1 _ORIG u
2 _URL https://www.findagrave.com/memorial/82012669/carolina-charlotte_lottie-witthaus
0 @O14@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 1265348
3 _WDTH 2039
3 _HGHT 2800
2 TITL Lottie Pehle
1 RIN 20a47a2a-d57a-4e4d-ac44-3e831499cf0d
1 _CREA 2020-08-22 19:43:21.000
1 _ORIG u
0 @O15@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 2219302
3 _WDTH 2304
3 _HGHT 3072
2 TITL Christian Frederick and Sabina Anna (nee Humburg) Rohlfing Headstone
1 RIN 2a0c38b4-1ea9-404c-939e-a0a412f9ad6c
1 DATE 4/2/2011 1:19:55 AM
1 _DSCR Bethany Evangelical Cemetery, Berger, Franklin County, Missouri, USA
1 _CREA 2020-08-24 14:27:17.000
1 _CLON
2 _TID 107085620
2 _PID 120055690383
2 _OID 3fdb7d6d-b9ea-49a0-b97f-ceb020b5528a
2 _DATE 2017-01-03 00:35:23.000
1 _ORIG u
0 @O16@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 1300670
3 _WDTH 2433
3 _HGHT 2200
2 TITL Christian Frederick Rohlfing Death Certificate
1 RIN 2bd2e343-0497-43e4-85b3-7a3a2e5a8601
1 DATE 5/23/2009 10:24:42 AM
1 _CREA 2020-08-24 14:09:20.000
1 _CLON
2 _TID 107085620
2 _PID 120055690383
2 _OID 2ce75aa2-def6-463a-8471-033417e4e069
2 _DATE 2017-01-03 00:36:20.000
1 _ORIG u
0 @O17@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpg
3 _SIZE 326396
3 _WDTH 700
3 _HGHT 963
2 TITL Rohlfing, Henry
1 RIN 2be84578-5e75-49e2-a1f6-01e280277011
1 DATE 6/8/2012 10:36:41 AM
1 _DSCR Posted on Findagrave.com by Lyle & Marsha.
1 _CREA 2020-08-24 19:05:09.000
1 _CLON
2 _TID 31756048
2 _PID 240120003028
2 _OID cc5d7324-595d-4d35-a86e-d5e45d76ddc1
2 _DATE 2017-07-23 21:22:57.000
1 _ORIG u
0 @O18@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE tiff
3 _SIZE 147067
3 _WDTH 425
3 _HGHT 332
2 TITL Andrew & Veronica Kolar Bujnak Sr.
1 RIN 2c4dbe89-9657-4d7c-930d-72e6b1aa917c
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2019-03-16 20:55:55.372
1 _CLON
2 _TID 28743232
2 _PID 12338394980
2 _OID cce93c36-b124-42f6-a969-a6eed89b6a20
2 _DATE 2012-08-01 21:06:50.000
1 _ORIG u
0 @O19@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 59378
3 _WDTH 441
3 _HGHT 432
2 TITL Christian Frederick and Sabina Anna (nee Humburg) Rohlfing
1 RIN 2ee7c0c1-7767-4b0f-a233-65ffe380d056
1 DATE 10/7/2015 7:11:12 AM
1 _CREA 2020-08-24 14:08:07.000
1 _CLON
2 _TID 107085620
2 _PID 120055690383
2 _OID 71285037-c5a5-4ce7-9a8d-1a308f5295e7
2 _DATE 2017-01-03 00:34:48.000
1 _ORIG u
0 @O20@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 368620
3 _WDTH 1536
3 _HGHT 2134
2 TITL Alphonse & Verena Wehmueller nee Rohlfing
1 RIN 3155bd52-e5cb-4bf2-8739-ea205e130491
1 DATE 1916
1 PLAC Gasconade Co Missouri
1 _CREA 2020-08-24 17:08:58.000
1 _ORIG u
0 @O21@ OBJE
1 FILE
2 FORM
3 TYPE story
3 _MTYPE story
3 _STYPE x-inline
3 _SIZE 1289
2 TITL Jacob Bujnak obit newspaper clipping 1944
1 RIN 35d36c37-56d1-4f03-af35-4097eca9f9be
1 DATE 1944
1 _DSCR Obit
1 _META <metadataxml><content><line>&lt;p&gt;TitleJacob T. Bujnak obituary, newspaper clipping,, 1944,NoteJacob T. Bujnak, 67 Retired Molder, Dies After Long Illness Jacon Andrew Bujnak, 67, retired Iron molder died in his home 904 South Charles street a
2 CONC t 6:40 last night after an extended illness. He last worked at the Supreme foundry and retired nine years ago. The deceased was born in Austro-Hungary, July 25, 1876, and was son of the late Mr and Mrs Andrew Bujnak. His wife who was the former Mar
2 CONC y Krekel survives him with five sons and five daughters: Fred and Helen Bujnak, 904 South Charlesstret; Edward Bujnak Sr. 902 South Chares Street; Irene, wife of Al Kitchen, 46 North Missouri Ave; Lucille, wife of George Traxel, St. Louis; Pvt Jose
2 CONC ph W. Wlky, Camp Blanding Fla.; Stephan Welky, 1720 Bell avenue; Mary, wife of Charles Lang, Sr., 600 West Lincoln Stret;Margaret, wife of Lawrence Haley, Chicago; and John Wlky, Cincinati O. He also leaves 18 grandchildren and two great grandchild
2 CONC ren and two brothers, Charles, Cleveland,O and Andrew, St Louis. He was a member of St. Peter's Cathedral and Molders Union Local 182. His body is at Pete Gaerdner funeral home where friends may call after 6 o'clock tonight. Funeral arrangements ar
2 CONC e pending.&lt;/p&gt;</line></content></metadataxml>
1 _CREA 2019-03-16 20:13:19.318
1 _CLON
2 _TID 28743232
2 _PID 12100966033
2 _OID e5a82ca1-9b02-4002-8257-648af0841f44
2 _DATE 2016-01-18 17:27:28.000
1 _ORIG u
0 @O22@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 572322
3 _WDTH 2074
3 _HGHT 2954
2 TITL Rohlfing, Fritz and Christina nee Meier
1 RIN 390b595b-620b-47ae-a008-982c7a84508f
1 _CREA 2020-08-22 18:21:47.000
1 _ORIG u
0 @O23@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 38556
3 _WDTH 400
3 _HGHT 400
2 TITL Henry and Mathilda Von Behren 50th anniversary
1 RIN 3e15ff43-7d24-4cd4-8c59-4ec1e0982cc3
1 DATE 27 Nov 1941
1 PLAC New Haven, Missouri
1 _CREA 2020-08-30 20:33:39.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/58340493/henry-and-mathilda-von-behren-50th/?xid=865
0 @O24@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 44553
3 _WDTH 400
3 _HGHT 400
2 TITL Barbara Traxek nee Kessler Obit
1 RIN 4002a2a1-bf3f-4f80-85cb-b23935a4385f
1 DATE 6 Feb 1944
1 PLAC St. Louis, Missouri
1 _CREA 2020-01-04 23:06:11.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/41688520/barbara_traxek_nee_kessler_obit/?xid=865
0 @O25@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpg
3 _SIZE 53093
3 _WDTH 301
3 _HGHT 428
2 TITL IMG_7673.JPG
1 RIN 41634e8a-901e-40b5-aed6-a405a29aa03d
1 _CREA 2020-09-19 16:55:52.000
1 _CLON
2 _TID 82088954
2 _PID 38448195270
2 _OID ded8110c-b1f2-4efc-9513-24f59090dff6
2 _DATE 2016-06-19 13:13:14.000
1 _ORIG u
0 @O26@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 494197
3 _WDTH 1646
3 _HGHT 1464
2 TITL Andrew Bujnak Sr Death Certificate Suppl
1 RIN 43be2cce-bc57-4bdc-9743-94e70df29ec4
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2019-03-16 20:53:55.304
1 _CLON
2 _TID 15336856
2 _PID 20258624205
2 _OID 7fd2abdb-4084-48c3-99f5-24b1bbb3721f
2 _DATE 2014-08-22 17:10:41.000
1 _ORIG u
0 @O27@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 1914415
3 _WDTH 3173
3 _HGHT 4661
2 TITL Von Behren, Henry & Maltida
1 RIN 443e9f10-670c-4926-a1fd-da53ea087431
1 _CREA 2020-08-22 19:36:20.000
1 _ORIG u
0 @O28@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 29380
3 _WDTH 400
3 _HGHT 400
2 TITL Obituary for Mathilda Christine VonBehren
1 RIN 449740e2-9370-4f43-afc5-eebb74918528
1 DATE 16 Mar 1950
1 PLAC New Haven, Missouri
1 _CREA 2020-08-22 19:59:19.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/37343230/obituary-for-mathilda-christine/?xid=865
0 @O29@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 50665
3 _WDTH 400
3 _HGHT 400
2 TITL Obituary Adolph Pehle
1 RIN 471cbd68-1bdf-45d4-a601-177235c7a1ec
1 DATE 25 Dec 1953
1 PLAC Washington, Missouri
1 _CREA 2020-08-22 21:15:24.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/57844561/obituary-adolph-pehle/?xid=865
0 @O30@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 82421
3 _WDTH 400
3 _HGHT 266
2 TITL Alphons Arthur and Verena M. (nee Rohlfing) Wehmueller Headstone
1 RIN 4f9a45bb-ed82-449d-9eca-81f30cb33d74
1 DATE 2/6/2009 11:48:54 AM
1 _DSCR Bethany Evangelical Cemetery, Berger, Franklin County, Missouri, USA
1 _CREA 2020-08-24 17:00:51.000
1 _CLON
2 _TID 107085620
2 _PID 120055690388
2 _OID 0e553e5b-9228-471c-94c8-8df5abeca746
2 _DATE 2017-01-03 00:35:31.000
1 _ORIG u
0 @O31@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 25710
3 _WDTH 256
3 _HGHT 400
2 TITL Mildred Von Behren and Ralph Brandt Wedding
1 RIN 510c0fab-a0b2-4677-87ed-ce0cca7d225e
1 DATE 29 Sep 1955
1 PLAC New Haven, Missouri
1 _CREA 2021-07-03 21:05:06.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/80737645/mildred-von-behren-and-ralph-brandt/?xid=865
0 @O32@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 345357
3 _WDTH 1536
3 _HGHT 2142
2 TITL Caroline Rohlfing Sherman and son
1 RIN 531496aa-e73b-4655-82a7-31ca85fd0593
1 _DSCR Mathilda Rohlfing's 1/2 sister
1 _CREA 2020-08-24 18:47:05.000
1 _ORIG u
0 @O33@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 1282133
3 _WDTH 2413
3 _HGHT 2175
2 TITL Martha Sabina Bensing (nee Rohlfing) Death Certificate
1 RIN 57c62bfc-7478-42e7-9b0b-51953654a956
1 DATE 6/3/2009 10:22:54 PM
1 _CREA 2020-08-24 16:40:53.000
1 _CLON
2 _TID 107085620
2 _PID 120055690385
2 _OID 6e49cf75-5d80-430e-8114-5c225fe0a013
2 _DATE 2017-01-03 00:34:49.000
1 _ORIG u
0 @O34@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 40614
3 _WDTH 250
3 _HGHT 333
2 TITL  Louisa Obermeyer
1 RIN 581e1a87-72c7-449c-984c-509abb53d260
1 DATE 1913
1 PLAC Berger, Franklin County, Missouri, USA
1 _CREA 2020-09-03 18:47:04.000
1 _CLON
2 _TID 16190559
2 _PID 410077244128
2 _OID 4f194103-3338-48f4-8127-dc34875c31f8
2 _DATE 2019-02-07 21:57:19.000
1 _ORIG u
2 _URL https://www.findagrave.com/memorial/51899754/louisa-obermeyer
0 @O35@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 29782
3 _WDTH 310
3 _HGHT 400
2 TITL obituary Henry Von Behren
1 RIN 58247a94-3994-40ee-add1-ebc19271935a

1 PLAC New Haven, Missouri
1 _CREA 2020-08-22 20:33:05.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/57841398/obituary-henry-von-behren/?xid=865
0 @O36@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE tiff
3 _SIZE 65311
3 _WDTH 201
3 _HGHT 307
2 TITL Philomena (Minnie) Brunat
1 RIN 5e12a2f7-3428-462e-8184-eb1d78f9d19e
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2012-11-19 03:12:21.520
1 _CLON
2 _TID 28743232
2 _PID 12100975725
2 _OID 1de108c2-0dc5-4496-8ce7-0c2da4a18fe9
2 _DATE 2012-08-02 22:28:41.000
1 _ORIG u
0 @O37@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 46019
3 _WDTH 400
3 _HGHT 400
2 TITL William Traxel and Louise Brown Marriage License
1 RIN 628f2bc4-8f30-4057-9b9a-4dbd56c8c350
1 DATE 22 Jun 1911
1 PLAC St. Louis, Missouri
1 _CREA 2020-07-20 16:42:09.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/55722985/william-traxel-and-louise-brown/?xid=865
0 @O38@ OBJE
1 FILE
2 FORM pdf
3 TYPE story
3 _MTYPE story
3 _STYPE pdf
3 _SIZE 92497
3 _WDTH 0
3 _HGHT 0
2 TITL Rohlfing, Christine Mary Meier
1 RIN 647e966e-6e42-4979-964e-dff60ed8f754
1 DATE 3/3/2017 10:40:59 PM
1 _CREA 2020-08-22 19:07:50.000
1 _CLON
2 _TID 152414624
2 _PID 122021135001
2 _OID f0e18eed-379a-4c09-93fd-cede350004ac
2 _DATE 2018-07-06 07:40:35.000
1 _ORIG u
0 @O39@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 84730
3 _WDTH 400
3 _HGHT 300
2 TITL Martha Sabina Bensing (nee Rohlfing) Headstone
1 RIN 664ef526-98bd-4c6f-8bf0-43ad106d3e48
1 DATE 2/6/2009 11:52:15 AM
1 _DSCR Bethany Evangelical Cemetery, Berger, Franklin County, Missouri, USA
1 _CREA 2020-08-24 16:41:57.000
1 _CLON
2 _TID 107085620
2 _PID 120055690385
2 _OID 1a00bc0f-70aa-4b34-829f-c1dee81f29d4
2 _DATE 2017-01-03 00:36:41.000
1 _ORIG u
0 @O40@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 43388
3 _WDTH 400
3 _HGHT 400
2 TITL Elzona Birth announcement
1 RIN 667dc9db-4f04-4baa-9b3c-bacfa12ae676
1 DATE 25 Apr 1934
1 PLAC St. Louis, Missouri
1 _CREA 2020-07-20 17:48:17.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/55727687/elzona-birth-announcement/?xid=865
0 @O41@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 38489
3 _WDTH 400
3 _HGHT 400
2 TITL Louise Moses nee Brown
1 RIN 6cda340c-bdef-45ea-ae3a-2f63b2a97532
1 DATE 13 Apr 1952
1 PLAC St. Louis, Missouri
1 _CREA 2019-10-17 16:10:03.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/37343726/louise_moses_nee_brown/?xid=865
0 @O42@ OBJE
1 FILE
2 FORM pdf
3 TYPE story
3 _MTYPE story
3 _STYPE pdf
3 _SIZE 99621
2 TITL DEATH CERTIFICATE
1 RIN 71e0eab2-885f-4bef-8353-ebf7b3598c20
1 _CREA 2020-09-19 16:33:16.000
1 _CLON
2 _TID 22740542
2 _PID 1292980005
2 _OID 0b36756a-8702-4160-8726-a5d4bd7780ac
2 _DATE 2010-12-05 18:11:36.000
1 _ORIG u
0 @O43@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 32930
3 _WDTH 400
3 _HGHT 400
2 TITL George Traxel injury
1 RIN 74af6f8f-031f-4bc5-afe6-d51183aa88ed
1 DATE 17 Dec 1916
1 PLAC St. Louis, Missouri
1 _CREA 2020-07-20 17:43:12.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/55727296/george-traxel-injury/?xid=865
0 @O44@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 1901807
3 _WDTH 3202 TITL Erwin Von Behren Sr
1 RIN 7cf94b7b-f848-4543-9e11-7ecbd8821bc3
1 _CREA 2020-08-22 19:39:36.000
1 _ORIG u
0 @O45@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 30584
3 _WDTH 400
3 _HGHT 332
2 TITL Newspapers.com - The New Haven Leader - 24 Dec 1953 - Page 3 Christmas 1953 Von Behrens
1 RIN 8093cc49-e219-479d-9234-0bade4d2483b
1 DATE 24 Dec 1953
1 PLAC New Haven, Missouri
1 _CREA 2020-08-22 20:13:34.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/57839879/christmas-1953-von-behrens/?xid=865
0 @O46@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 43284
3 _WDTH 250
3 _HGHT 295
2 TITL Jobst Heinrich "JH" Witthaus
1 RIN 85af8614-9a4d-4199-a41d-b7b9c64f4c03
1 DATE about 1840
1 PLAC Hopewell. Missouri
1 _DSCR Birth: 	Jan. 19, 1789
2 CONT Nordrhein-Westfalen, Germany
2 CONT Death: 	Feb., 1854
2 CONT Hopewell (Warren County)
2 CONT Warren County
2 CONT Missouri, USA
2 CONT 
2 CONT Buried on a private farm located approximately Latitude 38.41797 N. Longitude 91.7075 W
2 CONT 12-20-1843 Immigrated to the Port of New Orleans,Louisianna aboard the sailship Albert and traveled up the Mississippi River by paddle boat to St. Louis.
2 CONT 1-19-1844 Recived 40 Acre homestead in Hopewell. US Land Grant # N-14622. Land discription the SE 1/4. SE 1/4,Sec. 3,Township 45, Range 2W (recorded in Deed Book E pg.21, F-562).The property is at the end of Krone road off Hyy 47.
2 CONT 4-20-1846 Took first oath of naturalization, Book B pg. 431 Warren County, Missouri
2 CONT His first wife was Anna Marie Catherine Elisabeth (nee Schroeder)Witthaus. B. 1796 in Harkemissen, Lippe, Nordrhein-Westfalen, Germany. D. 2-20-1819 in Germany.
2 CONT Married 11-20-1814 in Vlotho, Herford, Nordrhein-Westfalen, Germany.
2 CONT Children:
2 CONT 1. Anna Christina Witthaus
2 CONT 2. Johann Friederick (Fritz) Witthaus
2 CONT 3. Gottlieb Ludwig Witthaus
2 CONT 4. Johann Gustav Witthaus 
2 CONT  
2 CONT Family links: 
2 CONT  Spouse:
2 CONT   Johanna Catharine Elizabeth Wehmeyer Witthaus (1793 - 1850)
2 CONT  
2 CONT  Children:
2 CONT   Johnann Friederick (Fritz) Witthaus (1815 - 1907)*
2 CONT   Gottlieb Ludwig Witthaus (1818 - 1886)*
2 CONT   Heinrich Witthaus (1820 - 1877)*
2 CONT   Herman Heinrich Witthaus (1828 - 1892)*
2 CONT   Ferdinand William Witthaus (1833 - 1893)*
2 CONT  
2 CONT *Calculated relationship
2 CONT  
2 CONT Burial:
2 CONT Witthaus Family Cemetery 
2 CONT Hopewell (Warren County)
2 CONT Warren County
2 CONT Missouri, USA
2 CONT Plot: Latitude 38.41797 N. Longitude 91.7075 W
2 CONT  
2 CONT Created by: Edward Johnson
2 CONT Record added: Feb 22, 2012 
2 CONT Find A Grave Memorial# 85427801
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2020-09-19 18:47:46.000
1 _CLON
2 _TID 28259026
2 _PID 26054983712
2 _OID c86c81cf-ee45-4f87-804a-ee683cd0fe50
2 _DATE 2013-11-22 15:43:31.000
1 _ORIG u
0 @O47@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 34360
3 _WDTH 400
3 _HGHT 400
2 TITL Georgia Traxel Birth Announcement
1 RIN 88e90c89-896c-44db-9e29-19c68e686917
1 DATE 26 Aug 1942
1 PLAC St. Louis, Missouri
1 _CREA 2020-07-20 17:56:21.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/55728237/georgia-traxel-birth-announcement/?xid=865
0 @O48@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 14317
3 _WDTH 139
3 _HGHT 196
2 TITL #15 Photo Henry (2)
1 RIN 8cbbefb4-c1fb-4919-aca5-772371182879
1 _CREA 2020-09-13 22:13:55.000
1 _CLON
2 _TID 82088954
2 _PID 38448195279
2 _OID 28309496-aa81-42e9-9f82-5dbb339eafa3
2 _DATE 2016-05-05 04:13:37.000
1 _ORIG u
0 @O49@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 49262
3 _WDTH 400
3 _HGHT 400
2 TITL George Traxel Birth Announcement
1 RIN 8eccec2e-ebc1-40f8-9b9d-1e992075773b
1 DATE 21 Nov 1911
1 PLAC St. Louis, Missouri
1 _CREA 2020-07-20 17:34:59.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/55726762/george-traxel-birth-announcement/?xid=865
0 @O50@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 316526
3 _WDTH 1352
3 _HGHT 1901
2 TITL Android Photo
1 RIN 94e41273-00c2-43be-9b16-56e9bcfeb4f9
1 DATE 22 May 2016
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2020-07-17 16:07:03.000
1 _CLON
2 _TID 20394127
2 _PID 940185944
2 _OID 0156843e-7b84-4acf-8a86-324f2739393e
2 _DATE 2016-05-23 01:58:47.000
1 _ORIG u
0 @O51@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 142745
3 _WDTH 480
3 _HGHT 640
2 TITL Heinrich Wilhelm Kappelmann
1 RIN 9bd57b10-07f6-4d7c-a408-9d8dd2a8918b
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2020-09-03 20:28:55.000
1 _CLON
2 _TID 22473863
2 _PID 20383016678
2 _OID e14e59b5-a7c3-455d-a923-6601ee53cbf2
2 _DATE 2013-03-23 01:53:19.000
1 _ORIG u
0 @O52@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpg
3 _SIZE 79645
3 _WDTH 745
3 _HGHT 1024
2 TITL GOTTLIEB WITTHAUS
1 RIN a21652bf-1cd2-42ba-adcb-ce548b48de2a
1 DATE 11/8/2010 6:56:48 PM
1 _CREA 2020-09-19 17:02:33.000
1 _CLON
2 _TID 116451690
2 _PID 340154185595
2 _OID 131bc73b-83fc-424c-83df-0740c88527dd
2 _DATE 2017-10-30 19:10:18.000
1 _ORIG u
0 @O53@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpg
3 _SIZE 2875
3 _WDTH 53
3 _HGHT 73
2 TITL Johanna Catharine Elizabeth Wehmeyer
1 RIN a99132b3-c61d-4092-92a7-e46b7695888b
1 _CREA 2020-09-19 19:03:39.000
1 _CLON
2 _TID 116451690
2 _PID 340154185443
2 _OID 5e4c1bc9-3704-4972-802d-f496109c1bc4
2 _DATE 2017-10-30 19:10:26.000
1 _ORIG u
0 @O54@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 399216
3 _WDTH 2141
3 _HGHT 1536
2 TITL Louis & Anna Rohlfing Family
1 RIN adf4bd5f-8bce-4301-9351-0b854f464712
1 PLAC Gasconade Co Missouri
1 _CREA 2020-08-24 18:19:45.000
1 _ORIG u
0 @O55@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 35686
3 _WDTH 400
3 _HGHT 400
2 TITL Obituary for ANDREW L. BUJNAK
1 RIN aeaf446a-8275-4c52-8293-701ea2ec5541
1 DATE 26 Sep 1947
1 PLAC St. Louis, Missouri
1 _CREA 2020-11-15 19:00:26.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/63316451/obituary-for-andrew-l-bujnak/?xid=865
0 @O56@ OBJE
1 FILE
2 FORM
3 TYPE story
3 _MTYPE story
3 _STYPE x-inline
3 _SIZE 2499
2 TITL Senate Grove Cemetery
1 RIN b1a536ed-c190-4d8e-86a4-25eac4ab60b9
1 PLAC Berger, Franklin, Mo
1 _DSCR From findagrave.com
1 _META <metadataxml><content><line>&lt;p&gt;&lt;span style="font-size: 12.727272033691406px; background-color: #dcd0cf;"&gt;Cemetery notes and/or description:&lt;/span&gt;&lt;br style="font-size: 12.727272033691406px;"&gt;&lt;span style="font-size: 12.727
2 CONC 272033691406px; background-color: #dcd0cf;"&gt;HISTORY OF SENATE GROVE CEMETERY - ESTABLISHED 1876&lt;/span&gt;&lt;br style="font-size: 12.727272033691406px;"&gt;&lt;br style="font-size: 12.727272033691406px;"&gt;&lt;span style="font-size: 12.72727
2 CONC 2033691406px; background-color: #dcd0cf;"&gt;In 1859, Frederick and Catherina Alberswerth deeded one acre of land to the German Methodist Episcopal Church. It was located about two miles northwest of the Senate Grove Methodist Church and was to b
2 CONC e used as a meeting house and burial ground. This was from land owned by Weber and Meier.The church was called Meier. Also a burial ground located on Spreckelmeyer Road near Berger, was being used. The Reverend Wilhelm Schreck, a Methodist circui
2 CONC t rider and founder of Methodist churches in the area as well as the Meier Church is buried on the Spreckelmeyer site. Both of these sites contain marked and unmarked graves and are not maintained.&lt;/span&gt;&lt;br style="font-size: 12.7272720336
2 CONC 91406px;"&gt;&lt;br style="font-size: 12.727272033691406px;"&gt;&lt;span style="font-size: 12.727272033691406px; background-color: #dcd0cf;"&gt;In 1879 land was obtained from Senator F. W. Pehle and his wife Hanna by the congregation as a new churc
2 CONC h site and burial ground on what is now names Highway VV. The congregation was then named Senate Grove Immanuel M. E. Church. Additional land was purchased from Wesley Allersmeyer and his wife Louise in 1926 and 1946.&lt;/span&gt;&lt;br style="font
2 CONC -size: 12.727272033691406px;"&gt;&lt;br style="font-size: 12.727272033691406px;"&gt;&lt;span style="font-size: 12.727272033691406px; background-color: #dcd0cf;"&gt;The first burial was that of a child, Emma Pehle, in 1876. This was probably the dau
2 CONC ghter of Senator Pehle.&lt;/span&gt;&lt;br style="font-size: 12.727272033691406px;"&gt;&lt;br style="font-size: 12.727272033691406px;"&gt;&lt;span style="font-size: 12.727272033691406px; background-color: #dcd0cf;"&gt;By-laws were drawn up in 189
2 CONC 4 defining the boundaries of the burial grounds and private lots. An instrument of correction was filed in 1899. By-laws enacted in 1938 established a perpetual endowment to provide for the upkeep of the burial grounds.&lt;/span&gt;&lt;/p&gt;</line
2 CONC ></content></metadataxml>
1 _CREA 2020-09-03 14:27:35.000
1 _CLON
2 _TID 25861664
2 _PID 1827877951
2 _OID 505c5dcb-e909-403a-95d0-89e4e8de2e2b
2 _DATE 2013-02-23 02:11:15.000
1 _ORIG u
0 @O57@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 2219302
3 _WDTH 2304
3 _HGHT 3072
2 TITL Christian Frederick and Sabina Anna (nee Humburg) Rohlfing Headstone
1 RIN b22e7c37-068b-47dd-bf1f-b9895a4d8f13
1 DATE 4/2/2011 1:19:55 AM
1 _DSCR Bethany Evangelical Cemetery, Berger, Franklin County, Missouri, USA
1 _CREA 2020-08-24 17:27:27.000
1 _CLON
2 _TID 107085620
2 _PID 120055690384
2 _OID 3fdb7d6d-b9ea-49a0-b97f-ceb020b5528a
2 _DATE 2017-01-03 00:35:23.000
1 _ORIG u
0 @O58@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 42778
3 _WDTH 450
3 _HGHT 640
2 TITL Jakeb and Filomena
1 RIN b46da3fc-ce57-4a39-bc0d-8a56db040b7d
1 DATE 8 jan 1898
1 PLAC St. Louis
1 _DSCR Jakeb and Filomena's wedding picture
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2012-05-19 22:41:39.263
1 _ORIG u
0 @O59@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 35387
3 _WDTH 400
3 _HGHT 400
2 TITL Augusta Traxel Feldmeier Obituary
1 RIN b6d44e5c-a301-4b0b-9a1f-34102f0d0c53
1 DATE 3 Jun 1974
1 PLAC St. Louis, Missouri
1 _CREA 2020-07-20 17:53:24.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/55728045/augusta-traxel-feldmeier-obituary/?xid=865
0 @O60@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 179938
3 _WDTH 1024
3 _HGHT 768
2 TITL Friedrich Rohlfing home place Big Berger
1 RIN be9dd196-3728-4d08-bdfd-d60d57a68257
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2020-08-20 21:08:43.000
1 _CLON
2 _TID 34378421
2 _PID 18633270763
2 _OID 4437b6aa-4204-4289-82ba-c9a0ae0936cc
2 _DATE 2012-07-10 12:04:45.000
1 _ORIG u
0 @O61@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 1259123
3 _WDTH 768
3 _HGHT 576
1 RIN c17d993f-a62d-465d-b7eb-42221e647932
1 DATE 5/5/2008 10:01:49 AM
1 _CREA 2020-09-19 16:32:29.000
1 _CLON
2 _TID 62769392
2 _PID 34092122295
2 _OID b026222c-7fbe-4a11-b076-218dc3075870
2 _DATE 2013-10-29 17:21:35.000
1 _ORIG u
0 @O62@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 1320699
3 _WDTH 2329
3 _HGHT 2175
2 TITL Sabina Anna Rohlfing (nee Humburg) Death Certificate
1 RIN c23a1502-de1d-4438-a1ff-f94834325499
1 DATE 6/14/2009 3:55:54 PM
1 _CREA 2020-08-24 17:21:07.000
1 _CLON
2 _TID 107085620
2 _PID 120055690384
2 _OID 5206c7ea-165a-4a6d-8610-aa2d9001511d
2 _DATE 2017-01-03 00:36:03.000
1 _ORIG u
0 @O63@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 1230763
3 _WDTH 1997
3 _HGHT 2730
2 TITL Von Behren, Erwin and Lottie
1 RIN c3c5f7e5-e4bf-4515-98ab-91b2be55ce43
1 _CREA 2020-08-22 19:41:04.000
1 _ORIG u
0 @O64@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 62631
3 _WDTH 400
3 _HGHT 400
2 TITL Newspapers.com - Northwest Herald - 3 Oct 1986 - Page 4 
1 RIN c56bc63c-d718-4170-9d95-13f4ffeb86c7
1 D1 PLAC Woodstock, Illinois
1 _CREA 2021-01-17 21:09:32.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/67867426/northwest-herald/?xid=865
0 @O65@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 67157
3 _WDTH 686
3 _HGHT 603
2 TITL Rohlfing, Fritz
1 RIN cbf8d226-cfa1-4864-a644-3a3324656179
1 _CREA 2020-08-22 18:22:29.000
1 _ORIG u
0 @O66@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 1259123
3 _WDTH 768
3 _HGHT 576
1 RIN cc8a9dbd-5dee-4332-8bea-88fcbd99cf0a
1 DATE 5/5/2008 10:01:49 AM
1 _CREA 2020-09-19 16:52:24.000
1 _CLON
2 _TID 62769392
2 _PID 34092122299
2 _OID ffde9159-4b29-4e66-a043-46dbfdff0103
2 _DATE 2013-10-29 17:21:35.000
1 _ORIG u
0 @O67@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 373495
3 _WDTH 1536
3 _HGHT 2144
2 TITL Henry Rohlfing and family
1 RIN d33c34b8-3091-4c53-aa83-8c3e79852e74
1 DATE 1880
1 PLAC Gasconade Co Missouri
1 _DSCR This photo was labeled "Cousin Henry and Family" in Luella Von Behren's (half niece of Henry Rohlfing Sr, daughter of Mathilda Rohlfing) scrapbook on the Rohlfing pages. This family is the closest fit for the timing of the photo which looks like i
2 CONC t was taken in the 1880's. The baby's name is Henry (born 1879) and the children would all be the right age. I also compared the parents to a later photo of them and the facial features were pretty consistent. I am fairly confident this is the corr
2 CONC ect family. If it is not please contact me and let me know.
1 _CREA 2020-08-24 19:20:36.000
1 _ORIG u
0 @O68@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 27887
3 _WDTH 372
3 _HGHT 498
2 TITL Henry Sr  and Louise Berger Rohlfing
1 RIN daf290fc-c4b1-4bf5-9e4c-9233fc2ca905
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2020-08-24 19:01:17.000
1 _CLON
2 _TID 34378421
2 _PID 18633238086
2 _OID f1386bc1-7ca1-427c-87db-3db8fba01387
2 _DATE 2012-05-29 13:51:07.000
1 _ORIG u
0 @O69@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 190075
3 _WDTH 1024
3 _HGHT 768
2 TITL Friedrich Rohlfing grave stone
1 RIN dbdc1477-13d5-470b-b1ca-b38521d2cec5
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2020-08-20 21:09:01.000
1 _CLON
2 _TID 34378421
2 _PID 18633270763
2 _OID 478a5188-4b71-41a0-8f80-c71fbc2aad9b
2 _DATE 2012-07-10 11:58:35.000
1 _ORIG u
0 @O70@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 396160
3 _WDTH 1536
3 _HGHT 2122
2 TITL Louis & Anna Rohlfing nee Humburg
1 RIN e5ac5542-1c20-4790-85cd-faf56390af56
1 DATE 1890
1 PLAC Gasconade Co Missouri
1 _CREA 2020-08-24 17:41:28.000
1 _ORIG u
0 @O71@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 46450
3 _WDTH 400
3 _HGHT 400
2 TITL Erwin Von Behren Sr Birthday
1 RIN e5c85c49-d7d7-4b4a-933d-e7a1c97c51ab
1 DATE 27 Oct 1932
1 PLAC New Haven, Missouri
1 _CREA 2020-08-22 20:19:46.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/57840340/erwin-von-behren-sr-birthday/?xid=865
0 @O72@ OBJE
1 FILE
2 FORM pdf
3 TYPE story
3 _MTYPE story
3 _STYPE pdf
3 _SIZE 99621
3 _WDTH 0
3 _HGHT 0
2 TITL DEATH CERTIFICATE
1 RIN e6544839-ba29-41b4-a380-fd657eef636e
1 _CREA 2020-09-13 22:23:05.000
1 _CLON
2 _TID 116451690
2 _PID 340154185885
2 _OID 60b13930-6514-4dc3-afc7-f011e8d1e81c
2 _DATE 2017-10-30 19:10:15.000
1 _ORIG u
0 @O73@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 272304
3 _WDTH 600
3 _HGHT 800
2 TITL Helena Bujnak
1 RIN e8a0ecc6-bb91-4310-b659-0c0233221426
1 _DSCR Buried with her little girl Helena
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2019-03-16 20:46:17.674
1 _CLON
2 _TID 28743232
2 _PID 12100975725
2 _OID df05bad8-e34b-4381-8ccf-b383ae656633
2 _DATE 2013-06-25 15:12:19.000
1 _ORIG u
0 @O74@ OBJE
1 FILE
2 FORM pdf
3 TYPE story
3 _MTYPE story
3 _STYPE pdf
3 _SIZE 64372
3 _WDTH 0
3 _HGHT 0
2 TITL DEATH CERTIFICATE
1 RIN e902950f-d908-4fd0-8631-58ac539fa8cc
1 _CREA 2020-09-19 18:38:55.000
1 _CLON
2 _TID 116451690
2 _PID 340154185609
2 _OID ca3794af-26c0-41c8-9fd8-824ae57a3b79
2 _DATE 2017-10-30 19:10:21.000
1 _ORIG u
0 @O75@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 53583
3 _WDTH 250
3 _HGHT 396
2 TITL  Johanna Catharine Elizabeth Wehmeyer Witthaus
1 RIN ea818e37-b160-4859-91f5-5688a0073955
1 DATE 1850
1 PLAC Hopewell, Warren County, Missouri, USA
1 _CREA 2020-09-19 19:03:44.000
1 _CLON
2 _TID 165270635
2 _PID 112151806599
2 _OID fe6abd68-d0d1-4e82-9bb7-1143869fdb27
2 _DATE 2019-12-05 14:53:27.000
1 _ORIG u
2 _URL https://www.findagrave.com/memorial/85437151/johanna_catharine-elizabeth-witthaus
0 @O76@ OBJE
1 FILE
2 FORM
3 TYPE story
3 _MTYPE story
3 _STYPE x-inline
3 _SIZE 188
2 TITL Birth and marriage reference
1 RIN ec586042-4ef3-48b6-90d1-90984a88c7c6
1 _META <metadataxml><content><line>Birth and marriage are recorded in the Die Familien der Kirchengemeinde Hartum 1761-1825 and volumn 1826-1875 by Heinz Riechmann.</line></content></metadataxml>
1 _CREA 2020-08-20 21:09:22.000
1 _CLON
2 _TID 34378421
2 _PID 18633270763
2 _OID fd9de59d-0634-428b-a79d-a67b21e30f8c
2 _DATE 2012-04-29 22:49:59.000
1 _ORIG u
0 @O77@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE portrait
3 _STYPE jpeg
3 _SIZE 170634
3 _WDTH 700
3 _HGHT 515
2 TITL Louis and Anna Rohlfing
1 RIN ed553dad-a826-46e1-a342-6e29f3bd04c4
1 _DSCR Hermann City Cemetery, Hermann, MO 
1 _META <metadataxml><cemetery /><transcription /></metadataxml>
1 _CREA 2020-08-24 17:55:49.000
1 _CLON
2 _TID 17749302
2 _PID 19998404000
2 _OID c6632f2f-8d95-468b-9a6d-35a964e56d49
2 _DATE 2012-09-22 20:05:53.000
1 _ORIG u
0 @O78@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 47999
3 _WDTH 400
3 _HGHT 400
2 TITL Ernst Witthaus Obituary
1 RIN ef712444-e785-4f8f-8130-e1dfb387ee00
1 DATE 7 Jan 1943
1 PLAC Warrenton, Missouri
1 _CREA 2020-09-19 17:50:23.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/59585005/ernst-witthaus-obituary/?xid=865
0 @O79@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _MTYPE document
3 _STYPE jpeg
3 _SIZE 30747
3 _WDTH 348
3 _HGHT 400
2 TITL George Traxel Obituary
1 RIN f2a81bad-a0bc-4880-8903-3d033f452240
1 DATE 30 Sep 1984
1 PLAC St. Louis, Missouri
1 _CREA 2020-07-20 15:13:21.000
1 _ORIG newspapers
2 _URL https://www.newspapers.com/clip/55718001/george-traxel-obituary/?xid=865
0 @O80@ OBJE
1 FILE
2 FORM jpg
3 TYPE image
3 _STYPE jpeg
3 _SIZE 3944606
3 _WDTH 1037
3 _HGHT 1383
1 RIN f5bdd0f0-c4a7-4319-8a0f-6a66fb3a94ae
1 DATE 5/3/2010 12:18:29 AM
1 _CREA 2015-04-11 11:55:24.460
1 _CLON
2 _TID 62769392
2 _PID 34092125957
2 _OID f4ffd640-39d8-4d80-b886-deb479c035c1
2 _DATE 2013-10-29 17:23:17.000
1 _ORIG u
0 @S_2145792746@ SOUR
1 TITL Baltimore Passenger Lists, 1820-1948
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations Inc, 2006.Original data - Baltimore, Maryland. Passenger Lists of Vessels Arriving at Baltimore, Maryland, 1891-1909. Micropublication T844. RG085. Rolls # 1-150. National Archives, Washi
2 CONC ngton, D
1 _APID 1,8679::0
1 REPO @R_2145269371@
0 @S_2128957767@ SOUR
1 TITL U.S. Veterans Gravesites, ca.1775-2006
1 AUTH National Cemetery Administration
1 PUBL Online publication - Provo, UT, USA: The Generations Network, Inc., 2006.Original data - National Cemetery Administration. Nationwide Gravesite Locator.Original data: National Cemetery Administration. Nationwide Gravesite Locator
1 _APID 1,8750::0
1 REPO @R_2145269371@
0 @S_2128957019@ SOUR
1 TITL Missouri Marriage Records, 1805-2002
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: The Generations Network, Inc., 2007.Original data - Missouri Marriage Records. Jefferson City, MO, USA: Missouri State Archives. Microfilm.Original data: Missouri Marriage Records. Jefferson City, MO, USA: Misso
2 CONC uri Stat
1 _APID 1,1171::0
1 REPO @R_2145269371@
0 @S_2117281763@ SOUR
1 TITL World War I Draft Registration Cards, 1917-1918
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: The Generations Network, Inc., 2005.Original data - United States, Selective Service System. World War I Selective Service System Draft Registration Cards, 1917-1918. Washington, D.C.: National Archives and Reco
2 CONC rds Admi
1 _APID 1,6482::0
1 REPO @R_2145269371@
0 @S_2117281560@ SOUR
1 TITL 1900 United States Federal Census
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: The Generations Network, Inc., 2004.Original data - United States of America, Bureau of the Census. Twelfth Census of the United States, 1900. Washington, D.C.: National Archives and Records Administration, 1900
2 CONC . T623, 
1 _APID 1,7602::0
1 REPO @R_2145269371@
0 @S_2117281409@ SOUR
1 TITL 1920 United States Federal Census
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: The Generations Network, Inc., 2005. For details on the contents of the film numbers, visit the following NARA web page: NARA.  Note: Enumeration Districts 819-839 on roll 323 (Chicago City.Original data - Unite
2 CONC d States
1 _APID 1,6061::0
1 REPO @R_2145269371@
0 @S_2117281376@ SOUR
1 TITL OneWorldTree
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: The Generations Network, Inc.
1 _APID 1,7438::0
1 REPO @R_2145269371@
0 @S_2117281312@ SOUR
1 TITL 1930 United States Federal Census
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: The Generations Network, Inc., 2002.Original data - United States of America, Bureau of the Census. Fifteenth Census of the United States, 1930. Washington, D.C.: National Archives and Records Administration, 19
2 CONC 30. T626
1 _APID 1,6224::0
1 REPO @R_2145269371@
0 @S_2117281231@ SOUR
1 TITL 1910 United States Federal Census
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: The Generations Network, Inc., 2006. For details on the contents of the film numbers, visit the following NARA web page: NARA.Original data - United States of America, Bureau of the Census. Thirteenth Census o
2 CONC f the Unit
1 _APID 1,7884::0
1 REPO @R_2145269371@
0 @S_2117281209@ SOUR
1 TITL Social Security Death Index
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: The Generations Network, Inc., 2007.Original data - Social Security Administration. Social Security Death Index, Master File. Social Security Administration.Original data: Social Security Administration. Socia
2 CONC l Security
1 _APID 1,3693::0
1 REPO @R_2145269371@
0 @S_2117281179@ SOUR
1 TITL Anna Masek Cinelli, death certificate no. 5951 (1951), Missouri State Archives,
0 @S_2117281178@ SOUR
1 TITL Annie Cibon, death certificate no. 25904 (1910), Missouri State Archives,
0 @S_2117281177@ SOUR
1 TITL Philomina Bujnak, death certificate no. 3426 (1912), Missouri State Archives,
0 @S_2117281176@ SOUR
1 TITL Joeseph Brunat, death certificate no. 14398 (1950), Missouri State Archives,
0 @S_2117281175@ SOUR
1 TITL Gravestone in St Peter and Paul Cemetery St. Louis Missouri
0 @S_2117281174@ SOUR
1 TITL www.stlcathcem.com
0 @S_2117281173@ SOUR
1 TITL Jacob/Mary Bujnak, 1930 U.S. Census, Belleville, St. Clair, Illinois, ED82, SD25, sheet 9A, dwelling904; Ancestry.com.
0 @S_2117281172@ SOUR
1 TITL Jacob Bujank Household, 1920 U.S.Census, Belleville, St. Clair, Illinois, ED 126, SD74, Sheet 16a, dwelling 922; Ancestry.com.
0 @S_2117281171@ SOUR
1 TITL 1900 US Census Andrew and Veronica Bujnak
1 REPO @R_2145269371@
0 @S_2117281170@ SOUR
1 TITL Social Security Death Index
0 @S_2117281169@ SOUR
1 TITL Death Certficate
0 @S_2117281168@ SOUR
1 TITL Georgia Von Behren
0 @S_2117281167@ SOUR
1 TITL Don Bujnak
0 @S_2117281166@ SOUR
1 TITL Jakeb Bujnak & Miss Mini Brunat, marriage license no. 73923 (8 January,1898), Recorder of Deeds, St Louis, Missouri
0 @S_2117281165@ SOUR
1 TITL Jacob Bujnak household, 1900 U.S. census, St. Louis, Missouri, ED 107, SD 11, Sheet 11, Dwelling 1712; National Archives.
1 NOTE Bujnak, Jacob, head,w,m,July 1873,26,m,2,,,Bohemia,Bohemia, Bohemia,1890,10,na,Stovemolder,1,,yes,yes,yes,r,h
2 CONT Bujnak, Minnie,wife,w,f,Sept 1978,21,m,2,1,1,Bohemia, Bohemi, Bohemia, 1890,9,,,,,yes,yes,yes
2 CONT Bujnak, Eddie,son,w,m,Feb 1898,2,,,Missouri, Bohemia, Bohemia
2 CONT Brunat, Joseph, brother-in-law,w,m,Sept 1879,20,s,,,,Bohemia, Bohemia, Bohemia, 1890,9,,Tobacco stemmer,6,0,y,y,y
2 CONT Brunat, Rosie, sister-in-law,w,f,Mar 1883, 17,s,,,Bohemia, Bohemia, Bohemia, 1890,9,,Tobacco stemmer,2,0,y,y,y
0 @S_2117281164@ SOUR
1 TITL Jacob Bujnak Obituary
0 @S_2117281163@ SOUR
1 TITL St. Louis Coroner's Transcript of Noblot Murder-Suicide, 1917
0 @S_2117281162@ SOUR
1 TITL Family History Inventory by Georgia's Cousin
0 @S_2117281161@ SOUR
1 TITL Don Bujnak; Belleville, IL
0 @S_2117281160@ SOUR
1 TITL Jakeb Bujnak and Mini Brunat, marriage license no. 73923 (8 Jan 1898), Recorder of Deeds, St, Louis, Missouri
0 @S_2117281159@ SOUR
1 TITL Jacob T. Bujnak obituary, newspaper clipping,, 1944,
1 NOTE Jacob T. Bujnak, 67 Retired Molder, Dies After Long Illness
2 CONT Jacon Andrew Bujnak, 67, retired Iron molder died in his home 904 South Charles street at 6:40 last night after an extended illness.  He last worked at the Supreme foundry and retired nine years ago.
2 CONT    
2 CONT The deceased was born in Austro-Hungary, July 25, 1876, and was son of the late Mr and Mrs Andrew Bujnak.  His wife who was the former Mary Krekel survives him with five sons and five daughters: Fred and Helen Bujnak, 904 South Charlesstret; Edwar
2 CONC d Bujnak Sr. 902 South Chares Street; Irene, wife of Al Kitchen, 46 North Missouri Ave; Lucille, wife of George Traxel, St. Louis; Pvt Joseph W. Wlky, Camp Blanding Fla.; Stephan Welky, 1720 Bell avenue; Mary, wife of Charles Lang, Sr., 600 West Li
2 CONC ncoln Stret;Margaret, wife of Lawrence Haley, Chicago; and John Wlky, Cincinati O.
2 CONT    
2 CONT He also leaves 18 grandchildren and two great grandchildren and two brothers, Charles, Cleveland,O and Andrew, St Louis.
2 CONT    
2 CONT He was a member of St. Peter's Cathedral and Molders Union Local 182.  His body is at Pete Gaerdner funeral home where friends may call after 6 o'clock tonight. Funeral arrangements are pending.
0 @S_2117281158@ SOUR
1 TITL 1910 Census
0 @S_2117281157@ SOUR
1 TITL 1910 census shows 3 children born 2 living
0 @S_2117281156@ SOUR
1 TITL Funeral Card
1 REPO @R_2145269372@
0 @S_2117281155@ SOUR
1 TITL 1920 Census
0 @S_2117281154@ SOUR
1 TITL Andrew and Veronica Bujnak, 1910 U.S. Census, St. Louis, Missouri, Ed 124, SD 10, sheet 10A, dwelling 1514; Ancestry.com.
0 @S_1795452860@ SOUR
1 TITL Illinois, Deaths and Stillbirths Index, 1916-1947
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations, Inc., 2011.Original data - "Illinois Deaths and Stillbirths, 1916–1947." Index. FamilySearch, Salt Lake City, Utah, 2010. Index entries derived from digital copies of original records..O
2 CONC riginal 
1 _APID 1,2542::0
1 REPO @R_2145269371@
0 @S_1795283584@ SOUR
1 TITL Ancestry Family Trees
1 PUBL Online publication - Provo, UT, USA: Ancestry.com.  Original data:  Family Tree files submitted by Ancestry members.
1 _APID 1,1030::0
1 REPO @R_2145269371@
1 NOTE This information comes from 1 or more individual Ancestry Family Tree files. This source citation points you to a current version of those files.  Note:  The owners of these tree files may have removed or changed information since this source citat
2 CONC ion was created.
0 @S_1794955984@ SOUR
1 TITL Web: St. Louis, Missouri, St. Louis Post-Dispatch Obituary Index, 1880-2009
1 PUBL Online publication - St. Louis Public Library.
1 _APID 1,70465::0
1 REPO @R_2145269371@
0 @S_1794955964@ SOUR
1 TITL U.S. City Directories, 1821-1989 (Beta)
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations, Inc., 2011.Original data - Original sources vary according to directory. The title of the specific directory being viewed is listed at the top of the image viewer page.  Check the direct
2 CONC ory titl
1 _APID 1,2469::0
1 REPO @R_2145269371@
0 @S_1793831411@ SOUR
1 TITL U.S. School Yearbooks
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations, Inc., 2010.Original data - Various school yearbooks from across the United States.Original data: Various school yearbooks from across the United States.
1 _APID 1,1265::0
1 REPO @R_2145269371@
0 @S_1793379691@ SOUR
1 TITL Missouri Birth Records, 1851-1910
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations Inc, 2007.Original data - Missouri Birth Records [Microfilm]. Jefferson City, MO, USA: Missouri State Archives.Original data: Missouri Birth Records [Microfilm]. Jefferson City, MO, USA
2 CONC : Missouri
1 _APID 1,1170::0
1 REPO @R_2145269371@
0 @S_1793379259@ SOUR
1 TITL Web: Missouri, Find A Grave Index, 1812-2011
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations, Inc., 2012.Original data - Find A Grave. Find A Grave. http://www.findagrave.com/cgi-bin/fg.cgi: accessed 12 January 2012.Original data: Find A Grave. Find A Grave. http://www.findagrave
2 CONC .com/cgi
1 _APID 1,70596::0
1 REPO @R_2145269371@
0 @S_1792293045@ SOUR
1 TITL Arkansas, County Marriages Index, 1837-1957
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations, Inc., 2011.Original data - "Arkansas County Marriages, 1838–1957." Index. FamilySearch, Salt Lake City, Utah, 2009, 2011. "Arkansas County Marriages, 1838–1957," database, FamilySearch
2 CONC ; from Ark
1 _APID 1,2548::0
1 REPO @R_2145269371@
0 @S_1733212834@ SOUR
1 TITL U.S. Public Records Index, Volume 1
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations, Inc., 2010.Original data - Voter Registration Lists, Public Record Filings, Historical Residential Records, and Other Household Database Listings.Original data: Voter Registration Lists
2 CONC , Public 
1 _APID 1,1788::0
1 REPO @R_2145269371@
0 @S_1733211944@ SOUR
1 TITL U.S. Public Records Index, Volume 2
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations, Inc., 2010.Original data - Voter Registration Lists, Public Record Filings, Historical Residential Records, and Other Household Database Listings.Original data: Voter Registration Lists
2 CONC , Public 
1 _APID 1,1732::0
1 REPO @R_2145269371@
0 @S_1733211932@ SOUR
1 TITL Web: Obituary Daily Times Index, 1995-2012
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations, Inc., 2012.Original data - The Obituary Daily Times. The Obituary Daily Times. http://www.rootsweb.ancestry.com/~obituary.Original data: The Obituary Daily Times. The Obituary Daily Time
2 CONC s. http:
1 _APID 1,70050::0
1 REPO @R_2145269371@
0 @S_1733211725@ SOUR
1 TITL 1940 United States Federal Census
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations, Inc., 2012.Original data - United States of America, Bureau of the Census. Sixteenth Census of the United States, 1940. Washington, D.C.: National Archives and Records Administration, 19
2 CONC 40. T627
1 _APID 1,2442::0
1 REPO @R_2145269371@
0 @S_1733210894@ SOUR
1 TITL 1880 United States Federal Census
1 AUTH Ancestry.com and The Church of Jesus Christ of Latter-day Saints
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations Inc, 2010. 1880 U.S. Census Index provided by The Church of Jesus Christ of Latter-day Saints  © Copyright 1999 Intellectual Reserve, Inc. All rights reserved.  All use is subject to th
2 CONC e limited 
1 _APID 1,6742::0
1 REPO @R_2145269371@
0 @S_1733210232@ SOUR
1 TITL 1870 United States Federal Census
1 AUTH Ancestry.com
1 PUBL Online publication - Provo, UT, USA: Ancestry.com Operations, Inc., 2009. Images reproduced by FamilySearch.Original data - 1870 U.S. census, population schedules. NARA microfilm publication M593, 1,761 rolls. Washington, D.C.: National Archives an
2 CONC d Record
1 _APID 1,7163::0
1 REPO @R_2145269371@
0 @S1084083263@ SOUR
1 TITL U.S., Social Security Applications and Claims Index, 1936-2007
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2015
2 PLAC Provo, UT, USA
1 _APID 1,60901::0
1 REPO @R_2145269371@
0 @S1084083971@ SOUR
1 TITL U.S., Find A Grave Index, 1600s-Current
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2012
2 PLAC Provo, UT, USA
1 _APID 1,60525::0
1 REPO @R_2145269371@
0 @S1090315102@ SOUR
1 TITL U.S. WWII Draft Cards Young Men, 1940-1947
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2011
2 PLAC Lehi, UT, USA
1 _APID 1,2238::0
1 REPO @R_2145269371@
0 @S1090315114@ SOUR
1 TITL U.S. Phone and Address Directories, 1993-2002
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2005
2 PLAC Provo, UT, USA
1 _APID 1,7339::0
1 REPO @R_2145269371@
0 @S1090315268@ SOUR
1 TITL Newspapers.com - St. Louis Post-Dispatch - 13 Apr 1952 - Page 37
1 PUBL St. Louis Post-Dispatch
2 DATE 13 Apr 1952
2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1092363470@ SOUR
1 TITL Newspapers.com Obituary Index, 1800s-current
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2019
2 PLAC Lehi, UT, USA
1 _APID 1,61843::0
1 REPO @R_2145269371@
0 @S1092363729@ SOUR
1 TITL Germany, Select Births and Baptisms, 1558-1898
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2014
2 PLAC Provo, UT, USA
1 _APID 1,9866::0
1 REPO @R_2145269371@
0 @S1092363802@ SOUR
1 TITL Illinois, County Marriage Records, 1800-1940
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2016
2 PLAC Lehi, UT, USA
1 _APID 1,61370::0
1 REPO @R_2145269371@
0 @S1092364231@ SOUR
1 TITL Web: Missouri, Death Certificates, 1910-1962
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2015
2 PLAC Provo, UT, USA
1 _APID 1,60382::0
1 REPO @R_2145269371@
0 @S1092364269@ SOUR
1 TITL Newspapers.com - St. Louis Post-Dispatch - 6 Feb 1944 - Page 22
1 PUBL St. Louis Post-Dispatch
2 DATE 6 Feb 1944
2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1092364469@ SOUR
1 TITL Germany, Lutheran Baptisms, Marriages, and Burials, 1500-1971
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2016
2 PLAC Lehi, UT, USA
1 _APID 1,61229::0
1 REPO @R_2145269371@
0 @S1092364486@ SOUR
1 TITL Rhineland-Palatinate, Germany, Lutheran Baptisms, Marriages, and Burials, 1556-1973
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2016
2 PLAC Lehi, UT, USA
1 _APID 1,61112::0
1 REPO @R_2145269371@
0 @S1098169669@ SOUR
1 TITL U.S., Indexed County Land Ownership Maps, 1860-1918
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2010
2 PLAC Provo, UT, USA
1 _APID 1,1127::0
1 REPO @R_2145269371@
0 @S1098169676@ SOUR
1 TITL Global, Find A Grave Index for Burials at Sea and other Select Burial Locations, 1300s-Current
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2012
2 PLAC Provo, UT, USA
1 _APID 1,60541::0
1 REPO @R_2145269371@
0 @S1098250046@ SOUR
1 TITL U.S., Department of Veterans Affairs BIRLS Death File, 1850-2010
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2011
2 PLAC Provo, UT, USA
1 _APID 1,2441::0
1 REPO @R_2145269371@
0 @S1098250167@ SOUR
1 TITL Newspapers.com - St. Louis Post-Dispatch - 30 Sep 1984 - Page 53
1 PUBL St. Louis Post-Dispatch
2 DATE 30 Sep 1984
2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1098250262@ SOUR
1 TITL Texas, Birth Certificates, 1903-1932
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2013
2 PLAC Provo, UT, USA
1 _APID 1,2275::0
1 REPO @R_2145269371@
0 @S1098250291@ SOUR
1 TITL Texas, Birth Index, 1903-1997
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2005
2 PLAC Provo, UT, USA
1 _APID 1,8781::0
1 REPO @R_2145269371@
0 @S1098250942@ SOUR
1 TITL Web: Missouri, St. Louis Public Library Obituary Index, 1880-2011
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2013
2 PLAC Lehi, UT, USA
1 _APID 1,9197::0
1 REPO @R_2145269371@
0 @S1098250959@ SOUR
1 TITL U.S., World War II Draft Registration Cards, 1942
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2010
2 PLAC Lehi, UT, USA
1 _APID 1,1002::0
1 REPO @R_2145269371@
0 @S1098251295@ SOUR
1 TITL Newspapers.com - St. Louis Post-Dispatch - 22 Jun 1911 - Page 23
1 PUBL St. Louis Post-Dispatch
2 DATE 22 Jun 1911
2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1098251452@ SOUR
1 TITL Newspapers.com - St. Louis Post-Dispatch - 21 May 1937 - Page 31
1 PUBL St. Louis Post-Dispatch
2 DATE 21 May 1937
2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1098251497@ SOUR
1 TITL Virginia, Marriage Records, 1936-2014
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2015
2 PLAC Provo, UT, USA
1 _APID 1,9279::0
1 REPO @R_2145269371@
0 @S1098251594@ SOUR
1 TITL Web: St. Louis, Missouri, Burial Index, Archdiocese of St. Louis, 1700-2010
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2011
2 PLAC Provo, UT, USA
1 _APID 1,70379::0
1 REPO @R_2145269371@
0 @S1098251884@ SOUR

1 PUBL St. Louis Post-Dispatch

2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1098252787@ SOUR
1 TITL Newspapers.com - St. Louis Post-Dispatch - 21 Nov 1911 - Page 6
1 PUBL St. Louis Post-Dispatch
2 DATE 21 Nov 1911
2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1098252921@ SOUR
1 TITL Newspapers.com - St. Louis Post-Dispatch - 17 Dec 1916 - Page 36
1 PUBL St. Louis Post-Dispatch
2 DATE 17 Dec 1916
2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1098252997@ SOUR
1 TITL Newspapers.com - St. Louis Post-Dispatch - 25 Apr 1934 - Page 25
1 PUBL St. Louis Post-Dispatch
2 DATE 25 Apr 1934
2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1098253065@ SOUR
1 TITL Newspapers.com - St. Louis Post-Dispatch - 3 Jun 1974 - Page 19
1 PUBL St. Louis Post-Dispatch
2 DATE 3 Jun 1974
2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1098253104@ SOUR
1 TITL Newspapers.com - St. Louis Post-Dispatch - 26 Aug 1942 - Page 31
1 PUBL St. Louis Post-Dispatch
2 DATE 26 Aug 1942
2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1099063318@ SOUR
1 TITL 1860 United States Federal Census
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2009
2 PLAC Provo, UT, USA
1 _APID 1,7667::0
1 REPO @R_2145269371@
0 @S1099063392@ SOUR
1 TITL Germany, Select Marriages, 1558-1929
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2014
2 PLAC Provo, UT, USA
1 _APID 1,9870::0
1 REPO @R_2145269371@
0 @S1099089824@ SOUR
1 TITL Newspapers.com - The New Haven Leader - 16 Mar 1950 - Page 1
1 PUBL The New Haven Leader
2 DATE 16 Mar 1950
2 PLAC New Haven, Missouri
1 REPO @R1053834813@
0 @S1099090053@ SOUR
1 TITL Newspapers.com - The New Haven Leader - 24 Dec 1953 - Page 3
1 PUBL The New Haven Leader
2 DATE 24 Dec 1953
2 PLAC New Haven, Missouri
1 REPO @R1053834813@
0 @S1099090149@ SOUR
1 TITL Newspapers.com - The New Haven Leader - 27 Oct 1932 - Page 5
1 PUBL The New Haven Leader
2 DATE 27 Oct 1932
2 PLAC New Haven, Missouri
1 REPO @R1053834813@
0 @S1099090378@ SOUR

1 PUBL The New Haven Leader

2 PLAC New Haven, Missouri
1 REPO @R1053834813@
0 @S1099091062@ SOUR
1 TITL Newspapers.com - Washington Citizen - 25 Dec 1953 - Page 4
1 PUBL Washington Citizen
2 DATE 25 Dec 1953
2 PLAC Washington, Missouri
1 REPO @R1053834813@
0 @S1099091374@ SOUR
1 TITL Newspapers.com - Franklin County Tribune - 25 Dec 1953 - Page 3
1 PUBL Franklin County Tribune
2 DATE 25 Dec 1953
2 PLAC Union, Missouri
1 REPO @R1053834813@
0 @S1099136143@ SOUR
1 TITL Michigan, Marriage Records, 1867-1952
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2015
2 PLAC Provo, UT, USA
1 _APID 1,9093::0
1 REPO @R_2145269371@
0 @S1099198910@ SOUR
1 TITL Die Familien Der Kirchengemeinde Hartum
1 AUTH Heinz Riechmann
1 PUBL Mindener Geschichtsverein
2 DATE 1984
2 PLAC Minden, Germany
1 NOTE Series of 3 books with church records dating 1761-1825
0 @S1099248217@ SOUR
1 TITL New Orleans, Passenger Lists, 1813-1963
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2006
2 PLAC Provo, UT, USA
1 _APID 1,7484::0
1 REPO @R_2145269371@
0 @S1099248275@ SOUR
1 TITL Missouri, Wills and Probate Records, 1766-1988
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2015
2 PLAC Provo, UT, USA
1 _APID 1,9071::0
1 REPO @R_2145269371@
0 @S1099248508@ SOUR
1 TITL 1840 United States Federal Census
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2010
2 PLAC Provo, UT, USA
1 _APID 1,8057::0
1 REPO @R_2145269371@
0 @S1099276538@ SOUR
1 TITL Newspapers.com - The New Haven Leader - 27 Nov 1941 - Page 1
1 PUBL The New Haven Leader
2 DATE 27 Nov 1941
2 PLAC New Haven, Missouri
1 REPO @R1053834813@
0 @S1099277348@ SOUR
1 TITL Central Missouri Counties Biographies
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2004
2 PLAC Provo, UT, USA
1 _APID 1,8526::0
1 REPO @R_2145269371@
0 @S1099278044@ SOUR
1 TITL 1850 United States Federal Census
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2009
2 PLAC Provo, UT, USA
1 _APID 1,8054::0
1 REPO @R_2145269371@
0 @S1099278513@ SOUR
1 TITL Missouri, State Census Collection, 1844-1881
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2007
2 PLAC Provo, UT, USA
1 _APID 1,1024::0
1 REPO @R_2145269371@
0 @S1099366511@ SOUR
1 TITL U.S. General Land Office Records, 1776-2015
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2008
2 PLAC Provo, UT, USA
1 _APID 1,1246::0
1 REPO @R_2145269371@
0 @S1099371773@ SOUR
1 TITL U.S., Civil War Draft Registrations Records, 1863-1865
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2010
2 PLAC Provo, UT, USA
1 _APID 1,1666::0
1 REPO @R_2145269371@
0 @S1099605930@ SOUR
1 TITL U.S. IRS Tax Assessment Lists, 1862-1918
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2008
2 PLAC Provo, UT, USA
1 _APID 1,1264::0
1 REPO @R_2145269371@
0 @S1099740650@ SOUR
1 TITL Newspapers.com - Warrenton Banner - 7 Jan 1943 - Page 5
1 PUBL Warrenton Banner
2 DATE 7 Jan 1943
2 PLAC Warrenton, Missouri
1 REPO @R1053834813@
0 @S1101182686@ SOUR
1 TITL Newspapers.com - St. Louis Post-Dispatch - 26 Sep 1947 - Page 39
1 PUBL St. Louis Post-Dispatch
2 DATE 26 Sep 1947
2 PLAC St. Louis, Missouri
1 REPO @R1053834813@
0 @S1102909119@ SOUR
1 TITL Newspapers.com - Northwest Herald - 3 Oct 1986 - Page 4
1 PUBL Northwest Herald
2 DATE 3 Oct 1986
2 PLAC Woodstock, Illinois
1 REPO @R1053834813@
0 @S1102909201@ SOUR
1 TITL U.S., Newspapers.com Marriage Index, 1800s-1999
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2020
2 PLAC Lehi, UT, USA
1 _APID 1,62116::0
1 REPO @R_2145269371@
0 @S1102909320@ SOUR
1 TITL U.S., Index to Public Records, 1994-2019
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2020
2 PLAC Lehi, UT, USA
1 _APID 1,62209::0
1 REPO @R_2145269371@
0 @S1104841883@ SOUR
1 TITL U.S., World War II Navy Muster Rolls, 1938-1949
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2011
2 PLAC Lehi, UT, USA
1 _APID 1,1143::0
1 REPO @R_2145269371@
0 @S1105040053@ SOUR
1 TITL 1890 Veterans Schedules of the U.S. Federal Census
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2005
2 PLAC Provo, UT, USA
1 _APID 1,8667::0
1 REPO @R_2145269371@
0 @S1105247080@ SOUR
1 TITL New Jersey, U.S., Marriage Index, 1901-2016
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2016
2 PLAC Lehi, UT, USA
1 _APID 1,61253::0
1 REPO @R_2145269371@
0 @S1105247098@ SOUR
1 TITL New Jersey, U.S., Death Index, 1901-2017
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2016
2 PLAC Lehi, UT, USA
1 _APID 1,61260::0
1 REPO @R_2145269371@
0 @S1105247148@ SOUR
1 TITL Newspapers.com - The Central New Jersey Home News - 28 Sep 1943 - Page 7
1 PUBL The Central New Jersey Home News
2 DATE 28 Sep 1943
2 PLAC New Brunswick, New Jersey
1 REPO @R1053834813@
0 @S1105247268@ SOUR
1 TITL U.S., Navy Casualties Books, 1776-1941
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2012
2 PLAC Provo, UT, USA
1 _APID 1,2324::0
1 REPO @R_2145269371@
0 @S1105247297@ SOUR
1 TITL U.S., World War II and Korean Conflict Veterans Interred Overseas
1 AUTH National Archives and Records Administration
1 PUBL Ancestry.com Operations Inc
2 DATE 2000
2 PLAC Lehi, UT, USA
1 _APID 1,4283::0
1 REPO @R_2145269371@
0 @S1110168776@ SOUR
1 TITL U.S., Obituary Collection, 1930-Current
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2006
2 PLAC Lehi, UT, USA
1 _APID 1,7545::0
1 REPO @R_2145269371@
1 NOTE See newspaper information provided with each entry.
0 @S1110169540@ SOUR
1 TITL U.S., World War II Draft Registration Cards, 1942
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2010
2 PLAC Lehi, UT, USA
1 _APID 1,1002::0
1 REPO @R_2145269371@
1 NOTE &lt;p&gt;United States, Selective Service System. &lt;i&gt;Selective Service Registration Cards, World War II: Fourth Registration&lt;/i&gt;. Records of the Selective Service System, Record Group Number 147. National Archives and Records Administra
2 CONC tion. &lt;/p&gt; &lt;p&gt;&lt;a href="##SearchUrlPrefix##/search/dbextra.aspx?dbid=1002" target="_blank"&gt;Full Source Citation&lt;/a&gt;.&lt;/p&gt;
0 @S1110169670@ SOUR
1 TITL U.S., Cemetery and Funeral Home Collection, 1847-Current
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2011
2 PLAC Lehi, UT, USA
1 _APID 1,2190::0
1 REPO @R_2145269371@
1 NOTE See source information provided with each entry.
0 @S1110169745@ SOUR
1 TITL U.S., World War II Army Enlistment Records, 1938-1946
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2005
2 PLAC Provo, UT, USA
1 _APID 1,8939::0
1 REPO @R_2145269371@
1 NOTE National Archives and Records Administration. Electronic Army Serial Number Merged File, 1938-1946 [Archival Database]; ARC: &lt;a href="http://research.archives.gov/description/1263923"&gt;1263923&lt;/a&gt;. World War II Army Enlistment Records; R
2 CONC ecords of the National Archives and Records Administration, Record Group 64; National Archives at College Park. College Park, Maryland, U.S.A.
0 @S1110170045@ SOUR
1 TITL Newspapers.com - The New Haven Leader - 29 Sep 1955 - Page 5
1 PUBL The New Haven Leader
2 DATE 29 Sep 1955
2 PLAC New Haven, Missouri
1 REPO @R1053834813@
0 @S1110170263@ SOUR
1 TITL U.S., Obituary Collection, 1930-Current
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2006
2 PLAC Lehi, UT, USA
1 _APID 1,7545::0
1 REPO @R_2145269371@
1 NOTE See newspaper information provided with each entry.
0 @S1110170510@ SOUR
1 TITL U.S., Obituary Collection, 1930-Current
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2006
2 PLAC Lehi, UT, USA
1 _APID 1,7545::0
1 REPO @R_2145269371@
1 NOTE See newspaper information provided with each entry.
0 @S1110170578@ SOUR
1 TITL U.S., Social Security Applications and Claims Index, 1936-2007
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2015
2 PLAC Provo, UT, USA
1 _APID 1,60901::0
1 REPO @R_2145269371@
1 NOTE Social Security Applications and Claims, 1936-2007.
0 @S1110171451@ SOUR
1 TITL U.S., World War II Draft Registration Cards, 1942
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations, Inc.
2 DATE 2010
2 PLAC Lehi, UT, USA
1 _APID 1,1002::0
1 REPO @R_2145269371@
1 NOTE &lt;p&gt;United States, Selective Service System. &lt;i&gt;Selective Service Registration Cards, World War II: Fourth Registration&lt;/i&gt;. Records of the Selective Service System, Record Group Number 147. National Archives and Records Administra
2 CONC tion. &lt;/p&gt; &lt;p&gt;&lt;a href="##SearchUrlPrefix##/search/dbextra.aspx?dbid=1002" target="_blank"&gt;Full Source Citation&lt;/a&gt;.&lt;/p&gt;
0 @S1110171582@ SOUR
1 TITL Franklin County, Missouri Census, 1920
1 AUTH Gray, Georgianna, ed.
1 PUBL Ancestry.com Operations Inc
2 DATE 2000
2 PLAC Provo, UT, USA
1 _APID 1,4372::0
1 REPO @R_2145269371@
1 NOTE United States of America, Bureau of the Census. &lt;i&gt;Fourteenth United States Census of Missouri&lt;/i&gt;. Washington, D.C.: Government Printing Office, 1920. Taken from microfilm copies located at the National Archives Trust, 8601 Adelphi Roa
2 CONC d, Rm. B-810, College Park, MD, 20740; Film #T625-918.
0 @S1117807305@ SOUR
1 TITL U.S., Newspapers.com Marriage Index, 1800s-current
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2020
2 PLAC Lehi, UT, USA
1 _APID 1,62116::0
1 REPO @R_2145269371@
1 NOTE See newspaper information provided with each entry.
0 @S1117807408@ SOUR
1 TITL U.S., Newspapers.com Marriage Index, 1800s-current
1 AUTH Ancestry.com
1 PUBL Ancestry.com Operations Inc
2 DATE 2020
2 PLAC Lehi, UT, USA
1 _APID 1,62116::0
1 REPO @R_2145269371@
1 NOTE See newspaper information provided with each entry.
0 @R_2145269372@ REPO
1 NAME Elzona Rongey
0 @R_2145269371@ REPO
1 NAME Ancestry.com
0 @R1053834813@ REPO
1 NAME www.newspapers.com
0 @T24@ _MTTAG
1 NAME Verified
1 RIN 24
0 @T8@ _MTTAG
1 NAME Direct Ancestor
1 RIN 8
0 @T5@ _MTTAG
1 NAME Common DNA Ancestor
1 RIN 5
0 @T14@ _MTTAG
1 NAME Immigrant
1 RIN 14
0 @T17@ _MTTAG
1 NAME Multiple Spouses
1 RIN 17
0 @T23@ _MTTAG
1 NAME Unverified
1 RIN 23
0 @T13@ _MTTAG
1 NAME Hypothesis
1 RIN 13
0 @T9@ _MTTAG
1 NAME DNA Connection
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

parse.ParseTextAsync().then(result => parse.SaveAs(result.Object, "test.json")).catch(e => console.error(e));
